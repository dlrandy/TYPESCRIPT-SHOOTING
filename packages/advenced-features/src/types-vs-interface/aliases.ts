type eat = (food: string) => void;
type AnimalList = string[];

interface IEat {
  eat: (food: string) => void;
}
interface IAnimalList {//缺失了数组的方法，虽然看似数组
  [index: number]: string;
}











