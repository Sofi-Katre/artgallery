import { createStore } from "vuex";

// Create a new store instance.
const store = createStore({
  state() {
    return {
      category: [],
      art: {},
    };
  },
  mutations: {
    changeCat(state, art) {
      state.category = art;
    },
    fetchingCakes(state, art) {
      state.cakes = art;
    },
  },
  actions: {
    fetchCakes({ commit }) {
      fetch("categories.json")
        .then((resp) => resp.json())
        .then((json) => {
          commit("fetchingArt", json);
          commit("changeArt", json.autumn);
        });
    },
  },
  getters: {
    getCategory(state) {
      return state.category;
    },
    getCakes(state) {
      return state.Art;
    },
  },
});

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(store);
});
