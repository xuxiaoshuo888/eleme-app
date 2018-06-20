<template>
    <div class="tab">
      <div class="tab_son">首页</div>
      <div class="tab_son">发现</div>
      <div class="tab_son">订单</div>
      <div class="tab_son">我的</div>
    </div>
</template>

<script>
    export default {
        name: "tab"
    }
</script>

<style scoped>
  .tab{
    display: flex;
    flex-direction: row;
  }
  .tab_son{
    flex-grow: 1;
  }
</style>
