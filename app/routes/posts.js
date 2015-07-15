import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return this.store.find('post');
  },
  afterModel:function(model){
    model.set('flavor','returnAll')
  }
});
