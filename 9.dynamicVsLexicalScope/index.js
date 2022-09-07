// // Example
// Almost everything in JavaScript is lexically scoped except "this" keyword

const a = function () {
  console.log("a", this); // returns window object // i.e window.a();
  const b = function () {
    console.log("b", this); // returns window object // i.e window.a(b())
    const c = {
      hi: function () {
        console.log("c", this); // returns {hi: function} // i.e c.hi()
      },
    };
    c.hi();
  };
  b();
};
a();

// How this keyword is dynamic scoped

const obj ={
    name: "John Doe",
    sing() {
        console.log("a",this); // returns the object i.e {name: "John",sing: function}
        var anotherFunction = function(){
            console.log("b",this); // returns the window object
            // the "this" keyword is actually dynamically scoped i.e it doesn't matter where its written its how the function is called.
            //
        };
        anotherFunction()
    }
}
obj.sing();

// So, How do we fix this problem?
// 1. Using Arrow functions
// Because, Arrow functions are lexically bounded i.e Arrow functions have a lexical "this" behavior.

const obja = {
  name: "John Doe",
  sing() {
    console.log("a", this); // returns the object i.e {name: "John",sing: function}
    var anotherFunction = () => {
      // By using arrow function
      console.log("b", this); // Now, it returns the object i.e {name: "John",sing: function}
      // Arrow function here will lexically bind "this"
    };
    anotherFunction();
  },
};
obja.sing();

// 2. Using bind

const obj1 = {
    name: "John Doe",
    sing() {
        console.log("a", this); // returns the object i.e {name: "John",sing: function}
        var anotherFunction = function() {
            console.log("b", this); // returns the object i.e {name: "John",sing: function}
        };
        return anotherFunction.bind(this);
    }
}
obj1.sing()();

// 3. Create a reference

const obj2 = {
  name: "John Doe",
  sing() {
    console.log("a", this); // returns the object i.e {name: "John",sing: function}
    var self = this; // At the "this" line is runs, "this" is still inside of the obj, we going maintain the reference to the obj.
    var anotherFunction = function () {
      console.log("b", self); // returns the object i.e {name: "John",sing: function}
    };
    return anotherFunction();
  },
};
obj2.sing();
