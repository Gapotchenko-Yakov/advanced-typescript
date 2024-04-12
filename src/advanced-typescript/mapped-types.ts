type Properties = "propA" | "propB";

type MyMappedType<T extends string | number | symbol> = {
  [P in T]: string;
};

type MyMappedType2<T extends string | number | symbol> = {
  [P in keyof MyMappedType<T>]: string | null;
};

let type: MyMappedType2<Properties>;
