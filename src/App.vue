<template>
  <reactiveComponentExpose />
</template>

<script>
// import computedProperties from './components/vue3-computed-properties.vue'
// import reactiveComponent from './components/vue3-reactive.vue'
import reactiveComponentExpose from './components/vue3-reactive-expose.vue'

export default {
  name: 'App',
  components: {
    // computedProperties,
    // reactiveComponent,
    reactiveComponentExpose
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
