import chalk from "chalk";
import boxen from "boxen";
import { sayHello } from "./sayHello.js";

const hello = sayHello();

function multiColor(text) {
  let result = "";
  for (let t of text) {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    result += chalk.rgb(r, g, b).bold(t);
  }
  console.log(boxen(result, { padding: 1 }));
}

multiColor(hello);
