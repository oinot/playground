<template>
  <div>
    <button
      class="btn btn-sm btn-link"
      @click="sidebarToggle()">X
    </button>
  </div>
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
button {
  float: right;
}
</style>
