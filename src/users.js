window.onload = function () {
  showElementsInUser();
};

function showElementsInUser() {
  const array = JSON.parse(localStorage.getItem("UsersData"));
  const showDisplay = document.getElementById("usersDisplay");
  array.forEach((element) => {
    const showItem = document.createElement("div");
    showItem.innerHTML = `<div class="card text-bg-dark mb-3" style="max-width: 18rem;">
  <div class="card-header">User Tag Data</div>
  <div class="card-body">
    <h5 class="card-title">Name: ${element.nameInfo}</h5>
    <h5 class="card-title">Email: ${element.mailInfo}</h5>
  </div>
</div>`;
    showDisplay.appendChild(showItem);
  });
}
