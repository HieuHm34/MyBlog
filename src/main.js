import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import firebase from "firebase/compat/app";
import "firebase/compat/auth";

Vue.config.productionTip = false

let app;
firebase.auth().onAuthStateChanged(() => {
  if(!app) {
    new Vue({
      store,
      router,
      render: h => h(App)
    }).$mount('#app');
  }
})

