import { Interface } from "readline"

type Sushi = {
  calories: number
  salty: boolean
  tasty: boolean
}

interface Isushi {
  calories: number
  salty: boolean
  tasty: boolean
}

type Cake = {
  calories: number
  sweet: boolean
  tasty: boolean
}

type Food = {
  calories: number
  tasty: boolean
}

type Tushi = Food & {
  salty: boolean
}

type Take =  Food & {
  sweet: boolean
}

interface IFood {
  calories: number
  tasty: boolean
}
interface ISushi extends IFood{
  salty: boolean
}
interface ICake extends IFood {
  sweet: boolean
}
var a:ISushi = {
  calories: 1,
  salty: true,
  tasty: true
}

interface A {
  good(x: number): string
  bad(x: number): string
}

interface B extends A {
  good(x: string | number): string
  bad(x: string): string
}

interface User {
  age: string
}
interface User {
  age: number
}

interface Dog<Age extends number> {
  age: Age
}
interface Dog<Age extends string> {
  age: Age
}






















