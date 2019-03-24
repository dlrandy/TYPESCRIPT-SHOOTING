"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
;
;
function feedAnimal(animal) {
    animal.eat();
}
class Animal {
    constructor() {
        this.age = 0;
    }
    eat() {
        console.log('nom..nom..');
    }
    speak() {
        return 'roar';
    }
}
//# sourceMappingURL=fundamental.js.map