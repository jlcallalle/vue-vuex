const getters = {
  getMessages: (state) => (channelId) => {
    return state.messages.filter((message) => message.channelId === parseInt(channelId))
  }
  /* getMessages: (state) => {
    return state.messages
  } */
}

export default getters