export {};

class Person {
  //private 은 외부에서는 사용  x
  //protected 는 상속끼리만 사용 가능, 외부에서는 사용 x
  public name: string;

  constructor(name: string) {
    this.name = name;
  }

  public sayHello() {
    console.log(`Hello My name is ${this.name}`);
  }
}

class Programmer extends Person {
  public age: number;
  constructor(name: string, age: number) {
    super(name);
    this.age = age;
  }
  fixBug() {
    console.log(`${this.name} : complete fix bugs`);
  }
}

class Doctor extends Person {
  constructor(name: string) {
    super(name);
  }
  callNurse() {
    console.log(`${this.name} : Hey!`);
  }
}
const programmer1 = new Programmer("Inho", 30);
programmer1.fixBug();
programmer1.sayHello();

const doctor1 = new Doctor("Parker");
doctor1.sayHello();
doctor1.callNurse();

//example
/*
class Animal {
  constructor(public name: string) {}

  sayHello(): void {
    console.log(`Hello ${this.name}`);
  }
}
const animal1 = new Animal("kkokko");
animal1.sayHello();
console.log(animal1.name);

animal1.name = "chacha";
console.log(animal1.name);

class Dog extends Animal {
  kind: string;
  constructor(name: string, kind: string) {
    super(name);
    this.kind = kind;
  }

  sayName(): void {
    console.log(`I'm ${this.name}`);
  }
}

const dog1 = new Dog("ddoddo", "Shiba");
dog1.sayName();
*/
//readonly
// class Animal {
//   constructor(private readonly name: string) {}

//   sayHello(): void {
//     this.name = "chacha";
//     console.log(`Hello ${this.name}`);
//   }
// }
// const animal1 = new Animal("kkokko");
// animal1.sayHello();
// console.log(animal1.name);
