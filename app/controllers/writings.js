import Ember from 'ember';

export default Ember.Controller.extend({
	filteredPosts: function() {
    return this.get("model").filterBy('writing', true);
  }.property('model.@each.writing')
});
