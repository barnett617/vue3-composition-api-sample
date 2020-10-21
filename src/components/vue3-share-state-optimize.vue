<template>
  <div>
    Search for <input v-model="searchInput" /> 
    <div>
      <p>Loading: {{ getEvents.loading.value }}</p>
      <p>Error: {{ getEvents.error.value }}</p>
      <p>Number of events: {{ getEvents.results.value }}</p>
    </div>
  </div>
</template>
<script>
import { ref, watch } from "vue";
import eventApi from "../api/event.js";
import usePromise from "../composables/use-promise";
export default {
  setup() {
    const searchInput = ref("");
    const getEvents = usePromise(search =>
      eventApi.getEventCount(search.value)
    );

    watch(searchInput, () => {
      if (searchInput.value !== "") {
        getEvents.createPromise(searchInput);
      } else {
        getEvents.results.value = null;
      }
    });
    return { searchInput, getEvents };
  }
};
</script>