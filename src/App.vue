<script setup>
import ReactivityFundamentals from './components/ReactivityFundamentals.vue'
import FormInputBindings from './components/FormInputBindings.vue'
</script>

<script>
export default {
  data() {
    return {
      count: 11,
    }
  }
}
</script>

<template>
  <ReactivityFundamentals :init-count="count" />
</template>

<style scoped>

</style>
