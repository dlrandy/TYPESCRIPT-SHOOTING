namespace classVariables {
  export class Variables {
    public a:number = 1;
    private b: number = 2;
    protected c: number = 3;
    d:number = 4;
    constructor(){}
  }
  const d = new Variables();
  console.log(d.d)

  class Test {
    constructor(public param1: number, public param2: string) {
      
    }
  }

  class MyClass {
    private m1: number;
    private m2: string;
    private m3: number;
    constructor(param1: number, param2: string) {
      this.m1 = param1;
      this.m2 = param2;
      this.m3 = 123;
    }
  }

  const myClassIns = new MyClass(1, 'must be present');
 console.log("myClassIns ", myClassIns);
class ClassWithConstructorOverloaded {
  private p1: number;
  private p2: string;
  constructor(p1: number, p2?: string) {
    this.p1 = p1;
    if (p2 === undefined) {
      p2 = 'default';
    }
    this.p2 = p2;
  }
}

const overloaded1 = new ClassWithConstructorOverloaded(1);
const overloaded2 = new ClassWithConstructorOverloaded(1, "hello");

console.log(overloaded1); // prints ClassWithConstructorOverloaded { p1: 1 }
console.log(overloaded2); // prints ClassWithConstructorOverloaded { p1: 1, p2: 'hello' }

class MyClass2 extends MyClass {
  constructor(p1: number) {
    super(p1, 'Here');
  }
}

const myClass2 = new MyClass2(1);
 console.log("myClass2 ", myClass2);

class BaseClass {
 public a: number = 1;
 private b: number = 2;
 protected c: number = 3;
}

class ChildClass extends BaseClass {
 public d: number = 1;
 private e:number = 2;
 protected f: number = 3;

 public f1(){
   this.a;
   this.c;
 }
}

const child = new ChildClass();
  console.log(child.a); // prints 1 
  console.log(child.d); // prints 1

  class MyClass3 {
    public constructor(private p1: number, public p2: string) {}
  }

  const myClass3 = new MyClass3(1, "2");
  console.log(myClass3.p2); // prints 2 

  class MyClass3Same {
    private p1: number;
    public p2: string;
    constructor(p1: number, p2: string) {
      this.p1 = p1;
      this.p2 = p2;
    }
  }

  const myClass3Same = new MyClass3Same(1, "2");
  console.log(myClass3Same.p2); // prints 2

  class PrivateConstructor {
    private constructor() {
      
    }
  }

  // const pc = new PrivateConstructor(); // Does not compile


  class SingletonClass {
    private static instance: SingletonClass;
    private constructor() {
      SingletonClass.instance = new SingletonClass();
    }
    /**
     * GetInstance
     */
    public static GetInstance(): SingletonClass {
      return SingletonClass.instance;
    }
  }

  const singletonClass = SingletonClass.GetInstance();


  interface ObjectDefinition {
    m1: string;
    funct1: () => void;
  }


  let ajax: any;
  const funct1 = () => {};
  ajax.then((response: any) => {
    const r = response as ObjectDefinition;
    r.funct1 = funct1;
    return r;
  })

  class ObjectDefinitionClass implements ObjectDefinition {
    public m1: string;
    public funct1(): void{};
    constructor(param1: string) {
      this.m1 = param1;
    }
  }

  ajax.then((response : any) => {
    const r = response as ObjectDefinition;
    return new ObjectDefinitionClass(r.m1);
  })

  interface Model {
    m1: string;
  }

  interface Funct {
    funct1: () => void;
  }

  class ObjectDefinitionClass2 implements Model, Funct {
    m1: string;
    funct1():void{};
    constructor(param1: Model) {
      this.m1 = param1.m1;
    }
  }

  ajax.then((response: any) => {
    const r = response as Model;
    return new ObjectDefinitionClass2(r);
  }).catch((err) => {
    
  });

  function createObj(m1:string): ObjectDefinitionClass {
    return {
      m1: m1,
      funct1: () => {}
    };
  }
  ajax.then((response: any) => {
    const r = response as Model;
    return createObj(r.m1);
  }).catch((err) => {
    
  });

  declare let jest:any; 
  const forTesting = new ObjectDefinitionClass('1');
forTesting.funct1 = jest.fn();

}