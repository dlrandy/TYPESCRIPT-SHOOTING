declare const numbers: number[];
declare let i: number;
interface Actionm {
    type: string;
}
interface ListNodem<T> {
    value: T;
    next: ListNodem<T>;
    prev: ListNodem<T>;
}
declare class BackwardsActionIterator implements IterableIterator<Actionm> {
    private _currentActionNode;
    [Symbol.iterator](): IterableIterator<Actionm>;
    next(): IteratorResult<Actionm>;
    constructor(_currentActionNode: ListNodem<Actionm>);
}
