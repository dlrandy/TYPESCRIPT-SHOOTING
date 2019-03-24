const arr1 = ['foo', 'bar'];
const copy1 = arr1.sort();
console.log({arr1});
console.log({copy1}, arr1 === copy1);


const arr: ReadonlyArray<string> = ['foo', 'bar'];
const copy =  arr.slice().sort() //arr.sort();
console.log({arr});
console.log({copy}, arr === copy)

const foo = [1, 22, 3];
foo.sort((a, b) => {
/**
 * if a < b, return negtive num;
 * if a === b return 0;
 * if a > b return positive num
 */
return a - b;
});

console.log("foo ", foo);


const movies = [
  {
      name: "The Shawshank Redemtion",
      year: 1994
  },
  {
      name: "The Godfather",
      year: 1972
  },
  {
      name: "The Godfather: Part II",
      year: 1974
  },
  {
      name: "The Dark Knight",
      year: 2008
  }
]

movies.sort((a, b) => {

  if (a > b) {
    return 1;
  } else if (a === b) {
    return 0;
  } else {
    return -1;
  }
})
console.log("movies ", movies);




