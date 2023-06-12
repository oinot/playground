<template>
  <div class="home">
  <h1> {{ title }} </h1>
  </div>
</template>
<script>
export default {
  name: 'HomePage',
  data() {
    return {
      title: 'This is the Home Page',
    };
  },
};
</script>
<style>

html::-webkit-scrollbar {
  width: 0;
}

.home {
  background: var(--background);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: auto;
}
</style>
