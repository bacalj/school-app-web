<template>
  <div>

    <div v-show="!isLoggedIn">Please log in</div>

    <EndeavorsList v-show="isLoggedIn"/>

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
    })
  }
}
</script>
