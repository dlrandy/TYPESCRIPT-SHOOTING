"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let animalInterface;
let animalTypeAlias = {
    age: 1,
    eat() { },
    speak() {
        return "";
    }
};
animalInterface = animalTypeAlias;
console.log("animalInterface ", animalInterface);
class A {
    constructor(a) {
        this.a = a;
    }
    ;
}
class B {
    constructor(a, b) {
        this.a = a;
        this.b = b;
    }
    ;
}
let a = { a: '' };
let b = { a: '', b: 2 };
a = b;
//# sourceMappingURL=structuretyping.js.map