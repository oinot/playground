<template>
  <div class="frame">
      <button class="btn btn-37 hover-border-11">
        <span>Button 37</span>
      </button>
  </div>
</template>
<script>
export default {
  name: 'buttonThirtySeven',
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
  /*--- btn-5 ---*/
  .btn-37 span {
    color: rgb(28, 31, 30);
    border: 2px solid rgb(93, 161, 99);
    transition: 0.2s;
  }
  .btn-37 span:hover {
    background-color: rgb(172, 184, 180);
  }

/* 21. hover-border-11 */
.btn.hover-border-11::before,
.btn.hover-border-11::after {
  width: 100%; height: 2px;
  background-color: rgb(54, 56, 55);
  z-index: 2;
  transition: 0.35s;
}
.btn.hover-border-11::before {
  top: 0; right: 0;
}
.btn.hover-border-11::after {
  bottom: 0; left: 0;
}
.btn.hover-border-11:hover::before,
.btn.hover-border-11:hover::after {
  width: 0%;
  transition: 0.2s 0.2s ease-out;
}

.btn.hover-border-11 span::before,
.btn.hover-border-11 span::after {
  width: 2px; height: 100%;
  background-color: rgb(54, 56, 55);
  z-index: 2;
  transition: 0.25s;
}
.btn.hover-border-11 span::before {
  bottom: 0; right: -2px;
}
.btn.hover-border-11 span::after {
  top: 0; left: -2px;
}
.btn.hover-border-11 span:hover::before,
.btn.hover-border-11 span:hover::after {
  height: 0%;
}
</style>
