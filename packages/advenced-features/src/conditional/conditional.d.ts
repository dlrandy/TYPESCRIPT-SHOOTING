interface StringContainer {
    value: string;
    format(): string;
    split(): string[];
}
interface NumberContainer {
    value: number;
    nearestPrime: number;
    round(): number;
}
declare type Item<T> = {
    id: T;
    container: T extends string ? StringContainer : NumberContainer;
};
declare let item: Item<string>;
declare type ArrayFilter<T> = T extends any[] ? T : never;
declare type StringsOrNumbers = ArrayFilter<string | number | string[] | number[]>;
interface Book {
    id: string;
    tableOfContents: string[];
}
interface TV {
    id: number;
    diagonal: number;
}
interface IItemService {
    getItem<T extends string | number>(id: T): T extends string ? Book : TV;
}
declare let itemService: IItemService;
declare const book: Book;
