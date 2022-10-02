import { reactive } from "vue";
const store = reactive ({
    username: 'Jorge',
    // Funcion que muta datos, recibe como argumento del nuevo valor
    // accede al username actual  y lo actualiza el nuevo valor.
    updateUsername(username) {
        this.username = username
    }
})

export default store