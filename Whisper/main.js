const { app, BrowserWindow } = require('electron');
const { Menu } = require('electron');

let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    minWidth: 400,
    minHeight: 300,
    webPreferences: {
      nodeIntegration: true,
      devTools: true
    },
  });

  mainWindow.loadFile('./pages/Login/login.html');
  mainWindow.webContents.openDevTools();

  Menu.setApplicationMenu(null);

  mainWindow.on('closed', function () {
    mainWindow = null;
  });
}

app.on('ready', createWindow);

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit();
});

app.on('activate', function () {
  if (mainWindow === null) createWindow();
});

//

const express = require("express")
const AesEncryption = require("aes-encryption")
const secure_random = require("secure-random")
const sha = require("js-sha256")


const HOST_NAME = "https://hackathon.kosh-web.cfd"
const aes = new AesEncryption()


let server = express();

server.use(express.urlencoded())
server.use(express.json())


let session = []


server.post("/add_user", (req, res) => {
    if (!req.body)
        res.sendStatus(406)
    if (!req.body.user_id || !req.body.password || !req.body.hobbies)
        res.sendStatus(406)
    const user_id = req.body.user_id
    const hobbies = req.body.hobbies
    let password = req.body.password

    const task_result = String(secure_random(16))
    password = sha.sha256(password)
    aes.setSecretKey(password)
    const task = aes.encrypt(task_result)

    fetch(`${HOST_NAME}/add_user`, {
        method: "POST",
        credentials: "same-origin",
        headers: {
            "Content-Type": "application/json",
        },
        body: [user_id, task, task_result, hobbies].join(";;;;;;;;;;")
    }).then(server_res => {
        res.sendStatus(server_res.status)
    })
})


server.post("/login", (req, res) => {
    if (!req.body)
        res.sendStatus(406)
    if (!req.body.user_id | !req.body.password)
        res.sendStatus(406)
    const user_id = req.body.user_id
    const password = sha.sha256(req.body.password)
    aes.setSecretKey(password)

    fetch(`${HOST_NAME}/get_task`, {
        method: "POST",
        credentials: "same-origin",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ "user_id": user_id })
    }).then(server_res => {
        return server_res.text()
    }).then(task => {
        let task_result;
        try {
            task_result = aes.decrypt(task)
        } catch (e) {
            res.sendStatus(401)
        }
        return fetch(`${HOST_NAME}/login?user_id=${user_id}`, {
            method: "POST",
            credentials: "same-origin",
            headers: {
                "Content-Type": "application/json",
            },
            body: task_result
        })
    }).then(server_res => {
        if (server_res.ok)
            return server_res.text()
        res.sendStatus(server_res.status)
    }).then(session_id => {
        session[0] = user_id
        session[1] = session_id
        res.sendStatus(200)
    })
})


server.post(`/logout`, (_ , res) => {
    fetch(`${HOST_NAME}/logout?user_id=${session[0]}`, {
        method: "POST",
        credentials: "same-origin",
        headers: {
            "Content-Type": "application/json",
        },
        body: session[1]
    }).then(server_res => {
        res.sendStatus(server_res.status)
    })
})


server.post("/get_friends", (_, res) => {
  fetch(`${HOST_NAME}/get_friends?user_id=${session[0]}`, {
      method: "POST",
      body: session[1]
  }).then(server_res => {
      return server_res.text()
  }).then(text => {
      res.write(text)
      res.send()
  })
})

server.post("/send_message", (req, res) => {
    if (!req.body)
        res.sendStatus(406)
    if (!req.body.user | !req.body.data)
        res.sendStatus(406)
    user2 = req.body.user
    data = req.body.data
    session_key = session[1]
    fetch(`${HOST_NAME}/send_message?user_id=${session[0]}`, {
        method: "POST",
        body: [session_key, user2, data].join(";;;;;;;;;;")
    }).then(server_res => {
        res.sendStatus(server_res.status)
    })
})


server.post("/get_messages", (req, res) => {
    if (!req.body)
        res.sendStatus(406)
    let user1 = session[0]
    let user2 = req.body.user
    console.log(user2)
    let session_key = session[1]
    fetch(`${HOST_NAME}/get_messages`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: [user1, user2, session_key].join(";;;;;;;;;;")
    }).then(server_res => {
        return server_res.text()
    }).then(text => {
        list = text.split(";;;;;;;;;;")
        res.json(list)
        res.send()
    })
})

server.listen(5085)