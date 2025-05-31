<template>
  <div class="App">
    

    <h2>我是测试组件</h2>

    <input type="text" v-focus> 



    <h2>计数器：</h2> 
    <h2 v-Jy>当前计数： {{ cnt }}</h2>
    <button @click="cnt ++"> +1 </button>


    <h2>-------------</h2> 
    <h2 v-jy:kobe.abc.cba="message">哈哈哈哈哈</h2>

    <h2>-----------------</h2> 

    <!-- 做一个价格的demo -->
    <h2 v-unit> {{ 100  }} </h2>


    <h2>---------------------</h2> 


    <h2>

    </h2>
  </div>  
</template>

<!-- 局部指令的实现： -->
<!-- <script>
export default {
  data() {
    return {

    }
  }, 
  directives: {
    focus: {
      // 生命周期函数
      mounted(el) {
        el?.focus() 
      }

    }
  }
}
</script> -->

<script setup>
import { onBeforeUnmount, onUnmounted, ref } from 'vue';

// 方式2, setup的局部指令的写法 
// const vFocus = {
//   mounted(el) {
//     el?.focus() 
//   }
// }
const message = ref("你号啊，hxc") 

const cnt = ref(0) 

// 生命周期 
const vJy = {
  created () {
    
  } 
  , 
  beforeMount () {
    
  }, 
  mounted(el, bindings) {
    console.log(el) 
    console.log(bindings)
  }, 
  beforeUpdate() {
    
  }, 
  updated() {
    
  },  
  BeforeUnmount() {

  }, 
  Unmounted() {

  }
}

</script>

<style lang='less' scoped>


</style>
