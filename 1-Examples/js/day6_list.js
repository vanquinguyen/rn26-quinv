window.onload = function (e) {
  // addRowJs();
  //   deleteRowJs();
  //   addRowJq();
  //   addCollumnJquery();
  getListUsers();
};

function gotoDetail(id) {
  console.log(window.location.href, id);
  window.location.href = "./detail.html?id=" + id;
}

function deleteRowJs(elm) {
  let elmRow = elm.parentElement.parentElement;
  console.log(elmRow);
  elmRow.remove();
  // document.getElementById("table_users").deleteRow(index);
}

function deleteRowAPI(elm, id) {
  fetch("https://634ea39cf34e1ed826920b12.mockapi.io/person/" + id, {
    method: "DELETE",
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      deleteRowJs(elm);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}

function formatRow(user) {
  return `
    <td>${user?.id}</td>
    <td>${user?.name}</td>
    <td>${user?.age}</td>
    <td>${user?.address}</td>
    <td style="text-align: center;">
        <input class="btn1" type="button" value="Detail" onclick="gotoDetail(${user?.id})">
        <input class="btn2" type="button" value="Delete" onclick="deleteRowAPI(this,${user?.id})">
    </td>
  `;
}


function addRowJs(user) {
  // console.log(user);
  var tableRef = document
    .getElementById("table_users")
    .getElementsByTagName("tbody")[0];

  var newRow = tableRef.insertRow(tableRef.rows.length);
  newRow.innerHTML = formatRow(user);
}

function getListUsers() {
  let url = "https://634ea39cf34e1ed826920b12.mockapi.io/person?page=1&limit=10";
  fetch(url, {
    method: "GET",
  })
    .then((response) => response.json())
    .then((data) => {
      data?.map((user) => addRowJs(user));
      // console.log(data);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}
