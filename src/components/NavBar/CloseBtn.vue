<template>
    <button
      class="close circle"
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
