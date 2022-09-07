// ---Functional Scope---
function foo() {
    if (true) {
        var heroOne = "Iron Man";
        let heroTwo = "Super Man";
        const heroThree = "Batman";
        console.log(heroTwo, "😎", heroThree); // Here it works perfectly fine since we are in the block scope
    }
    console.log(heroOne); // var declarations can be called anywhere within the functional scope.

    // console.log(heroTwo); // ReferenceError: heroTwo is not defined, let is block scoped
    // console.log(heroThree); // ReferenceError: heroThree is not defined, const is also a block scoped
}
foo();

// ----------------------------------------------------------------

// ---Block Scope---
{
  // A block is used to define multiple set of statements form a compound statement.
}
// Example usage: with var keyword
if (true) {
    var firstName = "Dhwanith"
    var lastName = "Chelumalla"
    console.log(firstName + " " + lastName)
}

// Can clg from here since we are declaring variables using var keyword.

// In the above example, variables declared with var keyword are not block scoped. Hence, we can access firstName and lastName outside of the block scope.

// In other words, variables with var keyword which aren't declared inside of a function are called global variables.

// Example usage: with let or const keyword

if (true) {
    let firstName = "Dhwanith"
    let lastName = "Chelumalla"
    console.log(firstName + " " + lastName)
}
// ReferenceError: firstName is not defined
// let and const are block scoped. Hence, execute/call within block scope.

// Example usage: Block scope

function varLoop() {
  for (var i = 0; i < 5; i++) {
    console.log("Var", i);
  }
  console.log("Var Final Value", i);
}
varLoop();
// In the above example, the var keyword has a functional scope. Therefore, it has access to the variables.


function letLoop() {
    for (let i = 0; i < 5; i++) {
        console.log("Let", i);
    }
    console.log("Let Final Value", i); // ReferenceError: i is not defined
}
letLoop();
// In the above example, the let keyword has a block scope. Therefore, it doesn't have access to the variables outside of its defined block scope.