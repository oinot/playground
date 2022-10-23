<template>
  <div class="frame">
       <button class="btn btn-22 hover-slide-down">
        <span>Button 22</span>
      </button>
  </div>
</template>
<script>
export default {
  name: 'ButtonTwentyTwo',
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
.btn-22::before {
    background-color: rgb(28, 31, 30);
    transition: 0.3s ease-out;
  }
  .btn-22 span {
    color: rgb(28, 31, 30);
    border: 1px solid rgb(28, 31, 30);
    transition: 0.2s;
  }
  .btn-22 span:hover {
    color: rgb(255,255,255);
    transition: 0.2s 0.1s;
  }

  /* 6. hover-slide-down */
  .btn.hover-slide-down::before {
    top: 0; left: 0; right: 0;
    height: 0%; width: 100%;
  }
  .btn.hover-slide-down:hover::before {
    height: 100%;
  }
</style>
