<script>
export default {
  data() {
    return {
      checkedNames: []
    }
  }
}
</script>

<template>
  <div>Checked names: {{ checkedNames }}</div>

  <div class="main">
    <div class="item">
      <input type="checkbox" id="jack" value="Jack" v-model="checkedNames">
      <label for="jack">Jack</label>
    </div>

    <div class="item">
      <input type="checkbox" id="john" value="John" v-model="checkedNames">
      <label for="john">John</label>
    </div>

    <div class="item">
      <input type="checkbox" id="mike" value="Mike" v-model="checkedNames">
      <label for="mike">Mike</label>
    </div>
  </div>
</template>

<style scoped>
main,
.item {
  display: flex;
}
</style>
