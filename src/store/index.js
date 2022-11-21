import { createStore } from 'vuex'

//Primera Variable Creada con VUEX
const store = createStore({
  state() {
    return {
        username: 'Jorge Callalle'
    }
  },
  getters: {
    /* firstName: (state) =>  {
      return state.username.split(' ')[1]
    },  */
    firstName: (state) => (c) => {
      return state.username.split('').join(c)
    }
  },
  mutations: {
    updateUsername(state, username) {
      state.username = username
    }
  },
  actions: {
    updateUsername({ commit, state }, username) {
      console.log('update username action!', state.username, username)
      commit('updateUsername', username)
    },
  }
})

export default store