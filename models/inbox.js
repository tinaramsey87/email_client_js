Email.Inbox = DS.Model.extend({
  emails: DS.hasMany('email', {async: true})
});
