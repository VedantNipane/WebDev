// Declaring a class
class Product {
    constructor(itemName, price, discount, productCode) {
        this.itemName = itemName;
        this.price = price;
        this.discount = discount;
        this.productCode = productCode;
    }
}

// Creating an instance of the class
let pencil = new Product('Pencil', 20, 2, 'P10');

// Class expression
const Product1 = class {
    constructor(itemName, price, discount, productCode) {
        this.itemName = itemName;
        this.price = price;
        this.discount = discount;
        this.productCode = productCode;
    }

    get discountValue() {
        return this.discount;
    }
};

// Creating an instance of the class expression
let chair = new Product1('Chair', 499, 10, 'JK');

// Extending classes
class ElectronicProduct extends Product {
    constructor(itemName, price, discount, productCode, warranty) {
        super(itemName, price, discount, productCode); // Calls the parent class constructor
        this.warranty = warranty; // Adds a new property to the child class
    }

    getWarrantyInfo() {
        return `The warranty for ${this.itemName} is ${this.warranty} years.`;
    }
}

// Creating an instance of the extended class
let laptop = new ElectronicProduct('Laptop', 1500, 100, 'LAP123', 2);
console.log(laptop.getWarrantyInfo()); // Outputs: The warranty for Laptop is 2 years.

// Demonstrating the constructor property
console.log(pencil.constructor); // Outputs: Function: Product
console.log(chair.constructor); // Outputs: Function: Product1
console.log(laptop.constructor); // Outputs: Function: ElectronicProduct
