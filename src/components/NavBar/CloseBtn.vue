<template>
    <button
      class="close"
      @click="sidebarToggle()">
    </button>
</template>

<script>
export default {
  name: 'CloseBtn',
  props: {
    sidebarToggle: {
      type: Function,
      default: null,
    },
  },
};
</script>

<style scoped>
@import "/src/assets/styles/navbar/closeBtn.css";
</style>
