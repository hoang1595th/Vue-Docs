<template>
  <div class="item">
    {{ this.initAge }}
  </div>
</template>

<style scoped>
</style>

<script>
  export default {
    data() {
      return {
        initAge: 1
      }
    },
    updated() {
      console.log("child update")
    }
  }
  
  </script>
