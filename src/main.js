import Vue from 'vue'
import App from './App'
import router from './router'
import fastclick from 'fastclick'

import axios from 'axios'
import muse from 'muse-ui'
import 'muse-ui/dist/muse-ui.css'
import './common/css/theme-ij.min.css'
import './common/css/googleIcon.css'
import './common/css/iconfont/iconFont.css'
import './common/css/ijStyle/index.less'


  Vue.config.productionTip = false

window.axios = axios

window.userId = location.search.split('=')[1]


Vue.use(muse)
fastclick.attach(document.body)




/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})

