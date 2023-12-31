function verifyLogin() {
  const usernameinput = document.getElementById("lusernameinput");
  const passwordinput = document.getElementById("lpasswordinput");

  if (usernameinput.value && passwordinput.value) {
    Login(usernameinput.value, passwordinput.value);
  } else {
    console.log("Login not filled");
  }
}

function goToReg() {
  const e1 = document.getElementById('c1');
  const e2 = document.getElementById('c2');

  e1.style.display = 'none';
  e2.style.display = 'flex';
}

function goToLog() {
  const e1 = document.getElementById('c1');
  const e2 = document.getElementById('c2');

  e1.style.display = 'flex';
  e2.style.display = 'none';
}

function validateName() {
  const name = document.getElementById("lusernameinput").value;
  if (name === '' || name === null) {
    document.getElementById("loginbutton").innerHTML = "Enter Username!";
    setTimeout(() => {
      document.getElementById("loginbutton").innerHTML = "Submit";
    }, 3000);
    return false;
  } else {
    return true;
  }
}

function validatePass() {
  const pass = document.getElementById("lpasswordinput").value;
  if (pass === '' || pass === null) {
    document.getElementById("loginbutton").innerHTML = "Enter Password!";
    setTimeout(() => {
      document.getElementById("loginbutton").innerHTML = "Submit";
    }, 3000);
    return false;
  } else {
    return true;
  }
}

async function validateLogin() {
  if (validateName() && validatePass()) {
    verifyLogin();
    return;
  }
}

async function validateRegister() {
  const username = document.getElementById("rusernameinput").value;
  const password = document.getElementById("rpasswordinput1").value;
  const confirmpassword = document.getElementById("rpasswordinput2").value;
  const errlabel = document.getElementById("regisbutton");

  if (username === "" || password === "" || confirmpassword === "") {
    errlabel.innerHTML = "Can't Leave Blank!";
    setTimeout(() => {
      errlabel.innerHTML = "Submit";
    }, 3000);
  } else if (password !== confirmpassword) {
    errlabel.innerHTML = "Password Must Match!";
    setTimeout(() => {
      errlabel.innerHTML = "Submit";
    }, 3000);
  } else if (password === confirmpassword && username !== "") {
    createUser(username, password);
  }
}

const PORT = 5085;

async function createUser(username, password) {
  objData = {
    "user_id": username,
    "password": password,
    "hobbies": "Art"
  };

  try {
    const response = await fetch(`http://localhost:${PORT}/add_user`, {
      method: "POST",
      body: JSON.stringify(objData),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (response.ok) {
      await Login(username, password);
    } else if (!response.ok) {
      const errorMessage = await response.text();
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
  } catch (error) {
    console.error("Error:", error.message);
  }
}

async function Login(username, password) {
  objData = {
    "user_id": username,
    "password": password,
  };

  try {
    const response = await fetch(`http://localhost:5085/login`, {
      method: "POST",
      body: JSON.stringify(objData),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (response.ok) {
      localStorage.setItem("username",username)
      document.location.href = "../Home/home.html";
    } else if (!response.ok) {
      const errorMessage = await response.text();
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
  } catch (error) {
    console.error("Error:", error.message);
  }
}
