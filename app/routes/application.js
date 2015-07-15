import Ember from 'ember';
import ApplicationRouteMixin from 'simple-auth/mixins/application-route-mixin';

export default Ember.Route.extend(ApplicationRouteMixin,{
  actions:{
    leftPanelAction:function(params){
      this.controllerFor('posts').set('model.flavor',params)
    }
  }
});
