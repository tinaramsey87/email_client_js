Email.Folder = DS.Model.extend({
  title: DS.attr(),
  // category: DS.attr(),
  emails: DS.hasMany('email', {async: true}),
  inbox: DS.belongsTo('inbox', {async: true})
});
