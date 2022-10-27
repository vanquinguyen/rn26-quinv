window.onload = function (e) {
  // addRowJs();
  //   deleteRowJs();
  //   addRowJq();
  //   addCollumnJquery();
  getListUsers();
};


function gotoDetail(id) {
  console.log(window.location.href, id);
  window.location.href = "./detail.html?id="+id;
}

function deleteRowJs(elm) {
  let elmRow = elm.parentElement.parentElement;
  console.log(elmRow);
  elmRow.remove();
  // document.getElementById("table_users").deleteRow(index);
}

function deleteRowAPI(elm,id) {
  fetch(
    "https://634ea39cf34e1ed826920b12.mockapi.io/user/"+id,
    {
      method: "DELETE",
    }
  )
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      deleteRowJs(elm)
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}

// const myHtmlContent = `
//     <th scope="row">1</th>
//     <td>Jacob</td>
//     <td>Thornton</td>
//     <td>@fat</td>
//     <td>
//         <button class="btn btn-success">Detail</button>
//         <button class="btn btn-danger">Delete</button>
//     </td>
// `;



// function formatRow(user) {
//   return `
//     <th scope="row">${user?.id}</th>
//     <td>${user?.name}</td>
//     <td>${user?.avatar}</td>
//     <td>@fat</td>
//     <td>
//         <button class="btn btn-success" onclick="gotoDetail(${user?.id})">Detail</button>
//         <button class="btn btn-danger">Delete</button>
//     </td>
//   `;
// }

function formatRow(user) {
  return `
    <th scope="row" onclick="postUser()">${user?.id}</th>
    <td>${user?.name}</td>
    <td class="text-break">${user?.avatar}</td>
    <td>${user?.name.split(" ")[0]}</td>
    <td>
        <button class="btn btn-success" onclick="gotoDetail(${
          user?.id
        })">Detail</button>
        <button class="btn btn-danger" onclick="deleteRowAPI(this,${user?.id})">Delete</button>
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
  let url = "https://634ea39cf34e1ed826920b12.mockapi.io/user?page=1&limit=10";
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

