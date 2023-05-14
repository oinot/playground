<template>
  <div class="frame">
    <button class="custom-btn btn-1">Button 1</button>
  </div>
</template>
<script>
export default {
  name: 'ButtonOne',
  data() {
    return {
      title: 'This is the Home Page',
    };
  },
};
</script>
<style scoped>
  /* 1 */
  .btn-1 {
    background: rgb(6,14,131);
    background: linear-gradient(0deg, rgba(6,14,131,1) 0%, rgba(12,25,180,1) 100%);
    border: none;
  }
  .btn-1:hover {
    background: rgb(0,3,255);
    background: linear-gradient(0deg, rgba(0,3,255,1) 0%, rgba(2,126,251,1) 100%);
  }
</style>
