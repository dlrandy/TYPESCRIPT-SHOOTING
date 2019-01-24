# `advenced-features`

> TODO: description

## Usage

```
const advencedFeatures = require('advenced-features');

// TODO: DEMONSTRATE API
```

https://blog.logrocket.com/setting-up-a-monorepo-with-lerna-for-a-typescript-project-b6a81fe8e4f8


You can also use strict: true, which is a shorthand for enabling: noImplicitAny, noImplicitThis, alwaysStrict, strictBindCallApply, strictNullChecks, strictFunctionTypes, strictPropertyInitialization.

当Type和readonly连用的时候，修饰的是一个特殊的字符串，具有推导性
去掉readonly就是一个普通的字符串

联合识别和Enum都具有推导性

要想switch自动推导出（redux的action）类型，需要两种条件：
1、action的type不能是普通的string，应该是更确定的类型type(readonly type = 'xx',来标记属性的唯一)
2、需要一个有限的types 列表

使用可选的+符号和mapped type modifiers连用，可以创建更显示和可读的类型声明；使用-可以移除可选的声明

Type aliases 和 interface通常可以相互使用，到底是用哪个取决于可读性和一致性。
它们有同样的功能特点：和接口一样，types可以继承其他的types，而且也可以被class实现
或者被class继承。class和interface不能继承/实现联合类型

type aliases 多用于联合类型，起到复用的作用。interface用于传统的面向对象目的，用于特定的约定或者让类实现

types 和interfaces在很多方面是相似的，优于TS是结构化类型，所以有时候它俩类型的对象可以相互赋值

interface 和 type 可以相互继承， class可以实现types和interfaces

types和interfaces的最大不同就是types可以用于联合类型，但是interfaces不可以；同名的情况下，types会覆盖，interfaces
会合并。

type aliases 比 interface更简洁；对于type aliases，可以使用intersection 类型表示一些其他类型
的合并。

提供自定义的类型时，需要在同一个目录设置typings.d.ts，
作为lib的作者，一定要把public api标记为接口，而不是types，这样易于扩展。


TS里不能够实现联合类型，因为interfaces和class在声明的时候，类型必须是确定的/锁定的。

TS 里type alises可以使用generic来进行无限的动态的引用自身。


在使用conditional type的时候，可以访问infer关键字


decorator提供了强大高效且可读的抽象能力

所有的@decorator都是函数，基于修饰的对象的不同提供不同的参数

















