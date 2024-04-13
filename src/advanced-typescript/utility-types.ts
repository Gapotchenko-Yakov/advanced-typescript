enum Position {
  "Design Engineer",
  "Manufacturing Automation Engineer",
  "Software Development Engineer",
  "Technical Support Engineer",
  "Quality Engineer (QA Engineer)",
}

console.log(Position[1]);

type Employee = {
  id: number;
  name: string;
  birthDate: Date;
  position: Position;
};

type EmployeePartial = Partial<Employee>;

type RequiredEmployeeFromPartial = Required<EmployeePartial>;

type ReadonlyEmployee = Readonly<Employee>;

type PositionMap = Record<Employee["name"], Position>;

type PersonalData = Pick<Employee, "name" | "birthDate">;

type EmployeeWithoutId = Omit<Employee, "id">;

type AllPositionsWithNullable =
  | "Software Engineer"
  | "Web Developer"
  | "Systems Analyst"
  | "Database Administrator"
  | "Network Engineer"
  | undefined;

type AllPositions = NonNullable<AllPositionsWithNullable>;

type PositionsWithAccessToDB = Extract<
  AllPositions,
  "Database Administrator" | "Systems Analyst"
>;

type PositionsWithoutAccessToDB = Exclude<
  AllPositions,
  "Database Administrator" | "Systems Analyst"
>;

function returnInterestType() {
  return { name: "Interest Type", props: "some props" };
}

type InterestType = ReturnType<typeof returnInterestType>;

// instance type with mixins
type Constructable<ClassInstance> = new (...args: any[]) => ClassInstance;

function Deletable<BaseClass extends Constructable<{}>>(Base: BaseClass) {
  return class extends Base {
    deleted: boolean = false;
    delete() {}
  };
}

class Car {
  constructor(public name: string) {}
}

class User {
  constructor(public name: string) {}
}

type UsersList = {
  user: User;
  car: Car;
};

const DeletableCar = Deletable(Car);
const DeletableUser = Deletable(User);

type DeletableUserInstance = InstanceType<typeof DeletableUser>;
type DeletableCarInstance = InstanceType<typeof DeletableCar>;

class Profile {
  user: DeletableUserInstance = {} as DeletableUserInstance;
  car: DeletableCarInstance = {} as DeletableCarInstance;
}

const profile = new Profile();
profile.user = new DeletableUser("John");
profile.car = new DeletableCar("BMW");
