<template>
  <div>
    <p>
      <CustomInput v-model="item.name" label="Ime todo itema" />
    </p>
    <p>
      <textarea v-model="item.description"></textarea>
    </p>
    <button @click="editItem">Edit</button>
  </div>
</template>

<script>
import CustomInput from '@/components/CustomInput.vue'

export default {
  components: {
    CustomInput
  },
  data() {
    return {
      item: { ...this.$store.state.item } // Dohvaćamo defoltno stanje iz storea ali ga "kloniramo" da izgubimo referencu na store, jer u protivnome bi se promjenom vrijednosti name ili description mijenjala i vrijednosti u storeu.
    }
  },
  methods: {
    editItem() {
      this.$store.dispatch('editItem', { ...this.item }) // Isto tako moramo klonirati objekt natrag kad ga šaljemo u store jer će se isti problem događati, odnosno jednom kad lupimo "Edit" gumb tekstualno polje i vrijednost u storeu bi se sinkronizirano mijenjali, što tu ne želimo. Probajte sami - maknite { ... } odnosno ostavite samo this.item kao parametar pa probajte mijenjati vrijednosti i stisnuti edit pa ponovo mijenjati vrijednosti.
    }
  }
}
</script>

<style scoped>
div {
  max-width: 600px;
  margin: 20px auto;
}

input,
textarea {
  padding: 20px;
  width: 100%;
  border: 1px solid #aaa;
  box-sizing: border-box;
}

button {
  background: black;
  padding: 20px 40px;
  border: 0;
  color: white;
  width: 100%;
}
</style>
