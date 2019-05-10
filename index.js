
module.exports = {
    call: function (callback) {
        if (!callback && typeof callback !== 'function') {
          throw new Error(`call expects a function argument; received ${callback}`)
        }
      
        return {
          and () {
            return this
          },
          now () {
            callback.call()
            return this
          },
          every(ms) {
            this.intervalId = setInterval(callback, ms)
            return this
          },
          nowAndEvery(ms) {
            this.now()
              this.intervalId = setInterval(callback, ms)
            return this
          },
          delay(ms) {
            setTimeout(callback, ms)
          }
        }
      },
      
      sleep: function (ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
      }
}
