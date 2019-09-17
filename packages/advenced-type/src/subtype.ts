import { userInfo } from "os";

type ExistingUser = {
  id: number;
  name: string;
}
type NewUser = {
  name: string;
}

function deleteUser(User:{id?: number, name: string}) {
  delete User.id
}

let existingUser: ExistingUser = {
  id: 123456,
  name: 'ima user'
}
deleteUser(existingUser);
deleteUser(existingUser)
existingUser.id


type LegacyUser = {
  id?: number | string,
  name: string
}

let legacyUser:LegacyUser = {
  id: '79331',
  name: 'eric'
}

deleteUser(legacyUser)

class Animal {
  constructor() {
    
  }
}

class Bird extends Animal {
  constructor() {
    super()
  }

  chirp(){}

}

class Crow extends Bird {
  constructor() {
    super()
  }
  caw(){}
}


function chirp(bird:Bird):Bird {
  bird.chirp()
  return bird
}

chirp(new Animal())

chirp(new Bird)

chirp(new Crow)

function clone(f:(b: Bird) => Bird):void {
  let parent = new Bird
  let babyBird = f(parent)
  babyBird.chirp()
}

function birdToBird(b:Bird):Bird {
  return new Bird
}

clone(birdToBird)

function birdToCrow(d:Bird): Crow {
  return new Crow
}

clone(birdToCrow)

function birdToAnimal(d:Bird):Animal {
  return new Animal
}

clone(birdToAnimal)

function animalToBird(a:Animal) :Bird{
  return new Bird
}

clone(animalToBird)

function crowToBird(c:Crow):Bird {
  c.caw()
  return new Bird
}

clone(crowToBird)









