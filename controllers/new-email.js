Email.NewEmailController = Ember.Controller.extend({
  isComposing: true,
  mailSent: false,

  needs: ['inbox'],

  actions: {
    send: function() {
      var newEmail = this.store.createRecord('email', {
        sender: this.get('sender'),
        recipient: this.get('recipient'),
        subject: this.get('subject'),
        body: this.get('body'),
        when: new Date
      });
      this.set('sender', null);
      this.set('recipient', null);
      this.set('subject', null);
      this.set('body', null);
      newEmail.save();

      var inbox = this.get('controllers.inbox.model');

      inbox.get('emails').pushObject(newEmail);
      inbox.save();
      this.set('mailSent', true);
      this.set('isComposing', false);
    },

    reset: function() {
      this.set('mailSent', false);
    },

    composeMail: function() {
      this.set('isComposing', true);
    }
  }
});
