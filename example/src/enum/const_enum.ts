export {};

const enum Fruit {
  Apple,
  Banana,
  Orange,
}

const fruit: Fruit = Fruit.Apple;

const enum Language {
  Korean = "ko",
  Japanese = "jp",
  English = "en",
}

const lang: Language = Language.Korean;

const enum DogKind {
  Maltese,
  Retriever,
  Shiba,
}

let dog1: DogKind = DogKind.Maltese;
let dog2: DogKind = DogKind.Retriever;
let dog3: DogKind = DogKind.Shiba;
console.log(dog1, dog2, dog3);
