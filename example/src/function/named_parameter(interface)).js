"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//named parameter
function getText({ name, age = 15, language, }) {
    const nameText = name.substring(0, 10);
    const ageText = age >= 35 ? "senior" : "junior";
    const languageText = language ? language.substring(0, 10) : "";
    return `name: ${nameText}, age: ${ageText}, language: ${languageText}`;
}
console.log(getText({ name: "aaa" }));
function getText1({ name, age = 15, language }) {
    const nameText = name.substring(0, 10);
    const ageText = age >= 35 ? "senior" : "junior";
    const languageText = language ? language.substring(0, 10) : "";
    return `name: ${nameText}, age: ${ageText}, language: ${languageText}`;
}
//typescript named parameter refactoring //function 전구모양에서 "convert parameters to destructured object"
function getText3(name, age = 15, language) {
    const nameText = name.substring(0, 10);
    const ageText = age >= 35 ? "senior" : "junior";
    const languageText = language ? language.substring(0, 10) : "";
    return `name: ${nameText}, age: ${ageText}, language: ${languageText}`;
}
