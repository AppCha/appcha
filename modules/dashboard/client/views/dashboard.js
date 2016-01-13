Template.dashboard.onRendered(function(){
    this.$('ul.tabs').tabs();
})


Template.dashboard.onCreated(function() {
    this.subscribe("dashboard_projects")
})

Template.dashboard.helpers({
    projects() {
        return Projects.find()
    }
})