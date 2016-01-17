let saveProjectFromDom = (form, template) => {
  let project = template.data.project.get()

  project.name = form.find('#name').val()

  if (!project.validate()){
    TemplateHelpers.focusFirstError(project, template)
    return
  }

  Meteor.call("project.create", project, (e, d) => {
    if (e) {
      project.catchValidationException(e);
      TemplateHelpers.focusFirstError(project, template)
      template.data.project.set(project)
    } else {
      FlowRouter.go('home')
    }
  })
}

Template.projects_new.onCreated(function() {
  this.data.project = new ReactiveVar(new Project())
})

Template.projects_new.onRendered(function () {
  this.$('#name').focus()
})

Template.projects_new.events({
  "click .js-close"(e) {
    e.preventDefault()
    FlowRouter.go('home')
  },
  "click .jsSubmit"(e, t){
    e.preventDefault()
    t.$('form').submit()
  },
  "submit form"(e, t) {
    e.preventDefault()
    saveProjectFromDom(t.$('form'), t);
  }
})

