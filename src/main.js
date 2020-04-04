import Vue from 'vue'
import App from './App.vue'
import Axios from 'axios'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
Axios({
  url:'http://123.207.32.32:8000/home/multidata'
}).then(res=>{
  console.log(res)
})
