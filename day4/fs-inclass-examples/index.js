"use strict";

import fs from "fs";

// SYNCHRONOUS OPERATIONS:
// fs.appendFileSync("test.txt", "Test 1");
// fs.writeFileSync("test.txt", "Test 2");
// const data = fs.readFileSync("test.txt", "utf8");
// console.log(data);
// fs.unlinkSync("test.txt");

// ASYNCHRONOUS OPERATIONS:
fs.writeFile("test.txt", "Test 2", (error) => {
  if (error) {
    console.log(error);
    return;
  }
  console.log("File Created!");
});

fs.readFile("test.txt", "utf8", (err, data) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log(data);
});

fs.appendFile("test.txt", "\nAnother Test", (err) => {
  if (err) {
    console.log(err);
    return;
  }
});

fs.unlink("test.txt", (err) => {
  if (err) {
    console.log(err);
    return;
  }
});

// fs.mkdir("test", (err) => {
//   if (err) {
//     console.log(err);
//     return;
//   }
// });

fs.mkdirSync("test");

fs.writeFile("./test/test.txt", "I am in a folder!", (err) => {
  if (err) {
    console.log(err);
    return;
  }
});
