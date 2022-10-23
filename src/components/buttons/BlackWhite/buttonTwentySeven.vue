<template>
  <div class="frame">
      <button class="btn btn-27 hover-border-1">
        <span>Button 27</span>
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
.btn-27 {
    padding: 5px;
  }
  .btn-27 span {
    color: rgb(255, 255, 255);
    background-color: rgb(54, 56, 55);
  }
  .btn-27::before,
  .btn-27::after {
    background: transparent;
    z-index: 2;
  }

 /* 11. hover-border-1 */
  .btn.hover-border-1::before,
  .btn.hover-border-1::after {
    width: 10%; height: 25%;
    transition: 0.35s;
  }
  .btn.hover-border-1::before {
    top: 0; left: 0;
    border-left: 1px solid rgb(28, 31, 30);
    border-top: 1px solid rgb(28, 31, 30);
  }
  .btn.hover-border-1::after {
    bottom: 0; right: 0;
    border-right: 1px solid rgb(28, 31, 30);
    border-bottom: 1px solid rgb(28, 31, 30);
  }
  .btn.hover-border-1:hover::before,
  .btn.hover-border-1:hover::after {
    width: 99%;
    height: 98%;
  }
</style>
