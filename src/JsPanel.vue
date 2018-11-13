<template>
  <div v-if="visible">
    <slot />
    <slot
      v-show="false"
      name="headerToolbar"
    />
  </div>
</template>
<script>
import { jsPanel } from 'jspanel4/es6module/jspanel.min.js'
// import 'jspanel4/dist/jspanel.min.css'

export default {
  name: 'JsPanel',

  props: {
    visible: {
      type: Boolean,
      default: false
    },

    options: {
      type: Object,
      required: true,
      default: () => ({})
    }
  },

  computed: {
    panelOptions() {
      return Object.assign({ onclosed: this.close }, this.options)
    }
  },

  watch: {
    visible(isVisible) {
      if (isVisible) {
        this.createPanel()
      }
    }
  },

  mounted() {
    if (this.visible) {
      this.createPanel()
    }
  },

  methods: {
    async createPanel() {
      await this.$nextTick()

      let options = Object.assign(
        { content: this.$slots.default[0].elm },
        this.panelOptions
      )

      if (this.$slots.headerToolbar) {
        options = Object.assign(
          { headerToolbar: this.$slots.headerToolbar[0].elm },
          options
        )
      }
      jsPanel.create(options)
    },

    close() {
      this.$emit('close')
      this.$emit('update:visible', false)
    }
  }
}
</script>
