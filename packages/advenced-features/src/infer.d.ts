declare const id: string;
declare type ReturnTypee<T> = T extends (...args: any[]) => infer R ? R : any;
declare type Id = ReturnTypee<typeof generatedId>;
declare type UnpackPromise<T> = T extends Promise<infer K>[] ? K : any;
declare const arr: Promise<boolean>[];
declare type ExpectedBoolean = UnpackPromise<typeof arr>;
