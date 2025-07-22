// //! fs ==> fs stands for file system. this module provide utilities for working with files and folders/directories

// // working means ==> CRUD (Create, read, update, delete)

// //! import the built-in module
// // let variableName = require("module-name")
// // let variableName = require("node:module-name")
// //? node: for core modules, this is not mandatory
// // let fs = require("fs");
// // let fsNode = require("node:fs");
// // console.log(fs);

// //! ============= using fs synchronously ==========================

// //~ 1)===== creating a file =====
// // method ==> writeFileSync()
// // syntax ==> writeFileSync("filename/path.ext", "data")
// //? passing all the parameters is mandatory

// // console.log("Start");
// // fs.writeFileSync("../app.js", "let b = 20");
// // console.log("middle");
// // console.log("end");

// //& if the file is already present then it will be overwritten otherwise a new file will be created

// //~ 2)===== reading a file =====
// // method name ==> readFileSync()
// // syntax ==> readFileSync("path", "encoding")
// //? passing the second parameter is not mandatory
// // "path" ==> path of the file
// // "encoding" ==> encoding type ("utf-8", "utf-16", "binary", etc..)
// /*
// console.log("Start");
// let result = fs.readFileSync("./app.js");
// console.log(result); // <Buffer 6c 65 74 20 62 20 3d 20 32 30> ==> hexadecimal
// //& this buffer is an array. [ 000101010010101010101001101110110001 ]
// TODO ==> buffer and streams
// console.log("middle");
// //& to read the contents of the file, use toString()
// console.log(result.toString());
// console.log("end");
// */

// // let result = fs.readFileSync("./app.js", "utf-8");
// // encoding ==> it represents the type of data you want to display
// // "utf-8" ==> human readable format (letters, numbers, symbols, special characters) (unicode transformation format)
// // console.log(result);

// //~ 3) ===== updating a file ===== (update ==> append (adding something at last))
// // method ==> appendFileSync()
// // syntax ==> appendFileSync("path", "new data")

// // console.log("Start");
// // fs.appendFileSync("../../Starter/test.java", "int arr[]=[1,2,3,4]");
// // "\t" ==> multiple spaces
// // "\n" ==> new line
// // console.log("middle");
// // console.log("end");
// //& if the file is already present then it will append the data otherwise a new file will be created with the given data.

// //~ 4) ===== deleting a file =====
// // method ==> unlinkSync()
// // syntax ==> unlinkSync("path")

// // try {
// //   fs.unlinkSync("./app.js");
// // } catch (abc) {
// //   console.log("error occurred while deleting file");
// // }
// // fs.unlinkSync("../../Starter/test.txt");
// // console.log("file deleted");

// //~ 5) ===== creating a folder/directory =====
// // method name is ==> mkdirSync() (make directory)
// // syntax ==> mkdirSync("path/folder_name")

// // fs.mkdirSync("../../Starter/server");
// // console.log("folder created");

// // let path = require("path");
// // let fs1 = require("fs");
// // fs.mkdirSync('../../Starter/Demo');
// // fs.mkdirSync(path.join(__dirname, "..", "..", "Starter", "Demo"));

// //~ 6) ===== deleting a folder/directory =====
// // method name ==> rmdirSync() (remove directory)
// // syntax ==> rmdirSync("path of the folder to be deleted")

// // fs.rmdirSync("../../../JavaScript/App");
// // console.log("folder deleted");

// //~ 6) ===== renaming a file or folder/directory =====
// // method name ==> renameSync()
// // syntax ==> renameSync("old-file-name/ folder-name", "path-new file-name/folder-name")
// //? file
// // fs.renameSync("../../../data.txt", "../../Starter/App.js");
// //? folder
// // fs.renameSync("../../Starter/Demo", "../../Starter/server");

// // fs.rmdirSync("./folder1");
// // console.log("folder deleted");
// // fs.unlinkSync("./folder1/folder2/app.txt");
// // fs.rmdirSync("./folder1/folder2");
// // fs.rmdirSync("./folder1");

// // fs.rmdirSync("./demo", { recursive: true }); // used for deleting a folder structure forcefully

// //! create a function that creates a folder structure like this
// // ==> backend/src/routes/user.js
// function createStructure() {
//   fs.mkdirSync("./backend");
//   console.log("backend created");
//   fs.mkdirSync("./backend/src");
//   console.log("src created");
//   fs.mkdirSync("./backend/src/routes");
//   console.log("routes created");
//   fs.writeFileSync("./backend/src/routes/user.js", "let a = 10");
//   console.log("file created");
// }
// // createStructure();

// //! create a function that deletes the same folder structure.

// //! copy the contents of "fs.js" to a new file named "fs_copy.js"
// // read the contents of "fs.js" and store it in a variable.
// // create a new file and pass the data.
// // let payload = fs.readFileSync("./fs.js", "utf-8");
// // console.log("content reading completed");
// // fs.writeFileSync("./fs_copy.js", payload);
// // console.log("file created");

// //~ 7) ===== copying a file ======
// // method ==> copyFileSync()
// // syntax ==> copyFileSync("path of the to be copied", "path of the new file")
// // fs.copyFileSync("./fs.js", "./fs_copy.js");
// // console.log("file copy completed");

// //! ============= using fs asynchronously ==========================
// //? using callbacks, then/catch and using async/await

// //! ========= using fs asynchronously ==> callbacks =================

// //~ 1) creating a file
// // method name ==> writeFile()
// // syntax ==> writeFile("path/file-name", "data", callback)

// //& libUV ==> async operations --> libUV
// console.log("Start");
// fs.writeFile("./data.txt", "this is different data", function (err) {
//   if (err) console.log(err);
//   console.log("file created");
// });
// console.log("middle");
// console.log("end");
// //? error first callback ==> pass the error as first parameter to handle any error occurred
// //& if the file is already present then it will be overwritten otherwise a new file will be created

// //~ 2) reading a file
// // method name ==> readFile()
// // syntax ==> readFile("path", "encoding", callback)

// // console.log("Start");
// // fs.readFile("./data.txt", "utf-8", (a, b) => {
// //   // a --> error, b --> data
// //   if (a) console.log(a);
// //   console.log("file read");
// //   console.log(b);
// // });
// // console.log("middle");
// // console.log("end");

// //~ 3) updating a file
// // method name ==> appendFile()
// // syntax ==> appendFile("path", "new data", callback)

// // fs.appendFile("./data.txt", "\n this is second line", (err) => {
// //   if (err) console.log(err);
// //   console.log("file updated");
// // });

// //~ 4) deleting a file
// // method name ==> unlink()
// // syntax ==> unlink("path", callback)

// // fs.unlink("./data.txt", (err) => {
// //   if (err) console.log(err);
// //   console.log("file deleted");
// // });

// //~ 5) creating a folder/ directory
// // method name ==> mkdir()
// // syntax ==> mkdir("path", callback)
// // fs.mkdir("./folder1", (err) => {
// //   if (err) console.log(err);
// //   console.log("folder created");
// // });

// //~ 6) removing a folder/ directory
// // method name ==> rmdir()
// // syntax ==> rmdir("path", callback)
// // fs.rmdir("./folder1", (err) => {
// //   if (err) console.log(err);
// //   console.log("folder deleted");
// // });

// //~ 7) renaming a file/ directory
// // method name ==> rename()
// // syntax ==> rename("old path", "new path", callback)
// // fs.rename("./folder1", "./folder2", (err) => {
// //   if (err) console.log(err);
// //   console.log("folder renamed");
// // });

// //~ 8) copying a file
// // method name ==> copyFile()
// // syntax ==> copyFile("path of the to be copied", "path of the new file", callback)
// // fs.copyFile("./fs.js", "./fs_copy.js", (err) => {
// //   if (err) console.log(err);
// //   console.log("file copy completed");
// // });

// //! ========= using fs asynchronously ==> then/catch =================
// // let fsPromises = require("fs").promises;
// // let fsPromises = require("fs/promises");

// //~ 1) creating a file
// // method name ==> writeFile()
// // syntax ==> writeFile("path", 'data').then().catch()

// // console.log("Start");
// // let result = fsPromises.writeFile("./demo.py", "let a = 10");
// // // console.log(result);
// // result
// //   .then(() => {
// //     // then() is used to resolve a promise
// //     console.log("file created");
// //   })
// //   .catch((err) => {
// //     // catch() is used to reject a promise or handle any errors
// //     console.log(err);
// //   });
// // console.log("middle");
// // console.log("end");

// async function createFile() {
//   let result = await fsPromises.writeFile("./demo.txt", "let a = 10");
//   console.log(result);
// }
// // createFile();

// //~ 2) reading a file
// // method name ==> readFile()
// // syntax ==> readFile("path", "encoding").then().catch()

// // let readContents = fsPromises.readFile("./demo.py", "utf-8");
// // console.log(readContents);
// // readContents
// //   .then((data) => {
// //     console.log(data);
// //   })
// //   .catch((err) => {
// //     console.log(err);
// //   });

// async function readFile() {
//   try {
//     let result = await fsPromises.readFile("./demo.txt", "utf-8");
//     console.log(result);
//   } catch (error) {
//     console.log(err);
//   }
// }
// // readFile();

// //~ 3) updating a file
// // method name ==> appendFile()
// // syntax ==> appendFile("path", "new data").then().catch()

// // let updateFile = fsPromises.appendFile("./demo.txt", "\n this is second line");
// // updateFile
// //   .then(() => {
// //     console.log("file updated");
// //   })
// //   .catch((err) => {
// //     console.log(err);
// //   });

// //~ 4) deleting a file
// // method name ==> unlink()
// // syntax ==> unlink("path").then().catch()

// // let deleteFile = fsPromises.unlink("./demo.txt");
// // deleteFile
// //   .then(() => {
// //     console.log("file deleted");
// //   })
// //   .catch((err) => {
// //     console.log(err);
// //   });

// //~ 5) creating a folder
// // method name ==> mkdir()
// // syntax ==> mkdir("path").then().catch()

// // let createFolder = fsPromises.mkdir("./folder1");
// // createFolder
// //   .then(() => {
// //     console.log("folder created");
// //   })
// //   .catch((err) => {
// //     console.log(err);
// //   });

// //~ 6) deleting a folder
// // method name ==> rmdir()
// // syntax ==> rmdir("path").then().catch()

// // let deleteFolder = fsPromises.rmdir("./folder1");
// // deleteFolder
// //   .then(() => {
// //     console.log("folder deleted");
// //   })
// //   .catch((err) => {
// //     console.log(err);
// //   });

// //~ 7) renaming a folder/file
// // method name ==> rename()
// // syntax ==> rename("old path", "new path").then().catch()

// // let renameFolder = fsPromises.rename("./folder1", "./folder2");
// // renameFolder
// //   .then(() => {
// //     console.log("folder renamed");
// //   })
// //   .catch((err) => {
// //     console.log(err);
// //   });

// //~ 8) copying a file
// // method name ==> copyFile()
// // syntax ==> copyFile("path of the to be copied", "path of the new file").then().catch()

// let copyFile = fsPromises.copyFile("./fs.js", "./fs_copy.js");
// copyFile
//   .then(() => {
//     console.log("file copy completed");
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// //! ========= using fs asynchronously ==> async/await =================

// async function copyFile() {
//   try {
//     await fsPromises.copyFile("./fs.js", "./fs_copy.js");
//     console.log("file copy completed");
//   } catch (error) {
//     console.log(error);
//   }
// }
// // copyFile();

// async function deleteFile() {
//   try {
//     await fsPromises.unlink("./demo.txt");
//     console.log("file deleted");
//   } catch (error) {
//     console.log(error);
//   }
// }
// // deleteFile();
// async function createFolder() {
//   try {
//     await fsPromises.mkdir("./folder1");
//     console.log("folder created");
//   } catch (error) {
//     console.log(error);
//   }
// }
// // createFolder();

// async function deleteFolder() {
//   try {
//     await fsPromises.rmdir("./folder1");
//     console.log("folder deleted");
//   } catch (error) {
//     console.log(error);
//   }
// }
// // deleteFolder();

// async function renameFolder() {
//   try {
//     await fsPromises.rename("./folder1", "./folder2");
//     console.log("folder renamed");
//   } catch (error) {
//     console.log(error);
//   }
// }

// // renameFolder();

// async function createFileAsync() {
//   try {
//     await fsPromises.writeFile("./demo.txt", "let a = 10");
//     console.log("file created");
//   } catch (error) {
//     console.log(error);
//   }
// }
// // createFileAsync();

// async function updateFileAsync() {
//   try {
//     await fsPromises.appendFile("./demo.txt", "\n this is second line");
//     console.log("file updated");
//   } catch (error) {
//     console.log(error);
//   }
// }

// // updateFileAsync();

// async function renameFileAsync() {
//   try {
//     await fsPromises.rename("./demo.txt", "./demo_renamed.txt");
//     console.log("file renamed");
//   } catch (error) {
//     console.log(error);
//   }
// }

// // renameFileAsync();

let fs = require("fs");

//& ─── Buffer and Streams ────────────────────────────────────────────────────────────────
//~ buffer ==> it is similar to an array but it is used to store binary data and is fixed in size. Once the operation is done, buffer will be destroyed.

//~ streams ==> transferring data from source to destination in continuous chunks. It is used to handle large amounts of data efficiently without loading the entire data into memory at once.

//? in nodeJS we have 4 types of streams -->

//! 1) readable stream --> we can read the data from source in continuous chunks.
//& method name ==> createReadStream()
// let op = fs.createReadStream("./fs.js", "utf-8"); //& this method creates an event named "data"
// op.on("data", (chunks) => {
//   //& here we are listening on to the events
//   console.log(chunks);
// });

//! 2) writable stream  --> we can write the data at source in continuous chunks
//& method name ==> createWriteStream()
// let op = fs.createWriteStream("./a.txt");
// op.write("this is updated data 2", () => {
//   console.log("data has been written");
// });

//! 3) duplex stream --> in this, we can read and write simultaneously (at the same time).
// let readContents = fs.createReadStream("./fs.js"); // source
// let writeFile = fs.createWriteStream("./a.txt"); // destination
//& pipe() ==> it connects source and destination, which is used to transfer continuous chunks
// syntax ==> src.pipe(dest)
// readContents.pipe(writeFile);
// console.log("file read");

//! 4) transform stream --> it is similar to duplex, data can be modified (compression, encryption)

// contents "fs.js" paste --> "app.txt" inside user deifned folder
// let fs1 = require("fs");
// let path1 = require("path");
// let srcPath = path1.join(__dirname, "fs.js");
// let destPath = path1.join(__dirname, "..", "UserDefined", "app.txt");
// let read = fs1.createReadStream(srcPath, "utf-8");
// let write = fs1.createWriteStream(destPath, "utf-8");
// read.pipe(write);
