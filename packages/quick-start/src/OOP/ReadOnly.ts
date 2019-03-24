namespace ReadOnlyField {
  interface I1 {
    readonly id: string;
    name: string;
  }

  let i1: I1 = {
    id: '1',
    name: 'test'
  }
  // i1.id = '1233'

  class C1 {
    public readonly id: string = 'c1';
    constructor() {
      this.id = 'still change';
    }
    public f1():void {
      // this.id  = '1323'
    }
  }

  class C2 {
    public static readonly MY_CONST: string = 'sfsadf';
    /**
     * CodeHere
     */
    public CodeHere(): void {
      C2.MY_CONST;
    }
  }
}










