// 手写new，new的基本流程： 
// (1) 创建一个对象 
// (2) 将构造函数的显示原型复制给当前对象的隐式原型 
// (3) 赋值this
// (4) 返回这个对象 
function Mynew(class_name, ...args){
  let obj = Object.create(class_name.prototype) 
  let result = class_name.apply(obj, args) 
  console.log("debug...", result)
  return result instanceof Object ? result : obj 
}


function Person(name, age) {
  this.name = name 
  this.age = age 
}

const obj = Mynew(Person, '李华', 18)


console.log(obj.name, obj.age) 
