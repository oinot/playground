<template>
  <div class="frame">
      <button class="btn btn-3 hover-border-5">
        <span>Button 31</span>
      </button>
  </div>
</template>
<script>
export default {
  name: 'buttonThirtyOne',
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
.btn-31 {
    padding: 5px;
  }
  .btn-31 span {
    color: rgb(255, 255, 255);
    background-color: rgb(54, 56, 55);
  }
  .btn-31::before,
  .btn-31::after {
    background: transparent;
    z-index: 2;
  }

/* 15. hover-border-5 */
  .btn.hover-border-5::before,
  .btn.hover-border-5::after {
    width: 0%; height: 0%;
    opacity: 0;
  }
  .btn.hover-border-5::before {
    top: 0; right: 0;
    border-top: 1px solid rgb(28, 31, 30);
    border-left: 1px solid rgb(28, 31, 30);
    transition: width 0.2s 0.5s ease-out, height 0.15s 0.35s linear, opacity 0s 0.7s;
  }
  .btn.hover-border-5::after {
    bottom: 0; left: 0px;
    border-bottom: 1px solid rgb(28, 31, 30);
    border-right: 1px solid rgb(28, 31, 30);
    transition: width 0.2s 0.15s linear, height 0.15s ease-in, opacity 0s 0.35s;
  }
  .btn.hover-border-5:hover::before,
  .btn.hover-border-5:hover::after {
    width: 100%; height: 96%;
    opacity: 1;
  }
  .btn.hover-border-5:hover::before {
    transition: width 0.2s ease-in, height 0.15s 0.2s linear, opacity 0s;   /* 1,2 */
  }
  .btn.hover-border-5:hover::after {
    transition: width 0.2s 0.35s linear, height 0.15s 0.5s ease-out, opacity 0s 0.3s;
  }
</style>
