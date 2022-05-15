<template>
  <div>
    <!-- 占位符 首页 和 user用户 界面的路由占位符 -->
<router-view></router-view>
<!-- vant组件库组件 底部导航栏 -->
<van-tabbar route>
  <van-tabbar-item icon="home-o" to="/">首页</van-tabbar-item>
  <van-tabbar-item icon="user-o" to="/user">我的</van-tabbar-item>
</van-tabbar>

  </div>
</template>

<script>

export default {
  data () {
    return {
      active: 0
    }
  }
}
</script>

<style>

</style>
