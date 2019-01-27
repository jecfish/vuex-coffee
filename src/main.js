import Vue from 'vue'
import router from './router'
import store from './store'
import App from './App.vue'

Vue.config.productionTip = false

// should be move to individual file
Vue.filter('currency', function (value) {
  return '$' + parseFloat(value).toFixed(2);
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
