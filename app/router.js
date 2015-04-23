import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

export default Router.map(function() {
  this.resource("home",{path:"/"},function(){
    this.resource("posts", function() {
      this.route("new");
      this.route("edit",{path: ":post_id"});

    });
    this.resource("post",{path: ":post_id"},function(){

    })
  })
});
