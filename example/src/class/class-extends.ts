export {};

class Person {
  name: string;
  age: number = 0;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  sayHello() {
    console.log("Hello");
  }
}

class Programmer extends Person {
  fixBug() {
    console.log("complete fix bugs");
  }
}

const programmer1 = new Programmer("Inho", 30);
// programmer1.fixBug();
// programmer1.sayHello();

class Point {
  x: number;
  y: number;
  z: number;
  constructor() {
    this.x = 3;
    this.y = 5;
    this.z = 7;
  }

  getXYDistance(): number {
    return Math.abs(this.y - this.x);
  }
}

// class Point {
//   x = 10;
//   y = 11;
// }
// const pt = new Point();
// console.log(pt.x, pt.y);
// pt.x = 0;
// console.log(pt.x);
// pt.x = "0";

class GoodGreeter {
  name: string;

  constructor() {
    this.name = "hello";
  }
}
