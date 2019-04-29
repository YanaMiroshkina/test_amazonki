import Vue from 'vue'
import VueRouter from 'vue-router'
import store from './Store'
import App from './App.vue'

// подключаем сразу все файлы стилей
function requireAll(r) { r.keys().forEach(r); }
requireAll(require.context('./assets/sass', false, /\.sass$/))

import PageAbout from './components/pages/PageAbout'
import PageRaspisanie from './components/pages/PageRaspisanie'
import PageActivities from './components/pages/PageActivities'
import PageUseful from './components/pages/PageUseful'

export const bus = new Vue()

Vue.use(VueRouter)

const routes = [

  { path: '/', component: PageAbout },
  { path: '/raspisanie', component: PageRaspisanie },
  { path: '/activities', component: PageActivities },
  { path: '/useful', component: PageUseful }

]

const router = new VueRouter({ 
  mode: 'history',
  linkActiveClass: '',
  linkExactActiveClass: 'active',
  scrollBehavior() {
    return {x: 0, y: 0}
  },
  routes 
})

new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App)
})
