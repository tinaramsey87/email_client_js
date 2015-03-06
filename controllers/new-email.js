Email.NewEmailController = Ember.Controller.extend({
  actions: {
    send: function() {
      var newEmail = this.store.createRecord('email', {
        sender: this.get('sender'),
        recipient: this.get('recipent'),
        subject: this.get('subject'),
        body: this.get('body')
      });
      this.set('sender', null);
      this.set('recipient', null);
      this.set('subject', null);
      this.set('body', null);
      newEmail.save();
    }
  }
});
