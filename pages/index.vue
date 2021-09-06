<template>
  <div>
    <client-only>
      <Login v-if="!loggedIn" />
    </client-only>
    
    <EndeavorsList v-show="loggedIn"/>
  </div>
</template>

<script>
export default {
  data(){
    return {
      loggedIn: false
    }
  }
}
</script>

