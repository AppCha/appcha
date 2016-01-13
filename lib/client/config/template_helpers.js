Meteor.startup(() => {
  Template.registerHelper("appchaVersionNumber", () => {
    return "v0.0.1 - ALPHA"
  })
  Template.registerHelper("currentUserDisplayName", () => {
    if (!Meteor.user()) return "";

    return Meteor.user().emails[0].address;
  })
})


Template.registerHelper("isReady", ()=> {
  return Template.instance().subscriptionsReady()
})

Template.registerHelper("empty", (collection)=> {
  return collection.count() === 0;
})
