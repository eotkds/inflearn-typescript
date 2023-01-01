//화살표 함수
function Counter() {
  this.value = 0;
  this.add = () => {
    this.value += amount;
  };
}

const counter = new Counter();

console.log(counter.value);
counter.add(5);
console.log(counter.value);
//화살표 함수의 this는 lexical scope를 따른다.
// 이미 생성된 인스턴스의 this를 따를것이다.
const add = counter.add;
add(5);
console.log(counter.value);

// 함수선언식;
function Counter2() {
  this.value = 0;
  this.add = function (amount) {
    this.value += amount;
    // console.log(this === global);
  };
}
const counter2 = new Counter2();
console.log(counter2.value);
counter2.add(5);
console.log(counter2.value);

//일반 함수는 호출 시점에 this가 결정된다.
const add2 = counter2.add;
add2(5);
console.log(counter2.value);
