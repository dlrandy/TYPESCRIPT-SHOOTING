namespace chapter6 {
interface ReuseableInterface1{
  entity: any;
}


interface ReusableInterface2{
  entity: object;
}

// const ri2a:ReusableInterface2 = {
//   // entity: 1
// };

const ri2b: ReusableInterface2 = {
  entity: {
    test: ''
  }
};

const value = ri2b.entity;

// console.log(value.test);

const valueCated = value as { test: string};
 console.log("valueCated ", valueCated.test);

interface  MyCustomTypeA {
  test: string;
}

interface MyCustomTypeB {
  anything: boolean;
}

interface ReusableInterface3<T> {
  entity: T;
}

const ri3a: ReusableInterface3<MyCustomTypeA> = {
  entity: {
    test: 'yes'
  }
};

const ri3b: ReusableInterface3<MyCustomTypeB> = {
  entity: {
    anything: true
  }
};

const ri3c: ReusableInterface3<number> = {
  entity: 12,
}

console.log(ri3a.entity.test);
console.log(ri3b.entity.anything);
console.log(ri3c.entity);

type MyTypeA<T> = T | string;

interface MyInterface<TField, YField>{
  entity1: TField;
  myFunction(): YField;
}

class MyClass<T> {
  list: T[] = [];
  /**
   * displayFirst
   */
  public displayFirst(): void {
    const first: T = this.list[0];
    console.log(first);
  }
}

function extract<T, R>(list:T[], param2: R):T {
  return list[0]
}

interface RIF2{
  entity: object;
}

const a  = {
  what: 'ever'
};

const c: RIF2 = {
  entity: a
}

// console.log(c.entity.what)

interface AnyKindOfObject {
  what: string;
}

interface REF3<T extends object> {
  entity: T;
}

const d:REF3<AnyKindOfObject> = {
  entity:a
};
console.log(d.entity.what);
interface ObjectWithId {
  id: number;
  what: string;
}

interface RIF$<T extends {id: number}> {
  entity: T;
}

// const e: RIF$<AnyKindOfObject> = {
//   entity: a
// }

const f: RIF$<ObjectWithId> = {
  entity: {
    id: 123,
    what: 'wewe'
  }
}

// const g:RIF$<string> = {
//   entity: 'sdsdf'
// };


function funct1<T extends ObjectWithId>(p:T) {
  console.log(`${p.what} ${p.id}`);
}

class RClass <T extends ObjectWithId> {
  public list: T[] = [];
  public funct1(): void{
    this.list.forEach(p => {
      console.log(`${p.what} ${p.id}`);
    })
  };
}

interface WithId {
  id: number;
}
interface User {
  name: string;
}

interface Developer extends User {
  fl: string;
}

function idfu<T extends User>(user:T):T & WithId {
  const newUser = Object.assign({}, user, {id: 1});
  return newUser;
}
const user: Developer = {name: 'sfsf', fl: 'sdf'};
const userWithId = idfu(user);
console.log(userWithId.fl, userWithId.name, userWithId.fl);

function merge<T, U>(obj1:T, obj2: U): T&U {
  return Object.assign({}, obj1, obj2);
}

interface BaseType<T = string> {
  id: T;
}
let entity1: BaseType;
let entity2: BaseType<string>;
let entity3: BaseType<number>;

// interface Ust<T = string, U> {
//   id: T;
//   name: U;
// }

interface Ust<U,T = string> {
  id: T;
  name: U;
}

interface WithId {
  id: number;
}
// interface UserWithDefault<T extends WithId = number> {}
interface User<T = string>{
  id: T;
}

interface Wid {
  id: number;
}

interface UserWithDefault<T extends Wid = User<number>> {

}

function shows<T=number>(p1?:T):void {
  console.log(p1);
}

// interface ObjectWithAge {
//   kind: 'ObjectWithAge';
//   age: number;
// }

// function funct2<T extends ObjectWithAge | ObjectWithAge[]>(p:T): T {
//   if (p instanceof Array) {
//     return p[0];
//   }
//   return p;
// }

interface ObjectWithAge {
  kind: 'ObjectWithAge';
  age: number;
}
function funct2<T extends ObjectWithAge | ObjectWithAge[]>(p:T):T {
  if (p instanceof Array) {
    return p[0]
  }
  return p;
}

interface Human {
  name: string;
  birthdate: Date;
  isHappy: boolean;
}
const me : Human = {
  name: 'ziyu',
  birthdate: new Date(),
  isHappy: true,
};

console.log(me['name']);

function showMe1(obj:Human, field: string):void {
  console.log(obj[field].toString());
}

showMe1(me, 'name');

function showMe2(obj:Human, field: keyof Human): void {
  console.log(obj[field]);
}

// showMe2(me, 'ssss');

function prop<Tobj, Tmk extends keyof Tobj>(obj:Tobj, key:Tmk):Tobj[Tmk] {
  return obj[key];
}

interface ObjWithName {
  name: string;
  age: number;
};

const obj1: ObjWithName = {
  name: 'sdf',
  age: 12
};
const r1: string = prop(obj1, 'name')
const r2: number = prop(obj1, 'age');

function nameof<T>(ins:T, key: keyof T): keyof T {
  return key;
}

const name1 = nameof(obj1, "name");
// const name2 = nameof(obj1, "nasme"); // Does not compile console.log(name1); // "name"


type Readonly<T> = {
  readonly [P in keyof T]: T[P];
};

type Partial<T> = {
  [P in keyof T]? : T[P];
};

interface MyEntity {
  readonly id: number;
  name: string;
};

const e1: MyEntity = {
  id: 1,
  name: 'asdf'
};
const e2: Readonly<MyEntity> = e1;
e1.name = 'i can change';
// e2.name = 'asfasf';

function edit<T>(original:T, obj:Partial<T>): T {
  const returnObj: T = Object.assign({}, original, obj);
  return returnObj;
}

edit(e1, {name: 'super'})
// edit(e2, {mem: 'not exist'});

type Stringify<T> = {
  [P in keyof T]: string;
};

type Unreadonly<T> = {
  -readonly [P in keyof T]: T[P];
};
// const e3: Unreadonly<Stringify<MyEntity>> = e1;


function castAllFieldToString<T>(obj:T): Stringify<T> {
  let returnValue: any = {};
  for (const property in obj) {
    if (obj.hasOwnProperty(property)) {
      returnValue[property] = obj[property].toString();
    }
  }

  return returnValue as Stringify<T>;
}

const e3: Unreadonly<Stringify<MyEntity>> = castAllFieldToString(e1);







































































































































































































}




























 







