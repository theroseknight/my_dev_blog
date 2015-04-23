//import config from '../config/environment';
//import Firebase from 'firebase';
//import FirebaseAdapter from 'emberfire/adapters/firebase';

//export default FirebaseAdapter.extend({
  //firebase: new Firebase(config.firebase)
//});


import DS from 'ember-data';

export default DS.FirebaseAdapter.extend({  
	firebase: new window.Firebase('https://my-dev-blog.firebaseio.com/')
});