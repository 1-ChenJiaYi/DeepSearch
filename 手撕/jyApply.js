// function jyApply(obj, fn, ...args) {
//   if(!obj || !fn) return 
  
//   Object.defineProperty(obj, 'fn', {
//     value: fn, 
//     enumerable: false, 
//     writable: true, 
//     configurable: true 
//   }) 


//   let res = obj.fn(...args) 

//   delete obj.fn 

//   return res 
// }


Function.prototype.jyApply = function(obj, args) {
  
  let fn = this 
  if(typeof fn !== 'function') return 
  if(typeof obj !== 'object') return 

  Object.defineProperty(
    obj, 'fn', 
    {
      value: fn, 
      configurable: true,
      enumerable: false, 
      writable: false 
    } 
  )  

  let res = obj.fn(...args) 
  delete obj.fn 

  return res 
}

// console.log(jyApply({'foo': 'bob'}, 
//   function bar(a, b, c, d) {
//     return a + b + c + d 
//   }, 
//   1, 2, 3, 4 
// ))


function foo(a, b, c, d) {
  console.log("这是我的this...", this) 
  console.log(a + b + c + d) 
}


let x = {'d': 123, 'c': 122} 


foo.jyApply(x, [1, 2, 3, 4])  
