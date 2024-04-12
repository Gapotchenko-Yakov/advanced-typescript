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

type InferSomething1<T> = T extends infer U ? U : unknown;

let a: InferSomething1<"Some string">;

type InferSomething2<T> = T extends { a: infer A; b: infer B; c: number }
  ? A & B
  : unknown;

let b: InferSomething2<{
  a: { aProp1: "Some string" };
  b: { bProp1: true };
  c: 20;
}>;
