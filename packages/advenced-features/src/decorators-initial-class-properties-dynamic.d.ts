declare const fetchh: any;
interface ITodo {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
}
declare class TodoService {
    todos: Promise<ITodo[]>;
    test(): void;
}
declare const todoService: TodoService;
declare const todoService1: TodoService;
declare const todoService2: TodoService;
