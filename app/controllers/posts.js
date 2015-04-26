import Ember from 'ember';

export default Ember.Controller.extend({
	orderedPosts: function() {
    return this.get("model").sortBy('date').reverse();
  }.property('model')
});