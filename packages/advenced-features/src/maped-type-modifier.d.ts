interface IPeet {
    name: string;
    age: number;
    favoritePark?: string;
}
declare type ReadonlyPet = {
    +readonly [K in keyof IPeet]-?: IPeet[K] | number;
};
declare const pet: IPeet;
declare const readonlyPet: ReadonlyPet;
