var vm = new Vue({
  el: '#app',
  data: {
    message: '',
    checked: false,
    checkedNames: [],
    picked: '',
    selected: '',
    multi_selected: '',
    vfor_selected: 'A',
    options: [
      { text: 'One', value: 'A' },
      { text: 'Two', value: 'B' },
      { text: 'Three', value: 'C' }
    ]
  }
})