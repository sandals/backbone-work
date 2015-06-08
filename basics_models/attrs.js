var Person = new Backbone.Model();

Person.on('change:name', function() { console.log('Name changed'); });
Person.set({ name: 'Brandon' });

Person.set({ name: 'Definitely Not Brandon' }, { silent: true });

console.log(Person.hasChanged('name'));
console.log(Person.hasChanged(null));
