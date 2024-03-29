const getters = {
  getMessages: (state) => (channelId) => {
    return state.messages.filter((message) => message.channelId === parseInt(channelId))
  },
  getUnreadMessages: (state, getters) => (channelId) => {
    return getters.getMessages(channelId).filter((message) => message.read === false).length
  }
  /* getMessages: (state) => {
    return state.messages
  } */
}

export default getters