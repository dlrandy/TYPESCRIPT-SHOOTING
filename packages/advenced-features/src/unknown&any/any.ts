/**
 * any 容易导致runtime error，因为它取消了类型检查
 * 
 * unknown会应用逻辑类型检查或者强转来进行使用。在不清楚具体的type structure的时候
 * 最为有用
 */

const halloweenCostumeIdeas: any = ['a', 'b', 'c', 'd', 'e', 'f'];
halloweenCostumeIdeas.indexOf('a');
halloweenCostumeIdeas.a.b.c.d;
halloweenCostumeIdeas();

function randomCostume(ideas: string[]) {
  return ideas[Math.floor(Math.random() * ideas.length)];
}

randomCostume(halloweenCostumeIdeas);








