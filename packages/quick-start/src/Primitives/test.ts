namespace hhdat  {
  function uppercaseObject(obj: Object): void { } function lowercaseObject(obj: object): void { } function anyObject(obj: any): void { }
  function objectLiteral(obj: {}): void { }
  uppercaseObject({ x: 1 }); lowercaseObject({ x: 1 }); anyObject({ x: 1 }); objectLiteral({ x: 1 });
}