"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const size = 100;
const isBig = size > 99;
const msg = isBig ? "Big" : "Small";
const values = [1, 2, 3];
const values2 = [1, 2, 3];
//tuple type
const data = [msg, size];
console.log(typeof 123);
console.log(typeof "abc");
console.log(typeof [1, 2, 3]);
let tuple1 = ["a", 2, undefined];
// tuple1 = [1, 2, undefined];
console.log(tuple1);
