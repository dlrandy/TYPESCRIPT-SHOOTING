import {Interface} from "readline"

type Sushi = {
  calories: number salty: boolean tasty: boolean
}

interface Isushi {
  calories : number
  salty : boolean
  tasty : boolean
}

type Cake = {
  calories: number sweet: boolean tasty: boolean
}

type Food = {
  calories: number tasty: boolean
}

type Tushi = Food & {
  salty: boolean
}

type Take = Food & {
  sweet: boolean
}

interface IFood {
  calories : number
  tasty : boolean
}
interface ISushi extends IFood {
  salty : boolean
}
interface ICake extends IFood {
  sweet : boolean
}
var aa : ISushi = {
  calories: 1,
  salty: true,
  tasty: true
}

interface A {
  good(x : number) : string
  bad(x : number) : string
}

interface B extends A {
  good(x : string | number) : string
  bad(x : string) : string
}

interface User {
  age : string
}
interface User {
  age : number
}

interface Dog < Age extends number > {
  age: Age
}
interface Dog < Age extends string > {
  age: Age
}

interface Animal {
  readonly name: string
  eat(food : string) : void
  sleep(hours : number) : void
}

interface Feline{
  meow(): void
}

class Cat implements Animal, Feline {
  meow(): void {
console.info('Meow')  }
  name: string = 'Kate'
  eat(food : string) : void {
    console.info('Ate some', food)
  }
  sleep(hours : number) : void {
    console.info('slept for', hours)
  }
  constructor() {}
}

class Zebra {
  constructor() {
    
  }
  trot(){

  }
}

class Poodle {
  constructor() {
    
  }
  trot(){

  }
}

function ambleAround(animal:Zebra) {
  animal.trot()
}
let zebra = new Zebra
let poodle = new Poodle

ambleAround(zebra)
ambleAround(poodle)

class AA {
  private x:number = 1
}

class BA extends AA {
}

function f(a:AA) {
  
}
f(new AA)
f(new BA)

f({x:1})

let a = 1999
function b() {
  
}
type a = number
interface b {
  ():void
}


class  C {}
let c:C = new C
enum E {F, G}
let e: E = E.F

type State = {
  [key: string]: string
}

class StringDatabase {
  constructor(public state: State = {}){}
  get(key: string) : string | null {
    return key in this.state ? this.state[key] : null
  }
  set(key: string, value: string): void {
    this.state[key] = value
  }
  static from(state: State){
    let db = new StringDatabase
    for (const key in state) {
      db.set(key, state[key])
    }
    return db
  }
}

interface StringDatabase{
  state: State
  get(key: string): string | null
  set(key: string, value: string): void
}

interface StringDatabaseConstructor {
  new(state?: State): StringDatabase
  from(state:State): StringDatabase
}















