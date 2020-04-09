var app = new Vue({
  el: '#app',
  data: {
    items: [],
    inputItem: '',
    modeEdit: false,
    previousIndex: ''
  },
  methods: {
    addItem: function () {
      this.items.push({item: this.inputItem, done: false});
      this.inputItem = '';
    },
    editItem: function () {
        this.items[this.previousIndex].item = this.inputItem;
    },
    deleteItem: function (item) {
        var index = this.items.indexOf(item);
        this.items.splice(index, 1);
    }
  },
});

$("#myModal").on("shown.bs.modal", function () {
  $("#inputAddItem").trigger("focus");
});
