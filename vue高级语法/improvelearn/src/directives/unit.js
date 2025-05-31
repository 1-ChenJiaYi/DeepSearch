export default function directiveUnit(app) {
  app.directive("unit",  {
    mounted(el, bindings) {
      const defaultText = el.textContent 
      let bv = bindings.value 
      if(!bv) bv = '￥' 
      el.textContent = bv + defaultText
    }
  })
} 