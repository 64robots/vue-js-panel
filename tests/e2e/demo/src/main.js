import Vue from 'vue'
import App from './App'

if (process.env.VUE_APP_E2E) {
  if (window.__e2e_lib) {
    Vue.use(require('vue-js-panel').default)
  } else if (window.__e2e_components) {
    Vue.component('JsPanel', require('vue-js-panel/dist/JsPanel'))
  } else if (window.__e2e_src_lib) {
    Vue.use(require('vue-js-panel/src').default)
  } else if (window.__e2e_src_components) {
    Vue.component('JsPanel', require('vue-js-panel/src/JsPanel').default)
  }
} else {
  // Install the plugin directly from src in development
  Vue.use(require('../../../../src').default)
}

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
