export {};

import { Language } from "./enum_language";
import { getIsValidEnumValue } from "./enum_function";

enum Fruit {
  Apple,
  Banana = 5,
  Orange,
}
let v1: Fruit.Apple = Fruit.Apple;
let v2: Fruit.Banana | Fruit.Orange = Fruit.Orange;

/* enum객체는 기본값 0부터 숫자 값이 있는 경우 할당, 다음 없을 경우 +1 */
console.log(v1, Fruit.Banana, v2); // 0 5 6

/* 숫자일 경우 양바향 맵핑, 문자일 경우 단 반향 맵핑 */
console.log(Fruit.Banana, Fruit["Banana"], Fruit[5]);

// console.log(Object.keys(Fruit).filter((key) => isNaN(Number(key))));
console.log(getIsValidEnumValue(Fruit, 1)); // false
console.log(getIsValidEnumValue(Fruit, 5)); // true
console.log(getIsValidEnumValue(Fruit, "Apple")); // false ; 아이템의 이름이기 때문에

// console.log(Language.English);

// console.log(getIsValidEnumValue(Language, "ko"));
// console.log(getIsValidEnumValue(Language, "Korean"));

enum DogKind {
  Maltese,
  Retriever = 5,
  Shiba,
}

let dog1: DogKind = DogKind.Maltese;
let dog2: DogKind = DogKind.Retriever;
let dog3: DogKind = DogKind.Shiba;
console.log(dog1, dog2, dog3);

enum DogKind1 {
  Maltese = "maltese",
  Retriever = "retriever",
  Shiba = "shiba",
}
let dog4: DogKind1 = DogKind1.Maltese;
let dog5: DogKind1 = DogKind1.Retriever;
let dog6: DogKind1 = DogKind1.Shiba;
console.log(dog4, dog5, dog6);
