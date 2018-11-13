# Vue jsPanel

> Vue jsPanel wrapper

## Usage

### Directly in the browser

Drop the library in with a `<script>` tag alongside Vue to globally install all components:

```html
<div id="app"><js-panel></js-panel></div>

<script src="https://unpkg.com/vue"></script>
<script src="https://unpkg.com/vue-js-panel"></script>
<script>
  new Vue({ el: '#app' })
</script>
```

### In a module system (without Vue CLI)

Install the library with NPM:

```bash
npm install vue-js-panel
```

Then register the library as a plugin to globally install all components:

```js
import VueJsPanel from 'vue-js-panel'
import 'jspanel4/dist/jspanel.min.css'

Vue.use(VueJsPanel)
```

Or, import components individually for local registration:

```js
import { JsPanel } from 'vue-js-panel'
import 'jspanel4/dist/jspanel.min.css'

export default {
  components: { JsPanel }
}
```

### In a module system (with Vue CLI)

> If using Vue CLI 3 with Babel or TypeScript, it's recommended that you import the library from its `src` directory. This will minimize the size of your application by preventing duplicate or unnecessary polyfills.

Install the library with NPM:

```bash
npm install vue-js-panel
```

Then register the library as a plugin to globally install all components:

```js
import VueJsPanel from 'vue-js-panel/src'
import 'jspanel4/dist/jspanel.min.css'

Vue.use(VueJsPanel)
```

Or, import components individually for local registration:

```js
import { JsPanel } from 'vue-js-panel/src'
import 'jspanel4/dist/jspanel.min.css'

export default {
  components: { JsPanel }
}
```
