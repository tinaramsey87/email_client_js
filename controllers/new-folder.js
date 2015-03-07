Email.NewFolderController = Ember.Controller.extend({
  needs: ['inbox'],

  actions: {
    create: function() {
      var newFolder = this.store.createRecord('folder', {
        title: this.get('title'),
        // category: this.get('category')
      });
      this.set('title', null);
      this.set('category', null);
      newFolder.save();

      var inbox = this.get('controllers.inbox.model');

      inbox.get('folders').pushObject(newFolder);
      inbox.save();

      this.transitionToRoute('inbox', inbox);
    }
  }
});
