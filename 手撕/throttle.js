function throttle(fn, delay) {
  let lastTime = 0
  let timer = null
  return function(...args) {
    let newTime = Date.now() 
    let distTime = newTime - lastTime 
    if(distTime <= delay) return 
    if(timer) clearTimeout(timer) 
    timer = setTimeout(
      () => {
        fn.call(this, ...args)   
      }, 
      delay
    )
    lastTime = newTime
  }
}

function fn() {
  console.log("执行") 
}

const Fn = throttle(fn, 1000)

setInterval(
  () => {
    Fn()
  }, 
  500 
)

