document.querySelector("#submitBtn").addEventListener("click", saveData);

let userArray = [];
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
      " <p class='fw-normal text-danger'>All fields are ultramandatory</p>";
  } else if (!/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/.test(mailInfo)) {
    msg.innerHTML =
      "<p class='fw-normal text-danger'>Wrong format email mate!</p>";
  } else if (passInfo !== passRepeatInfo) {
    msg.innerHTML =
      "<p class='fw-normal text-danger'>Pay attention! Should repeat password correctly if you want to enter in our cult!</p> ";
  } else {
    userArray.push(user);
    localStorage.setItem("UsersData", JSON.stringify(userArray));
    msg.innerHTML =
      "<p class='fw-normal text-success'>Yay! You sing up succesfully!</p> ";
    form.reset();
  }
  setTimeout(() => {
    msg.innerHTML = "";
  }, 3000);
}
