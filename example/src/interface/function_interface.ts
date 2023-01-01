export {};

//인터페이스로 함수식 타입스크립트
interface GetText {
  (name: string, age: number): string;
}

// type GetText = (name: string, age: number) => string; //인터페이스와 같은 효과
const getText: GetText = function (name, age) {
  const nameText = name.substring(0, 10);
  const ageText = age >= 35 ? "senior" : "junior";

  return `name: ${nameText}, age: ${ageText}`;
};

//이렇게 표현해도 맞다.
const getText2: (name: string, age: number) => string = function (name, age) {
  return "";
};
