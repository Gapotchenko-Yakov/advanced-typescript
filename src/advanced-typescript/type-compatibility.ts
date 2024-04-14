class EmployeeSuper {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
}

class Programmer extends EmployeeSuper {
  // language: string = "JavaScript"; // doesn't work
}

class Manager extends EmployeeSuper {
  ruleMethod: string = "";
}

class Accountant {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
  audit() {
    console.log("audit");
  }
}

let employee: EmployeeSuper = new Accountant("John");

// employee.ruleMethod;
let f1 = (a: string, b: number, c: boolean) => 0;
let f2 = (arg1: string) => 0;

// f1 = f2 // OK
// f2 = f1 // ERROR

let f1Return = (a: string) => ({ name: "Jack", age: 30 });
let f2Return = (a: string) => ({ name: "Jack" });

// f1Return = f2Return; // ERROR lacks an 'age' property
// f2Return = f1Return; // OK
