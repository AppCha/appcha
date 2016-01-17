FlowRouter.route('/projects/new', {
  name: "projects.new",
  action() {
    BlazeLayout.render('modalLayout', {main: 'projects_new'})
  }
})

//modalLayout
