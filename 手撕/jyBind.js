Function.prototype.jyBind = function(obj, ...args) {
  let fn = this 
  if(typeof fn !== 'function') return 
  return function() {
    return fn.call(obj, ...args) 
  }
} 

function foo(a, b, c, d) {
  console.log("这是我的this...", this) 
  console.log(a + b + c + d) 
}


let x = {'d': 123, 'c': 122} 


let bar = foo.jyBind(x, 1, 2, 3, 4) 

console.log(bar) 

console.log(bar())