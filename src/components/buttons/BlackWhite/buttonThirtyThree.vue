<template>
  <div class="frame">
      <button class="btn btn-33 hover-border-7">
        <span>Button 33</span>
      </button>
  </div>
</template>
<script>
export default {
  name: 'buttonThirtyThree',
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
.btn-33 span {
    color: rgb(54, 56, 55);
    background-color: rgb(172, 184, 180);;
  }
  .btn-33 span:hover {
    color: rgb(54, 56, 55);
  }
  .btn-33::before,
  .btn-33::after {
    width: 15%; height: 2px;
    background-color: rgb(54, 56, 55);
    z-index: 2;
  }

/* 17. hover-border-7 */
  .btn.hover-border-7::before,
  .btn.hover-border-7::after {
    bottom: 0;
    transition: width 0.2s 0.35s ease-out;
  }
  .btn.hover-border-7::before {
    right: 50%;
  }
  .btn.hover-border-7::after {
    left: 50%;
  }
  .btn.hover-border-7:hover::before,
  .btn.hover-border-7:hover::after {
    width: 50%;
    transition: width 0.2s ease-in;
  }

  .btn.hover-border-7 span::before,
  .btn.hover-border-7 span::after {
    width: 0%; height: 0%;
    background: transparent;
    opacity: 0;
    z-index: 2;
    transition: width 0.2s ease-in, height 0.15s 0.2s linear, opacity 0s 0.35s;
  }
  .btn.hover-border-7 span::before {
    bottom: 0; left: 0;
    border-left: 2px solid rgb(54, 56, 55);
    border-top: 2px solid rgb(54, 56, 55);
  }
  .btn.hover-border-7 span::after {
    bottom: 0; right: 0;
    border-right: 2px solid rgb(54, 56, 55);
    border-top: 2px solid rgb(54, 56, 55);
  }
  .btn.hover-border-7 span:hover::before,
  .btn.hover-border-7 span:hover::after {
    width: 50%; height: 96%;
    opacity: 1;
    transition: height 0.2s 0.2s ease-in, width 0.2s 0.4s linear, opacity 0s 0.2s;
  }
</style>
