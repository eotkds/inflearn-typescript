export {};

class Person {
  private _name: string = "";

  get name(): string {
    console.log("getter called");
    return this._name;
  }

  set name(newName: string) {
    if (newName.length > 10) {
      throw new Error(`Don't exceed name length`);
    }
    this._name = newName;
  }
}

let person = new Person();
person.name = "Chars";
console.log(person.name);
person.name = "abc abc abc abc";
