
function weird() {
  height = 50; // height isn't being created in the local variable environment, this is called leakage of global variables.

  // The global environment will create height for you just cuz it's looking up the scope chain. THIS IS WEIRD

  // Therefore we have to add "use strict" to the global environment. Therefore, the global environment will not create height for you.
  console.log(height);
}
weird();

//---------------------------------------------

"use strict";
function awesome() {
    let height = 100; // Now, we will get the following error message: Uncaught ReferenceError: height is not defined at awesome
    // So, we will now declare the variable height
    console.log(height);
}
awesome();


//---------------------------------------------


const woodle = function doodle() {
    console.log("woodle")
}
woodle()
doodle(); // ReferenceError: doodle is not defined. This means its nowhere to be seen in the scope chain

// This is because the doodle function is actually enclosed in its own scope. Therefore, doodle is actually added to its own execution context variable environment.

// So, we can't access doodle on the global scope. Therefore, we need to access in its own scope.

const woodle1 = function doodle() {
    // setTimeout(() => doodle(), 1000)
    console.log("woodle1")
}
woodle1()