<template>
  <div class="header">
    <div class="title">title</div>
    <div class="icons">
    </div>
  </div>
</template>
<script>
export default {
  name: 'mheader',
  props: {
    title: String 
  }
}
</script>
<style lang="scss" scoped>
  .header {
    background: #808080;
    .title {
      color: #fff;
      line-height: 80px;
      text-align: center;
      font-size:18px;
    }
  }
</style>
