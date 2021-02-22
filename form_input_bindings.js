var vm = new Vue({
  el: '#app',
  data: {
    message: '',
    checked: false,
    checkedNames: [],
    picked: '',
    picked2: '',
    selected: '',
    multi_selected: '',
    vfor_selected: 'B',
    toggle: '',
    lazy: '',
    age: '',
    options: [
      { text: 'One', value: 'A' },
      { text: 'Two', value: 'B' },
      { text: 'Three', value: 'C' }
    ]
  },
  computed: {
    answer: function () {
      return this.age + 20 
    }
  }
})