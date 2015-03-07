Email.NewInboxController = Ember.Controller.extend({
  actions: {
    add: function() {
      var newInbox = this.store.createRecord('inbox',{
        user: this.get('user')
      });
      this.set('user', null)
      newInbox.save();
      this.transitionToRoute('home');
    }
  }
});
