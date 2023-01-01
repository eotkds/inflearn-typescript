export {}; // ?? 다른 ts 와 scope가 겹치기 때문에 사용한다고 하는데...?

const size: number = 100;
const isBig: boolean = size > 99;
const msg: string = isBig ? "Big" : "Small";

const values: number[] = [1, 2, 3];
const values2: Array<number> = [1, 2, 3];

//tuple type
const data: [string, number] = [msg, size];

console.log(typeof 123);
console.log(typeof "abc");
console.log(typeof [1, 2, 3]);

let tuple1: [string, number, undefined] = ["a", 2, undefined];
// tuple1 = [1, 2, undefined];
console.log(tuple1);
