Template.dashboard.onRendered(function () {
  this.$('ul.tabs').tabs();
})


Template.dashboard.onCreated(function () {

  Tracker.autorun(()=> {
    let option = DahboardVariables.get('project_filter');
    this.subscribe("dashboard_projects", option !== 'all')
  })

})

Template.dashboard.helpers({
  projects() {
    return Projects.find({}, {sort: {updatedAt: -1}})
  }
})

//Template.dashboard.events({
//
//})