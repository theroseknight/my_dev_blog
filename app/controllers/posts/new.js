import Ember from 'ember';

export default Ember.Controller.extend({
names:["Web Development", "Game Development", "Entertainment Review", "Random Thought", "Project"],    
actions: {
  save: function() {
    var title = this.get('title');
    var description= this.get('description');
    var blogType = this.get('blogType')
    var date = new Date();
    var webDev = false;
    var gameDev = false;
    var movieRev = false;
    var random = false;
    var projects = false;

    switch(blogType) {
    	case "Web Development":
	    	webDev = true;
	    	break;
	    case "Game Development":
	    	gameDev = true;
	    	break;
	    case "Entertainment Review":
	    	movieRev = true;
	    	break;
	    case "Random Thought":
	    	random = true;
	    	break;
	    case "Project":
	    	projects = true;
	    	break;
    }

    if(!title.trim()) {return; }

    var post = this.store.createRecord('post', {
      title:title,
      description:description,
      date:date,
      webDevelopment:webDev,
      gameDevelopment:gameDev,
      movieReview:movieRev,
      randomThought:random,
      project:projects
    });
    this.set('title','');
    this.set('description','');
    post.save();
    this.transitionToRoute('posts');
  }
}
});
