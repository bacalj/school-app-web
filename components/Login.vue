<template>
  <div class="flex items-center">
     <button v-show="!isLoggedIn" @click="googlePop" class="h-8">login</button>
     <button v-show="isLoggedIn" @click="logout">logout</button>
     <img v-show="isLoggedIn" class="h-8 w-8 rounded-full ml-4" :src="userImg" alt="avatar of logged in user">
  </div>
</template>

<script>
import firebase from "firebase/app";
import "firebase/auth";
import { mapState, mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters({
      isLoggedIn: 'isLoggedIn',
    }),

    userImg(){
      if (this.isLoggedIn){
        return this.$store.state.authUser.photoURL
      } else {
        return null
      }
    }
  },

  methods: {
    googlePop(){
      let provider = new firebase.auth.GoogleAuthProvider()
      firebase.auth().signInWithPopup(provider).catch( (e) => {
        alert(e.message)
      })
    },

    async logout() {
      try {
        await this.$fire.auth.signOut()
      } catch (e) {
        alert(e)
      }
    },
  }
}
</script>
