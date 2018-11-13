
import JsPanel from './JsPanel'

// Export components individually
export { JsPanel }

// What should happen if the user installs the library as a plugin
function install(Vue) {
  Vue.component('JsPanel', JsPanel)
}

// Export the library as a plugin
export default { install: install }
