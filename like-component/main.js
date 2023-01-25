Vue.component('like-component', {
  props: {
    message: {
      type: String,
      default: 'Like'
    }
  },
  data: function () {
    return {
      count: 0
    }
  },
  template: '<button @click="countUp">{{ message }} {{ count }}</button>',
  methods: {
    countUp: function () {
      this.count++;
      this.$emit('increment');
    }
  }
})

new Vue({
  el: '#app',
  data: {
    total: 0
  },
  methods: {
    incrementTotal: function () {
      this.total++;
    }
  }
});