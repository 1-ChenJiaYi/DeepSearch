<template>
  <jsx/>
</template>

<script lang='jsx' setup>

import {ref} from 'vue' 

const cnt = ref(0) 

const inc = () => {
  cnt.value ++ 
}

const dec = () => {
  cnt.value -- 
}

const jsx = () => (
  <div class='app'> 
    <h2>计数器</h2>
    <p>当前计数：{cnt.value}</p>
    <button onClick={inc}> +1 </button>
    <button onClick={dec}> -1 </button>
  </div>
)
</script>

<style lang='less' scoped>


</style>
