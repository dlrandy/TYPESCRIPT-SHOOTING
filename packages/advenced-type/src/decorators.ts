export default ''
type Payload = object
type ClassConstructor<T> = new(...args: any[]) => T

function serializable<T extends ClassConstructor<{
  getValue(): Payload
}>>(Constructor: T) {
  return class extends Constructor{
    serialize(){
      return this.getValue().toString()
    }
  }
}

@serializable
class APIPayload {
  getValue(): Payload{
return {}
  }
}

let payload = new APIPayload
let serialized = payload.serialize()

// let AAPIPayload = serializable(
//   class AAPIPayload{
//     getValue():Paylaod{

//     }
//   }
// )

let DecoratedAPIPayload = serializable(APIPayload)

let ppayload = new DecoratedAPIPayload
ppayload.serialize()


class MessageQueue {
  private constructor(private messages: string[]) {
    
  }
  static create(messages: string[]){
    return new MessageQueue(messages)
  }
}

new MessageQueue
class BadQueue extends MessageQueue {
}

MessageQueue.create([])



