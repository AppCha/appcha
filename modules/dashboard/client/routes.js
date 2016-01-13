FlowRouter.route('/', {
  name: "home",
  //triggersEnter: [AccountsTemplates.ensureSignedIn],
  action: function(params, queryParams) {
    BlazeLayout.render('masterLayout', {
      footer: "footer",
      main: "dashboard",
      nav: "nav",
      subnav: 'dashboard_subnav'
    })
  }
})