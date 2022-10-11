<template>
  <sidebar
    :is-sidebar-active="isSidebarActive" />
  <close-btn
    :sidebar-toggle="toggleSidebar"
    @click="changeBtn()"
    :class="{ open: isOpen }"/>
  <nav-bar />
  <router-view class="router-view"/>
</template>
<script>
// @ is an alias to /src
import Sidebar from '@/components/menu/SideBar.vue';
import CloseBtn from '@/components/NavBar/CloseBtn.vue';
import NavBar from '@/components/NavBar/NavBar.vue';

export default {
  name: 'HomeView',
  components: {
    Sidebar,
    CloseBtn,
    NavBar,
  },
  data() {
    return {
      isSidebarActive: false,
      isOpen: false,
    };
  },
  methods: {
    toggleSidebar() { // Sidebar toggler
      this.isSidebarActive = !this.isSidebarActive;
    },
    changeBtn() { // class toggler button
      this.isOpen = !this.isOpen;
    },
  },
};
</script>
