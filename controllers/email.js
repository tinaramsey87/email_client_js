Email.EmailController = Ember.Controller.extend({
  notInFolder: true,

  actions: {
    addToFolder: function(email) {
      debugger;
      var folder = email.get('folder')

      folder.get('emails').pushObject(email);
      folder.save();
      this.set('inFolder', true);
    }
  }
});
