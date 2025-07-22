// const { isUtf8 } = require("buffer");
const fs = require("fs");

// creating a file
// fs.writeFileSync("./app.js", "raj mishra");

// reading a file
// let res = fs.readFileSync("./app.js", "utf-8");
// console.log(res);

//updating a file
// fs.appendFileSync("./app.js", "let arr=[1,2,3,4,5]");

// Deleting a file
// fs.unlinkSync("./app.js");
// we can use try and catch block while deleting to show error if any occured during deleting.

// =========Creating a folder or directory=========
// fs.mkdirSync("./server");
// console.log("folder created");

//removing/deleting directory
// fs.rmdirSync("./server");

//renaming a file or folder
// fs.renameSync("./app.js", "server.js");

// creating a function that create a project setup like structure
// function createStructure() {
//   fs.mkdirSync("./backend");
//   fs.mkdirSync("./Backend/Src");
//   fs.mkdirSync("./Backend/Src/Routes");
//   fs.writeFileSync("./backend/Src/Routes/nav.js", "let a =20");
// }
// createStructure();

// Deleting function
// function deletingFolder() {
//   fs.unlinkSync("./backend/Src/Routes/nav.js");
//   console.log("file Deleted");
//   fs.unlinkSync("./backend/Src/Routes");
//   console.log("routes Delete");
//   fs.unlinkSync("./backend/Src");
//   console.log("Src deleted");

//   fs.unlinkSync("./backend");
//   console.log("backend deleted");
// }
