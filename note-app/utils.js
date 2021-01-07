const name = "David";

function printFunction() {
  return "util.js";
}

const add = (a, b) => {
  return a + b;
};

//export module of name, printFunction,add
module.exports = {
  name,
  printFunction,
  add,
};
