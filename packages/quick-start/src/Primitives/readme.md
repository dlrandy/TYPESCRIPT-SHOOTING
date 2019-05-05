javascript有限的基本类型只能通过变量的赋值来推导出type。

因为js变量后续被赋予了不同类型的值就会导致js程序变得复杂。

typescript强化了type的不可变性，支持隐式类型和显示类型。

为什么使用TS？
1、可以减少因为value的类型不当导致的程序执行错误
2、书写代码的时候，有code提示

### var let const
首先它们都是用来在函数和全局作用域里定义变量的；
TS里在class 级别还可以使用public private protected;

var的主要问题在于它是声明在execution context的，意味着要么在函数作用域，要么在全局作用域。
如果没有var在，那么就会声明在全局作用域里，但是严格模式下这样会报错。
var 有hoisting，会在code执行之前，把变量提升至作用域的顶端，但是只是声明提升，不初始化。
如果存在和变量名一样的函数声明，函数会被覆盖。
也就是说变量名可以在声明之前使用，但是TS是不允许这样的。
var变量的重复声明会覆盖之前的声明和初始化。

let是基于块作用域的，也就是花括号，每个scope里只能声明一次，不会提升变量。

const和let类似，只不过声明的时候，必须初始化，且不能被赋予新的value。

###使用TS强化primitives
primitives：number string boolean null undefined symbol;

###Number
转换的方法： Number(val), +, pareseInt();
ts支持数字分隔符

### String
'' "" ``

###Boolean
```javascript
let boolean1: boolean = 'true' as any as boolean;
//虽然通过compile，但是boolean1仍然是字符串
```

###Null
TS里启用了严格检查null是为了提示在使用前一定要检查null。
null只能被分配给null类型或者any类型，为了接受null，通常要使用
联合类型

###Undefined
和null类似。一般可选的参数是undefined。
undefined一般只能分配给undefined类型，可选类型， any。为了接受
undefined也需要使用联合类型

###Symbol
允许创建唯一值。Symbol不会相等。一般还可以用作自定义迭代器和修改某些行为例如instanceof

##Non Primitive
void， string literal， tuple， any， unknown， never

###Void
void主要用于没有返回值的函数。void变量只能被赋予undefined。

###避免使用any类型的原因
1、使用any的变量，无法确认其类型，实际上TS编译器取消了该变量的类型检查

使用any的两种情况
1、从js升级到ts，但是这要求后期补清详细类型的
2、类型的适配比较高级，超出了你的能力

###Never
never是一个不该设置的变量，保证特定的path不会发生。返回never的函数表明函数不会正常结束，一般是指
throw error的情况。never一般在某些条件不可能发生的时候，ts认为你的变量是never的.
实践中never用来检查enum或者union的所有value是否有条件照顾到。
```javascript
function exhaustiveCheck(x: never):never{
  throw new Error('should not run here');
}
```

###Unknown
是一个严格的any类型。目的是为了减少any的使用。当一个变量是unknown的时候，它可以被赋予所有其他的类型值。但是unknown
的值只能是unknown或者any。
unknown的几个规则：
1、只能用于等于操作符，其他操作符不编译
2、返回unknown的函数不要求返回任何东西
3、unknown类型的交叉都是其他的类型，但是和union连用的时候，它会覆盖其他的类型
4、unknown类型的key总是never

unknown用在不知道类型的情况下，unknown因为只能传给unknown或者any，所以需要开发者
进一步限定变量的类型，才能通过编译。
```javascript
function f1(x: any): string { return x;
}
function f2(x: unknown): string {
  let y = x as string;
  return y;  

```

###强化列表类型
首先说明创建数组的两种方式：
```javascript
let a: number[] = [1];
let b : Array<string> = ['sdf'];
```
说一下forEach这个数组方法会跳过deleted或者未初始化的

###使用enum定义一组常量
它是一组值但是一次只能使用一个。他就是key能拿到value，value也能拿到key，这是在
value是数字的情况下。否则只能拿到value，不能拿到key
注意它的key和value。enum只支持string number 和bitwise 。持久化已经存在的值
使用|= ，移除一个特定的状态使用&= ~。


当一个value可以持有多个其他的值的时候，考虑使用bitwise。


### string literal
它声明的类型就是他的value
```javascript
let y: 'jj';
y = 'jj';
```

###TYped function
函数可以有补充签名。也就是函数重载的概念，从上到下，有特殊到复杂。
函数可以匿名也可以是Function。

### 在不指名类型的情况下，如何去强化类型？
隐式推断的，是根据初始化的value来决定

###index signature 强类型set、dictionary
array， set，dictionary多用于快速访问。index signature若key是string的时候
可以接收string和number，反过来number是key，则不能接收string。

对象和index signature的区别是对象类型，实体只能有定义的key。
当index signature和有其他成员的对象一起存在的情况下，只能是唯一
一个返回string的string成员。所以这种情况情况，大多数是number为key。

Map
实际上是一个矩阵


index signature VS  Map
Object：
1、object(index signature)直接兼容json, map需要手动映射
2、object适合小中型的数据集合
Map：
1、适合增删操作，因为底层是hashing算法
2、会保留元素添加的顺序
3、map适合大量的数据
4、map的key不局限于number和string


Object类型带有一些额外函数，它基本上是所有类型都可以

object类型是Object的子集，必须是除了基本类型意外的类型


###什么时候使用object Object， any
避免使用object Object和any。应该使用更细致的类型，除非在联合类型不适合的情况下使用

### 什么是object literal
是使用花括号创建的一个对象。可以使用type和interface来定义。它是继承于Object的。

object literal既是object又是Object

具有同样结构的object类型是可以互换的，因为ts是结构化的语言。

###强制转换和显示类型的区别
强制转换一般不用来声明类型， 强转一般可以通过后面添加as或者前置<>来实现。强转会使得当前对象即使不具备
对应的结构，然后会按照正常结构来执行。

###联合类型

### &合并类型
intersection多用于合并type和interface，以及class，一般不会和基本类型合并，因为无意义，基本类型只能是一个。
合并的时候，对于同一个key类型一个是可选一个必选的情况，则该key是必选的

### 使用继承来合并类型

### Type VS interface
interface可以扩展，type只能是覆盖

class可以实现type或者接口，
A class can only implement an object type or intersection of object types with statically known members.

Type多用来创建基本类型的联合以及合并对象字面量等

解构类型和解构数组

Tuple

declare VS let/const/var
使用declare不会再编译时候不会生成js code，不是声明module的情况下，必须要和let const var 连用。它只是表明
变量存在于其他地方，是存在的。

构造器和函数相似，可以重载 但是不能覆盖，只能有单独的一个实际的构造器。

###OOP
TS 里没有静态类。如果想要所有的静态成员在一个类里且不需要用户实例化，可以使用抽象类。

抽象类在没有被继承的情况下是不能被实例化的

###非公共构造器的使用情况
private的constructor取消了从外面实例化class的可能。一般是要在类的静态方法里进行实例化的

###class生成的对象 VS 对象字面量
1、对象字面量可以快速构建，不需要传递数据给构造器或者公共成员来填充对象。
2、一般有很多函数和复杂逻辑的时候，class更适合


###class VS Interface
interface可以定义那些成员可以被访问，那些是类可以实现的。TS里想单侧私有方法，可以强转成any来访问它的私有属性。
但是正常情况下是要用interface来持有可被访问的类型的。不传递实现接口的类，而是直接传接口。

interface也特别适合一种类型有多种实现的情况。

































