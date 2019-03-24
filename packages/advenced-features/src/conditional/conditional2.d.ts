declare const numberss: (string | number)[];
declare const someObj: {
    id: number;
    name: string;
};
declare const someBool = true;
declare type FlattenArray<T extends any[]> = T[number];
declare type FlattenObj<T extends Object> = T[keyof T];
declare type NumArrayFlattened = FlattenArray<typeof numbers>;
declare type SomeObjFlattened = FlattenObj<typeof someObj>;
declare type SomeBoolFlattened = FlattenObj<typeof someBool>;
declare type Flatten<T> = T extends any[] ? T[number] : T extends Object ? T[keyof T] : T;
