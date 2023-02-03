const vm = new Vue({
  el: "#app",
  data: {
    passwordValue: "",
    triggerShowPassword: "password"
  },
  watch: {
    passwordValue: function () {
      this.triggerShowPassword = "text"
      this.$nextTick(function () { this.$refs.text.focus() })
      this.hidePassword()
    },
  },
  methods: {
    hidePassword: _.debounce(function () {
      this.triggerShowPassword = "password"
      this.$nextTick(function () { this.$refs.password.focus() })
    }, 1000 * 1),
  },
})