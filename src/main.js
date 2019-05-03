import Vue from 'vue'
import VueRouter from 'vue-router'
import store from './Store'
import App from './App.vue'

import favicon from '../favicon.ico'

import PageAbout from './components/pages/PageAbout'
import PageRaspisanie from './components/pages/PageRaspisanie'
import PageActivities from './components/pages/PageActivities'
import PageUseful from './components/pages/PageUseful'
import Page404 from './components/pages/Page404'

export const bus = new Vue()

Vue.use(VueRouter)

const routes = [

  { path: '/', component: PageAbout },
  { path: '/raspisanie', component: PageRaspisanie },
  { path: '/activities', component: PageActivities },
  { path: '/useful', component: PageUseful },
  { path: '/*', component: Page404 }

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

// ВЫНОСИМ ЭТО В КОНЕЦ main.js,
// чтобы в dev- и build-сборке файлы стилей из папки assets/sass
// подключались после стилей компонентов.
// Если этого не сделать,
// @media-стили могут быть переопределены обычными стилями из компонентов

// подключаем сразу все файлы стилей
function requireAll(r) { r.keys().forEach(r); }
requireAll(require.context('./assets/sass', false, /\.sass$/))
// загружаем в production-сборку все-все картинки из папки img/
requireAll(require.context('./assets/img/', true))