import Ember from 'ember';

export default Ember.Controller.extend({
	filteredPosts: function() {
    return this.get("model").filterBy('webDevelopment', true);
  }.property('model.@each.webDevelopment')
});
