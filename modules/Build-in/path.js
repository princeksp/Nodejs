let path = require("path");
// console.log(path);

// console.log(__dirname);
//? C:\Users\utkar\Desktop\Classes\Node_1200\NodeJS\Modules\Built-In --> abs path
// console.log(__filename);
//? C:\Users\utkar\Desktop\Classes\Node_1200\NodeJS\Modules\Built-In\path.js --> abs path

// console.log(module);
// console.log(exports);
// console.log(require);

//! 1) extname() ==> it returns the extension of the file
// console.log(path.extname("./demo.py")); // .py
// console.log(path.extname(__filename)); // .js
// console.log(path.extname("../DummyFolder")); // ""
// console.log(path.extname(__dirname)); // ""

//! 2) basename() ==> it returns the base/last part of the path
// console.log(path.basename("../Dummy1/dummy2/app.txt"));
// console.log(path.basename(__filename));
// console.log(path.basename("../Dummy1/dummy2"));
// console.log(path.basename(__dirname));

//! 3) parse() --> it returns an object of the passed path
// console.log(path.parse(__filename));
// console.log(path.parse("./notes.js"));
// console.log(path.parse(__dirname));

//!  format() --> it converts path object to string

//! join() --> it joins the path
console.log(path.join("folder1", "folder2"));
console.log(path.join(__dirname, "fs.js"));
// console.log(path.join(__dirname, "..", "..", "..", "JavaScript", "App.js"));

//? module wrapper ==> nodeJS wraps all the code into a module wrapper internally
// (function (exports, require, module, __dirname, __filename) {
//   //   statements
// })();
//& global variables/functions ==> which can be used without importing
