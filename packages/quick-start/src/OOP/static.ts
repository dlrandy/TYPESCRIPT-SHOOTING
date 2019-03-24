namespace staticNameSpace {
  abstract class  FakeStaticClass {
    public static m1: number;
    public static f1():void{}
  }

  console.log(FakeStaticClass.m1);
  // const inst = new FakeStaticClass();


  class StaticClass1 {
   public static ps: number;
   private static privateStatic: number;
   protected static protectedStatic: number;
  }

  StaticClass1.ps  = 1;
 console.log("StaticClass1.ps ", StaticClass1.ps);

 class StaticClass {
   public static ps: number;
   private static privateStatic: number;
   protected static protectedStatic: number;

   public nonStaticFunction(): void{
     StaticClass.ps;
     StaticClass.privateStatic;
     StaticClass.protectedStatic;
   }
 }








}