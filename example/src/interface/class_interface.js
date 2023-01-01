"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class SomePerson {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    isYounger(age) {
        return this.age < age;
    }
}
