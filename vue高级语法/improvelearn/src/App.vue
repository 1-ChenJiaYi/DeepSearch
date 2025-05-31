<!-- 动画 transition --> 
<template>
  <div class="App">
    <!-- 过渡模式：mode -->
    <transition name="cjy" mode="out-in">  
      <h2 v-show="show">asdasdasdasdddddddddddddddddddddddddddddddddddddddddddd
        asdassssssssssssssssssssssssssssssssssssssssssssssssssss
        asdassssssssssssssssssssssssssssssssssssssssssssssssssssss
        asdddddddddddddddddddddddddddddddddddddd
      </h2>
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

.cjy-enter-active {
  animation: cjyAnim 2s ease;
}

.cjy-leave-active {
  animation: cjyAnim 2s ease reverse;
}

@keyframes cjyAnim {
  0% {
    transform: scale(0);
    opacity: 0;
  }

  50% {
    transform: scale(1.2);
    opacity: 0.5;
  }

  100% {
    transform: scale(1);
    opacity: 1;
  }
}

@keyframes cjyLeaveAnim {
  0% {
    transform: translate(0);
    opacity: 1;
  }

  100% {
    transform: translate(-500px); 
    opacity: 0; 
  }

}
</style>
