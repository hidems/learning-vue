const vm = new Vue({
  el: "#app",
  data: {
    content: "Click to edit",
    focus: false
  },
  methods: {
    edit: function () {
      this.focus = true
      this.$nextTick(function () { this.$refs.ref_1.focus() })
    },
  },
})