let filterItems = [];

function addFilterTab() {
  const val = document.getElementById("filter-search");
  if (filterItems.includes(val.value) || val.value === "") {
    // Do nothing if value is repeated or empty
  } else {
    filterItems.push(val.value);
    filter(filterItems);
  }
  val.value = "";
  val.focus();
}

function filter(filterItems) {
  const tabCont = document.getElementById("filtertag-disp-div");
  let tab = "";
  for (const key in filterItems) {
    tab = tab.concat(`
            <div id="tab${key}" class="filter-tab">
                <label>${filterItems[key]}</label>
            </div>
        `);
  }
  tabCont.innerHTML = tab;
}

function goToMsg() {
  document.location.href = "../MessageScreen/index.html";
}

function removeFilterTab() {
  filterItems = [];
  filter(filterItems);
}

async function logOut() {
  try {
    const response = await fetch(`http://localhost:5085/logout`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({}),
    });

    if (response.ok) {
        localStorage.removeItem("username")
      document.location.href = "../Login/login.html";
    }
  } catch (err) {
    console.error(err);
  }
}

async function searchUsers() {
  let objData = {
    "queries": filterItems
  };
  const response = await fetch("https://hackathon.kosh-web.cfd/search_users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(objData),
  });
  if (response.ok) {
    console.log("Success")
    let data = await response.text();
    console.log(data)
    localStorage.setItem("newfriend", data);
    document.location.href = "../MessageScreen/index.html";
  }
}


window.addEventListener('load', function() {
    const disp = document.querySelector('.profileData')
    disp.innerHTML = localStorage.getItem("username")
  })

const inputElement1 = document.getElementById('filter-search');

inputElement1.addEventListener('keydown', function (event) {
if (event.key === 'Enter') {
    addFilterTab()
}
});