import Ember from 'ember';

export default Ember.Component.extend({
  blogType:null,
	names:["Web Development", "Game Development", "Entertainment Review", "Random Thought", "Writing"],
  selectionChanged:function(){
    this.sendAction('action',this.get('blogType'))
  }.observes('blogType')
});
