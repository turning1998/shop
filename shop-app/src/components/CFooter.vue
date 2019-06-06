<!--底部-->
<template>
    <ul class="footer">
      <li class="footer-item">
        <router-link to="/">首页</router-link>
      </li>
      <li class="footer-item">
        <router-link to="/classify">分类</router-link>
      </li>
      <li class="footer-item">
        <router-link to="cart" >购物车</router-link>
       </li>
      <li class="footer-item">
        <router-link to="mine" >我的</router-link>
        </li>
    </ul>
</template>
<script>

export default {
  name: 'home',
  components: {
   
  }
}
</script>
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
  }
}


</style>

