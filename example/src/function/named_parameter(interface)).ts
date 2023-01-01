export {};

//named parameter
function getText({
  name,
  age = 15,
  language,
}: {
  name: string;
  age?: number;
  language?: string;
}): string {
  const nameText = name.substring(0, 10);
  const ageText = age >= 35 ? "senior" : "junior";
  const languageText = language ? language.substring(0, 10) : "";

  return `name: ${nameText}, age: ${ageText}, language: ${languageText}`;
}

console.log(getText({ name: "aaa" }));

//named parameter - interface
interface Param {
  name: string;
  age: number;
  language?: string;
}

function getText1({ name, age = 15, language }: Param): string {
  const nameText = name.substring(0, 10);
  const ageText = age >= 35 ? "senior" : "junior";
  const languageText = language ? language.substring(0, 10) : "";

  return `name: ${nameText}, age: ${ageText}, language: ${languageText}`;
}

//typescript named parameter refactoring //function 전구모양에서 "convert parameters to destructured object"
function getText3(name: string, age: number = 15, language: string): string {
  const nameText = name.substring(0, 10);
  const ageText = age >= 35 ? "senior" : "junior";
  const languageText = language ? language.substring(0, 10) : "";

  return `name: ${nameText}, age: ${ageText}, language: ${languageText}`;
}
