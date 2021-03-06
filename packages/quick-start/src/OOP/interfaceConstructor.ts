namespace interfaceConstructor {
  interface ConstructorReturnType {
    member1: number;
    funct(): void;
  }

  interface EntityConstructor {
    new (value: number): ConstructorReturnType;
  }

  function EntityFactory(
    ctor: EntityConstructor,
    value: number
  ): ConstructorReturnType {
    return new ctor(value);
  }

  class Implementation1 implements ConstructorReturnType {
    member1: number;
    constructor(value: number) {
      this.member1 = value;
    }
    public funct(): void {}
  }

  // class Implementation2 {
  //     constructor(value: number) { }
  // }
  // let impl2 = entityFactory(Implementation2, 1); // Does not compile

  class Implementation3 implements ConstructorReturnType {
    public member1: number = 1;
    constructor() {
      console.log(arguments);
    }
    public funct(): void {}
  }
  let impl3 = EntityFactory(Implementation3, 1);
  console.log(impl3); // prints Implementation1 { member1: 1 }
}
