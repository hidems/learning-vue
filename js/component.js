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

Vue.component('blog-post-2', {
  props: ['post'],
  template: `
    <div class="blog-post">
      <h3>{{ post.title }}</h3>
      <button v-on:click="$emit('enlarge-text', 0.1)">
        Enlarge text
      </button>
      <div v-html="post.content"></div>
    </div>
    `
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

new Vue({
  el: '#blog-posts-events-demo',
  data: {
    posts: [
      { id: 1, title: 'My journey with Vue', content: 'aaaaaa' },
      { id: 2, title: 'Blogging with Vue', content: 'bbbbbbb' },
      { id: 3, title: 'Why Vue is so fun', content: 'cccccccc' }
    ],
    postFontSize: 1
  },
  methods: {
    onEnlargeText: function (enlargeAmount) {
      this.postFontSize += enlargeAmount
    }
  }
})