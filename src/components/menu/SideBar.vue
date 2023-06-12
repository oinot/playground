<template>
  <div>
    <div :class="['sidebar', isSidebarActive ? '' : 'sidebar-hidden']">
      <div class="sidebar">
        <div class="sidebar-content">
          <div class="sidebar-header">
              <div class="top-menu"></div>
              <router-link to="/">
                <div class="round-background"></div>
                <div class="middle-menu">
                  <svg class="logo" xmlns="http://www.w3.org/2000/svg" viewBox="237.906 118.987 64.728 64.728">
                    <title>Antonio Ferraz Coutinho</title>
                    <ellipse
                      style="fill: rgb(90, 76, 141)"
                      cx="-75.564"
                      cy="-273.968"
                      rx="32.364"
                      ry="32.364"
                      transform="matrix(1, 0, 0, 1, 345.83429, 425.319305)">
                    </ellipse>
                    <path d="M -55.495 -294.935 L -57.628 -285.165 L -82.123 -285.165 L
                      -84.256 -275.395 L -69.996 -275.395 L -72.129 -265.625 L -86.389
                      -265.625 L -88.521 -255.855 L -98.757 -255.855 L -90.226 -294.935 L
                      -55.495 -294.935 Z" style="fill: rgb(233, 230, 228)"
                      transform="matrix(0.976997, -0.213255, 0.213255, 0.976997, 402.789471,
                      402.536781)">
                    </path>
                    <path d="M -78.965 -274.233 L -76.89 -284.083 L -52.59 -284.083 L -58.818
                      -254.53 L -83.118 -254.535 L -81.041 -264.385 L -66.896 -264.385 L
                      -64.82 -274.233 L -78.965 -274.233 Z"
                      style="fill: rgb(214, 61, 0)"
                      transform="matrix(0.978275, -0.207311, 0.207311,
                      0.978275, 400.190891, 405.401709)">
                    </path>
                  </svg>
                </div>
              </router-link>
              <div class="bottom-menu">
            </div>
          </div>
          <div class="sidebar-body">
            <ul>
              <li class="sidebar-item">
                <router-link to="/elements" disabled="isDisabled">
                  <span>Elements</span>
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
          <div>
            <h1 class="identity"><span>António</span>Ferraz Coutinho</h1>
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
