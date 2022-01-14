<template>
  <div id="app">
    <dl>
      <dt>Ime: {{ item.name }}</dt>
      <dd>Opis: {{ item.description }}</dd>
    </dl>

    <Edit />
    <Count />
  </div>
</template>

<script>
import Edit from './components/Edit.vue'
import Count from './components/Count.vue'

export default {
  name: 'App',
  components: {
    Edit,
    Count
  },
  computed: {
    item() {
      return this.$store.state.item
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}

dl {
  max-width: 600px;
  margin: 20px auto 60px auto;
  background: #eee;
  padding: 20px;
  box-sizing: border-box;
}

dd,
dt {
  margin: 0;
}
</style>
