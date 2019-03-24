declare type eat = (food: string) => void;
declare type AnimalList = string[];
interface IEat {
    eat: (food: string) => void;
}
interface IAnimalList {
    [index: number]: string;
}
