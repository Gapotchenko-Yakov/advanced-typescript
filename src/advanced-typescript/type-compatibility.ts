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
