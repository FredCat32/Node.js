const fs = require("fs");
// const book = {
//   title: "Ego Is The Enemy",
//   author: "Ryan Holiday",
// };

// const bookJSON = JSON.stringify(book);
// fs.writeFileSync("1-json.json", bookJSON);

const dataBuffer = fs.readFileSync("1-json.json");
const dataJSON = dataBuffer.toString();
const user = JSON.parse(dataJSON);
console.log(user.name);

user.name = "Matt";
user.age = 39;

const userJSON = JSON.stringify(user);
fs.writeFileSync("1-json.json", userJSON);
