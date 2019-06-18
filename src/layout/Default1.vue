<template>
  <el-container>
    <el-header height="80px">
      <m-header />
    </el-header>
    <el-main>
      <router-view></router-view>
    </el-main>
    <el-footer height="80px">
      <bottom-tab></bottom-tab>
    </el-footer>
  </el-container>
</template>
<script>
import MHeader from '../components/Header'
import BottomTab from '../components/BottomTab'
import Draw from '../pages/Draw'
export default {
  name: 'default1',
  components: {
    MHeader,
    BottomTab,
    Draw
  },
  created() {

  }
}
</script>
<style lang="scss" scoped>
  .el-container, .el-header, .el-main, .el-footer {
    box-sizing: border-box;
    padding: 0;
  }
</style>
