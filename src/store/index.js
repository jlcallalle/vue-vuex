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
      return state.username.split('').reverse().join(c)
    }
  }
})

export default store