export {};

//함수 오버로드
function add(x: number, y: number): number;
function add(x: string, y: string): string;

function add(x: number | string, y: number | string): number | string {
  if (typeof x === "number" && typeof y === "number") {
    return x + y;
  } else {
    const result = Number(x) + Number(y);
    return result.toString();
  }
}

const v1: number = add(1, 2); // 함수오버로드 미사용시에는 에러 발생
// console.log(add(1, '2')) //함수오버로드 미사용시에는 에러 미발생
