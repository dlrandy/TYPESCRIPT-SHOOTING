/**
 * 泛型是一种可以把一种类型转换成另外一种类型的有用机制
 * 在泛型里使用typeof和普通使用typeof是不一样的
 */

 const numberss = [2,'1'];

const someObj = {
  id: 21,
  name: 'johnthan'
};

const someBool = true;
type FlattenArray<T extends any[]> = T[number];
type FlattenObj<T extends Object> = T[keyof T];

type NumArrayFlattened = FlattenArray<typeof numbers>;
type SomeObjFlattened = FlattenObj<typeof someObj>;
type SomeBoolFlattened = FlattenObj<typeof someBool>;

type Flatten<T> = T extends any[] ? T[number] : 
  T extends Object ? T[keyof T] : T;


