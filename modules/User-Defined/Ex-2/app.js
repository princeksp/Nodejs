// console.log("hello");

function greet(name) {
  console.log("hello:", name);
}

console.log("this is app.js");

let emp = {
  id: 123,
  userName: "abc",
};

let arrFn = () => {
  console.log("This is an arrow function");
};

greet("John");
arrFn();
console.log("emp", emp);

// greet("abc");
// greet("def");

module.exports = emp;
// module.exports = greet;
// module.exports = arrFn;
