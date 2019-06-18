<template>
  <div class="draw">
    <!-- 中奖信息弹出组件 -->
    
    <!-- 转盘模块 -->
    <div class="lottery-box">
      <div class="turnplate">
        <img src="../assets/turnplate.png" alt="">
      </div>
      <div class="start-btn">
        <img src="../assets/btn-draw.png" alt="">
      </div>
    </div>
    <div class="free-times">今日免费次数：10次</div>
    <div class="rules">
      <div class="title">抽奖规则</div>
      <div class="content">
        <p>（1）每天首次登陆，免费抽奖1次。</p>
        <p>（2）连续签到3天，额外免费抽奖3次。</p>
        <p>（3）可通过消耗商城积分进行抽奖，20积分每次。</p>
        <p>（4）抽奖次数达到50次，礼品池会刷新礼品类型。</p>
        <p>（5）抽中积分即刻到账；抽中虚拟物品请尽快使用，以免过期失效；抽中实物，点击【放弃】或在填写订单过程中出现关闭/返回等动作，视作放弃奖品。</p>
        <p>（6）抽奖活动最终解释权归本平台所有，抽奖结果以后台数据为准。</p>
      </div>
    </div>
    <div class="record">
      <router-link tag="div" class="record-btn" to="/">中奖纪录</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'draw',
}
</script>

<style lang="scss" scoped>
  .draw {
    background: url('../assets/bg-draw.jpg') no-repeat;
    background-size: 100% 100%;
    height: 100%;
    padding-top:260px;
    .lottery-box {
      position: relative;
      width: 547px;
      height: 547px;
      background: url('../assets/bg-draw.gif') no-repeat;
      background-size: 100% 100%;
      margin: 0 auto 30px;
      .turnplate {
        position: absolute;
        width: 437px;
        height:437px;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      }
      .start-btn {
        width: 197px;
        height: 211px;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      }
    }
    .free-times {
      width: 60%;
      margin: 0 auto 30px;
      line-height: 50px;
      color:#621e00;
      background-color:#ffd258;
      text-align: center;
      border-radius: 6px;
    }
    .rules {
      background-color:#fe6c42;
      padding: 0 10px 10px;
      border-radius: 10px;
      width: 95%;
      margin: auto;
      .title {
        color: #fff;
        font-size: 18px;
        line-height: 40px;
        text-align: center;
      }
      .content {
        background-color: #fff;
        padding:40px 10px 20px;
        border-radius: 10px;
        p {
          color: #601c02;
          line-height: 30px;
        }
      }
    }
    .record-btn {
      display: block;
      width: 35%;
      margin: 30px auto 0;
      line-height: 40px;
      color: #fff;
      background-color: #fe6c42;
      text-align: center;
      border-radius: 10px;
      cursor: pointer;
    }
  }
</style>
