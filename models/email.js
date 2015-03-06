Email.Email = DS.Model.extend({
  sender: DS.attr(),
  recipient: DS.attr(),
  subject: DS.attr(),
  body: DS.attr(),
  inbox: DS.belongsTo('inbox', {async: true})
});
