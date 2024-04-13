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

// mapped type
type Record1<K extends keyof any, T> = {
  [P in K]: T;
};

type PaletteColor = Record1<number, string>;
const color: PaletteColor = {
  100: "black",
  900: "white",
};

Object.keys(color).map((code) => console.log(color[Number.parseInt(code)]));

// index signature
interface Record2 {
  [K: number | string]: string;
}
