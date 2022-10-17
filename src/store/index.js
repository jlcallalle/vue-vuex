import { createStore } from 'vuex'

//Primera Variable Creada con VUEX
const store = createStore({
  state() {
    return {
        username: 'Jorge Callalle'
    }
  }
})

export default store