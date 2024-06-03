// Arithmetic Operators
let x = 5;
let y = 2;
console.log(x + y); // 7
console.log(x - y); // 3
console.log(x * y); // 10
console.log(x / y); // 2.5
console.log(x % y); // 1

// Assignment Operators
let a = 10;
a += 5; // a = a + 5
console.log(a); // 15

// Comparison Operators
console.log(5 == '5'); // true (loose equality)
console.log(5 === '5'); // false (strict equality)
console.log(5 != '5'); // false
console.log(5 !== '5'); // true

// Logical Operators
let b = true;
let c = false;
console.log(b && c); // false
console.log(b || c); // true
console.log(!b); // false

// Ternary Operator
let age = 18;
let canVote = (age >= 18) ? "Yes" : "No";
console.log(canVote); // Yes