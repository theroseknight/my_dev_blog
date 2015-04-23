import Ember from 'ember';

export default Ember.Controller.extend({
	filteredPosts: function() {
    return this.get("model").filterBy('project', true);
  }.property('model.@each.project')
});
