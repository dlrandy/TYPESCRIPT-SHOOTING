var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
const fetchh = require("node-fetch");
class TodoService {
    test() {
    }
}
__decorate([
    First(),
    Get("https://jsonplaceholder.typicode.com/todos"),
    __metadata("design:type", Promise)
], TodoService.prototype, "todos", void 0);
function Get(url) {
    console.log("Get ");
    return function GetTodos(target, name) {
        console.log("name ", name);
        console.log("target ", typeof target, target);
        console.log(target, target === TodoService.prototype);
        const hiddenInstanceKey = "_$$" + name + "$$_";
        const init = () => {
            return fetchh(url).then(response => response.json());
        };
        Object.defineProperty(target, name, {
            get: function () {
                return this[hiddenInstanceKey] || (this[hiddenInstanceKey] = init());
            },
            configurable: true
        });
    };
}
function First() {
    console.log("First ");
    return function (target, name) {
        const hiddenInstanceKey = '_$$' + name + '$$_';
        const prevInit = Object.getOwnPropertyDescriptor(target, name).get;
        const init = () => {
            return prevInit && prevInit().then(response => response[0]);
        };
        Object.defineProperty(target, name, {
            get: function () {
                return this[hiddenInstanceKey] || (this[hiddenInstanceKey] = init());
            },
            configurable: true
        });
    };
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
//# sourceMappingURL=decorators-initial-class-properties-dynamic.js.map