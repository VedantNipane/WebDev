// Factory Function
function createCourse() {
    return {
        lecture: 10,
        section: 3,
        title: 'JavaScript',
        notes: {
            introduction: "Welcome to JS course"
        },
        enroll() {
            console.log('You are successfully enrolled');
        },
        price: 999
    };
}

const course1 = createCourse();

// Constructor Function
function Course(title) {
    this.title = title;
    this.enroll = function() {
        console.log('You are successfully enrolled');
    };
}

const course2 = new Course('JavaScript');

// Deleting a property
delete course2.title;

// Checking constructors
console.log(course1.constructor); // Outputs: Function: Object
console.log(course2.constructor); // Outputs: Function: Course

// Functions as objects
function sayHello() {
    console.log('Hello');
}

sayHello.language = 'English';
console.log(sayHello.language); // Outputs: English

// Primitive Data Type - Pass by value
let a = 5;
let b = a;
b++;
console.log(a); // Outputs: 5
console.log(b); // Outputs: 6

// Reference Data Type - Pass by reference
let obj1 = { value: 10 };
let obj2 = obj1;
obj2.value++;
console.log(obj1.value); // Outputs: 11
console.log(obj2.value); // Outputs: 11
