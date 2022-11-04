<template>
  <div class="frame">
      <button class="btn btn-36 hover-border-10">
        <span>Button 36</span>
      </button>
  </div>
</template>
<script>
export default {
  name: 'buttonThirtySix',
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
.btn-36 span {
    color: rgb(54, 56, 55);
    background-color: rgb(172, 184, 180);
}
.btn-36 span:hover {
  color: rgb(54, 56, 55);
}
.btn-36::before,
.btn-36::after {
  width: 15%; height: 2px;
  background-color: rgb(54, 56, 55);
  z-index: 2;
}

/* 20. hover-border-10 */
.btn.hover-border-10::before,
.btn.hover-border-10::after {
  left: 0%;
  height: 30%;
  width: 2px;
  transition: height 0.2s 0.35s ease-out;
}
.btn.hover-border-10::before {
  top: 50%;
}
.btn.hover-border-10::after {
  bottom: 50%;
}
.btn.hover-border-10:hover::before {
  height: 50%;
  transition: height 0.2s ease-in;
}
.btn.hover-border-10:hover::after {
  height: 50%;
  transition: height 0.1s ease-in;
}

.btn.hover-border-10 span::before,
.btn.hover-border-10 span::after {
  width: 0%; height: 0%;
  background: transparent;
  opacity: 0;
  z-index: 2;
}
.btn.hover-border-10 span::after {
  bottom: 0; left: 0%;
  border-bottom: 2px solid rgb(54, 56, 55);
  transition: width 0.25s ease-in, opacity 0s 0.35s;
}
.btn.hover-border-10 span:hover::after {
  width: 100%;
  opacity: 1;
  transition: width 0.25s 0.2s ease-out, opacity 0s 0.2s;
}
.btn.hover-border-10 span::before {
  top: 0%; left: 0%;
  border-top: 2px solid rgb(54, 56, 55);
  border-right: 2px solid rgb(54, 56, 55);
  transition: height 0.15s ease-in, width 0.2s 0.15s linear, opacity 0s 0.35s;
}
.btn.hover-border-10 span:hover::before {
  width: 98.5%; height: 96%;
  opacity: 1;
  transition: width 0.2s 0.1s linear, height 0.15s 0.3s ease-out, opacity 0s 0.1s;
}
</style>
