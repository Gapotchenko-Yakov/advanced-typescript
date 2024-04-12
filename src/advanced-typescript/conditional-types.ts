type SomeType = string;
type MyConditionalType = SomeType extends string ? string : null;

function someFunction<T>(value: T) {
  type A = T extends boolean
    ? "TYPE A"
    : T extends number
    ? "TYPE B"
    : T extends string
    ? "TYPE C"
    : "TYPE D";
  const someOtherFunction = (
    someArg: T extends boolean ? "TYPE A" : "TYPE B"
  ) => {
    const a: "TYPE A" | "TYPE B" = someArg;
    console.log(a);
  };

  return someOtherFunction;
}

const result1 = someFunction(true);
const result2 = someFunction(13);

type StringOrNot<T> = T extends string ? string : never;
type AUnion = StringOrNot<23>;

type FilteredType1 = Exclude<"a" | "b" | "c", "a" | "b">;
type MyExclude<T, U> = T extends U ? never : T;
type FilteredType2 = MyExclude<"a" | "b" | "c", "a" | "b">;

type MyType<T> = (() => T) extends () => string | number ? T : never;
type MyResult = MyType<string | number | boolean>;
