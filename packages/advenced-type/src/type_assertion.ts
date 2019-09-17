type Unit = 'cm' | 'px' | '%'

let units: Unit[] = ['cm', 'px', '%']

function parseUnit(value:string):Unit| null {
  for (let i = 0; i < units.length; i++) {
    const element = units[i];
    if (value.endsWith(element)) {
      return element
    }
  }

  return null
}

type Width = {
  unit: Unit,
  value: number
}

function parseWidth(width:number | string | null | undefined):Width | null {
  if (width == null) {
    return null
  }
  if (typeof width === 'number') {
    return {unit: 'px', value: width}
  }

  let unit = parseUnit(width)
  if (unit) {
    return {unit, value: parseFloat(width)}
  }

  return null
}


function formatInput(input:string) {
  
}

function getUserInput(): string|number {
  return '' 
}

let input = getUserInput()
formatInput(input as string)
formatInput(<string>input)

function addToList(list:string[], item: string) {
  
}

addToList('this is really,' as any, 'really unsafe')

type Dialog = {
  id?: string
}

function closeDialog(dialog:Dialog) {
  if (!dialog.id) {
    return
  }
  setTimeout(() => {
    removeFromDOM(
      dialog,
      document.getElementById(dialog.id!)!
    )
  }, 1000);
}

function removeFromDOM(dialog:Dialog, element:Element) {
  element.parentNode!.removeChild(element)
}


let userId!: string
function fetchUser() {
  userId = 'sdf'
}
fetchUser()
userId.toUpperCase()

// type CompanyID = string
// type OrderID = string
// type UserID = string

// type ID = CompanyID | OrderID | UserID

// function queryForUser(id:UserID) {
  
// }

// let id: CompanyID = 'sdfsdfs'
// queryForUser(id)


type CompanyID = string & {readonly brand: unique symbol}
type OrderID = string & {readonly brand: unique symbol}
type UserID = string & {readonly brand: unique symbol}

type ID = CompanyID | OrderID | UserID

function queryForUser(id:UserID) {
  
}

function CompanyID(id:string) {
  return id as CompanyID
}

function OrderID(id:string) {
  return id as OrderID
}

function UserID(id:string) {
  return id as UserID
}
let cid = CompanyID('sfsddsf')
let id = UserID('sdfsdfs')
queryForUser(id)
queryForUser(cid)

interface Array<T> {
  zip<U>(list: U[]):[T, U][]
}

Array.prototype.zip = function<T, U>(this:T[],
list: U[]):[T, U][] {
  return this.map((v, k) => [v, list[k]])
}
export default 'xx'

declare global {
  interface Array<T> {
    zip<U>(list: U[]):[T, U][]
  }
}









