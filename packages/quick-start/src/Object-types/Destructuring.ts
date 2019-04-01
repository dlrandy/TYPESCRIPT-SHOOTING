namespace Destructuring {
  interface MyObject {
    id: number;
    time: number;
    name: string;
    startTime: Date;
    stopTime: Date;
    category: string;
  }

  const obj: MyObject = {
    id: 1,
    time: 100,
    name: "MyName",
    startTime: new Date(),
    stopTime: new Date(),
    category: "Cat5"
  };

  const {
    id,
    name,
    category,
    ...remainMembers
  } = obj;
  console.log(remainMembers.startTime);
  console.log(remainMembers.stopTime);
  console.log(remainMembers.time);

  const values = [1,2,3,4,5,6,7,8,9];
  const [v1, v2, ...v3to9] = values;
  console.log(v1);
  console.log(v2);
  console.log(v3to9);
  const [_v1,,_v3, ..._v4to9] = values;
  console.log(_v1);
  console.log(_v3);
  console.log(_v4to9);

}