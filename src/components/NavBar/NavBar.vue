<template>
<div class="container">
  <div class="navbar">
    <h1> {{ title }} </h1>
  </div>
</div>
</template>
<script>
export default {
  name: 'NavBar',
  props: {
    title: {
      type: String,
    },
  },
};
</script>

<style scoped>
@import "/src/assets/styles/navbar/navbar.css";
</style>
