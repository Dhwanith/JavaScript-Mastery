function findName() {
    var b = "b"
    return printName();
}

function printName() {
    var c = "c"
    return "Dhwanith Chelumalla"
}

function sayMyName() {
    var a = "a"
    return findName();
}

sayMyName();

//  ---Lexical Scope---
// Lexical Environment === [[scope]]

function sayMyName() {
  let a = "a";
  return function findName() {
    let b = "b";
    return function printName() {
      let c = "c";
      console.log(a);
      console.log("Dhwanith Chelumalla");
    };
  };
}
sayMyName()()();
