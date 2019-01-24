interface IPet {
  pose(): void;
}
interface IFeline {
  nightvision: boolean;
}

type Cat = IPet & IFeline;
interface ICat extends IPet, IFeline {}

let cat:Cat;
let icat:ICat;








