<template>
  <div class="input">
    <label>{{ label }}</label>
    <input :value="value" :type="inputType" v-model="input" />
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: String,
      default: ''
    },
    label: {
      type: String,
      default: ''
    },
    inputType: {
      type: String,
      default: 'text'
    }
  },
  computed: {
    input: {
      get() {
        return this.value
      },
      set(value) {
        this.$emit('input', value)
      }
    }
  }
}
</script>

<style scoped>
label {
  font-size: 13px;
  text-transform: uppercase;
  font-weight: bold;
  display: block;
  margin-bottom: 5px;
}

input {
  border: 1px solid #aaa;
  padding: 20px;
  width: 100%;
  box-sizing: border-box;
}
</style>
