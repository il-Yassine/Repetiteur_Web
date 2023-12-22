import { createStore } from 'vuex'
import auth from './auth';
export default createStore({
  state: {
    token:'',
    parents_id:'',
    user_id:'',
    users: [
      { id:0, name: 'marcel' },
      { id:1, name: 'roger' }
    ],
    notifDisplay: false,
    notifMessage: ''
  },
  getters: {

    //getUser(state, id)
    getUserToken (state) {
      return state.token
    },
    //getUser(state, id)
    getUserId (state){
      return state.user_id
    },
    //getUser(state, id)
    getUserParentsId (state) {
      return state.parents_id
    },






    getMarcel(state){
      return state.users[0].name
    },
    //getUser(state, id)
    getUser: (state) => (id) => {
      return state.users[id].name
    },
    getNotif: (state) => {
      return state.notifDisplay
    },
    getNotifMessage: (state) => {
      return state.notifMessage
    }
  },
  mutations: {
    setToken(state, token) {
      return state.token = token;
     },
     clearToken(state) {
       state.token = null;
     },
     
     setUserId(state,user_id){
      return state.user_id = user_id;
     },
     setUserParentsId(state,parents_id){ 
      return state.parents_id = parents_id;
     },
    changeMarcel(state, payload){
      state.users[0].name = payload.name
    },
    displayNotif(state, payload){
      state.notifDisplay = payload.d
      state.notifMessage = payload.mes
    }
  },
  actions: {
    modify(context, payload){
    //modify({commit}, payload){
      console.log(context)
      context.commit('changeMarcel', {name: payload.name})
      //commit('changeMarcel', {name: payload.name})
    }
  },
  modules: {
   // auth,
  }
})
