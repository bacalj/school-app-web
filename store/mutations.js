export default {
  RESET_AUTH_STORE: (state) => {
    state.authUser = null
  },

  SET_AUTH_USER: (state, { authUser }) => {
    console.log('calling SET_AUTH_USER')
    state.authUser = {
      uid: authUser.uid,
      email: authUser.email,
      displayName: authUser.displayName,
      photoURL: authUser.photoURL
    }
  },
}
