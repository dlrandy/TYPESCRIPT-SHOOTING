interface IComment {
  date: Date;
  message: string;
};

interface IDataService {
  getData(): unknown ;//any;
};

let service!: IDataService;
const res = service.getData();
// res.a.b.c.d;
if (typeof res === 'string') {
  console.log(res.toUpperCase());
} else if (isComment(res)) {
  res.date;
} else {
  const numbers = <number[]>res;
  numbers.indexOf(1);
}

function isComment(type: any): type is IComment {
  return (<IComment>type).message !== undefined;
}







