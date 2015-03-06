Email.NewEmailController = Ember.Controller.extend({
  needs: ['inbox'],

  actions: {
    send: function() {
      var newEmail = this.store.createRecord('email', {
        sender: this.get('sender'),
        recipient: this.get('recipient'),
        subject: this.get('subject'),
        body: this.get('body')
      });
      this.set('sender', null);
      this.set('recipient', null);
      this.set('subject', null);
      this.set('body', null);
      newEmail.save();

      var inbox = this.get('controllers.inbox.model');

      inbox.get('emails').pushObject(newEmail);
      inbox.save();
      alert('Email sent!');

      this.transitionToRoute('inbox', inbox);
    }
  }
});
