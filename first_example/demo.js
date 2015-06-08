var Todo = Backbone.Model.extend({
  defaults: {
    title: '',
    completed: false
  }
})

var myTodo = new Todo({
  title: 'Make todo application'
})

var TodoView = Backbone.View.extend({
  tagName: 'li',

  todoTpl: _.template($('#item-template').html()),

  events: {
    'dblclick label': 'edit',
    'keypress .edit': 'updateOnEnter',
    'blur .edit': 'close'
  },

  initialize: function() {
    this.$el = $('#todo')
    this.render()
  },

  render: function() {
    this.$el.html(this.todoTpl(this.model.attributes))
    this.input = this.$('.edit')
    return this;
  },


  edit: function() {
  },

  close: function() {
  },

  updateOnEnter: function(e) {
  }
})

var todoView = new TodoView({ model: myTodo });

$(function() {
  var App = new TodoView({ model: myTodo });
})
