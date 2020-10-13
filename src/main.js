import Vue from 'vue'
import App from './App'
import router from './router'

require('@/assets/css/styles.css')

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})