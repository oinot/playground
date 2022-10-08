<template>
  <nav>
   <sidebar
      :is-sidebar-active="isSidebarActive" />
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
    <close-btn
      :sidebar-toggle="toggleSidebar" />
  </nav>
  <router-view/>
</template>
<script>
// @ is an alias to /src
import Sidebar from '@/components/menu/SideBar.vue';
import CloseBtn from '@/components/menu/CloseBtn.vue';

export default {
  name: 'HomeView',
  components: {
    Sidebar,
    CloseBtn,
  },

  data() {
    return {
      isSidebarActive: false,
    };
  },
  methods: {
    toggleSidebar() {
      this.isSidebarActive = !this.isSidebarActive;
    },
  },
};
</script>
