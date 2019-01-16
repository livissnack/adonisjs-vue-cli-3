import Vue from 'vue'
import i18n from './utils/i18n'
import App from './App.vue'
import router from './routers/router'
import store from './stores/store'
import { Button, message, notification, Modal, LocaleProvider } from 'ant-design-vue'

Vue.config.productionTip = false
Vue.use(Button)
Vue.use(LocaleProvider)

Vue.prototype.$message = message
Vue.prototype.$notification = notification
Vue.prototype.$info = Modal.info
Vue.prototype.$success = Modal.success
Vue.prototype.$error = Modal.error
Vue.prototype.$warning = Modal.warning
Vue.prototype.$confirm = Modal.confirm

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')
