Email.Inbox = DS.Model.extend({
  user: DS.attr(),
  emails: DS.hasMany('email', {async: true}),
  folders: DS.hasMany('folder', {async: true})
});
