<template>
  <div class="home">
    <Sidebar
      :is-sidebar-active="isSidebarActive"
      :sidebar-toggle="toggleSidebar" />
  </div>
</template>

<script>
// @ is an alias to /src
import Sidebar from '@/components/menu/SideBar.vue';

export default {
  name: 'HomeView',
  components: {
    Sidebar,
  },

  data() {
    return {
      isSidebarActive: true,
    };
  },
  methods: {
    toggleSidebar() {
      this.isSidebarActive = !this.isSidebarActive;
    },
  },
};
</script>
