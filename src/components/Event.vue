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
import useEventSpace from '../composables/use-event-space'
export default {
  async setup() {
    const { capacity, attending, spacesLeft, increaseCapacity } = await useEventSpace()
    return { capacity, attending, spacesLeft, increaseCapacity }
  }
}
</script>