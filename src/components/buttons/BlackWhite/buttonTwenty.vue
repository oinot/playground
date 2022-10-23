<template>
  <div class="frame">
     <button class="btn btn-20 hover-filled-slide-right">
        <span>Button 20</span>
      </button>
  </div>
</template>
<script>
export default {
  name: 'ButtonTwenty',
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
.btn-20::before {
    background-color: rgb(28, 31, 30);
    transition: 0.3s ease-out;
}
.btn-20 span {
  color: rgb(255,255,255);
  border: 1px solid rgb(28, 31, 30);
  transition: 0.2s 0.1s;
}
.btn-20 span:hover {
  color: rgb(28, 31, 30);
  transition: 0.2s 0.1s;
}

    /* 4. hover-filled-slide-right */
  .btn.hover-filled-slide-right::before {
    top:0; bottom: 0; right: 0;
    height: 100%; width: 100%;
  }
  .btn.hover-filled-slide-right:hover::before {
    width: 0%;
  }
</style>
