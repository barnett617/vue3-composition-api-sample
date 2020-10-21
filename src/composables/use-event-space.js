import { ref, computed, reactive, toRefs } from 'vue'
export default function useEventSpace() {
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

  // const rand = Math.random().toFixed(2)
  // console.log('rand', rand)

  return new Promise(resolve => {
    setTimeout(() => {
      resolve()
      // resolve({ ...toRefs(event), increaseCapacity })
    }, 1000)
  }, reject => {
    setTimeout(() => {
      reject({ ...toRefs(event), increaseCapacity })
    }, 500)
  })
}