export {};

//index signatures 라고 한다.
interface Person {
  name: string;
  age: number; // optional parameter를 사용할 경우 에러 발생
  [key: string]: string | number;
}

const p1: Person = { name: "pill", age: 3, birthday: "2022-07-27" };
console.log(p1);

//index 타입
interface YearPriceMap {
  [year: number]: number;
  [year: string]: string | number;
}

const yearMap: YearPriceMap = {};
yearMap[1998] = 1000;
// yearMap[1998] = 'abc' //타입에러
yearMap["age"] = 1000;
yearMap["age"] = "1000";

interface Dog {
  name: string;
  age: number;
  [prop: string]: string | number;
}

const dog: Dog = {
  name: "ddoddo",
  age: 1,
  birth: "2021-07-27",
};
dog["kind"] = "Shiba";
// dog["Iskorean"] = false; // 에러발생
console.log(dog);
