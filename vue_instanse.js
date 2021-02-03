// データオブジェクト
var test_data = {
    a: 1,
    b: 4
}

// Vue インスタンスにオブジェクトを追加する
var vm = new Vue({
    el: "#vue-1",
  data: test_data,
  beforeCreate: function() {
      console.log("before")
  },
  mounted: function() {
      console.log("mounted")
  },
  updated: function() {
      console.log("updated")
  }
})

// インスタンスのプロパティを取得すると、
// 元のデータからそのプロパティが返されます
vm.a == test_data.a // => true

// プロパティへの代入は、元のデータにも反映されます
vm.a = 2
test_data.a // => 2

// ... そして、その逆もまたしかりです
test_data.a = 3
vm.a // => 3

var obj = {
  foo: 'bar'
}

Object.freeze(obj)

new Vue({
  el: '#app',
  data: obj
})