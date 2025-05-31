import dayjs from "dayjs"
export default function directiveFtime(app) {
  app.directive('ftime', {
    mounted(el, bindings) {
      const elT = el.textContent 
      elT = Number(elT) 
      if(elT.length === 10) {
        elT *= 1000 
      }

      let bv = bindings.value 
      if(!bv) {
        bv = "YYYY-MM-DD"
      }
      const formatT = dayjs(elT).format(bv)
      el.textContent = formatT
    }
  })
}


