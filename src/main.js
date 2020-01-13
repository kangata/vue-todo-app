import Vue from 'vue'
import App from './App.vue'

import './libs/fontawesome'
import './themes/default'

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
