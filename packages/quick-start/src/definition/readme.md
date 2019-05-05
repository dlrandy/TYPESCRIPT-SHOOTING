 扩展已经存在的module
思想就是使用declare和需要扩展的module的name。因为一个系统可以有多个同一module的declaration，
所以就可以增加可导出的type, function, interface, class.

同名的namespace， interface都是可以合并的。

一个interface 名字可以强化同名的class

命名空间和函数同名的时候，可以定义函数变量

对于类似jquery的全局库，它是往window上添加新对象的，可以使用declare function,

