const numbers = [1, 2, 3, 4];
let i = 0;
do {
    console.log(numbers[i]);
    i++;
} while (i < numbers.length);
for (const num of numbers) {
    console.log("num ", num);
}
class BackwardsActionIterator {
    constructor(_currentActionNode) {
        this._currentActionNode = _currentActionNode;
    }
    [Symbol.iterator]() {
        return this;
    }
    next() {
        const curr = this._currentActionNode;
        if (!curr || !curr.value) {
            return { value: { type: '' }, done: true };
        }
        this._currentActionNode = curr.prev;
        return { value: curr.value, done: false };
    }
}
//# sourceMappingURL=iterableIterator.js.map