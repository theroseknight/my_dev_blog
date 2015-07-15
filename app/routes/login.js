import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    login: function() {
      this.get('session').authenticate('authenticator:firebase', {
        'email': this.controller.get('email'),
        'password': this.controller.get('password')
      }).then(function(){
        this.transitionTo('posts');
      })      
    },
    logout: function() {
      this.get('session').invalidate()
    }
  }
});
