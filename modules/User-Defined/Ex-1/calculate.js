const add = (a, b) => {
  return a + b;
};

const sub = (a, b) => {
  return a - b;
};

const mul = (a, b) => {
  return a * b;
};

const div = (a, b) => {
  return a / b;
};

// module.exports = add;
// module.exports = sub;

module.exports = {
  add: add,
  sub,
  div,
  mul,
};
