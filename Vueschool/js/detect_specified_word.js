const vm = new Vue({
  el: "#app",
  data: {
    a: "WIP: Disable Merge Button"
  },
  computed: {
    b: function () {
      return /\bWIP\b/i.test(this.a)
    },
  },
})