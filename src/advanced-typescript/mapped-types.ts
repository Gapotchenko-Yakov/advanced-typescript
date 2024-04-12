type Properties = "propA" | "propB";

type MyMappedType<T extends string | number | symbol> = {
  [P in T]: string;
};

type MyMappedType2<T extends string | number | symbol> = {
  [P in keyof MyMappedType<T>]: string | null;
};

let MyNewType: MyMappedType2<Properties>;

type MyPick<T, Properties extends keyof T> = {
  [P in Properties]: T[P];
};

type MyNewType2 = MyPick<{ a: "structure of a"; b: "structure of b" }, "a">;
