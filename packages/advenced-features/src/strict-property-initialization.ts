/*
使用严格的属性初始化使得TS Class的使用更安全
需要在.tsconfig里设置strictPropertyInitialization

*/
export default class StrictInit {
  titles!: string[];//! tell TS that this property will be initialized
  address: string = 'hello';
  isPublic: boolean;
  constructor() {
    this.isPublic = true;
  }
};

const lib = new StrictInit();
const shortTitles = lib.titles.filter(title => title.length < 5);