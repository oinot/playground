<template>
  <div>
  <div :class="['sidebar', isSidebarActive  ? '' : 'sidebar-hidden']">
    <div class="sidebar">
      <div class="sidebar-content">
        <div class="sidebar-header">
          <h1>Components</h1>
          <button
            class="btn btn-sm btn-link"
            @click="sidebarToggle()">X
          </button>
        </div>
        <div class="sidebar-body">
          <ul>
            <li class="sidebar-item">
              <router-link to="/" disabled="isDisabled">
                <i class="material-icons-outlined">code</i>
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
    sidebarToggle: {
      type: Function,
      default: null,
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.sidebar {
  position: fixed;
  top: 0;
  left: 0;
  transform: translateX(0px);
  opacity: 1;
  visibility: visible;
  width: calc(3rem * 6);
  height: 100%;
  background-color: #ffffff;
  color: #121212;
  border-right: 3px solid #dadce0;
  transition: .2s ease-in-out;
  z-index: 99;
  padding: 20px;
}
.sidebar-hidden {
  transform: translateX(-300px);
  opacity: 0;
  visibility: hidden;
}
.sidebar-content {
  display: flex;
  flex-direction: column;
  flex-basis: auto;
  flex-wrap: nowrap;
  height: 100%;
  min-height: 100%;
}
.sidebar-header {
  padding: 10px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  word-break: break-all;
  align-items: center;
  border-bottom: 1px solid #dadce0;
}
.sidebar-body {
  padding: 10px 5px 10px 5px;
  margin: 20px 0 20px 0;
  overflow-y: scroll;
  overflow-x: hidden;
  flex: 1;
}
.sidebar-item {
  color: #52595f;
  border: 1px solid transparent;
  border-radius: 8px;
  transition: all 0.3s cubic-bezier(.25, .8, .25, 1);
  padding: .5rem;
  margin-bottom: .5rem;
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
  text-decoration: none;
  background-color: transparent;
}
</style>
