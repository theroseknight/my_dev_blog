import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

export default Router.map(function() {
  this.resource("posts",{path: "/"}, function() {
    this.route("new");
    this.route("edit",{path: ":post_id"});

  });
  this.resource("web-development"),function(){

  }
  this.resource("unreal-engine"),function(){

  }
  this.resource("movies-shows"),function(){

  }
  this.resource("random-thoughts"),function(){

  }
  this.resource("projects"),function(){

  }
  this.resource("post",{path: ":post_id"},function(){

  })
});
