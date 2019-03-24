function solve_buzz(){
  // for (let index = 1; index < 101; index++) {
  //   if (index % 3 === 0 && index % 5 === 0) {
  //     console.log('fizzbuzz');
  //   } else if(index % 3 === 0){
  //     console.log('fizz');
  //   } else if (index % 5 === 0) {
  //     console.log('buzz');
  //   } else {
  //     console.log(index);
  //   }
  // }

  // for (let index = 1; index < 101; index++) {
  //   const isFizz = index % 3 === 0;
  //   const isBuzz = index % 5 === 0;
  //   if (isFizz && isBuzz) {
  //     console.log('fizzbuzz');
  //   } else if(isFizz){
  //     console.log('fizz');
  //   } else if (isBuzz) {
  //     console.log('buzz');
  //   } else {
  //     console.log(index);
  //   }
  // }

  // for (let index = 1; index < 101; index++) {
  //   const isFizz = index % 3 === 0;
  //   const isBuzz = index % 5 === 0;
  //   let result;
  //   if (isFizz && isBuzz) {
  //     result = 'fizzbuzz';
  //   } else if(isFizz){
  //     result = 'fizz';
  //   } else if (isBuzz) {
  //     result = 'buzz';
  //   } else {
  //     result = index;
  //   }
  //   console.log(result);
  // }

  for (let index = 1; index < 101; index++) {
    const isFizz = index % 3 === 0;
    const isBuzz = index % 5 === 0;
    let result = isFizz && isBuzz ? 'fizzbuzz'
       : isFizz ? 'fizz'
       : isBuzz ? 'buzz' 
       : index;
    console.log(result);
  }
}

solve_buzz();


















