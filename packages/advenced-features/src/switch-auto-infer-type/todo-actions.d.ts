export interface Action {
    type: string;
    payload?: any;
}
export declare class Add implements Action {
    payload: string;
    readonly type = "Add";
    constructor(payload: string);
}
export declare class RemoveAll implements Action {
    readonly type = "Remove All";
}
export declare class RemoveOne implements Action {
    payload: number;
    readonly type = "Remove One";
    constructor(payload: number);
}
export declare type TodoActions = Add | RemoveAll | RemoveOne;
