// Simply 'inherites' helpers from AccountsTemplates
Template.atForm.helpers(AccountsTemplates.atFormHelpers);

Template.atForm.onRendered((e, a)=>{
  $('.tooltipped').tooltip({delay: 0});
})