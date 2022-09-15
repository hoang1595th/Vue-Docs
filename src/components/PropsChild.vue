<script>
  export default {
    props: {
      modelValue: String,
      modelModifiers: {
        default: () => ({})
      }
    },
    emits: ['update:modelValue'],
    created() {
      console.log(this.modelModifiers) // { capitalize: true }
    }
  }
  </script>
  
  <template>
    <input
      type="number"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
    />
  </template>