import Vue from 'vue'
import App from './App'
import router from './router'

import _ from 'lodash'
import muse from 'muse-ui'
import 'muse-ui/dist/muse-ui.css'

Vue.config.productionTip = false

window._ = _
Vue.use(muse)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
