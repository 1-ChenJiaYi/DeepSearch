// 防抖函数，选择一个时间，不断将事件延后  
function debounce(func, delay) {
  let timer = null 
  return function(...args) {
    if(timer) {
      clearTimeout(timer) 
    }

    timer = setTimeout(
      () => {
        func.call(this, ...args)
      }, 
      delay 
    )
  }

}


function fn(a, b, c, d) {
  console.log(this) 
  console.log("执行运算", a + b + c + d)  
}

// 
const debFn = debounce(fn, 1000) 

debFn()
