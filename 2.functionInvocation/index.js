// Function Expression
let canada = function () {
  // ⬆ this function can be written as a arrow function too i.e let canada = () => {};
  console.log("cold");
};

// Function Declaration
function india() {
    console.log(arguments);
  console.log("warm");
}

// Function Invocation or Call or Execute Function
// canada();
india();

// Arguments
function marry(person1, person2) {
  console.log("Not so real Array of arguments",arguments);
  console.log("Array of arguments", Array.from(arguments));
  console.log(`${person1} is married to ${person2}`);
}
marry("Tim", "Tina");

// Rest Parameters
function marry1(...args) {
    console.log("arguments",args);
    console.log("Array of arguments", Array.from(arguments));
    console.log(`${args[0]} is married to ${args[1]}`);
  }
  marry1("Tim", "Tina");