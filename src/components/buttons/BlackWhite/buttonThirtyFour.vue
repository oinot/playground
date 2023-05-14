<template>
  <div class="frame">
      <button class="btn btn-34 hover-border-8">
        <span>Button 34</span>
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
.btn-34 span {
    color: rgb(54, 56, 55);
    background-color: rgb(172, 184, 180);;
  }
  .btn-34 span:hover {
    color: rgb(54, 56, 55);
  }
  .btn-34::before,
  .btn-34::after {
    width: 15%; height: 2px;
    background-color: rgb(54, 56, 55);
    z-index: 2;
  }

 /* 18. hover-border-8 */
  .btn.hover-border-8::before,
  .btn.hover-border-8::after {
    bottom: 0;
    width: 15%;
    transition: width 0.2s 0.35s ease-out;
  }
  .btn.hover-border-8::before {
    right: 50%;
  }
  .btn.hover-border-8::after {
    left: 50%;
  }
  .btn.hover-border-8:hover::before {
    width: 50%;
    transition: width 0.2s ease-in;
  }
  .btn.hover-border-8:hover::after {
    width: 50%;
    transition: width 0.1s ease-in;
  }

  .btn.hover-border-8 span::before,
  .btn.hover-border-8 span::after {
    width: 0%; height: 0%;
    bottom: 0;
    background: transparent;
    opacity: 0;
    z-index: 2;
  }
  .btn.hover-border-8 span::before {
    left: 0%;
    border-left: 2px solid rgb(54, 56, 55);
    transition: height 0.25s ease-in, opacity 0s 0.35s;
  }
  .btn.hover-border-8 span:hover::before {
    height: 96%;
    opacity: 1;
    transition: height 0.25s 0.2s ease-out, opacity 0s 0.2s;
  }
  .btn.hover-border-8 span::after {
    right: 0%;
    border-right: 2px solid rgb(54, 56, 55);
    border-top: 2px solid rgb(54, 56, 55);
    transition: width 0.2s ease-in, height 0.15s 0.2s linear, opacity 0s 0.35s;
  }
  .btn.hover-border-8 span:hover::after {
    width: 99%; height: 96%;
    opacity: 1;
    transition: height 0.15s 0.1s linear, width 0.2s 0.25s linear, opacity 0s 0.1s;
  }
</style>
