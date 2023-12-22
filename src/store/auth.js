// src/store/modules/auth.js

// const axios =require('axios');
// const instance=axios.create({ baseUrl:'http://127.0.0.1:8000/api/auth'});
const state = {

    token: null, // Stockez le token d'authentification ici
    userId: null, 
  };
  
  const mutations = {
    setToken(state, token) {
     return state.token = token;
    },
    clearToken(state) {
      state.token = null;
    },
  };
  
  const actions = {
    login({ commit }, token) {
      commit('setToken', token);
    },
    logout({ commit }) {
      commit('clearToken');
    },
    createAccount ({ commit }, userInfos){
      commit;
      instance.post('/register',userInfos)
      console.log(userInfos);
    }
  };
  
  const getters = {
    isAuthenticated: (state) => state.token !== null,
  };
  
  export default {
    state,
    mutations,
    actions,
    getters,
  };
  