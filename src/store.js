import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    count: 0,
    item: {
      name: 'Neki blog post title',
      description: 'I opis'
    }
  },
  mutations: {
    SET_COUNT(state, amount) {
      state.count += amount
    },
    SET_ITEM(state, item) {
      state.item = item
    }
  },
  actions: {
    increment(context, amount) {
      context.commit('SET_COUNT', amount)
    },
    editItem(context, item) {
      context.commit('SET_ITEM', item)
    }
  },
  getters: {
    getItem: (state) => {
      return state.item
    }
  }
})

export default store
