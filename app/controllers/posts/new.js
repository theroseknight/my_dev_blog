import Ember from 'ember';

export default Ember.Controller.extend({
names:["Web Development", "Game Development", "Entertainment Review", "Random Thought", "Project"],    
actions: {
        save: function() {
                var title = this.get('title');
                var description= this.get('description');
                var date = new Date();
                if(!title.trim()) {return; } //empty string

                var post = this.store.createRecord('post', {
                        title:title,
                        description:description,
                        date:date

                });
                this.set('title','');
                this.set('description','');
                post.save();
                this.transitionToRoute('posts');

        }
}
});
