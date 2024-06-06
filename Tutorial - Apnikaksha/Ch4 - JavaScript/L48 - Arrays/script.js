// Array declaration
let fruits = ['Apple', 'Banana', 'Cherry'];

// Push method
fruits.push('Orange');
console.log(fruits); // ['Apple', 'Banana', 'Cherry', 'Orange']

// Unshift method
fruits.unshift('Mango');
console.log(fruits); // ['Mango', 'Apple', 'Banana', 'Cherry', 'Orange']

// Pop method
let lastFruit = fruits.pop();
console.log(lastFruit); // 'Orange'
console.log(fruits); // ['Mango', 'Apple', 'Banana', 'Cherry']

// Shift method
let firstFruit = fruits.shift();
console.log(firstFruit); // 'Mango'
console.log(fruits); // ['Apple', 'Banana', 'Cherry']

// IndexOf method
let index = fruits.indexOf('Banana');
console.log(index); // 1

// LastIndexOf method
fruits.push('Banana');
let lastIndex = fruits.lastIndexOf('Banana');
console.log(lastIndex); // 3

// Includes method
let hasBanana = fruits.includes('Banana');
console.log(hasBanana); // true

// Find method
let numbers = [1, 2, 3, 4, 5];
let found = numbers.find(element => element > 3);
console.log(found); // 4

// Concat method
let moreFruits = ['Kiwi', 'Pineapple'];
let allFruits = fruits.concat(moreFruits);
console.log(allFruits); // ['Apple', 'Banana', 'Cherry', 'Banana', 'Kiwi', 'Pineapple']

// Slice method
let slicedFruits = allFruits.slice(1, 3);
console.log(slicedFruits); // ['Banana', 'Cherry']

// Spread operator
let moreNumbers = [...numbers, 6, 7, 8];
console.log(moreNumbers); // [1, 2, 3, 4, 5, 6, 7, 8]

// For loop
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

// For of loop
for (let fruit of fruits) {
    console.log(fruit);
}

// forEach method
fruits.forEach(fruit => console.log(fruit));

// Join method
let fruitString = fruits.join(', ');
console.log(fruitString); // 'Apple, Banana, Cherry, Banana'

// Split method
let sentence = 'Hello world';
let words = sentence.split(' ');
console.log(words); // ['Hello', 'world']

// Filter method
let largeNumbers = numbers.filter(num => num > 3);
console.log(largeNumbers); // [4, 5]

// Map method
let squaredNumbers = numbers.map(num => num * num);
console.log(squaredNumbers); // [1, 4, 9, 16, 25]
