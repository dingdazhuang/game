<template>
  <div id="app">
    <Default1 />
  </div>
</template>

<script>
 import Default1 from './layout/Default1.vue'
//  import Header from './components/Header'
// import Draw from './pages/Draw'
export default {
  name: 'app',
  components: {
    Default1,
    // Draw
  }
}
</script>

<style lang="scss" scoped>
  #app {
    width: 100%;
    height: 100%;
  }
</style>
