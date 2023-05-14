<template>
  <div>
  <div :class="['sidebar', isSidebarActive  ? '' : 'sidebar-hidden']">
    <div class="sidebar">
      <div class="sidebar-content">
        <div class="sidebar-header">
          <h1>Components</h1>
        </div>
        <div class="sidebar-body">
          <ul>
            <li class="sidebar-item">
              <router-link to="/" disabled="isDisabled">
                <span>Home</span>
              </router-link>
            </li>
            <li class="sidebar-item">
              <router-link to="/video-player" disabled="isDisabled">
                <span>Video Player</span>
              </router-link>
            </li>
            <li class="sidebar-item">
              <router-link to="/buttons" disabled="isDisabled">
                <span>Animated CSS Buttons</span>
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  </div>
</template>

<script>
export default {
  name: 'SideBar',
  props: {
    isSidebarActive: {
      type: Boolean,
      default: null,
    },
  },
};
</script>

<style scoped>
@import "/src/assets/styles/sidebar/sidebar.css";
</style>
