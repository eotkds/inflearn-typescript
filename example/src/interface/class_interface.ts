export {};

interface Person {
  name: string;
  age: number;
  isYounger(age: number): boolean;
}

class SomePerson implements Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  isYounger(age: number): boolean {
    return this.age < age;
  }
}
