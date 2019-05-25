import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

import Vuex from 'vuex';
Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    count:0
  },
  mutations:{
    setCount(state){
      console.log("setCount");
      state.count++;
    }
  }
})

new Vue({
  render: h => h(App),
  store,
}).$mount('#app')
