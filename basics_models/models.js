var Todo = Backbone.Model.extend({
  defaults: {
    title: '',
    completed: false
  }
})

// concrete instance of a model
var todo1 = new Todo()
var todo2 = new Todo({
  title: 'Do me',
  completed: true
})

var todo1Attrs = todo1.toJSON();
console.log(todo1Attrs)

console.log(todo2.get('title'))
console.log(todo2.get('completed'))
console.log(JSON.stringify(todo2))

todo2.set('completed', false)
console.log(todo2.get('completed'))

var myTodo = new Todo({
  title: 'Oh yeah bud'
})
console.log(myTodo.toJSON())

myTodo.set({
  title: 'Update this thing',
  completed: true
})
console.log(myTodo.toJSON())
