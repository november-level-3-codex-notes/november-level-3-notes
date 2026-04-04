"use strict";
import chalk from "chalk";

function multiColor(userInput) {
  let output = "";
  for (let letter of userInput) {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    let l = chalk.rgb(r, g, b)(letter);
    output += l;
  }
  console.log(output);
}

multiColor("Hello!");
