var obj = {
  msg: 'Guten Tag!',
  rawHtml: '<div style="color:red">Auf widersehen</div>',
  myId: "id_3",
  bool: true,
}

var vm = new Vue({
  el: '#app',
  data: obj,
})