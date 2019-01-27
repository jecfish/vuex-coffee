import Vue from 'vue'
import router from './router'
import App from './App.vue'

Vue.config.productionTip = false

// should be move to individual file
Vue.filter('currency', function (value) {
  return '$' + parseFloat(value).toFixed(2);
});

new Vue({
  router,
  // TODO: Add Our Vuex store
  render: h => h(App)
}).$mount('#app')
