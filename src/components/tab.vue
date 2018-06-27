<template>
    <div>
      <div class="tab">
       <router-link to="@/views/home"><i class="fa fa-ravelry"></i><span>首页</span></router-link>
       <router-link to="@/views/find"><i class="fa fa-compass"></i><span>发现</span></router-link>
       <router-link to="@/views/list"><i class="fa fa-list-ul"></i><span>订单</span></router-link>
       <router-link to="@/views/me"><i class="fa fa-user-o"></i><span>我的</span></router-link>
      </div>
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
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
    width:100%;
    height: 8vh;
    display: flex;
    flex-direction: row;
    /*align-items: center;*/
    background-color: white;
    box-shadow: 0 3px 3px 3px rgba(0,0,0,.1);
    a{
      font-size: 14px;
      text-align: center;
      flex: 1;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content:space-around;
      i{
        font-size: 28px;
      }
      span{
        display: inline-block;
        line-height: 1;
      }
    }
  }

  .router-link-active{
    color:#0089dc;
  }
</style>
