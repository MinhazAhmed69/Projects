

function back() {
  document.location.href = "../Home/home.html";
}
// -----------------------
function addMessage() {
  const inputValue = document.getElementById("msginput").value;

  if (inputValue === "") {
    return;
  }

  sendMsg(localStorage.getItem("oppuser"), inputValue)

  const c2Space = document.querySelector(".c2space");
  let val = inputValue;
  const newMessage = `
    <div class="mymsg" ><p>${val}</p></div>
  `;

  c2Space.innerHTML = c2Space.innerHTML.concat(newMessage);
  document.getElementById("msginput").value = "";
  keepScrollBarAtBottom();
}

// ------------------------------------------------

function addUserTab(data) {
  console.log(data)
  if(data==undefined || data==""){
    return;
  }
  const view = document.querySelector(".c1space");
  const tab = `
    <div class="ut" id="user.${data}" onclick="">
        <img src="${getPfp()}">
        <label>${data}</label>
    </div>
  `
  
  view.innerHTML = view.innerHTML.concat(tab);

  document.getElementById(`user.${data}`).addEventListener('click', function(event) {
    localStorage.setItem("oppuser", data)
    getMsg(localStorage.getItem("username"), localStorage.getItem("oppuser"))
  })
}

function getPfp() {
  const ran = Math.floor(Math.random() * 6) + 1;
  switch (ran) {
    case 1:
      return "../../assests/PROFILE1.png";
    case 2:
      return "../../assests/PROFILE2.png";
    case 3:
      return "../../assests/PROFILE3.png";
    case 4:
      return "../../assests/PROFILE4.png";
    case 5:
      return "../../assests/PROFILE5.png";
    case 6:
      return "../../assests/PROFILE6.png";
    case 7:
      return "../../assests/PROFILE7.png";
    default:
      return "../../assests/PROFILE1.png";
  }
}
// -------------------------------------------------------
const mview = document.querySelector('.c2space');

function addMyMsg(val) {
  const c2Space = document.querySelector(".c2space");
  const newMessage = `
    <div class="mymsg" ><p>${val}</p></div>
  `;

  c2Space.innerHTML = c2Space.innerHTML.concat(newMessage);
}

function addYourMsg(val) {
  const c2Space = document.querySelector(".c2space");
  const newMessage = `
    <div class="yourmsg" ><p>${val}</p></div>
  `;

  c2Space.innerHTML = c2Space.innerHTML.concat(newMessage);
}

// ---------------------------------------------------


function keepScrollBarAtBottom() {
  var scrollContainer = document.querySelector('.c2space');
  scrollContainer.scrollTop = scrollContainer.scrollHeight;
}

const inputElement = document.getElementById('msginput');

inputElement.addEventListener('keydown', function (event) {
  if (event.key === 'Enter') {
    addMessage();
  }
});


async function getFriends() {
  try {
      const response = await fetch(`http://localhost:5085/get_friends`, {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
          },
          body: JSON.stringify({})
      });

      if(response.ok) {
        let frienddata = await response.json();
        if(response===''){
          console.log('No Friends found');
        }
        else if(frienddata == localStorage.getItem("username")){
          getFriends()
        }
        else {
          console.log(frienddata)
          for(let i in frienddata){
            addUserTab(frienddata[i])
          }
        }

    } else if(!response.ok) {
        const errorMessage = await response.text();
        throw new Error(errorMessage);
    }

  } catch (err) {
      console.error(err);
  }
}


async function sendMsg(user, data) {
  console.log(user, data)
  objData = {
    "user": user,
    "data": data
  };

  try {
    const response = await fetch(`http://localhost:5085/send_message`, {
      method: "POST",
      body: JSON.stringify(objData),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (response.ok) {
      console.log("Sent")
    } else if (!response.ok) {
      const errorMessage = await response.text();
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
  } catch (error) {
    console.error("Error:", error.message);
  }
}


async function getMsg(user1, user2) {
  console.log(user1, user2)
  objData = {
    "user1": user1,
    "user2": user2,
  };

  try {
    const response = await fetch(`http://localhost:5085/get_messages`, {
      method: "POST",
      body: JSON.stringify(objData),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (response.ok) {
      let msgdata = await response.json()
      console.log(msgdata, "msg array", `from ${user1}`);
    } else if (!response.ok) {
      const errorMessage = await response.text();
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
  } catch (error) {
    console.error("Error:", error.message);
  }
}
















window.addEventListener('load', function() {
  if(localStorage.getItem("newfriend")==null){
    getFriends()
    return;
  }
  addUserTab(localStorage.getItem("newfriend"))
  getFriends()
  localStorage.removeItem("newfriend")
})

