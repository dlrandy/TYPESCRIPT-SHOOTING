namespace InterfaceUseful {
  class ClassA {
    constructor() {
      
    }

    private subFunction1():void{};
    private subFunction2():void{};

    public mainFunction():void{
      this.subFunction1();
      this.subFunction2();
    }
  }

  interface IClassA {
    mainFunction():void;
  }

  class ClassA2 implements IClassA {
    mainFunction(): void {
      this.subFunction1();
      this.subFunction2();
    }
    /**
     * subFunction1
     */
    public subFunction1(): void {
      
    }

        /**
     * subFunction2
     */
    public subFunction2(): void {
      
    }

  }

  interface IElement {
    m1: string;
  }
  class E1 implements IElement {
    m1: string = 'E1-> m1';
    a: number = 1;
  }

  class E2 implements IElement {
    m1: string = '';
    b: boolean = true;

  }

  class ClassB {
   /**
    * consume
    */
   public consume(element: IElement): void {
     
   }
  }



}




