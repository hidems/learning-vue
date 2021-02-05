var obj = {
  message: 'guten tag',
  firstName: 'Foo',
  lastName: 'Bar',
  fullName: 'Foo Bar'
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
    },
    fullNameComputed: {
      // getter 関数
      get: function () {
        return this.firstName + ' ' + this.lastName
      },
      // setter 関数
      set: function (newValue) {
        var names = newValue.split(' ')
        this.firstName = names[0]
        this.lastName = names[names.length - 1]
      }
    }
  },
  methods: {
    reverseMessage: function () {
      return this.message.split('').reverse().join('')
    },
    nowMethods: function () {
      return Date.now()
    }
  },
  watch: {
    firstName: function (val) {
      this.fullName = val + ' ' + this.lastName
    },
    lastName: function (val) {
      this.fullName = this.firstName + ' ' + val
    }
  }
})