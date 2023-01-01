export {};

let v1: (1 | 2 | 3) & (1 | 3 | 5);

type Width = number | string;
let width: Width;
width = 123;
width = "abc";
