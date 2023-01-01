export {};

class Person {
  static adultAge = 20;
  constructor(public name: string, public age: number) {}

  public sayHello() {
    console.log(`Hello My name is ${this.name}`);
    console.log(Person.getIsAdult(this.age) ? "Adult" : "Not adult");
  }

  static getIsAdult(age: number) {
    return Person.adultAge <= age;
  }
}

const person1 = new Person("Inho", 23);
const person2 = new Person("Parker", 19);
person1.sayHello();
console.log(Person.adultAge);
