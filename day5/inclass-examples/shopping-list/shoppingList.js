import fs from "node:fs/promises";

const file = "./shopping-list/shoppingList.txt";

export async function read() {
  try {
    const data = await fs.readFile(file, "utf8");
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}

export async function add(item) {
  try {
    const listNumber = await incrementListNumber();
    await fs.appendFile(file, `\n${listNumber}. ${item}`);
    await read();
  } catch (error) {
    console.log(error);
  }
}

async function incrementListNumber() {
  const data = await fs.readFile(file, "utf8");
  const totalItems = data.split("\n").length - 2;
  return totalItems + 1;
}
