<template>
  <div id="app">
    <router-view></router-view>
    <ul class="footer">
      <li class="footer-item">首页</li>
      <li class="footer-item">分类</li>
      <li class="footer-item">购物车</li>
      <li class="footer-item">我的</li>
    </ul>
  </div>
</template>

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
}


</style>
