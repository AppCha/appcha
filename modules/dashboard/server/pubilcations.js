Meteor.publish("dashboard_projects", function(recent=true) {
  //Meteor._sleepForMs(2000)

  let criteria = {owner: this.userId}
  let options = {}
  if (recent){
    options = {sort: {updatedAt: -1}, limit: 5}
  }

  return Projects.find(criteria, options)
})