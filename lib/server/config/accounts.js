// Set up login services
Meteor.startup(function () {
  ServiceConfiguration.configurations.update(
    {service: "facebook"},
    {
      $set: {
        appId: "XXXXXXXXXXXXXXX",
        secret: "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX"
      }
    },
    {upsert: true}
  );

  ServiceConfiguration.configurations.update(
    {service: "twitter"},
    {
      $set: {
        appId: "XXXXXXXXXXXXXXX",
        secret: "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX"
      }
    },
    {upsert: true}
  );

  ServiceConfiguration.configurations.update(
    {service: "github"},
    {
      $set: {
        clientId: "XXXXXXXXXXXXXXXXXXXX",
        secret: "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX"
      }
    },
    {upsert: true}
  );

  ServiceConfiguration.configurations.update(
    {service: "google"},
    {
      $set: {
        clientId: "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
        client_email: "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
        secret: "XXXXXXXXXXXXXXXXXXXXXXXX"
      }
    },
    {upsert: true}
  );

  ServiceConfiguration.configurations.update(
    {service: "linkedin"},
    {
      $set: {
        clientId: "XXXXXXXXXXXXXX",
        secret: "XXXXXXXXXXXXXXXX"
      }
    },
    {upsert: true}
  );
});
