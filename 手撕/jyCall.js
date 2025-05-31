// function jyCall(obj, fn, ...args) {
//   if(!obj) return 
  
//   Object.defineProperty(obj, 'fn', {
//     value: fn, 
//     enumerable: false,
//     writable: true, 
//     configurable: true     
//   })

//   let res = obj.fn(...args)
//   // console.log(res)  

//   delete obj.fn 
//   return res 
// }

Function.prototype.jyCall = function(obj,
   ...args) {
    
  let fn = this 
  if(typeof fn !== 'function') return 
  
  if(typeof obj !== 'object' || !obj) return
  
  
  Object.defineProperty(obj, 'fn', {
    value: fn, 
    enumerable: false, 
    writable: false, 
    configurable: true, 
  }) 
  let res = obj.fn(...args) 
  
  delete obj.fn 

  return res 
}

function foo(a, b, c, d) {
  console.log("这是我的this...", this) 
  console.log(a + b + c + d) 
}


let x = {'d': 123, 'c': 122} 


foo.jyCall(x, 1, 2, 3, 4) 


// 测试： 
// console.log(jyCall({'foo': 'bob'}, 
//   function bar(a, b, c, d) {
//     return a + b + c + d 
//   }, 
//   1, 2, 3, 4 
// ))

