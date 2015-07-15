import Ember from 'ember';
import AuthenticatedRouteMixin from 'simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin,{
  actions:{
    save: function() {
      var d = this.get('model');
      d.set("date",new Date());
      d.save();
      this.set('isEditing', false);
    },
    del: function() {
      this.controller.get('model').deleteRecord();
      this.controller.get('model').save();
      this.set('isEditing', false);
      this.transitionTo('posts');
    }
  }
});
