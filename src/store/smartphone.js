import axios from "axios";

export default {
  namespaced: true,
  state() {
    return {
      smartphones: [],
      smartphoneDetail: [],
      card: [],
      orders: [],
    };
  },
  getters: {
    cardItems(state) {
      return state.card;
    },
    orderHistory(state) {
      return state.orders;
    },
  },
  mutations: {
    setSmartphoneData(state, payload) {
      state.smartphones = payload;
    },
    setSmartphoneDetail(state, payload) {
      state.smartphoneDetail = payload;
    },
    setNewSmartphone(state, payload) {
      state.smartphones.push(payload);
    },
    addToCard(state, payload) {
      state.card.push(payload);
    },
    removeFromCard(state, index) {
      state.card.splice(index, 1);
    },
    clearCard(state) {
      state.card = [];
    },
    setOrders(state, payload) {
      state.orders = payload;
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
    async getSmartphoneDetail({ commit }, payload) {
      try {
        const { data } = await axios.get(
          `https://smartphone-project-7ac05-default-rtdb.firebaseio.com/smartphones/${payload}.json`
        );
        commit("setSmartphoneDetail", data);
        return data;
      } catch (err) {
        console.error("Error fetching smartphone detail:", err);
      }
    },
    addToCard({ commit }, smartphone) {
      commit("addToCard", smartphone);
    },
    async deleteSmartphone({ dispatch, rootState }, payload) {
      try {
        await axios.delete(
          `https://smartphone-project-7ac05-default-rtdb.firebaseio.com/smartphones/${payload}.json?auth=${rootState.auth.token}`
        );
        await dispatch("getSmartphoneData");
      } catch (err) {
        console.error("Error deleting smartphone:", err);
      }
    },
    async updateSmartphone({ dispatch, rootState }, { id, newSmartphone }) {
      try {
        await axios.put(
          `https://smartphone-project-7ac05-default-rtdb.firebaseio.com/smartphones/${id}.json?auth=${rootState.auth.token}`,
          newSmartphone
        );
        await dispatch("getSmartphoneData");
      } catch (err) {
        console.error("Error updating smartphone:", err);
      }
    },
    async confirmOrder({ commit, state, rootState }) {
      const orderData = {
        items: state.card,
        userId: rootState.auth.userLogin.userId,
        username: rootState.auth.userLogin.username,
        orderDate: Date.now(),
      };

      try {
        await axios.post(
          `https://smartphone-project-7ac05-default-rtdb.firebaseio.com/orders.json?auth=${rootState.auth.token}`,
          orderData
        );
        commit("clearCard");
      } catch (err) {
        console.error("Error confirming order:", err);
      }
    },
    async getOrderHistory({ commit, rootState }) {
      try {
        const { data } = await axios.get(
          `https://smartphone-project-7ac05-default-rtdb.firebaseio.com/orders.json?auth=${rootState.auth.token}`
        );

        const orders = [];
        for (let key in data) {
          // Ensure the userId is checked correctly
          if (data[key].userId === rootState.auth.userLogin.userId) {
            orders.push({ id: key, ...data[key] });
          }
        }

        console.log("Fetched orders:", orders); // Debugging log
        commit("setOrders", orders);
      } catch (err) {
        console.error("Error fetching order history:", err);
      }
    },
  },
};
