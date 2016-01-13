Meteor.publish("dashboard_projects", function() {
  //Meteor._sleepForMs(2000)

  let criteria = {owner: this.userId}
console.log(criteria)
  return Projects.find(criteria)
})