export default 'xx'
type Weekday = 'Mon' | 'Tue' | 'Wed' | 'Thu' | 'Fri'
type Day =  Weekday | 'Sat' | 'Sun'

function getNextDay(w:Weekday): Day {
  switch (w) {
    case 'Mon':
      return  'Mon'
      break;
  
    default:
      break;
  }
  // return 'Sat'
}

function isBig(n:number) {
  if (n >= 100) {
    return true
  }
}

let nextDay: Record<Weekday, Day> = {
  Mon: 'Tue',
  Tue: 'Wed',
  Wed:'Thu',
  Thu:'Fri',
  Fri: 'Sat'
}

let nextDayy: {[K in Weekday]: Day}={
  Mon: 'Tue',
  Tue: 'Wed', Wed: 'Thu', Thu: 'Fri', Fri: 'Sun'
}

type UnionType = 'xx' | 'ww' | 'qq'
type ValueType = '11' | '22' | '33'
type MyMappedType = {
  [Key in UnionType]: ValueType
}
type TT = {'s': 's', 'd' : 'd'}
type PP = keyof TT
type RRecord<K extends keyof any, T> = {
  [P in K]: T
}


type Account = {
  id: number
  isEmployee: boolean
  notes: string[]
}

type OptionalAccount = {
  [K in keyof Account]?: Account[K]
}

type NullableAccount = {
  [K in keyof Account]: Account[K] | null
}

type ReadonlyAccount = {
 readonly [K in keyof Account]: Account[K]
}

type Account2 = {
  -readonly[K in keyof ReadonlyAccount] : Account[K]
}

type Account3 = {
  [K in keyof OptionalAccount] -? :Account[K]
}












