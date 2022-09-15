<template>
  <div class="item">
    <div>{{ age }}</div>
    <PropsChild v-model.capitalize="age"></PropsChild>
    <button @click="this.increment()">age increase</button>
  </div>
</template>

<style scoped>
</style>

<script>
  import PropsChild from './PropsChild.vue';
  export default {
    data() {
      return {
        age: 0
      }
    },
    components: {
      'PropsChild': PropsChild
    },
    methods: {
      increment() {
        this.age++
      }
    },
    updated() {
      console.log("father update");
    }
  }
  
  </script>
