<template>
    <div>
      <div class="tab">
        <div class="tab_son"><router-link to="/home">首页</router-link></div>
        <div class="tab_son"><router-link to="/find">发现</router-link></div>
        <div class="tab_son"><router-link to="/list">订单</router-link></div>
        <div class="tab_son"><router-link to="/me">我的</router-link></div>
      </div>
      <router-view></router-view>
    </div>

</template>

<script>
    export default {
        name: "tab",
        data(){
            return{

            }
        }
    }
</script>

<style scoped lang="less">
  .tab{
    display: flex;
    flex-direction: row;
    background-color: white;
  }
  .tab_son{
    flex-grow: 1;
    a{
      display: block;

    }
  }
  .router-link-active{
    color:#0089dc;
  }
</style>
