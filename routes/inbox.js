Email.InboxRoute = Ember.Route.extend({
  model: function() {
    return this.store.find('inbox');
  }
});
