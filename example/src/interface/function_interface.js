"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// type GetText = (name: string, age: number) => string; //인터페이스와 같은 효과
const getText = function (name, age) {
    const nameText = name.substring(0, 10);
    const ageText = age >= 35 ? "senior" : "junior";
    return `name: ${nameText}, age: ${ageText}`;
};
//이렇게 표현해도 맞다.
const getText2 = function (name, age) {
    return "";
};
