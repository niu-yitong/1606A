<template>
  <div id="app">
    <button @click="delNum">-</button> 
    <p>{{$store.state.num}}</p>
    <button @click="addNum">+</button>  
  </div>
</template>

<script>
export default {
    created(){
      console.log(this)
    },
    methods:{
      delNum(){
        this.$store.commit("delNum")
      },
      addNum(){
        this.$store.commit("addNum")
      }
    }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
