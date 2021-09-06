<template>
  <div>

    <Login v-show="!loggedIn" />
   
    
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

