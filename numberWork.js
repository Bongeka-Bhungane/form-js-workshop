export default class numberWork {
    constructor (x) {
        this.num1 = x;
    }
    displayNumber () {
        console.log("This is num1: " + this.num1)
    }
    pozOrNeg () {
        if (this.num1 > 0) {
            console.log("number is positive");
        } else {
            console.log("number is negative");
        }
    }
} 
