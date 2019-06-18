<template>
  <div class="center">
    <div class="user-info"></div>
    <ul class="icons">
      <router-link tag="li" class="links" to="/">
        <img src="../assets/icons/1-1.png" alt>
        <p>抽奖</p>
      </router-link>
      <router-link tag="li" class="links" to="/">
        <img src="../assets/icons/1-1.png" alt>
        <p>抽奖</p>
      </router-link>
      <router-link tag="li" class="links" to="/">
        <img src="../assets/icons/1-1.png" alt>
        <p>抽奖</p>
      </router-link>
      <router-link tag="li" class="links" to="/">
        <img src="../assets/icons/1-1.png" alt>
        <p>抽奖</p>
      </router-link>
      <router-link tag="li" class="links" to="/">
        <img src="../assets/icons/1-1.png" alt>
        <p>抽奖</p>
      </router-link>
      <router-link tag="li" class="links" to="/">
        <img src="../assets/icons/1-1.png" alt>
        <p>抽奖</p>
      </router-link>
    </ul>
    <div class="score">
      <div class="num">116分</div>
      <div class="txt">我的积分</div>
      <div class="score-info"></div>
    </div>
  </div>
</template>
<script>
export default {
  name: "center"
};
</script>
<style lang="scss" scoped>
  .center {
    background-color: #ddd;
    .icons {
      .links {
        width: 25%;
        display: inline-block;
        margin: 10px auto;
        text-align: center;
        p {
          color: #333;
        }
      }
    }
    .score {
      text-align: center;
      .num {
        color:#333;
      }
      .txt {
        color:#ff8313;
      }
    }
  }
</style>
