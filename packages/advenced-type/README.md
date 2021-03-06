类型系统不仅有表达性，还要易于使用，使得类型的限制和关联简单，
简洁且可推导

subtype vs super type
比如有两个类型A，B，B是A的子类型，也就是B包含于A，那么任何能用A的地方，都可以安全的
使用B。

any是任何类型的超类；never是任何类型的子类。

泛型如何判断子类型？
对象如何判断子类型？
函数如何判断子类型？

A>:B A是B的超类或者同类；
A<:B A是B的子类或者同类。

子类型规则在复杂的类型上表现的不一致

typescript 不是设计来绝对安全的，它的类型系统是要在捕获实际的错误和易于使用之间
到达一个平衡。所以ts允许父类所在的地方可以放上子类

typescript的行为：对于一个shape(对象、类)，可以传递一个类型--属性类型<:期待的类型，
也就是期待类型的子类型，而不能是超类型

如果对象A可以分配给对象B，那么A的属性类型必须<:(小于等于)B对应类型


在typescript里，每一个复杂类型的成员都是<:----objects,class,arrays以及函数的返回值；
但是例外的是函数的参数>:的。

函数A是函数B的子类型的条件是：
1，A有同等数量或者更少数量的参数
2，A的this的类型要么不指定，要么大于等于>:B的this类型
3，A的每个参数>:B对应的参数(需要启用严格函数类型)
4，A的返回类型<:B的返回类型

子类型的位置不能放置父类型


assignability 是指能够使用typescript的规则在需要type B的地方使用type A

对于non-enum类型，A可以分配给B的情况只需要下面一种条件：
1,A <: B
2,A 是any
对于enum，const enum需要下面任意一种：
1，A是 enum B的成员
2，B至少有一个数字成员，而A是数字

类型扩展
对于可变的类型(let, var, const类型的对象)，它可以从字面量扩展到基本类型
显示的类型声明可以阻止类型被扩展

使用let或者var重新接收非扩展类型的时候，typescript会自动的扩展到基本类型；
还是显示声明最初的非扩展类型的类型，防止typescript进行扩展

初始化为null或者undefined的变量会被扩展为any,但是这只作用于它的作用域，离开了
作用域将会根据value确定类型。当然显示设置了类型的话还是显示设置的类型

const会使得类型退出扩展而且递归的标记它的成员为readonly，即便是深度内嵌的数据结构

使用 as  const 让typescript尽可能细化类型

excess property check（过多属性检查）
指的是一个新的对象字面量类型 T 分配给了另一个类型 U，T 有U没有的属性，那么typescript会报错
这里的新是指没有指明类型，没有进行类型验证，也没有赋值给变量，所以typescript会进行类型推导。

typescript执行的是基于流的类型推导，它是标识执行，类型检查器使用控制流语句像
if，？，||，和switch，还有typeof instanceof in来改善类型


typescript 通过类型检查和推导原则来读写你的code

union类型最好使用taged union类型，也就是能唯一区分union类型

对象类型的类型操作符：
1， |
2， &
3，keyin 只能使用【】的形式访问类型，对于数组直接使用number，元组使用0，1来代表索引
4，keyof 获得所有对象的key作为一个union类型

组合keyin和keyof，可以实现类型安全的getter函数来获取对象中给定的key'的value

在JavaScript里，objects和arrays都可以有string和Symbol的keys。通常数组的情况是number keys，
但是运行时会转换成string。所以typescript的keyof返回的是number|string|symbol

Record是一个对象，代表的是一个对象到另一个对象的映射；
第二种映射关系的类型是mapped type

type 系统里面- + ，+ 一般是隐式的比如 readonly === + readonly


内置的mapped 类型：
Record<keys, values>
Partial<Object>
Required<Object>
Readonly<Object>
Pick<Object, keys>

陪伴对象模式
将同名字的对象和类型放在一起
为什么可以这样？
是因为typescript里types和values是在不同的命名空间的

如果出现了太多的类型assertion那么代码就是有问题的了

用户定义的类型保护

条件类型
分布式条件类型（线性法则）
在使用条件类型和union的时候，typescript会分配union 类型到不同的条件分支，
就像是接收条件类型和映射它到union里的每个元素

infer
条件类型可以声明泛型作为条件的一部分，需要使用infer来声明条件类型的泛型

unknown vs any ?????

内置的条件类型
Exclude<T, U>
Extract<T, U>
NonNullable<T>
ReturnType<F
InstanceType<C>

对于A<:B<:C,可以使用Assertion将类型转换为父类或者子类。
type assertion应该尽可能少的使用

非空验证
赋值验证

typescript 不自带nominal 类型，但是可以使用type  Branding来模拟名义类型



class  and  interface
JavaScript和typescript共有的特性会编译成JavaScript，typescript特有的只存在于
compile time。

abstract 类有一些抽象的属性和一些抽象的方法

类的属性和方法可以是private, protected,public的，属性可以在构造器的参数上
进行声明或者作为属性初始化，可以在声明的时候标记为只读的

super的两种调用形式：
1，方法调用，super.method(),这种只能是方法不能是属性
2,构造器调用 super()

this作为返回类型
在处理类的时候，this 类型可以用作注解method的返回类型.它指向当前类的实例。

interface 可以extend任何shape：type，class，interface


interface  VS type
1，type的右边可以是表达式；interface则必须是shape
2，在继承接口的时候，typescript会确保被继承的interface可以分配给extension
3，多个同名的interface会合并，但是type则会报错

声明合并，同名的声明合并(命名空间， enum，interface)。interface的情况要求
属性的声明类型必须一致。

implements
限制类尽可能正确的实现

interface 可以声明实例的属性，但是不能声明可见性修饰符(private public protected),
而且也不能使用static，但是可以标记属性为readonly

interface VS 抽象类
interface更通用轻量；抽象类更专用特性更丰富。

interface可以model：object, array, function, class, class instance；
不会生成代码

abstract class只能model class；可以由构造器，提供默认的实现，给属性和方法设置
访问修饰符

当一个实现由多个class共享的时候，使用abstract class；
当要class是这个interface的时候，使用interface

class是结构化类型的
;class兼容同样shape的其他类型；如果一个class有private、protected的fields时候，如果一个shape
不是该类的实例或者子类的话，这个shape是不能赋值给class的

class声明values和types


typescript的类型和values是独立命名空间的

class和enum比较特殊，直接生成type和value

想函数和类型一样，class和interface支持泛型类型参数，限制泛型域到整个class，、
interface或者特定的方法

类作用域的泛型可用在实例的方法和属性以及构造方法上；
构造方法不能声明泛型；
实例方法也可以有自己的泛型；
静态方法不能访问类的泛型；

mixin
主要是用来模拟多继承的，特别是在描述can和has-a关系的时候，而不是is-a。
是一种将行为和属性混入到class里的一种模式
mixin可以有state；
只能提供实际的方法；
可以有构造器，调用的顺序和混入的顺序一致；

Decorastors是对class， class methods，properties，method parameters进行元数据编程；
是一种对修饰的的东西调用一个函数

decorator不会改变被修饰对象的shape---不会增加或者移除方法和属性；
在编译的时候typescript的decorator会检查返回的class是否可以分配给传递过来的class

模拟finalclass
只需要时候private constructor

设计模式
工厂模式：
创建同类型对象的方式，具体创建哪种对象由特定的工厂决定创建
builder 模式：
隔离对象的创建和对象的实际实现

typescript会将运行时异常移到编译时：从丰富的类型系统到强大的静态和标识符分析，以至于
不会产生误拼写的变量和空指针异常等

typescript里描述和处理错误的常见模式：
1，return null
2,throw exception
3,reeturn exception
4,Option 类型
































