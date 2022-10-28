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
    <div class="mb-3">
    <label for="input__name" class="form-label">Name</label>
    <input type="name" class="form-control" name="name" id="input__name" value="${user?.name}"
        onblur="console.log('onblur',this.value)">

        <div id="error__email" class="form-text text-danger"></div>
    </div>
    <div class="mb-3">
        <label for="input__age" class="form-label">age</label>
        <input type="text" class="form-control" value="${user?.age}" id="input__age" onchange="console.log('onchange',this.value)">
    </div>
    <div class="mb-3">
        <label for="input__address" class="form-label">address</label>
        <input type="text" class="form-control" id="input__address" value="${user?.address}" onchange="console.log('onchange',this.value)" >
    </div>


    <button onclick="handleSubmit(this)" class="btn btn-success">Submit</button>
    </div>
    `;
  const elm = document.getElementById("myForm");
  elm.innerHTML = contentHTML;
}
