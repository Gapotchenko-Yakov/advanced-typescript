enum Position {
  "Design Engineer",
  "Manufacturing Automation Engineer",
  "Software Development Engineer",
  "Technical Support Engineer",
  "Quality Engineer (QA Engineer)",
}

console.log(Position[1]);

type User = {
  id: number;
  name: string;
  birthDate: Date;
  position: Position;
};

type UserPartial = Partial<User>;

type RequiredUserFromPartial = Required<UserPartial>;

type ReadonlyUser = Readonly<User>;

type PositionMap = Record<User["name"], Position>;

type PersonalData = Pick<User, "name" | "birthDate">;

type UserWithoutId = Omit<User, "id">;

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
