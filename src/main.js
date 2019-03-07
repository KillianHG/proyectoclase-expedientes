import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'

Vue.use(VueAxios, axios)

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
