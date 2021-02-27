Vue.component('button-counter', {
  data: function () {
    return {
      count: 0
    }
  },
  template: '<button v-on:click="count++">You clicked me {{ count }} times.</button>'
})

Vue.component('blog-post', {
  props: ['title', 'body'],
  template: '<div><h3>Title: {{ title }}</h3><p>{{ body }}</p></div>'
})

new Vue({
  el: '#components-demo',
  data: {
    posts: [
      { id: 1, title: 'My journey with Vue' },
      { id: 2, title: 'Blogging with Vue' },
      { id: 3, title: 'Why Vue is so fun' }
    ]
  }
})