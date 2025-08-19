import numberWork from "./numberWork.js";
import formControl from "./formControl.js";

if (localStorage.getItem("username")) {
    alert("username found");
} else {
    alert("username not found, please set it");
}

function saveName() {
  const data = document.getElementById("inputUsername").value;
  localStorage.setItem("userData", data);
  displayData();
}
function displayData() {
  const savedData = localStorage.getItem("userData");
  document.getElementById("savedData").innerText = savedData;
}
displayData();

window.start = () => {
  let x = 5;
  let y = 7;

  const num1 = new numberWork(5);
  num1.displayNumber();
  num1.pozOrNeg();

  const newForm = new formControl(7);
  window.newForm = newForm;
};

window.start();

window.showForm = function () {
  document.getElementById("formSection").style.display = "block"; // show form
  document.getElementById("noBtn").style.display = "none"; // hide goodbye
};

window.showNo = function () {
  document.getElementById("noBtn").style.display = "block"; // show goodbye
  document.getElementById("formSection").style.display = "none"; // hide form
};
