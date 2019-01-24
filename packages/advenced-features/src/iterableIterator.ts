//使用iterator简化自定义结构的迭代
const numbers = [1,2,3,4];

let i = 0;
do {
  console.log(numbers[i]);
  i++;
} while (i < numbers.length);

for (const num of numbers) {
 console.log("num ", num);
  
}

interface Actionm{
  type: string;
}

interface ListNodem<T> {
  value: T;
  next: ListNodem<T>;
  prev: ListNodem<T>;
}


class BackwardsActionIterator implements IterableIterator<Actionm> {
  [Symbol.iterator](): IterableIterator<Actionm> {
    // throw new Error("Method not implemented.");
    return this;
  }
  next():IteratorResult<Actionm> {
    // throw new Error("Method not implemented.");
    const curr = this._currentActionNode
    if (!curr || !curr.value) {
      return {value: {type: ''}, done: true};
    }
    this._currentActionNode = curr.prev;
    return {value: curr.value, done: false};
  }
  constructor(private _currentActionNode: ListNodem<Actionm>) {
    
  }
}













