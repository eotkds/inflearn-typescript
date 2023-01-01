export {};

interface Person {
  name: string;
  age: number;
}

interface Korean extends Person {
  liveInSeoul: boolean;
}

// type T1 = keyof Person
function swapProperty<T extends Person, K extends keyof Person>(
  p1: T,
  p2: T,
  key: K
): void {
  const temp = p1[key];
  p1[key] = p2[key];
  p2[key] = temp;
}

const p1: Korean = {
  name: "Mr.Hong",
  age: 23,
  liveInSeoul: true,
};
const p2: Korean = {
  name: "Mr.Kim",
  age: 30,
  liveInSeoul: true,
};
swapProperty(p1, p2, "age");
// swapProperty(p1, p2, 'age1') // Error

interface Product {
  name: string;
  price: number;
}

const p3: Product = {
  name: "Watch",
  price: 1000,
};

const p4: Product = {
  name: "bicycle",
  price: 5000,
};

// swapProperty(p3, p4, "name");
//작동은 하겠으나, type과는 안맞기 때문에 Error
