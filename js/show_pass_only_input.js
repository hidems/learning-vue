const vm = new Vue({
  el: "#app",
  data: { p: "secret-password", t: "password" },
  watch: {
    p: function () {
      this.t = "text"
      this.$nextTick(function () { this.$refs.r2.focus() })
      this.c()
    },
  },
  methods: {
    c: _.debounce(function () {
      this.t = "password"
      this.$nextTick(function () { this.$refs.r1.focus() })
    }, 1000 * 1),
  },
})