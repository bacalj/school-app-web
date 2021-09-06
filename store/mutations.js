export default {
  RESET_AUTH_STORE: (state) => {
    state.authUser = null,
    state.userStripeRole = null,
    state.userDomain = null,
    state.userVerified = null
  },

  SET_AUTH_USER: (state, { authUser }) => {
    state.authUser = {
      uid: authUser.uid,
      email: authUser.email,
      displayName: authUser.displayName,
      photoURL: authUser.photoURL
    }
  },
}