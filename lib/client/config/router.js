FlowRouter.notFound = {
  action: function() {
    BlazeLayout.render('masterLayout', {
      footer: "footer",
      main: "pageNotFound",
      nav: "nav",
    });
  }
};


FlowRouter.triggers.enter([AccountsTemplates.ensureSignedIn]);

//Routes
AccountsTemplates.configureRoute('changePwd');
AccountsTemplates.configureRoute('forgotPwd');
AccountsTemplates.configureRoute('resetPwd');
AccountsTemplates.configureRoute('signIn');
AccountsTemplates.configureRoute('signUp');
AccountsTemplates.configureRoute('verifyEmail');

Meteor.startup(function() {
  Tracker.autorun(function(){
    if(!Accounts.userId()) {
      FlowRouter.go('atSignIn')
      $('body').removeClass("authenticated");
    } else{
      $('body').addClass("authenticated");
    }
  })
})
