// export default class formControl {
//     constructor (num1) {
//         this.num1 = num1;
//     }
// }

export default class formControl {
  constructor(num) {
    this.num = num;
  }

  submitHandler() {
    alert("success: " + this.num);
  }
}
