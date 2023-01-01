export {};

interface Person {
  name: string;
}

interface Product {
  name: string;
  age: number;
}

const obj = { name: "mike", age: "30", city: "abc" };

let person1: Person = obj;
// let product1: Product = obj; // Error 발생
