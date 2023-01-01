//객체: 일반함수의 경우
const counter3 = {
  value: 0,
  add: function (amount) {
    this.value += amount;
    console.log(this === global);
  },
};

console.log(counter3.value);
counter3.add(5);
console.log(counter3.value);

//마찬가지로 일반 함수를 호출하는 것처럼 this가 결정된다.
const add3 = counter3.add;
add3(5);
console.log(counter3.value);

//객체: 화살표 함수의 경우
// const counter4 = {
//   value: 0,
//   add: (amount) => {
//     console.log(this);
//     this.value += amount;
//   },
// };

// console.log(counter4.value);
// counter4.add(5);
// console.log(counter4.value);

// //화살표 함수는 상위 스코프를 따르는데,
// //객체에서의 함수는 상위 스코프는 전역객체를 따른다(?)
// const add4 = counter4.add;
// add4(5);
// console.log(counter4.value);
