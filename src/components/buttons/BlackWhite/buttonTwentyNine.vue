<template>
  <div class="frame">
      <button class="btn btn-29 hover-border-3">
        <span>Button 29</span>
      </button>
  </div>
</template>
<script>
export default {
  name: 'buttonTwentyNine',
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
.btn-29 {
    padding: 5px;
  }
  .btn-29 span {
    color: rgb(255, 255, 255);
    background-color: rgb(54, 56, 55);
  }
  .btn-29::before,
  .btn-29::after {
    background: transparent;
    z-index: 2;
  }

 /* 13. hover-border-3 */
  .btn.hover-border-3::before,
  .btn.hover-border-3::after {
    width: 0%; height: 0%;
    opacity: 0;
    transition: width 0.2s 0.15s linear, height 0.15s linear, opacity 0s 0.35s;
  }
  .btn.hover-border-3::before {
    top: 0; right: 0;
    border-top: 1px solid rgb(28, 31, 30);
    border-left: 1px solid rgb(28, 31, 30);
  }
  .btn.hover-border-3::after {
    bottom: 0; left: 0;
    border-bottom: 1px solid rgb(28, 31, 30);
    border-right: 1px solid rgb(28, 31, 30);
  }
  .btn.hover-border-3:hover::before,
  .btn.hover-border-3:hover::after {
    width: 100%; height: 99%;
    opacity: 1;
    transition: width 0.2s linear, height 0.15s 0.2s linear, opacity 0s;
  }
</style>
