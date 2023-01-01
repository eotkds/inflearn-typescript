export {};

class Person {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  sayHello() {
    console.log(`Hello My name is ${this.name}`);
  }
}

class Programmer extends Person {
  constructor(name: string) {
    super(name);
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
const programmer1 = new Programmer("Inho");
programmer1.fixBug();
programmer1.sayHello();

const doctor1 = new Doctor("Parker");
doctor1.sayHello();
doctor1.callNurse();
