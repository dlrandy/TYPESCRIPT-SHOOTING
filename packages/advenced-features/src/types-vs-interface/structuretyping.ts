interface IAnimal {
  age: number;
  eat(): void;
  speak(): string;
}

type AnimalTypeAlias = {
  age: number;
  eat(): void;
  speak(): string;
};

let animalInterface: IAnimal;
let animalTypeAlias: AnimalTypeAlias = {
  age: 1,
  eat() {},
  speak() {
    return "";
  }
};

animalInterface = animalTypeAlias;
console.log("animalInterface ", animalInterface);

class A {
  a: string;
  constructor(a){
    this.a = a;
  };
}

class B {
  a: string;
  b: number;
  constructor(a,b){
    this.a = a;
    this.b = b;
  };
}
let a:A = {a:''};
let b:B = {a:'', b:2};
// b = a;
a = b;
export {};
