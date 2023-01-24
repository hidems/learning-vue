Vue.component('like-component', {
  props: ['post'],
  template: '<button>Like</button>'
})

new Vue({
  el: '#app',
});