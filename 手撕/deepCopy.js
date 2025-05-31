const isObj = (obj) => {
  const x = typeof obj
  if(x === 'object' || x === 'function') return true 
  return false 
}

function deepCopy(obj, hash = new WeakMap()) {
  if(obj === null) return obj 

  if(typeof obj === 'symbol') return Symbol(obj.description) 
  
  if(!isObj(obj)) return obj 

  if(typeof obj === 'function') return obj 
  if(Array.isArray(obj)) {
    const narr = [] 
    obj.forEach(item => {
      narr.push(deepCopy(item, hash))
    })
    return narr
  }

  if(obj instanceof Set) {
    const ns = new Set() 
    for(const item of obj) {
      ns.add(deepCopy(item, hash)) 
    }
    return ns 
  }

  if(obj instanceof Map) {
    const nm = new Map() 
    for(const [key, values] of obj) {
      nm[key] = deepCopy(values, hash) 
    } 
    return nm 
  } 

  if(hash[obj]) {
    return hash[obj] 
  }
  const nobj = {} 
  for(const key in obj) {
    nobj[key] = deepCopy(obj[key], hash) 
  }

  for(const key of Object.getOwnPropertySymbols(obj)) {
    nobj[key] = obj[key] 
  }
  hash[obj] = nobj 
  return nobj 
}


// const obj = {
//   'a': 1, 
//   'b': 2, 
//   'c': function() {
//     console.log("函数")
//   }, 
//   'd': {
//     'e': {
//       'f': Symbol("深拷贝666"), 
//       'g': new Set([1, 2, 3, 4]), 
//     }
//   },  
// }

// obj['h'] = obj  

// const res = deepCopy(obj) 
// console.log(res.a) 