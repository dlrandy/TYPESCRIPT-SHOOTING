import { type } from 'os';
// type FriendList = {
//   count: string
//   friends: {
//     firstName: string
//     lastName: string
//   }[]
// }
// type APIResponse = {
//   user: {
//     userId: string
//     friendList: FriendList
//   }
// }

type APIResponse = {
  user: {
    userId: string
    friendList: {
      count: string
      friends: {
        firstName: string
        lastName: string
      }[]
    }
  }
}

type FriendList = APIResponse['user']['friendList']

type Friend = FriendList["friends"][number]

function getAPIResponse():Promise<APIResponse> {
  return new Promise(()=> ({} as any as Promise<APIResponse>))
}


function renderFriendList(friendList:FriendList) {
  
}
async function handleResponse() {
  let resonse = await getAPIResponse()
  renderFriendList(resonse.user.friendList)  
}

type ResponseKeys =  keyof APIResponse
type UserKeys = keyof APIResponse['user']

type FriendListKeys = keyof APIResponse['user']['friendList']

function get<O extends object, K extends keyof O>(o:O, k:K):O[K] {
  return o[k]
}

type ActivityLog = {
  lastEvent:Date
  events: {
    id: string
    timestamp: Date
    type: 'Read' | 'Write'
  }[]
}

let activityLog: ActivityLog = <ActivityLog>{}
let lastEvent = get(activityLog, 'lastEvent')

//overloaded function
type Get = {
  <O extends object,
  K1 extends keyof O>(o: O, k1: K1):O[K1]
  <O extends object,
  K1 extends keyof O,
  K2 extends keyof O[K1]>(o: O, k1: K1, k2: K2):O[K1][K2]
  <O extends object,
  K1 extends keyof O,
  K2 extends keyof O[K1],
  K3 extends keyof O[K1][K2]
  >(o: O, k1: K1, k2: K2, k3: K3):O[K1][K2][K3]
}

let gett: Get = (object: any, ...keys: string[]) => {
  let result = object
  keys.forEach(k => result = result[k])
  return result
}

gett(activityLog, 'events', 0, 'type')

gett(activityLog, 'events')

gett(activityLog, 'bad')



type Currency = {
  unit: 'EUR' | 'GBP' | 'JPY' | 'USD'
  value: number
}

let Currency = {
  DEFAULT: 'USD',
  from(value: number, unit = Currency.DEFAULT):Currency{
    return {unit, value}
  }
}

// let a = [1, true] as [number, boolean]
// let a = [1, true] as const
let a = [1, true]

function tuple<T extends unknown[]>(...ts:T): T {
  return ts;
}

let b = tuple(1, true)



// function isString(a:unknown):boolean{
//   return typeof a === 'string'
// }

function isString(a:unknown):a is string{
  return typeof a === 'string'
}
isString('a')
isString([7])

function parseInput(input:string | number) {
  let formattedInput: string
  if (isString(input)) {
    formattedInput = input.toUpperCase()
  }
}


type IsString<T> = T extends string ? true : false
type AA = IsString<string>
type BB = IsString<number>


type ToArray<T> = T[]
type A = ToArray<number>
type B = ToArray<number | string>

type ToArray2<T> = T extends unknown ? T[] : T[]
type A2 = ToArray2<number>
type B2 = ToArray2<number | string>

type Without<T, U> = T extends U ? never: T
type AW = Without<boolean | number | string, boolean>
export default '';

type ElementType<T> = T extends unknown[] ? T[number] : T
type AE = ElementType<number>

type ElementType2<T> = T extends (infer U)[] ? U : T
type BE = ElementType2<number[]>

type ElementUgly<T, U> = T extends U[] ? U : T
type C = ElementUgly<number[], number>

type SecondArg<F> = F extends (a: any, b: infer B) => any ? B : never 

type F = typeof Array['prototype']['slice']
type FA = SecondArg<F>

type EA = number | string
type EB = string
type Exc = Exclude<EA, EB>

type Ext = Extract<EA, EB>
type NA = {a?: number | null}
type NB = NonNullable<NA['a']>
type FR = (a: number) => string
type R = ReturnType<FR>


type IA = {new(): IB}
type IB = {b: number}
type I = InstanceType<IA>

