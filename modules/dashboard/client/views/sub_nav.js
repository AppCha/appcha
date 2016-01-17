Template.dashboard_subnav.onRendered(function(){
  let activeTab = DahboardVariables.get('project_filter')
  if (activeTab){
    this.$('ul.tabs .tab a').removeClass("active")
    this.$('ul.tabs .tab a').each((i, ele) => {
      let e = $(ele)
      if (e.data().param == activeTab){
        e.addClass('active')
      }
    })
  }
  this.$('ul.tabs').tabs();
})


Template.dashboard_subnav.events({
  "click .tab a": (e, t) => {
    DahboardVariables.set('project_filter', $(e.target).data().param);
  }
})


Template.dashboard_subnav.helpers({
  noProjects() {
    return Projects.find({}).count() !== 0
  }
})