export default {
  setUser(state, payload) {
    state.token = payload.token;
    state.userId = payload.userId;
  },
  setAutoLogout(state) {
    state.didAutoLogout = true;
  }
};