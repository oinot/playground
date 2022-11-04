<template>
  <div class="frame">
<button class="btn btn-23 hover-slide-up">
        <span>Button 23</span>
      </button>
  </div>
</template>
<script>
export default {
  name: 'buttonTwentyThree',
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
.btn-23::before {
    background-color: rgb(28, 31, 30);
    transition: 0.3s ease-out;
  }
  .btn-23 span {
    color: rgb(28, 31, 30);
    border: 1px solid rgb(28, 31, 30);
    transition: 0.2s;
  }
  .btn-23 span:hover {
    color: rgb(255,255,255);
    transition: 0.2s 0.1s;
  }

/* 7. hover-slide-up */
    .btn.hover-slide-up::before {
    bottom: 0; left: 0; right: 0;
    height: 0%; width: 100%;
  }
  .btn.hover-slide-up:hover::before {
    height: 100%;
  }
</style>
