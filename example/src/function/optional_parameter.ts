export {};

//optional parameter
function getText(name: string, age: number, language?: string): string {
  const nameText = name.substring(0, 10);
  const ageText = age >= 35 ? "senior" : "junior";
  const languageText = language ? language.substring(0, 10) : "";

  return `name: ${nameText}, age: ${ageText}, language: ${languageText}`;
}

//rest parameter
function rest(name: string, ...rest: number[]): string {
  return ``;
}

console.log(rest("abc", 1, 2, 3));
