import Ember from 'ember';

export default Ember.Component.extend({
	filteredPosts: function() {
		if(this.get('flavor')!=="returnAll"){
			return this.get("model").filterBy(this.get('flavor'), true).sortBy('date').reverse();
		}else{
			return this.get("model").sortBy('date').reverse();
		}
  }.property('model.@each','flavor')
});
