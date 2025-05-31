class Vue2_dep {
  constructor() {
    this.dep = new Set()   
  }
  
  addFn(fn) {
    if(!fn) return 
    this.dep.add(fn) 
  }

  notify() {
    this.dep.forEach(f => f()) 
  }
}

const objMp = new WeakMap() 
function getDep(obj, key) {
  let tmp1 = objMp.get(obj)  
  if(!tmp1) {
    objMp.set(obj, new Map())
    tmp1 = objMp.get(obj)
  } 
  if(!tmp1.get(key)) {
    tmp1.set(key, new Vue2_dep())
  }
  return tmp1.get(key)
}

// 响应式的函数：
let curFn = null
function useFn(fn) {
  curFn = fn 
  fn() 
  curFn = null
}

// 模拟实现vue的计算属性computed：
function computed(fn) {
  function calc() {
    obj.value = fn() 
  } 
  const obj = {'value': undefined}
  useFn(calc) 
  return obj
}


// 定义响应式的数据  
function definePro(newObj, deep) {
  Object.keys(newObj).forEach(key => {  
    let val = newObj[key] 
    if(deep) {
      if(typeof val === 'function') {
        return 
      }
      if(typeof val === 'object') {
        definePro(val, deep)
        return  
      }
    }
    // 使用proxy(vue3): 
    /* 
      function reactive(obj) {
        return new Proxy(obj, {
          get(target, key, receiver) {
            track(target, key) // 依赖收集
            return Reflect.get(target, key, receiver)
          },
          set(target, key, value, receiver) {
            const result = Reflect.set(target, key, value, receiver)
            trigger(target, key) // 触发更新
            return result
          }
        })
      }

    */

    Object.defineProperty(newObj, key, {
      set: function(newV) {
        val = newV 
        getDep(newObj, key).notify() 
      }, 
      get: function() {
        getDep(newObj, key).addFn(curFn) 
        return val 
      }
    }) 
  })
}

function ref(obj, deep=false) {
  const newObj = {'value': obj} 
  definePro(newObj, deep)  
  return newObj
}

// 测试：
const obj1 = ref({
  'a': 1, 
  'b': 2,
  'c': {
    'd': 3 
  }
})  
const obj2 = ref(2) 


const x = computed(() => {
  return obj1.value.c.d + obj2.value  
})


console.log("calc1: ", x.value) 

obj2.value = 1e9

console.log("calc2: ", x.value) 

obj1.value.c.d = 1000 

console.log("calc3: ", x.value)



