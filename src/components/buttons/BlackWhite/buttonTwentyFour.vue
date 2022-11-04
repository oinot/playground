<template>
  <div class="frame">
      <button class="btn btn-24 hover-slide-left">
        <span>Button 24</span>
      </button>
  </div>
</template>
<script>
export default {
  name: 'buttonTwentyFour',
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
.btn-24::before {
    background-color: rgb(28, 31, 30);
    transition: 0.3s ease-out;
  }
  .btn-24 span {
    color: rgb(28, 31, 30);
    border: 1px solid rgb(28, 31, 30);
    transition: 0.2s;
  }
  .btn-24 span:hover {
    color: rgb(255,255,255);
    transition: 0.2s 0.1s;
  }

  /* 8. hover-slide-left */
  .btn.hover-slide-left::before {
    top: 0; bottom: 0; right: 0;
    height: 100%; width: 0%;
  }
  .btn.hover-slide-left:hover::before {
    width: 100%;
  }
</style>
