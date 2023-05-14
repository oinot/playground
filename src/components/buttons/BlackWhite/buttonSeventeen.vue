<template>
  <div class="frame">
    <button class="btn btn-17 hover-filled-slide-down">
      <span>Button 17</span>
    </button>
  </div>
</template>
<script>
export default {
  name: 'ButtonSeventeen',
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
/*--- btn-17 ---*/
.btn {
  position: relative;
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

.btn-17::before {
  background-color: rgb(28, 31, 30);
  transition: 0.3s ease-out;
}
.btn-17 span {
  color: rgb(255,255,255);
  border: 1px solid rgb(28, 31, 30);
  transition: 0.2s 0.1s;
}
.btn-17 span:hover {
  color: rgb(28, 31, 30);
  transition: 0.2s 0.1s;
}

/* 1.hover-filled-slide-down */
.btn.hover-filled-slide-down::before {
  bottom: 0; left: 0; right: 0;
  height: 100%; width: 100%;
}
.btn.hover-filled-slide-down:hover::before {
  height: 0%;
}
</style>
