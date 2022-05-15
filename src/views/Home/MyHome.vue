<template>
  <div class="home-container">
    <!-- vant组件库组件 -->
<van-nav-bar title="黑马头条" fixed/>
<!-- <p>{{ newlist[0].title }}</p> -->
<van-pull-refresh v-model="isLoading" @refresh="onRefresh" success-text="刷新成功" :disabled="finished">
<van-list
  v-model="loading"
  :finished="finished"
  finished-text="没有更多了"
  @load="onLoad"
>
<ArticleInfo
v-for="item in newlist"
:key="item.id"
:title="item.title"
:time="item.ctime"
:description="item.description"
:img="item.picUrl"
:source="item.source"
:url="item.url"
>
</ArticleInfo>
</van-list>
</van-pull-refresh>
  </div>
</template>

<script>
import { getArticleListAPI } from '../../api/articleAPI.js'
// 导入需要的组件
import ArticleInfo from '../../components/Article/ArticleInfo.vue'
export default {
  created () {
    this.initArticleList()
  },
  name: 'MyHome',
  data () {
    return {
      // 页码值
      page: 1,
      // 每页展示的数据条数
      num: 10,
      newlist: [],
      // 当组件滚动到底部时，会触发 load 事件并将 loading 设置成 true
      loading: true,
      // 若数据已全部加载完毕，则直接将 finished 设置成 true 即可
      finished: false,
      // 下拉刷新时会触发 refresh 事件，在事件的回调函数中可以进行同步或异步操作，操作完成后将 v-model:isLoading 设置为 false，表示加载完成。
      isLoading: false

    }
  },
  components: {
    ArticleInfo
  },
  methods: {
    async initArticleList (isRefresh) {
      const { data: res } = await getArticleListAPI(this.page, this.num)
      if (isRefresh) {
        // isRefresh为true 证明是下拉刷新 [新数据 ，老数据]
        this.newlist = [...res.newslist, ...this.newlist]
      } else {
      // ...是扩展运算符深拷贝一个数组 isRefresh为false   [老数据 ，新数据]
        this.newlist = [...this.newlist, ...res.newslist]
      }
      console.log(res)
      this.loading = false
      if (res.newslist.length === 0 || this.page === 10) {
        this.finished = true
      }
    },
    onLoad () {
      console.log(11)
      this.page++
      this.initArticleList()
    },
    onRefresh () {
      console.log('触发了刷新')
      this.isLoading = false
      this.page++
      this.initArticleList(true)
    }
  }
}
</script>

<style lang="less" scoped>
.home-container {
padding: 60px 0 50px 0;

}
</style>
