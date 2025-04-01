export default {
  increment(state) {
    state.counter = state.counter + 2;
  },
  increase(state, payload) {
    console.log(state);
    state.counter = state.counter + payload.value;
  }
};