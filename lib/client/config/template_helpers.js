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



Template.registerHelper("validateClass", (model, fieldName) => {
  let project = model.get()
  if (project.hasValidationError(fieldName)){
    return "invalid"
  }
  return ""
})

Template.registerHelper("validateMessage", (model, fieldName) => {
  let project = model.get()
  if (project.hasValidationError(fieldName)){
    return project.getValidationError(fieldName)
  }
  return ""
})

Template.registerHelper("focusFirstError", (model, template) => {
  TemplateHelpers.focusFirstError(model, template)
})

//if (project.hasValidationErrors()){
//  $(`#${_.keys(project.getValidationErrors())[0]}`).focus() // lets pop the focus on the first element that has an error
//}
//template.focusFirstError(project)

TemplateHelpers = {
  focusFirstError(model, template) {
    if (model.hasValidationErrors()){
      $(template.view._domrange.parentElement).find(`#${_.keys(model.getValidationErrors())[0]}`).focus() // lets pop the focus on the first element that has an error
    }
  }
}