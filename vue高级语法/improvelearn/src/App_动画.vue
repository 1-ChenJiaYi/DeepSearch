<!-- 动画 transition --> 
<template>
  <div class="App">
    <transition name="cjy"> 
      <h2 v-if="show">我是App</h2>
    </transition>

    <button @click="foo">Change</button>
  </div>
</template>

<script setup>
import {ref} from 'vue'

const show = ref(true) 

function foo() {
  show.value = !show.value
}
</script>

<style lang='less' scoped>
.cjy-enter-from, 
.cjy-leave-to {
  opacity: 0; 
  transform: scale(0.5);
}

.cjy-enter-to, 
.cjy-leave-from {
  opacity: 1; 
  transform: scale(1); 
}

.cjy-enter-active, 
.cjy-leave-active {
  transition: all 2s ease;
}

</style>
