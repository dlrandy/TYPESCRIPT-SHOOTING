
interface TypeA {
  a: string;
  b: string;
}
interface TypeB {
  b: string;
  c: string;
}
type TypeC = TypeA & TypeB;
const m: TypeC = {
  a: "A",
  b: "B",
  c: "C",
};

console.log(m); // prints { a: 'A', b: 'B', c: 'C' }