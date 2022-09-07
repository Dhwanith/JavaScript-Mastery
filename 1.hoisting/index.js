// Hoisting
// ----------------------------------------------------------------
var favouriteCar = undefined;
var carThoughts = undefined;

var favouriteCar = "Skoda";

var carThoughts = function () {
  // Hoisting
  // var favouriteCar = undefined;
  console.log("Original favourite car: " + favouriteCar);
  // Original favourite car: undefined

  var favouriteCar = "Buggati";

  console.log("New favourite car: " + favouriteCar);
  // New favourite car: Buggati
};
carThoughts();

// ----------------------------------------------------------------

let favouriteCar = undefined;
let carThoughts = undefined;

let favouriteCar = "Skoda";

let carThoughts = function () {
  console.log("Original favourite car: " + favouriteCar);
  // ReferenceError: Cannot access 'favouriteCar' before initialization at carThoughts

  let favouriteCar = "Buggati";

  console.log("New favourite car: " + favouriteCar);
};
carThoughts();

// ----------------------------------------------------------------

const favouriteCar = undefined; // not defined;
const carThoughts = undefined;

const favouriteCar = "Skoda";

const carThoughts = function () {
  console.log("Original favourite car: " + favouriteCar);
  // ReferenceError: Cannot access 'favouriteCar' before initialization at carThoughts

  const favouriteCar = "Buggati";

  console.log("New favourite car: " + favouriteCar);
};
carThoughts();

// ----------------------------------------------------------------

function bigBrother() {
  function littleBrother() {
    console.log("it is me!");
  }
  // 2 littleBrother(); gets invoked
  return littleBrother();
  function littleBrother() {
    console.log("no me!");
    // 3 littleBrother(); clg gets printed
  }
}

// 1 bigBrother(); gets called
bigBrother();
// ----------------------------------------------------------------
