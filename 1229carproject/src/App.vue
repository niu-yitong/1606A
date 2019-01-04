<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
const JSBridge = require('./utils/JSBridge.js');
export default {
  name: 'app',
  data () {
    return {}
  },
  methods: {
    login(){
      JSBridge.invoke('app', 'login', {
        loginCallBackName: (res)=>{
          console.log('res...', res);
        }
      });
    }
  }
}
</script>

<style>
#app {
  width:100%;
  height:100%;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
