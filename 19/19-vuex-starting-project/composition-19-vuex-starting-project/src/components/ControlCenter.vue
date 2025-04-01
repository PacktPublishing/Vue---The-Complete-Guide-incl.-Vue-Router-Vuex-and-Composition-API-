<template>
  <button @click="inc">Increment</button>
</template>

<script>
export default {
  setup() {
    function inc() {}

    return { inc };
  },
};
</script>