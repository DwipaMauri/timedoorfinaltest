import axios from "axios";

export default {
  namespaced: true,
  state() {
    return {
      smartphones: [],
    };
  },
  getters: {},
  mutations: {
    setSmartphoneData(state, payload) {
      state.smartphones = payload;
    },
    setNewSmartphone(state, payload) {
      // Menambahkan data baru ke daftar smartphone
      state.smartphones.push(payload);
    },
  },
  actions: {
    async getSmartphoneData({ commit }) {
      try {
        const { data } = await axios.get(
          "https://smartphone-project-7ac05-default-rtdb.firebaseio.com/smartphones.json"
        );
        const arr = [];
        for (let key in data) {
          arr.push({ id: key, ...data[key] });
        }
        commit("setSmartphoneData", arr);
      } catch (err) {
        console.error("Error fetching smartphone data:", err);
      }
    },
    async addNewSmartphone({ commit, rootState }, payload) {
      const newData = {
        ...payload,
        username: rootState.auth.userLogin?.username,
        createdAt: Date.now(),
        likes: ["null"],
        userId: rootState.auth.userLogin?.userId,
      };

      try {
        const { data } = await axios.post(
          `https://smartphone-project-7ac05-default-rtdb.firebaseio.com/smartphones.json?auth=${rootState.auth.token}`,
          newData
        );

        commit("setNewSmartphone", { id: data.name, ...newData });
      } catch (err) {
        console.error("Error adding new smartphone:", err);
      }
    },
  },
};
