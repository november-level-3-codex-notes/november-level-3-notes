"use strict";

import fs from "fs";

const userArgs = process.argv.slice(2);

const command = userArgs[0];
const fileName = userArgs[1];
const userData = userArgs[2];

if (command === "read") {
  const data = fs.readFileSync(fileName, "utf8");
  console.log(data);
}

if (command === "add") {
  fs.appendFileSync(fileName, "\n" + userData);
}

if (command === "delete") {
  try {
    fs.unlinkSync(fileName);
  } catch (error) {
    console.log("Error: no such file exists");
  }
}
