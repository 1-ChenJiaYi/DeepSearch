<script lang="jsx">
  export default {
    data() {
      return {
        cnt: 0
      }
    }, 
    render() {
      return (
        <div class='app'> 
          <h2>计数器</h2>
          <p>当前计数：{this.cnt}</p>
          <button onClick={this.inc}> +1 </button>
          <button onClick={this.dec}> -1 </button>
        </div>
      )
    }, 
    methods: {
      inc() { 
        this.cnt ++ 
      }, 
      dec() {
        this.cnt -- 
      }
    }, 
    setup() {
      import {ref} from 'vue' 
       
    }
  }
</script>

<style lang='less' scoped>


</style>
