export default {
  currentUser: {
    isAuthenticated: false,
    data: {},
    loading: false,
    error: null
  },
  login: {
    error: null,
    loading: false
  },
  logout: {
    error: null,
    loading: false,
    message: null
  },
  resetPassword: {
    error: null,
    loading: false,
    data: null
  },
  setNewPassword: {
    error: null,
    loading: false,
    success: false,
    msg: null
  },

  changePassword: {
    error: null,
    loading: false,
    success: false,
    msg: null
  },
  signUp: {
    error: null,
    loading: false,
    success: false,
    data: null
  },
  location: {
    data: null
  },
  checkUserExists: {
    data: null,
    userEmail: null,
    error: null,
    loading: false
  }
};
