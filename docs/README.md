# Vue jsPanel

> A vue wrapper for jsPanel library

## Installation

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

## Component

### JsPanel

`JsPanel` is the main component that allows you to create a new panel. You simply give it an options object and a visible prop.

#### Examples

##### With default content

The `default` slot is used to render the content of the panel.

```html
<JsPanel :visible="show" :options="options" @close="show = false">
  <div>My awesome content</div>
</JsPanel>
```

```js
data() {
    return {
      show: true,
      options: {
        animateIn: 'animated zoomIn faster',
        animateOut: 'animated zoomOut faster',
        headerTitle: 'Aesome Panel',
        //...
      }
    }
  }
}
```

##### With headerToolbar slot

You can pass a slot that will be used as `headerToolbar` content.

```html
<JsPanel :visible="show" :options="options" @close="show = false">
  <div>My awesome content</div>
  <div slot="headerToolbar" class="custom-header-toolbar">
    <span>File</span> <span>Edit</span> <span>About</span>
  </div>
</JsPanel>
```

#### Props

| Name      | Type      | Required | Default | Comments                                                                                                 |
| --------- | --------- | -------- | ------- | -------------------------------------------------------------------------------------------------------- |
| `visible` | `Boolean` | No       | `false` | Determine if panel shold be rendered                                                                     |
| `options` | `Object`  | No       | `{}`    | Options for panel creation. <a href="https://jspanel.de/api.html#options/overview">Available options</a> |

#### Events

- `close`: Emitted when panel is closed
- `update:visible`: Emitted when panel is closed. Set to false parent visible binding
