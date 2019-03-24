interface IPet {
    pose(): void;
}
interface IFeline {
    nightvision: boolean;
}
declare type Cat = IPet & IFeline;
interface ICat extends IPet, IFeline {
}
declare let cat: Cat;
declare let icat: ICat;
