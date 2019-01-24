const fetchh = require("node-fetch");

interface ITodo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

class TodoService {
  @Get("https://jsonplaceholder.typicode.com/todos")
  todos!: Promise<ITodo[]>;
}

// function GetTodos(target: any, name: string) {
//   console.log("name ", name);
//   console.log("target ", typeof target);
//   const hiddenInstanceKey = "_$$" + name + "$$_";
//   const init = () => {
//     return fetchh("https://jsonplaceholder.typicode.com/todos").then(response =>
//       response.json()
//     );
//   };
//   Object.defineProperty(target, name, {
//     get: function() {
//       return this[hiddenInstanceKey] || (this[hiddenInstanceKey] = init());
//     }
//   });
// }
function Get(url:string) {
  return function GetTodos(target: any, name: string) {
    console.log("name ", name);
    console.log("target ", typeof target, target );//new target()
    const hiddenInstanceKey = "_$$" + name + "$$_";
    const init = () => {
      return fetchh(url).then(response =>
        response.json()
      );
    };
    Object.defineProperty(target, name, {
      get: function() {
        return this[hiddenInstanceKey] || (this[hiddenInstanceKey] = init());
      }
    });
  }

}

function First() {
  return function (target:any, name: string) {
    const hiddenInstanceKey = '_$$' + name + '$$_';
    const prevInit = (<PropertyDescriptor>Object.getOwnPropertyDescriptor(target, name)).get;
    const init = () => {
      return prevInit && prevInit().then(response => response[0]);
    };
    Object.defineProperty(target, name, {
      get: function() {
        return this[hiddenInstanceKey] || (this[hiddenInstanceKey] = init());
      },
      configurable: true
    });
  }
}


const todoService = new TodoService();
todoService.todos.then(todos => console.log('sdfdsf'));

const todoService1 = new TodoService();
todoService1.todos.then(todos => {
  console.log('dddd');
});
const todoService2 = new TodoService();
todoService2.todos.then(todos => {
  console.log('aaaa');
});

console.log(TodoService)
