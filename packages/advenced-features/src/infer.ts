function generatedId(seed: number) {
  return seed + '5';
}


const id: string = generatedId(10);


function lookupEntity(id: string) {
  
}

lookupEntity(generatedId(10));

type ReturnTypee<T> = T extends (...args: any[]) => infer R ? R : any;

type Id = ReturnTypee< typeof generatedId>;


type UnpackPromise<T> = T extends Promise<infer K>[] ? K:any;

const arr = [Promise.resolve(true)];

type ExpectedBoolean = UnpackPromise<typeof arr>;











