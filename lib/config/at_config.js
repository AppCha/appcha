// Options
AccountsTemplates.configure({
  defaultLayout: 'loginLayout',
  defaultLayoutRegions: {
    nav: 'nav',
    footer: 'footer',
  },
  defaultContentRegion: 'main',
  showForgotPasswordLink: true,
  overrideLoginErrors: true,
  enablePasswordChange: true,

  sendVerificationEmail: true,
  enforceEmailVerification: true,
  showLabels: false,

  continuousValidation: false,
  negativeFeedback: false,
  negativeValidation: true,
  positiveValidation: true,
  positiveFeedback: true,
  showValidating: true,

  negativeValidation: true,
  positiveValidation: true,
  negativeFeedback: false,
  positiveFeedback: true,

  // Privacy Policy and Terms of Use
  //privacyUrl: 'privacy',
  //termsUrl: 'terms-of-use',
  texts: {
    title: {
      changePwd: "Password Title",
      enrollAccount: "Enroll Title",
      forgotPwd: "Forgot Pwd Title",
      resetPwd: "Reset Pwd Title",
      signIn: "Welcome back, Please log in",
      signUp: "Create an account",
      verifyEmail: "Verify Email Title",
    },
    socialSignIn: 'Log in using',
    socialWith: '',
    sep: 'Or use your Email & Password'
  }
});
