export default {
  async onAuthStateChanged({ commit }, { authUser }) {
    if (!authUser) {
      commit('RESET_AUTH_STORE')
      return
    }
    if (authUser && authUser.getIdToken) {

      try {
        authUser.getIdTokenResult().then((idTokenResult) => {
         console.log('idTokenResult: ', idTokenResult)
        })
      } catch (e) {
        console.error(e)
      }
    }
    commit('SET_AUTH_USER', { authUser })
  },

  checkVuexStore(ctx) {
    if (this.$fire.auth === null) {
      throw 'Vuex Store example not working - this.$fire.auth cannot be accessed.'
    }

    alert(
      'Success. Nuxt-fire Objects can be accessed in store actions via this.$fire___'
    )
  }
}