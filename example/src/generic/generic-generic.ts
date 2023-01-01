export {};

function makeArray<T>(defaultValue: T, size: number): T[] {
  const arr: T[] = [];
  for (let i = 0; i < size; i++) {
    arr.push(defaultValue);
  }
  return arr;
}

const arr1 = makeArray<number>(1, 10);
const arr2 = makeArray<string>("1", 10);
//생략 가능하다.
const arr3 = makeArray(1, 10);
const arr4 = makeArray("1", 10);
const arr5 = makeArray(true, 10);
