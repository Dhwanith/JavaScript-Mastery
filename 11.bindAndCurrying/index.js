const multiply = (a, b) => {
    return a * b
}

const multiplyByTwo = multiply.bind(this,2)
console.log(multiplyByTwo(4));
console.log(multiplyByTwo(5));
console.log(multiplyByTwo(6));
console.log(multiplyByTwo(7));