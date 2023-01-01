"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//optional parameter
function getText(name, age, language) {
    const nameText = name.substring(0, 10);
    const ageText = age >= 35 ? "senior" : "junior";
    const languageText = language ? language.substring(0, 10) : "";
    return `name: ${nameText}, age: ${ageText}, language: ${languageText}`;
}
//rest parameter
function rest(name, ...rest) {
    return ``;
}
console.log(rest("abc", 1, 2, 3));
