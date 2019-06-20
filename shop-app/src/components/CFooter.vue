<!--底部-->
<template>
    <van-tabbar v-model="active" active-color="#ff8000">
      <van-tabbar-item icon="hot-sale" to="/">首页</van-tabbar-item>
      <van-tabbar-item icon="label" to="/classify">分类</van-tabbar-item>
      <van-tabbar-item icon="cart" to="cart" >购物车</van-tabbar-item>
      <van-tabbar-item icon="manager" to="mine" >我的</van-tabbar-item>
      </van-tabbar>
</template>
<script>

export default {
  name: 'home',
  data() {
    return {
      active: 0
    }
  }
}
</script>
<style lang="scss" scoped>
</style>

<!--
<style lang="scss">
.footer{
  display:flex;
  position: fixed; //固定定位的元素会脱离文档流
  bottom: 0;
  width: 100%;
  height:1rem;
  line-height: 1rem;
  &-item{
    flex:1;
    background-color: #ff8040;
    text-align: center;
  }
  &-item a{
    outline: none;
    cursor: pointer;
    color:#fff;
  }
}


</style>
-->

