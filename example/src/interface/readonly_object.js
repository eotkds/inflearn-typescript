"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const p1 = { name: "pill" };
//readonly 속석으로 p1.name 을 바꿀수 없다.
// p1.name = "joker";
const p2 = {
    name: "nick",
    birthday: "2022-07-27",
};
// Person에 없는 속성도 Person사용가능
// p3 타입이 p2타입을 포함
const p3 = p2;
