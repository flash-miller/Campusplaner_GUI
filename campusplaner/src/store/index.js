import { createStore } from 'vuex'
import createPersistedState from 'vuex-persistedstate';

export default createStore({
  state: {
    studentData: {},
    notificationData: {},
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
    getNotifications(state){
      return state.notificationData;
    }
  },
  mutations: {
    setStudentData(state, payload) {
      state.studentData = payload;
      state.isLoggedIn = true;
    },
    setNotificationData(state, payload){
      state.notificationData = payload;
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
      const notificationData = require('./../assets/data/notificationData.json');

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
      commit('setNotificationData', notificationData);
    },
    logout({commit}) {
      commit('logout');
    }
  },
  modules: {
  },
  plugins: [createPersistedState()],
})
