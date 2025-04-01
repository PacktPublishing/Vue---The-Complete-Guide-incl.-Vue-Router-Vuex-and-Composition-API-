export const lengthAwareMixin = {
    computed: {
        lengthAware() {
            return this.secondText + ' (' + this.secondText.length + ')';
        }
    }
};