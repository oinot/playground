<template>
  <div class="frame">
      <button class="btn btn-28 hover-border-2">
        <span>Button 28</span>
      </button>
  </div>
</template>
<script>
export default {
  name: 'buttonTwentySeven',
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
.btn-28 {
    padding: 5px;
  }
  .btn-28 span {
    color: rgb(255, 255, 255);
    background-color: rgb(54, 56, 55);
  }
  .btn-28::before,
  .btn-28::after {
    background: transparent;
    z-index: 2;
  }

 /* 12. hover-border-2 */
  .btn.hover-border-2::before,
  .btn.hover-border-2::after {
    width: 10%; height: 25%;
    transition: 0.35s;
  }
  .btn.hover-border-2::before {
    bottom: 0; left: 0;
    border-left: 1px solid rgb(28, 31, 30);
    border-bottom: 1px solid rgb(28, 31, 30);
  }
  .btn.hover-border-2::after {
    top: 0; right: 0;
    border-right: 1px solid rgb(28, 31, 30);
    border-top: 1px solid rgb(28, 31, 30);
  }
  .btn.hover-border-2:hover::before,
  .btn.hover-border-2:hover::after {
    width: 99%;
    height: 99%;
  }
</style>
