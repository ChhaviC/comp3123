//exercise 1
const names = ['Randy Savage', 'Ric Flair', 'Hulk Hogan'];

for (let item of names) {
  const logItem = () => console.log(`Item: ${item}`);
  logItem();
}

//exercise 2

const capitalize = ([first, ...rest]) => first.toUpperCase() + rest.join('');
console.log(capitalize('fooBar'));  
console.log(capitalize('nodeJs')); 


//exercise 3
const colors = ['red', 'green', 'blue'];
const capitalizedColors = colors.map(color => capitalize(color));
console.log(capitalizedColors);  

//exercise4
const values= [1,60,34,30,20,5]
const filteredvalues=values.filter(values => values <20);
console.log(filteredvalues);

//exercise 5
const numbers = [1, 2, 3, 4];
const sum = numbers.reduce((acc, num) => acc + num, 0);
const product = numbers.reduce((acc, num) => acc * num, 1);

console.log(`Sum: ${sum}, Product: ${product}`);  

//exercise 6
class Car {
    constructor(model, year) {
      this.model = model;
      this.year = year;
    }
  
    // Method to return car details in the desired format
    details() {
      return `Model: ${this.model} ${this.year}`;
    }
  }
  
  class Sedan extends Car {
    constructor(model, year, balance) {
      super(model, year);  // Calls the constructor of the Car class
      this.balance = balance;
    }
  
    // Method to return sedan details in the desired format
    info() {
      return `${this.model} has a balance of $${this.balance}`;
    }
  }
  
  // Creating an instance of Car
  const car2 = new Car('Pontiac Firebird Engine', 1976);
  console.log(car2.details());  // Output: model: Pontiac Firebird engine 1976
  
  // Creating an instance of Sedan
  const mySedan = new Sedan('Volvo SD', 2020, 30000);
  console.log(mySedan.info());  // Output: Volvo SD has a balance of 30000
  
