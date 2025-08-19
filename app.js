import numberWork from "./numberWork.js";
import formControl from "./formControl.js";

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
