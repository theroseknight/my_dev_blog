import Ember from 'ember';

export default Ember.Controller.extend({
	filteredPosts: function() {
    return this.get("model").filterBy('randomThought', true);
  }.property('model.@each.randomThought')
});
