// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

// 下载mint-ui  npm i mint-ui --save-dev  
// mint-ui安装好后，在main.js中导入mint-ui
import Mint from 'mint-ui'


import { Popup } from 'mint-ui';
Vue.component(Popup.name, Popup);

import { Picker } from 'mint-ui'
Vue.component(Picker.name, Picker);

import 'mint-ui/lib/style.css'
Vue.use(Mint)


// import { Popup,Picker } from 'vant'
// Vue.use(Popup)
// Vue.use(Picker)


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

