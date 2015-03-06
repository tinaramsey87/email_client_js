Email.Router.map(function() {
  this.resource('home', {path: '/'}, function() {
    this.resource('new-inbox');
  });
  this.resource('inbox', {path: ':inbox_id'}, function() {
    this.resource('new-email');
    this.resource('email', {path: ':email_id'});
  });
});
