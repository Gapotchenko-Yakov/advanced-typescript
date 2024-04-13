enum Occupation {
  "Design Engineer",
  "Manufacturing Automation Engineer",
  "Software Development Engineer",
  "Technical Support Engineer",
  "Quality Engineer (QA Engineer)",
}

console.log(Occupation[1]);

type User = {
  id: number;
  name: string;
  birthDate: Date;
  occupation: Occupation;
};

type UserPartial = Partial<User>;

type RequiredUserFromPartial = Required<UserPartial>;

type ReadonlyUser = Readonly<User>;

type OccupationMap = Record<User["name"], Occupation>;

type PersonalData = Pick<User, "name" | "birthDate">;

type UserWithoutId = Omit<User, "id">;
