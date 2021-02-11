export const mutations = {
  incrementCounter(state) {
    state.counter++;
  },

  setCounter(state, counter) {
    state.counter = counter;
  },

  setActiveUser(state, activeUser) {
    state.activeUser = activeUser;
  },

  setToken(state, token) {
    state.token = token;
  },
};