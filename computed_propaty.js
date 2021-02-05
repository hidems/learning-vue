var obj = {
    message: 'guten tag' 
}

var vm = new Vue({
  el: '#app',
  data: obj,
  computed: {
  // 算出 getter 関数
    reversedMessage: function () {
      // `this` は vm インスタンスを指します
      return this.message.split('').reverse().join('')
    },
    nowComputed: function () {
      return Date.now()
    }
  },
  methods: {
    reverseMessage: function () {
      return this.message.split('').reverse().join('')
    },
    nowMethods: function () {
      return Date.now()
    }
  }
})