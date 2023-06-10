<template>
  <header class="primary-header">
    <div class="container">
        <router-link to="/" draggable="false">
          <img
            draggable="false"
            class="nav-logo"
            src="@/assets/images/logo/logo.svg"
            alt="Ferraz Coutinho">
        </router-link>
        <nav class="primary-navigation">
            <ul class="nav-list">
              <li><router-link to="" class="nav-link" >Elements</router-link></li>
              <li><router-link to="/about" class="nav-link">About</router-link></li>
              <li><router-link to="/contact" class="nav-link">Contact</router-link></li>
            </ul>
        </nav>
    </div>
</header>
</template>
<script></script>

<style scoped>
@import "/src/assets/styles/navbar/navbar.css";
</style>
