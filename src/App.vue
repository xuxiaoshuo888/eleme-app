<template>
  <div id="app">
    <router-view name="head"></router-view>
    <router-view name="body"/>
    <div class="tab">
      <router-view name="foot"/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',

};
</script>

<style scoped lang="less">
  .tab{
    width: 100%;
    position: fixed;
    left: 0;
    bottom: 0;
    height: 8vh;
    div{
      height: 100%;
      text-align: center;
      line-height: 8vh;
      a{
        display: block;
        width: 100%;
        height: 100%;
        text-decoration: none;
      }
    }
  }
</style>
