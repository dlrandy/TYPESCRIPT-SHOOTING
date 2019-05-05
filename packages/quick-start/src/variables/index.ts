const a = 'test';
let b: number = 2;
const c:boolean = true;
let d: number | string = 'test';
console.log(typeof a);
console.log(typeof b);
console.log(typeof c);
console.log(typeof d);

const e:number | string | {
  complex: string,
  obj: number
} = {
  complex: 'sd',
  obj: 1
};
console.log(typeof e);

let f: number = 3;
if (typeof f === 'number') {
  console.log('this is for sure a number');
}

type MyNewType = typeof f;


let g:number | undefined = undefined;
let h: number | undefined | null = null;
console.log(typeof g, typeof h)

function myFunction(value:number | string): void {
  console.log('value id number or undefined');
  if (value === undefined) {
    console.log('value is undefined')
  } else {
    console.log('value id not undefined, hence a number')
  }
  console.log('value is number or undefined')
}


function myFunction2(value:number |  undefined): void {
  console.log('value is number or undefined');
  if (value === undefined) {
    return;
  }
  console.log('value is not undefined, hence a number')
}

// instanceof

class MyClass1 {
  member1: string = 'default';
  member2: number = 123;
}

class MyClass2 {
  member1: string = 'default';
  member2: number = 123;
}

const aa = new MyClass1();
const bb = new MyClass2();

if (aa instanceof MyClass1) {
  console.log('a === Myclass1');
}
if (aa instanceof MyClass2) {
  console.log('a === Myclass12');
}
if (bb instanceof MyClass2) {
  console.log('b === Myclass2');
}

class MyClass3 extends MyClass2 {
  member3: boolean = true;
}

const cc = new MyClass3();
if (cc instanceof MyClass2) {
  console.log('cc === MyClass2');
}
if (cc instanceof MyClass3) {
  console.log('cc === MyClass3');
}

interface Type1 {
  m1: string;
  kind: 'Type1';
}
interface Type2 {
  m1: string;
  kind: 'Type2';
}
type Type3 = {m1: string,   kind: 'Type3'};

const v0 = {
  m1: 'All the sdame',
  kind: 'Type1'
};
// const v1: Type1 = v0;
// const v2: Type2 = v0;
// const v3: Type3 = v0;

function threeLogic(param:Type1 | Type2 | Type3): void {
  switch (param.kind) {
    case 'Type1':
      console.log(param.m1);
      break;
      case 'Type2':
      console.log(param.m1);
      break;
      case 'Type3':
      console.log(param.m1);
      break;
    default:
      break;
  }
}

interface TT2 {
  m2: string;
  m3: number;
}

interface TT1 extends TT2 {
  m1: number;
}

function userGuardCheck(obj:any): obj is TT1 {
  const tt1 = (obj as TT1);
  return tt1.m1 !== undefined
   && tt1.m2 !== undefined
   && tt1.m3 !== undefined;
}

function userGuardCheck2(obj:any): obj is TT2 {
  const tt1 = (obj as TT2);
  return   tt1.m2 !== undefined
   && tt1.m3 !== undefined;
}

function codeUnion(obj:TT1 | TT2): void {
  if (userGuardCheck(obj)) {
    console.log(obj.m1)
  }

  if (userGuardCheck2(obj)) {
    console.log(obj.m2)
  }
}

let something: any = 1;
let var1:number;

var1 = <number>something;
var1 = something as number;

let var2: string = var1 as unknown as string;













