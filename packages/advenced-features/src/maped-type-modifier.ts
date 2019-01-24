interface IPeet {
  name: string;
  age: number;
  favoritePark?: string;
}

type ReadonlyPet = {
  //加上readonly移除可选符号就变成了必须的;
  +readonly [K in keyof IPeet]-?: IPeet[K] | number;
}

const pet:IPeet = {
  name: 'buttons',
  age: 5
};

const readonlyPet: ReadonlyPet = {
  name: 'buttons',
  age: 5,
  favoritePark: 3//number
}
pet.age = 6;
// readonlyPet.age = 6;
// readonlyPet.favoritePark= '345';