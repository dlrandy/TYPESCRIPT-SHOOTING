interface IEmail {
    from: string;
    to: string[];
    body: string;
}
interface ITodo {
    isCompleted: boolean;
    text: string;
    linkedEmail: IEmail;
}
interface IRootState {
    userId: string;
    showCompletedOnly: boolean;
    todoTypes: string[];
    todos: ITodo[];
    iconGrid: string[][];
}
declare type DeepReadonlyObject<T> = {
    readonly [K in keyof T]: DeepReadonly<T[K]>;
};
declare type DeepReadonly<T> = T extends (infer E)[][] ? ReadonlyArray<ReadonlyArray<DeepReadonlyObject<E>>> : T extends (infer E)[] ? ReadonlyArray<DeepReadonlyObject<E>> : T extends object ? DeepReadonlyObject<T> : T;
declare type IReadonlyRootState = DeepReadonly<IRootState>;
declare let state: IReadonlyRootState;
