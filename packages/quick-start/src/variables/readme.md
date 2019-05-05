TS 在设计的时候带来类型，编译的时候移除类型

typeof 要么返回基本类型要么返回object

它可以用来判断联合类型，或者声明一个类型

typeof undefined等于undefined，null等于Object。
所以不要用typeof来判断undefined和null，这两个类型直接比较就好。

对于联合类型，TS可以使用控制流根据代码的书写方式找到类型


instanceof 的局限在于只能用在有原型链的类型上


TS是结构化语言，不像java是nominal 语言。也就是说TS不一样类型的名字来判断类型

discriminator是不同的类型之间可以共享名字的成员.对象字面量的使用
一般叫做literal type guard或者tagged union
。
使用discriminator不适用于继承或者intersection，因为他要求
discriminator一致

用户定义的守卫模式

any 是任何类型的子类型
type assersion用在你知道不为kong，TS认为可能是kong的情况

class的比较
class不同于interface，types或者基本类型。它有原型链，遵循不同的规则。
如果两个类具有相同的结构，它们是可以互换的



