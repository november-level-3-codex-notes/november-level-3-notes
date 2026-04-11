import { read, add } from "./shopping-list/shoppingList.js";

const [, , ...userArgs] = process.argv;
const command = userArgs[0];
const item = userArgs[1];

if (command === "read") {
  read();
}

if (command === "add") {
  add(item);
}

// try {
//   const data = await fs.readFile("data.txt", "utf8");
//   console.log(data);
// } catch (error) {
//   console.log("Error:", error);
// }

// try {
//   await fs.writeFile("data.txt", "Some data again!");
// } catch (error) {
//   console.log("Error:", error);
// }

// try {
//   await fs.unlink("data.txt");
// } catch (error) {
//   console.log("Error:", error);
// }
