export {};

let v1: 10 | 20 | 30;

function f1(): void {
  console.log("hello");
}

function f2(): never {
  throw new Error("some error");
}

function f3(): never {
  while (true) {
    // ...
  }
}
f1();

function sayHi(): void {
  console.log("hello?");
}

console.log(sayHi());
