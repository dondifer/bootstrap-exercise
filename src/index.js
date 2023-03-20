document.querySelector("#submitBtn").addEventListener("click", saveData);

let userArray = JSON.parse(localStorage.getItem("UsersData")) || [];
function saveData(e) {
  e.preventDefault();
  const form = document.getElementById("form");
  const name = document.getElementById("name");
  const mail = document.getElementById("inputEmail");
  const pass = document.getElementById("inputPassword");
  const passRepeat = document.getElementById("inputPasswordRepeat");
  const nameInfo = name.value;
  const mailInfo = mail.value;
  const passInfo = pass.value;
  const passRepeatInfo = passRepeat.value;
  const msg = document.getElementById("msg");

  const user = { nameInfo, mailInfo, passInfo, passRepeatInfo };
  if (!nameInfo || !mailInfo || !passInfo || !passRepeatInfo) {
    msg.innerHTML =
      " <div class='alert alert-danger' role='alert'>All fields are ultramandatory</div>";
  } else if (!/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/.test(mailInfo)) {
    msg.innerHTML =
      "<div class='alert alert-danger' role='alert'>Wrong format email mate!</div>";
  } else if (passInfo !== passRepeatInfo) {
    msg.innerHTML =
      "<div class='alert alert-danger' role='alert'>Pay attention! Should repeat password correctly if you want to enter in our cult!</div> ";
  } else {
    userArray.push(user);
    localStorage.setItem("UsersData", JSON.stringify(userArray));
    msg.innerHTML =
      "<div class='alert alert-success' role='alert'>Yay! You sing up succesfully!</div> ";
    form.reset();
    setTimeout(() => {
      window.location.href = "./users.html";
    }, 2000);
  }
  setTimeout(() => {
    msg.innerHTML = "";
  }, 3000);
}
