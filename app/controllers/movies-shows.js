import Ember from 'ember';

export default Ember.Controller.extend({
	filteredPosts: function() {
    return this.get("model").filterBy('movieReview', true);
  }.property('model.@each.movieReview')
});
