"use strict";

// const add = require("./math.js");
import addTwoNumbers, { subtract, divide } from "./math.js";

const firstName = "Thomas";
const lastName = "Coons";
const myNumber = addTwoNumbers(5, 5);
const myNumber2 = subtract(5, 5);
const myNumber3 = divide(5, 5);

console.log(firstName);
console.log(lastName);
console.log(myNumber);
console.log(myNumber2);
console.log(myNumber3);
