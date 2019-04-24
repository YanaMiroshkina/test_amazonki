import Vue from 'vue'
import VueRouter from 'vue-router'
import './assets/css/normalize.css'
import './assets/css/fonts.css'
import store from './Store'
import App from './App.vue'

// Vue.use(VueRouter)

// const routes = [

//   { path: '/', component: PageAbout },
//   { path: '/activities', component: PageActivities }

// ]

// const router = new VueRouter({ 
//   mode: 'history',
//   routes 
// })

new Vue({
  el: '#app',
  store,
  // router,
  render: h => h(App)
})
