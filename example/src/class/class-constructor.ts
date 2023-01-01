export {};

class Person {
  //private 은 외부에서는 사용  x
  //protected 는 상속끼리만 사용 가능, 외부에서는 사용 x
  // public name: string; // constructor에 접근범위를 정하면 따로 지정할 필요 x

  constructor(public name: string) {
    // this.name = name; //접근범위 설정 후 초기화 하는 코드도 필요 없다.
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
