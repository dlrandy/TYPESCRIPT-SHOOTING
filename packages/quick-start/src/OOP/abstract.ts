namespace abstractPattern {
  abstract class MainClass {
    constructor() {}
    /**
     * mainCoreLogic
     */
    public mainCoreLogic(): void {
      //code A
      this.delegatedLogic();
      //code B
    }
    public abstract delegatedLogic(): void;
  }
  class CustomLogic extends MainClass {
    public delegatedLogic(): void {
      throw new Error("Method not implemented.");
    }
    constructor() {
      super();
    }
  }

  const c: MainClass = new CustomLogic();
  c.mainCoreLogic();

  abstract class Calculous {
    constructor() {}
    /**
     * isAboveZero
     */
    public isAboveZero(a: number, b: number): boolean {
      const positiveA = Math.abs(a);
      const positiveB = Math.abs(b);
      const result = this.delegatedLogic(positiveA, positiveB);
      return result > 0;
    }
    public abstract delegatedLogic(a: number, b: number): number;
  }

  class AddLogic extends Calculous {
    public delegatedLogic(a: number, b: number): number {
      return a * b;
    }
    constructor() {
      super();
    }
  }

  const multi: Calculous = new AddLogic();
  const boolean = multi.isAboveZero(1, 2);
  console.log("boolean ", boolean);

  class CalculusWithoutAbstrct {
    constructor(private delegatedLogic: (a: number, b: number) => number) {}
    /**
     * name
     */
    public isAboveZero(a: number, b: number): boolean {
      const positiveA = Math.abs(a);
      const positiveB = Math.abs(b);
      const result = this.delegatedLogic(positiveA, positiveB);
      return result > 0;
    }
  }

  const multi2: CalculusWithoutAbstrct = new CalculusWithoutAbstrct(
    (a, b) => a * b
  );
  const boolean2 = multi2.isAboveZero(1, 2);
  console.log("boolean2 ", boolean2);
}
