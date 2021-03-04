var vm = new Vue({
  el: '#app',
  data: {
    from: 'USA',
    items: [
      {
        name: 'John',
        message: 'Hello'
      },
      {
        name: 'Hans',
        message: 'Hallo'
      },
    ],
    object: {
        title: 'How to do lists in Vue',
        author: 'Jane Doe',
        publishedAt: '2016-04-10'
    },
    john: null,
    numbers: [34, 1, 2, -5, 3, 4, 123, 5],
    sets: [[ 1, 2, 3, 4, 5 ], [6, 7, 8, 9, 10]]
  },
  computed: {
    evenNumbers: function () {
      // this.numbers.sort()
      return this.numbers.filter(function (number) {
        return number % 2 === 0
      })
    }
  },
  methods: {
    even: function (numbers) {
      return numbers.filter(function (number) {
        return number % 2 === 0
      })
    }
  }
})

vm.items.push(
  {
    name: 'Taro',
    message: 'Ohayo'
  }
)

// vm.items.pop()

// vm.items.shift()

vm.items.unshift(
  {
    name: 'Yoko',
    message: 'Good day'
  }
)

vm.john = vm.items.filter(function (item) {
  return item.name.match('John')
})