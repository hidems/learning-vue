var vm = new Vue({
  el: '#app',
  data: {
    isActive: true,
    hasError: false,
    classObject: {
      active: true,
      'text-danger': false
    },
    activeClass: 'active',
    errorClass: 'text-danger'
  },
  computed: {
    classObjectByComputed: function () {
      return {
        active: this.isActive && !this.hasError,
        'text-danger': this.hasError && this.hasError.type === 'fatal'
      }
    }
  }
}) 