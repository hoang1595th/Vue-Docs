<script>
export default {
  data() {
    return {
      count: 0,
      firstName: 'John',
      lastName: 'Doe'
    }
  },
  methods: {
    increment() {
      this.count++
    }
  },
  mounted() {
    // methods can be called in lifecycle hooks, or other methods!
    this.increment();
    this.fullName = "nguyen hoang";
  },
  computed: {
    publishedBooksMessage() {
      return this.count % 2 === 0 ? 'Yes' : 'No'
    },
    fullName: {
      // getter
      get() {
        return this.firstName + ' ' + this.lastName
      },
      // setter
      set(newValue) {
        console.log("newValue", newValue);
        // Note: we are using destructuring assignment syntax here.
        [this.firstName, this.lastName] = newValue.split(' ')
      }
    }
  }
}

</script>

<template>
  <div class="wrapper">
    <div>
      {{ count }}
    </div>
    <div>
      {{ publishedBooksMessage }}
    </div>
    <button @click="increment()">increment</button>
    <hr>
    <div>{{ fullName }}</div>
  </div>
</template>

<style scoped>
.wrapper {
  display: flex;
  flex-direction: column;
}
</style>
