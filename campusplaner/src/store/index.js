import { createStore } from 'vuex'
import createPersistedState from 'vuex-persistedstate';

export default createStore({
  state: {
    studentData: {},
    notificationData: {},
    courseData: {},
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
    },
    getInfo(state){
      return state.studentData.info;
    },
    getCourse(state){
      return state.courseData.courses;
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
    setCourseData(state, payload){
      state.courseData = payload;
    },
    logout(state){
      state.studentData = {};
      state.isLoggedIn = false;
    },
    addTodo(state, payload) {
      state.studentData.todos.unshift(payload);
    },
    removeTodo(state, payload) {
      state.studentData.todos.splice(payload.index, 1);
    },
    addCourse(state, payload){
      state.studentData.courses.push(payload);
    }
  },
  actions: {
    login({commit}, payload){
      // Load student data json
      const studentData = require('./../assets/data/studentData.json');
      const notificationData = require('./../assets/data/notificationData.json');
      const courseData = require('./../assets/data/courseData.json');

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
      commit('setCourseData', courseData);
    },
    logout({commit}) {
      commit('logout');
    },
    saveState({commit}){
      
    },
    addTodo({commit}, payload) {
      commit('addTodo', payload);
    },
    removeTodo({commit}, payload) {
      commit('removeTodo', payload);
    },
    addCourse({commit}, payload){
      commit('addCourse', payload)
    }

  },
  modules: {
  },
  plugins: [createPersistedState()],
})
