export {};

abstract class Person {
  constructor(public name: string, public age: number) {}

  public sayHello() {
    console.log(`Hello My name is ${this.name}`);
  }

  abstract sayHello2(): void;
}

class Programmer extends Person {
  sayHello() {
    super.sayHello();
    console.log(`i'm a programmer`);
  }
  sayHello2() {
    console.log("hello2");
  }
}

const person1 = new Programmer("Inho", 23);

person1.sayHello();
person1.sayHello2();
