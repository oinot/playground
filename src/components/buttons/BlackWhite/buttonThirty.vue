<template>
  <div class="frame">
      <button class="btn btn-30 hover-border-4">
        <span>Button 30</span>
      </button>
  </div>
</template>
<script>
export default {
  name: 'buttonThirty',
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
.btn-30 {
    padding: 5px;
  }
  .btn-30 span {
    color: rgb(255, 255, 255);
    background-color: rgb(54, 56, 55);
  }
  .btn-30::before,
  .btn-30::after {
    background: transparent;
    z-index: 2;
  }

/* 14. hover-border-4 */
  .btn.hover-border-4::before,
  .btn.hover-border-4::after {
    width: 0%; height: 0%;
    opacity: 0;
    transition: width 0.2s linear, height 0.15s 0.2s ease-out, opacity 0s 0.35s;
  }
  .btn.hover-border-4::before {
    bottom: 0; left: -1px;
    border-top: 1px solid rgb(28, 31, 30);
    border-left: 1px solid rgb(28, 31, 30);
  }
  .btn.hover-border-4::after {
    top: 0; right: 0;
    border-bottom: 1px solid rgb(28, 31, 30);
    border-right: 1px solid rgb(28, 31, 30);
  }
  .btn.hover-border-4:hover::before,
  .btn.hover-border-4:hover::after {
    width: 100%; height: 99%;
    opacity: 1;
    transition: width 0.2s 0.15s ease-out, height 0.15s ease-in, opacity 0s;
  }

</style>
