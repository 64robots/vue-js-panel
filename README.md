# Hello Vue Components

> An example component library built with Vue CLI 3.

## Usage

### Directly in the browser

Drop the library in with a `<script>` tag alongside Vue to globally install all components:

```html
<div id="app">
  <hello-a></hello-a>
  <hello-b></hello-b>
</div>

<script src="https://unpkg.com/vue"></script>
<script src="https://unpkg.com/vue-js-panel"></script>
<script>
  new Vue({ el: '#app' })
</script>
```

Or, if you only want to use a small subset of components, drop them in individually:

```html
<div id="app">
  <hello-a></hello-a>
  <hello-b></hello-b>
</div>

<script src="https://unpkg.com/vue"></script>
<script src="https://unpkg.com/vue-js-panel/dist/HelloA/index.umd.min.js"></script>
<script src="https://unpkg.com/vue-js-panel/dist/HelloB/index.umd.min.js"></script>
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
import HelloVueComponents from 'vue-js-panel'

Vue.use(HelloVueComponents)
```

Or, import components individually for local registration:

```js
import { HelloA, HelloB } from 'vue-js-panel'

export default {
  components: { HelloA, HelloB }
}
```

Or, if you only want to use a small subset of components, import individually bundled components from the `dist` directory to reduce the size of your application:

```js
import HelloA from 'vue-js-panel/dist/HelloA'
import HelloB from 'vue-js-panel/dist/HelloB'
```

### In a module system (with Vue CLI)

> If using Vue CLI 3 with Babel or TypeScript, it's recommended that you import the library from its `src` directory. This will minimize the size of your application by preventing duplicate or unnecessary polyfills.

Install the library with NPM:

```bash
npm install vue-js-panel
```

Then register the library as a plugin to globally install all components:

```js
import HelloVueComponents from 'vue-js-panel/src'

Vue.use(HelloVueComponents)
```

Or, import components individually for local registration:

```js
import { HelloA, HelloB } from 'vue-js-panel/src'

export default {
  components: { HelloA, HelloB }
}
```

Or, if you only want to use a small subset of components, import individually bundled components from the `src` directory to reduce the size of your application:

```js
import HelloA from 'vue-js-panel/src/HelloA'
import HelloB from 'vue-js-panel/src/HelloB'
```
