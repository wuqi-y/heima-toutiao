<template>
  <div>
<div class="article">
    <div class="title-box">
    <div class="title">{{title}}</div>
    <div>
        <a :href="url">
        <img :src="img" alt="">
        </a>
    </div>
</div>
<div class="box">
   <span>文章来源:{{source}}</span> <span>发布日期:{{time}}</span>
</div>
</div>
  </div>
</template>

<script>
export default {
  name: 'ArticleInfo',
  props: {
    title: {
      type: String,
      default: ''
    },
    time: {
      type: String,
      default: '2002-05-22'
    },
    description: {
      type: String,
      default: ''
    },
    img: {
      type: String,
      default: ''
    },
    source: {
      type: String
    },
    url: {
      type: String
    }
  }
}
</script>

<style lang="less" scoped>
.article {
    margin-bottom: 10px;
    border-bottom:  1px solid #ccc;
    padding: 15px;
}
.title-box {
    display: flex;
    img {
        width: 150px;
        border-radius: 10px;
    }
    .title {
        font-family: '微软雅黑';
    }
}
.box {
    span {
        color: #999;
        font-size: 14px;
        margin-right: 15px;
        font-family: '微软雅黑';
    }
}
</style>
