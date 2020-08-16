import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueHighlightJS from 'vue-highlightjs'

import {store} from './store/store'

Vue.config.productionTip = false

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!store.getters.loggedIn) {
      next({
        name: 'Login',
      })
    } else {
      next()
    }
  } else if (to.matched.some(record => record.meta.requiresVisitor)) {
    if (store.getters.loggedIn) {
      next({
        name: 'Forms',
      })
    } else {
      next()
    }
  } else {
    next()
  }
})

Vue.use(VueHighlightJS)

new Vue({
  router,
  render: h => h(App),
  store: store,
}).$mount('#app')
