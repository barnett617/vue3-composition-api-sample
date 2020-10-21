<template>
  <Suspense>
    <template #default>
      <Event />
      <div>
        <Event2 />
      </div>
    </template>
    <template #fallback>
      Loading...
    </template>
  </Suspense>
</template>
<script>
import Event from '../components/Event.vue'
import Event2 from '../components/Event2.vue'
export default {
  components: {
    Event,
    Event2
  }
}
</script>