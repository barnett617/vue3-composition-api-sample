<template>
  <watchComponent />
</template>

<script>
// import computedProperties from './components/vue3-computed-properties.vue'
// import reactiveComponent from './components/vue3-reactive.vue'
// import reactiveComponentExpose from './components/vue3-reactive-expose.vue'
// import watchComponent from './components/vue3-watch-example.vue'
// import watchEffectComponent from './components/vue3-watch-effect.vue'
import watchComponent from './components/vue3-watch-effect.vue'

export default {
  name: 'App',
  components: {
    // computedProperties,
    // reactiveComponent,
    // reactiveComponentExpose,
    // watchComponent,
    // watchEffectComponent,
    watchComponent
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
