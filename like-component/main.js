Vue.component('like-component', {
  props: {
    message: {
      type: String,
      default: 'Like'
    }
  },
  data: function () {
    return {
      count: 0,
      comment: 'I Like it.'
    }
  },
  template: '<button @click="countUp">{{ message }} {{ count }}</button>',
  methods: {
    countUp: function () {
      this.count++;
      this.$emit('increment', this.comment, `count: ${this.count}`);
    }
  }
})

new Vue({
  el: '#app',
  data: {
    total: 0
  },
  methods: {
    incrementTotal: function (comment, count) {
      this.total++;
      console.log(comment);
      console.log(count);
    }
  }
});