import { createStore } from 'vuex'
import createPersistedState from 'vuex-persistedstate';

export default createStore({
  state: {
    userData: {
      userName: "",
      userPassword: "",
    },
  },
  getters: {
    isLoggedIn(state){
      return state.userData.userName != "" && state.userData.userPassword != "";
    }
  },
  mutations: {
    setUserData(state, payload) {
      state.userData.userName = payload.userName;
      state.userData.userPassword = payload.userPassword;
    },
    logout(state){
      state.userData.userName = "";
      state.userData.userPassword = "";
    }
  },
  actions: {
    setUserData({commit}, payload) {
      commit('setUserData', {userName: payload.userName, userPassword: payload.userPassword});
    },
    logout({commit}) {
      commit('logout');
    }
  },
  modules: {
  },
  plugins: [createPersistedState()],
})
