<template>
  <h1 class="hello">sidebar</h1>
  <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.
  Incidunt dolorum sit tenetur nostrum distinctio,
  eveniet vitae vel tempore placeat non possimus,
  beatae nobis, ut sequi aliquid alias veniam ad doloremque!</p>
</template>

<script>
export default {
  name: 'SideBar',
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
}
</style>
