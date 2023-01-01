"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const p1 = { name: "pill", age: 3, birthday: "2022-07-27" };
console.log(p1);
const yearMap = {};
yearMap[1998] = 1000;
// yearMap[1998] = 'abc' //타입에러
yearMap["age"] = 1000;
yearMap["age"] = "1000";
