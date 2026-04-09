import fs from "fs";

fs.readFile("text.txt", "utf8", (err, data) => {
  if (err) {
    throw err;
  }
  console.log(data);
});

fs.writeFile("text.txt", "More text!", (err, data) => {
  if (err) {
    throw err;
  }
  console.log("Done!");
});
