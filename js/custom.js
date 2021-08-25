// http request

let xhttp = new XMLHttpRequest();

xhttp.onload = function () {
  localStorage.setItem("users", this.response);
};
xhttp.open("GET", "../data.json");
xhttp.send();

let getData = function getData() {
  return localStorage.getItem("users");
};

let allData = JSON.parse(getData());

let row = document.querySelector("#row");

allData.map(data => {
  row.innerHTML += `<div class="col-3">
          <div class="card shadow rounded mt-5" style="width: 18rem">
            <img src= ${data.avatar_url} class="card-img-top" alt="github users" />
            <div class="card-body">
              <h5 class="card-title">${data.login}</h5>
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>
        </div>`;
});
