// データオブジェクト
var test_data = { a: 1 }

// Vue インスタンスにオブジェクトを追加する
var vm = new Vue({
  data: test_data
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