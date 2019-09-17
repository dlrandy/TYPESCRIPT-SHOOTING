import { NumericLiteral } from "typescript"

let a = 'x'
let b = 3
var c = true
const d ={x:3}


enum E {X, Y, Z}
let e = E.X

const a_c = 'x'
const b_c = 3
const c_c = true

const e_c = E.X

let a_e: 'x' = 'x'
let b_e: 3 = 3
var c_e: true = true
const d_e: {x:3} = {x:3}


const a_w = 'x'
let b_w = a_w

let a_a = null
a_a = 3
a_a = 'b'



function fc() {
  let a:string = null
  // a = 3
  a ='v'
  return a
}
var t = fc()//string

let c_a = {x:3}
let c_b: {x: 3}
let c_cc = {x: 3} as const 

let c_d = [1, {x:2}, 1]
let c_ee = [1,{x:3}] as const

type Options = {
  baseURL: string;
  cacheSize?: number;
  tier?: 'prod' | 'dev';
}


class API {
  constructor(private options: Options) {
    
  }
}

new API({
  baseURL: 'https://api.jj.com',
  tier: 'prod'
})
new API({
  baseURL: 'https://api.jj.com',
  tierr: 'prod'
})

new API({
  baseURL: 'http://api.com',
  badTier: 'prod'
} as Options)


let badOptions = {
  baseURL: 'https://api.com',
  badTier: 'prod',
}

new API(badOptions)

let options:Options = {
  baseURL: 'https://api.com',
  badTier: 'prod'
}

new API(options)


type UserTextEvent = {type: 'TextEvent', value: string, target: HTMLInputElement}
type UserMouseEvent = {type: 'MouseEvent', value: [number, number], target: HTMLElement}

type UserEvent =  UserTextEvent | UserMouseEvent

function handle(event:UserEvent) {
  if (event.type === 'TextEvent') {
    event.value
    event.target
    return
  }

  event.value
  event.target
}








