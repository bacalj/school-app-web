<template>
  <div class="my-2 flex">

    <div class="flex items-center mr-6">
      <nuxt-link v-show="isLoggedIn" to="/materials">materials</nuxt-link>
    </div>

    <Login />

  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters({
      isLoggedIn: 'isLoggedIn'
    })
  }
}
</script>
