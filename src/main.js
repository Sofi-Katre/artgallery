import "./assets/main.css";

import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { createStore } from "vuex";

// Create a new store instance.
const store = createStore({
  state() {
    return {
      category: null,
      infoitem: null,
    };
  },
  mutations: {
    changeArt(state, art) {
      state.category = art;
    },
  },
  actions: {},
  getters: {
    getCategory(state) {
      return state.category;
    },
  },
});

// Install the store instance as a plugin
const app = createApp(App);
app.use(store);
app.use(router);

app.mount("#app");
