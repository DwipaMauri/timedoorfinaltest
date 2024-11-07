import { createStore } from "vuex";
import smartphone from "./smartphone";
import auth from "./auth";

export const store = createStore({
  modules: {
    smartphone,
    auth,
  },
});
