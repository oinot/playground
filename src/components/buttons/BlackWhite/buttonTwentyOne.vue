<template>
  <div class="frame">
      <button class="btn btn-21 hover-filled-opacity">
        <span>Button 21</span>
      </button>
  </div>
</template>
<script>
export default {
  name: 'ButtonTwentyOne',
};
</script>
<style scoped>
:active, :hover, :focus {
  outline: 0!important;
  outline-offset: 0;
}
::before,
::after {
  position: absolute;
  content: "";
}
.btn {
  position: relative;
  display: inline-block;
  width: auto; height: auto;
  background-color: transparent;
  border: none;
  cursor: pointer;
  min-width: 150px;
}
.btn span {
  position: relative;
  display: inline-block;
  font-size: 14px;
  font-weight: bold;
  letter-spacing: 2px;
  text-transform: uppercase;
  top: 0; left: 0;
  width: 100%;
  padding: 15px 20px;
  transition: 0.3s;
}
.btn-21::before {
    background-color: rgb(28, 31, 30);
    transition: 0.3s ease-out;
}
.btn-21 span {
  color: rgb(255,255,255);
  border: 1px solid rgb(28, 31, 30);
  transition: 0.2s 0.1s;
}
.btn-21 span:hover {
  color: rgb(28, 31, 30);
  transition: 0.2s 0.1s;
}

  /* 5. hover-filled-opacity */
  .btn.hover-filled-opacity::before {
    top:0; bottom: 0; right: 0;
    height: 100%; width: 100%;
    opacity: 1;
  }
  .btn.hover-filled-opacity:hover::before {
    opacity: 0;
  }
</style>
