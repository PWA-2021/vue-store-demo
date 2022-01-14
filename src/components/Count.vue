<template>
  <div>
    <p>Count: {{ count }}</p>
    <button @click="increment(-1)">-</button>
    <button @click="increment(1)">+</button>
  </div>
</template>

<script>
export default {
  methods: {
    increment(val) {
      this.$store.dispatch('increment', val)
    }
  },
  computed: {
    count() {
      return this.$store.state.count
    }
  }
}
</script>

<style></style>
