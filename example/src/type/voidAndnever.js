"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let v1;
function f1() {
    console.log("hello");
}
function f2() {
    throw new Error("some error");
}
function f3() {
    while (true) {
        // ...
    }
}
f1();
function sayHi() {
    console.log("hello?");
}
console.log(sayHi());
