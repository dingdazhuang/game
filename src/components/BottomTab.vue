<template>
  <div class="bottom-tab">
    <router-link tag="div" to="/">
      <img src="../assets/footer/1-1.png" alt>
      <p>幸运转盘</p>
    </router-link>
    <router-link tag="div" to="/">
      <img src="../assets/footer/1-1.png" alt>
      <p>论坛</p>
    </router-link>
    <router-link tag="div" to="/">
      <img src="../assets/footer/1-1.png" alt>
      <p>小说</p>
    </router-link>
    <router-link tag="div" to="/">
      <img src="../assets/footer/1-1.png" alt>
      <p>积分商城</p>
    </router-link>
    <router-link tag="div" to="/center">
      <img src="../assets/footer/1-1.png" alt>
      <p>我的</p>
    </router-link>
  </div>
</template>
<script>
export default {
  name: "BottomTab"
};
</script>
<style lang="scss" scoped>
.bottom-tab {
  position: fixed;
  bottom:0;
  left: 0;
  width:100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 80px;
  background-color: #313131;
  color: #fff;
  text-align: center;
}
</style>
