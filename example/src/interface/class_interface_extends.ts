export {};

interface Person {
  name: string;
  age: number;
}
interface Programer {
  isProgramer: boolean;
}
// interface Korean extends Person {
//   isKorean: boolean;
// }

//여러개를 상속 받을 수 있다.

interface Korean extends Person, Programer {
  isKorean: boolean;
}
