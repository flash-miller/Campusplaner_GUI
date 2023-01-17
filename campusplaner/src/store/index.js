import { createStore } from 'vuex'
import createPersistedState from 'vuex-persistedstate';

export default createStore({
  state: {
    studentData: {},
    isLoggedIn: false
  },
  getters: {
    isLoggedIn(state){
      return state.isLoggedIn;
    },
    getStudentData(state){
      return state.studentData;
    },
    getStudentCourses(state){
      return state.studentData.courses;
    },
    getStudentCalendar(state){
      return state.studentData.calendar;
    },
    getStudentTodos(state){
      return state.studentData.todos;
    },
    getStudentName(state){
      return state.studentData.name;
    },
    getInfo(state){
      return state.studentData.info;
    }
  },
  mutations: {
    setStudentData(state, payload) {
      state.studentData = payload;
      state.isLoggedIn = true;
    },
    logout(state){
      state.studentData = {};
      state.isLoggedIn = false;
    }
  },
  actions: {
    login({commit}, payload){
      // Load student data json
      const studentData = require('./../assets/data/studentData.json');

      const matchedUser = studentData.students.find(e => {
        return e.id === payload.userName;
      });

      // Check if username is present
      if(!matchedUser){
        return;
      }

      // Check if password is correct
      if(matchedUser.password !== payload.userPassword){
        return;
      }

      // Set user information
      commit('setStudentData', matchedUser.studentData);
    },
    logout({commit}) {
      commit('logout');
    },
    saveState({commit}){
      
    }
  },
  modules: {
  },
  plugins: [createPersistedState()],
})
