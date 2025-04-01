export default {
  data() {
    return {
      alertIsVisible: false
    };
  },
  methods: {
    showAlert() {
      this.alertIsVisible = true;
    },
    hideAlert() {
      this.alertIsVisible = false;
    }
  }
};
