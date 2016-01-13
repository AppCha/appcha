Projects = new Mongo.Collection('projects');

Project = new Astro.Class({
  name: 'Project',
  collection: Projects,
  transform: true,
  fields: {
    'name': 'string',
    'status': 'string',
    'owner': 'string',
    'users': {
      type: 'array'
    },
    'users.$.user_id': {
      type: 'string'
    },
    'users.$.role': {
      type: 'string',
      default: 'user'
    }
  },
  validators: {
    name: [
      Validators.required()
    ]
  },
  behaviors: {
    slug: {
      fieldName: 'name',
      slugFieldName: 'slug',
      canUpdate: true,
      unique: true,
      separator: '-'
    },
    timestamp: {
      hasCreatedField: true,
      createdFieldName: 'createdAt',
      hasUpdatedField: true,
      updatedFieldName: 'updatedAt'
    }

  }

});

