const eventApi = {
  getEventCount: function(searchInput) {
    console.log('counting...')
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(searchInput.length)
        console.log('count down')
      }, 500)
    })
  }
}

export default eventApi