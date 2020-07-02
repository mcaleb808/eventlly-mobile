module.exports = {
  auth: {
    submitting: false,
    success: false,
    successMessage: '',
    confirmMessage: '',
    username: '',
    email: '',
    password: '',
    loginMessage: '',
    signupMessage: '',
    resetPwdMessage: '',
    changePwdMessage: '',
    errors: []
  },
  currentUser: {
    isLoggedIn: false,
    profile: {
      image: '',
      accountName: '',
      firstName: '',
      lastName: '',
      description: '',
      tickets: '',
      social: [],
      submitting: false,
      error: null
    },
    events: {
      submitting: false,
      error: null,
      eventsList: []
    },
    error: '',
    isLoading: true
  }
};
