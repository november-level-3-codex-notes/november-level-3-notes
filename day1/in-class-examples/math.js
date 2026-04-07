"use strict";

// type: commonjs
// function add(x, y) {
//   const result = x + y;
//   return result;
// }

// module.exports = add;

// type: module
export default function add(x, y) {
  const result = x + y;
  return result;
}

export function subtract(x, y) {
  const result = x - y;
  return result;
}

export function divide(x, y) {
  const result = x / y;
  return result;
}
