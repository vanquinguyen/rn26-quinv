window.onload = function () {
  getUser();
};

function getUser() {
  let id = getIdUrl();
  fetch("https://634ea39cf34e1ed826920b12.mockapi.io/person/" + id, {
    method: "GET",
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      renderInfo(data);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
  console.log(id);
}

function getIdUrl() {
  let url = new URL(window.location.href);
  let id = url.searchParams.get("id");
  return id;
}

function renderInfo(user) {
  const contentHTML = `
    <p>ID: ${user?.id}</p>
    <p>Name: ${user?.name}</p>
    <p>Age: ${user?.age}</p>
    <p>Address: ${user?.address}</p>
    <button onclick="gotoUpdate(${user?.id})">Update</button>
  `;
  const elm = document.getElementById("info");
  elm.innerHTML = contentHTML;
}


function gotoUpdate(id) {
  console.log(window.location.href, id);
  window.location.href = "./form.html?id=" + id;
}
