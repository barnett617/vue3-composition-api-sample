<template>
  <computedProperties />
</template>

<script>
import computedProperties from './components/vue3-computed-properties.vue'

export default {
  name: 'App',
  components: {
    computedProperties
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
