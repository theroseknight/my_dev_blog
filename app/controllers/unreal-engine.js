import Ember from 'ember';

export default Ember.Controller.extend({
	filteredPosts: function() {
    return this.get("model").filterBy('gameDevelopment', true);
  }.property('model.@each.gameDevelopment')
});
