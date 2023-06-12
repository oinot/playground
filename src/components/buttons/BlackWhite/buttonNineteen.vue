<template>
  <div class="frame">
      <button class="btn btn-19 hover-filled-slide-left">
        <span>Button 19</span>
      </button>
  </div>
</template>
<script>
export default {
  name: 'ButtonNineteen',
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
.btn-19::before {
    background-color: rgb(28, 31, 30);
    transition: 0.3s ease-out;
}
.btn-19 span {
  color: rgb(255,255,255);
  border: 1px solid rgb(28, 31, 30);
  transition: 0.2s 0.1s;
}
.btn-19 span:hover {
  color: rgb(28, 31, 30);
  transition: 0.2s 0.1s;
}

  /* 3.hover-filled-slide-left */
  .btn.hover-filled-slide-left::before {
    top: 0; bottom: 0; left: 0;
    height: 100%; width: 100%;
  }
  .btn.hover-filled-slide-left:hover::before {
    width: 0%;
  }
</style>
