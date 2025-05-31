import { onMounted, ref } from "vue"

export default function useinput() {
  const inputRef = ref() 
  onMounted(() => {
    inputRef.value?.focus()
  })
  return {inputRef} 
}