/**
 * conditional type 是把泛型推进了一步， 允许测试特性的条件，来决定最终的type
 * 
 */

 interface StringContainer {
   value: string;
   format(): string;
   split(): string[];
 };

 interface NumberContainer {
   value: number;
   nearestPrime: number;
   round(): number;
 };

//  type Item<T> = {
//    id: T,
//    container: any
//  };

type Item<T> = {
  id: T,
  container: T extends string ?  StringContainer : NumberContainer
}

 let item: Item<string> = {
   id: 'kkk',
   container: {value: '', format: () => {return ''}, split: () => [] }
 };


 type ArrayFilter<T> = T extends any[] ? T : never;

 type StringsOrNumbers = ArrayFilter<string | number | string[] | number[]>;

 /*
  1. distribute -> never | never | string[] | number[]
  2."never" is ignored -> string[] | number[]
*/

/**
 * 条件类型可以替换掉function overload
 */

interface Book {
  id: string;
  tableOfContents: string[];
}

interface TV {
  id: number;
  diagonal: number;
}

interface IItemService {
  // getItem(id: string): Book;
  // getItem(id: number): TV;
  // getItem<T>(id:T): Book | TV;

  // getItem<T>(id:T): T extends string ? Book : TV;const tv = itemService.getItem(true);
  getItem<T extends string | number>(id:T): T extends string ? Book : TV;
}

let itemService!: IItemService;

const book = itemService.getItem("10");
// const tv = itemService.getItem(true);









