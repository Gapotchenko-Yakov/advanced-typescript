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

// instance type with factory creational pattern
class Car {
  constructor(name: string, parameters: Record<string, unknown>) {
    return { name, ...parameters };
  }
}

class CarFactory {
  constructor() {}

  create(
    name: string,
    parameters: Record<string, unknown>
  ): InstanceType<typeof Car> {
    return new Car(name, parameters);
  }
}

const carFactory = new CarFactory();
const carAudi = carFactory.create("Audi", { maxSpeed: 200 });
