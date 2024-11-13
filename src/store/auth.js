import axios from "axios";
import Cookies from "js-cookie";

export default {
  namespaced: true,
  state() {
    return {
      // token: Cookies.get("jwt") || null,
      token: null,
      tokenExpirationDate: null,
      // userLogin: JSON.parse(Cookies.get("profile")) || null,
      userLogin: {},
      isLogin: false,
    };
  },
  mutations: {
    setToken(state, { idToken, expiresIn }) {
      state.token = idToken;
      state.tokenExpirationDate = expiresIn;
      Cookies.set("tokenExpirationDate", expiresIn);
      Cookies.set("jwt", idToken);
    },
    setUserLogin(state, { userData, loginStatus }) {
      state.userLogin = userData;
      state.isLogin = loginStatus;
    },
    setUserLogout(state) {
      state.token = null;
      state.userLogin = {};
      state.isLogin = false;
      state.tokenExpirationDate = null;
      Cookies.remove("jwt");
      Cookies.remove("tokenExpirationDate");
      Cookies.remove("UID");
    },
  },
  actions: {
    async getRegisterData({ commit, dispatch }, payload) {
      const APIkey = "AIzaSyAIsrgnXmifNzIfCtxnvCYCxGyfzgbbGU4";
      const authUrl = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${APIkey}`;

      try {
        const { data } = await axios.post(authUrl, {
          email: payload.email,
          password: payload.password,
          returnSecureToken: true,
        });

        commit("setToken", {
          idToken: data.idToken,
          expiresIn:
            new Date().getTime() + Number.parseInt(data.expiresIn) * 1000,
        });

        const newUserData = {
          userId: data.localId,
          fullname: payload.fullname,
          username: payload.username,
          email: payload.email,
        };

        Cookies.set("UID", newUserData.userId);
        await dispatch("addNewUser", newUserData);
      } catch (err) {
        console.log("Error in getRegisterData:", err);
      }
    },

    async getLoginData({ commit, dispatch }, payload) {
      const APIkey = "AIzaSyAIsrgnXmifNzIfCtxnvCYCxGyfzgbbGU4";
      const authUrl = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${APIkey}`;

      try {
        const { data } = await axios.post(authUrl, {
          email: payload.email,
          password: payload.password,
          returnSecureToken: true,
        });

        commit("setToken", {
          idToken: data.idToken,
          expiresIn:
            new Date().getTime() + Number.parseInt(data.expiresIn) * 1000,
        });

        Cookies.set("profile", JSON.stringify(data));
        await dispatch("getUser", data.localId);
      } catch (err) {
        console.log("Error in getLoginData:", err);
      }
    },

    async getUser({ commit }, payload) {
      try {
        const { data } = await axios.get(
          "https://smartphone-project-7ac05-default-rtdb.firebaseio.com/user.json"
        );

        for (let key in data) {
          if (data[key].userId === payload) {
            Cookies.set("UID", data[key].userId);
            commit("setUserLogin", { userData: data[key], loginStatus: true });
            break;
          }
        }
      } catch (err) {
        console.log("Error in getUser:", err);
      }
    },

    async addNewUser({ commit }, newUserData) {
      try {
        await axios.post(
          "https://smartphone-project-7ac05-default-rtdb.firebaseio.com/user.json",
          newUserData
        );
        commit("setUserLogin", { userData: newUserData, loginStatus: true });
      } catch (err) {
        console.log("Error in addNewUser:", err);
      }
    },
  },
};
