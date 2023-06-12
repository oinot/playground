<template>
  <div class="frame">
      <button class="btn btn-32 hover-border-6">
        <span>Button 32</span>
      </button>
  </div>
</template>
<script>
export default {
  name: 'buttonThirtyTwo',
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
.btn-32 span {
    color: rgb(54, 56, 55);
    background-color: rgb(172, 184, 180);;
  }
  .btn-32 span:hover {
    color: rgb(54, 56, 55);
  }
  .btn-32::before,
  .btn-32::after {
    width: 15%; height: 2px;
    background-color: rgb(54, 56, 55);
    z-index: 2;
  }

/* 16. hover-border-6 */
  .btn.hover-border-6::before,
  .btn.hover-border-6::after {
    top: 0;
    transition: width 0.2s 0.35s ease-out;
  }
  .btn.hover-border-6::before {
    right: 50%;
  }
  .btn.hover-border-6::after {
    left: 50%;
  }
  .btn.hover-border-6:hover::before,
  .btn.hover-border-6:hover::after {
    width: 50%;
    transition: width 0.2s ease-in;
  }

  .btn.hover-border-6 span::before,
  .btn.hover-border-6 span::after {
    width: 0%; height: 0%;
    background: transparent;
    opacity: 0;
    z-index: 2;
    transition: width 0.2s ease-in, height 0.15s 0.2s linear, opacity 0s 0.35s;
  }
  .btn.hover-border-6 span::before {
    top: 0; left: 0;
    border-left: 2px solid rgb(54, 56, 55);
    border-bottom: 2px solid rgb(54, 56, 55);
  }
  .btn.hover-border-6 span::after {
    top: 0; right: 0;
    border-right: 2px solid rgb(54, 56, 55);
    border-bottom: 2px solid rgb(54, 56, 55);
  }
  .btn.hover-border-6 span:hover::before,
  .btn.hover-border-6 span:hover::after {
    width: 50%; height: 96%;
    opacity: 1;
    transition: height 0.2s 0.2s ease-in, width 0.2s 0.4s linear, opacity 0s 0.2s;
  }
</style>
