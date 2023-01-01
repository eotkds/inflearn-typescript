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

console.log(v1, Fruit.Banana, v2);
console.log(Fruit.Banana, Fruit["Banana"], Fruit[5]);
// console.log(Object.keys(Fruit).filter((key) => isNaN(Number(key))));
console.log(getIsValidEnumValue(Fruit, 1));
console.log(getIsValidEnumValue(Fruit, 5));
console.log(getIsValidEnumValue(Fruit, "Apple"));

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
