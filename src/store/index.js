import { createStore } from 'vuex'
import { getUser } from '@/api'

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
    async updateUsername({ commit, state }, username) {
      console.log('update username action!', state.username, username)
      const user = await getUser(1)
      console.log(user)
      commit('updateUsername', user.username)
    },
  }
})

export default store