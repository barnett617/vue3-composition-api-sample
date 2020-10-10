<template>
  <div>
    <p>Spaces Left: {{ spacesLeft }} of {{ capacity }}</p>
    <button @click="increaseCapacity()">Increase Capacity</button>
    <h2>Attending</h2>
    <ul>
      <li v-for="(name, index) in attending" :key="index">
        {{ name }}
      </li>
    </ul>
  </div>
</template>
<script>
import { ref, computed, reactive, toRefs } from 'vue'
export default {
  setup() {
    const event = reactive({
      capacity: ref(3),
      attending: ref(["Tim", "Bob", "Joe"]),
      spacesLeft: computed(() => {
        return event.capacity - event.attending.length
      })
    })
    function increaseCapacity() {
      event.capacity++
    }

    return { ...toRefs(event), increaseCapacity }
  }
}
</script>