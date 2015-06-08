var Todo = Backbone.Model.extend({
  defaults: {
    title: '',
    completed: false,
  },

  initialize: function() {
    console.log('Todo model intialized');

    this.on('change', function() {
      console.log('- Values for this model have changed.');
    });
  }
});

var myTodo = new Todo();

myTodo.set('title', 'EVENTS FIRING!!!');
console.log('Title has changed: ' + myTodo.get('title'));

myTodo.set('completed', true);
console.log('Completed has changed: ' + myTodo.get('completed'));
