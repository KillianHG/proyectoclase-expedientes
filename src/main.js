import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import './plugins/vuetify'
import App from './App.vue'
import Vuetify from 'vuetify'
import router from './router'
import { store } from './store/store'

Vue.config.productionTip = false

Vue.use(Vuetify)
Vue.use(VueAxios, axios)

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App),
  created: function () {
    var user = JSON.parse(localStorage.getItem('user'));
    if(user) {
      this.$store.dispatch('autoSignIn', user)
    }
  }
})
