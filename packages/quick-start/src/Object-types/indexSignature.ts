namespace indexSignature {
  interface Person {
    [id: string]: string;
  }

  const c: Person = {
    test: 'compile',
    123: 'compile too'
  }
  console.log(c[123]);

  interface NotAPerson {
    [id: number]: string;
  }
  // 	const c2: NotAPerson = {
	// 	"test": "compile",
	// 	123: "compile too"
  // };
  interface NotIndexSignatureObject{
    name: string;
    count: number;
  }
  const obj: NotIndexSignatureObject= {
    name: 'my name',
    count: 123
  };
  console.log(obj["doesNotExist"]); 
  console.log(obj['name']);


// interface ObjWithMembersAndIndexSignature {
//   name: string;
//   count: number;
//   when: Date;
//   [id: string]: string;
// }

interface ObjWithMembersAndIndexSignature {
  name: string;
  count: string;
  123: string;
  when: string;
  [id: string]: string;
}

interface ObjWithMembersAndIndexSignature2 {
  name: string;
  count: number;
  when: Date;
  [id: number]: string;
}

	interface ObjWithMembersAndIndexSignature3 {
		name: string;
		count: number;
		when: Date;
		obj: { s: string }; 
		[id: number]: string;
  }
  
  const obj2: ObjWithMembersAndIndexSignature2 = {
    	name: "My Name",
    	count: 123,
    	when: new Date(),
    	// "more": "nooo" // DOES NOT COMPILE
    };

    const obj3: ObjWithMembersAndIndexSignature2 = {
      name: "My Name",
      count: 123,
      when: new Date(),
      12: "string only" // Good if number->string
    };
    console.log(obj3[12]); // prints stirng only

    interface ObjWithMembersAndIndexSignature4{
      name: string;
      count: number;
      when: Date;
      [id: string]: string|number|Date;
    }

    interface MyMap<T> {
      [index: string]: T;
    }

    interface YourBusinessLogicObject {
      oneProp: string;
      secondProp: number;
      thirdProp: Date;
      yourDict: MyMap<string>;
    }
    let map = new Map([["key1", "value1"], ["key2", "value2"]]);
    let value1: string | undefined = map.get("key1");
    let value2: string | undefined = map.get("key3");

    console.log(value1); // prints value1
    console.log(value2); 

    let map2 = new Map(); // Key any, value any
    let map3 = new Map<string, number>(); // Key string, value number
    map.set("key3", "value3");
	map.has("key1");
	map.delete("key1"); // Similar to delete obj.key1 (index signature)

	console.log(map.get("key3")); // prints value3
	console.log(map.get("key1")); // prints undefined









}






