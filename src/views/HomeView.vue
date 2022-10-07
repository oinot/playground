<template>
  <div class="home">
    <Sidebar />
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';
import Sidebar from '@/components/menu/SideBar.vue';

export default {
  name: 'HomeView',
  components: {
    HelloWorld,
    Sidebar,
  },
};
</script>
