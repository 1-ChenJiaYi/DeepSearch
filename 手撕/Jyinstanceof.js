// 判断class_name是否出现在obj的原型链上 
function Myinstanceof(obj, class_name) {
  let proto = Object.getPrototypeOf(obj) 
  const aim = class_name.prototype
  while(proto) {
    if(proto === aim) return true 
    proto = Object.getPrototypeOf(proto) 
  }
  return false 
}


const x = [] 

console.log(Myinstanceof(x, Number)) 

