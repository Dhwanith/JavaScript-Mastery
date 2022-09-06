function two() {
    var isValid; // undefined
    console.log("two called",isValid)
}

function one() {
    var isValid = true;
    console.log("one called",isValid) // true
    two();
}

var isValid = false;
console.log("global call",isValid); // false
one();

// ---Call Stack---
// two()
// one() 
// global()