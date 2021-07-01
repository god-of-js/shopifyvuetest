import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    modalState: true,
    modalComponent: "ResponsiveNavigation",
  },
  mutations: {
    setModal(state, params = {}) {
      state.modalState = params.modalState || false;
      state.modalComponent = params.modalComponent || "";
    },
  },
  actions: {},
  modules: {},
});
