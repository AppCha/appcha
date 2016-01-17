Meteor.methods({
  "project.create"(project) {
    if (Meteor.isServer){
      project.owner = this.userId;
    }

    if (project.validate()) {
      project.save()
      return project
    }
    project.throwValidationException();
  }
})