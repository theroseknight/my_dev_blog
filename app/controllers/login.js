import Ember from 'ember';

export default Ember.Controller.extend({
	email:"",
	password:"",
	actions: {
        login: function() {
        	console.log("hereeee")
            this.get('session').authenticate('authenticator:firebase', {
                'email': this.get('email'),
                'password': this.get('password')
            })
            this.transitionToRoute('posts');
        },
        logout: function() {
        	console.log("start of logout")
            this.get('session').invalidate()
        }
    }
});