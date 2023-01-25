import { createStore } from 'vuex'
import { getUser } from '@/api'

//Primera Variable Creada con VUEX
const store = createStore({
  state() {
    return {
        username: '',
        status: null,
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
    },
    setStatus(state, value) {
      state.status = value
    }
  },
  actions: {
    async updateUsername({ commit, state, rootState }, username) {
      console.log('update username action!', state.username, username)
      const user = await getUser(1)
      console.log(user)
      commit('updateUsername', user.username)
      if(state.username) {
        commit('setStatus', 'active')
        console.log(rootState.status)
      }
    },
  }
})

export default store