export default ''
class MyMap<K, V> {
  constructor(initialKey: K, initialValue: V) {
    
  }

  get(key: K):V{
    return 'a' as any as V
  }

  set(key: K, value: V){

  }

  merge<K1, V1>(map: MyMap<K1, V1>):MyMap<K | K1, V | V1>{
    return 1 as any
  }

  static of<V, K>(k:K, v:V):MyMap<V, K>{

  }
}

interface MMP<K, V> {
  get(key: K):V
  set(key: K, value: V): void
}


let a = new MyMap<string, number>('k', 1)
let b = new MyMap('k', true)

a.get('k')
b.set('k', false)

class User {
  constructor(parameters) {
    
  }
}

User.debug()

type ClassConstructor<T> = new(...args: any[]) => T

function withZDebug<C extends ClassConstructor<{getDebugValue():object}>>(Class:C){
  return class extends Class{
    constructor(...args: any[]) {
      super(...args);
      
    }
    
    debug() {
      let Name = Class.constructor.name
      let value = this.getDebugValue()
      return Name + '(' + JSON.stringify(value) +')'
      
      
    }
  }
}

class HardToDebugUser {
  constructor(private id: number,
  private firstName: string,
  private lastName: string) {
    
  }

  getDebugValue(){
    return {
      id: this.id,
      name: this.firstName + ' ' + this.lastName
    }
  }
}

let DUser = withZDebug(HardToDebugUser)
let user = new DUser(3, 'Emma', 'GluzMan')
user.debug()


