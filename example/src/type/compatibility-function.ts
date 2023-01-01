export {};

type F1 = (a: number, b: string) => string;
type F2 = (a: number, b: string | number) => string;

let f1: F1 = (a, b) => `${a} ${b}`;
let f2: F2 = (a, b) => `${a} ${b}`;

// f1 = f2;
f2 = f1;

