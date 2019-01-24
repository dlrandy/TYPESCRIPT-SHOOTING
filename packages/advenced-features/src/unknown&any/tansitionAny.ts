const human = { name: "john", age: 12 };

function printAge(human: any) {
  console.log(human.age);
}

printAge(human);

(function() {
  interface IHuman {
    name: string;
    age: number;
  }

  const human: IHuman = { name: "john", age: 12 };
  function printAge(human: IHuman) {
    console.log("human ", human.age);
  }

  printAge(human);
})();
