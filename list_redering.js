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