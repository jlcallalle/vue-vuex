const module = {
  namespaced: true,
  state() {
    return {
      id: 1,
      username: '',
      details: {
        id: 1,
        name: 'Jorge Luis',
        avatar: '/avatars/avatar.jpg'
      }
    }
  },
  getters: {
    firstName: (state) => (c) => {
      return state.username.split('').join(c)
    }
  }
}

export default module