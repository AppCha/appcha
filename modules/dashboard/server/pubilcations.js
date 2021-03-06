Meteor.publish("dashboard_projects", function(option) {
  //Meteor._sleepForMs(2000)
  check(option, String);
  let criteria = {owner: this.userId}
  let options = {}
  if (option === 'recent'){
    options = {sort: {updatedAt: -1}, limit: 5}
  }else if (option === 'starred'){
    //options = {sort: {updatedAt: -1}, limit: 0}
    //criteria.owner = 'foo'
    return this.ready(); // simulating no data
  }else{
    options = {sort: {updatedAt: -1}}
  }

  return Projects.find(criteria, options)
})