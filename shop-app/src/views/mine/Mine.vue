<!--我的-->
<!--首页-->
<template>
  <div class="mine">
    <van-tabs >
      <van-tab title="登录">
         <van-cell-group>
            <van-field v-model="loginUsername"   required clearable label="用户名"   type="text" placeholder="请输入用户名" />
            <van-field v-model="loginPassword"   required clearable label="密码"  type="password" placeholder="请输入密码" />
         </van-cell-group>
         <van-button type="primary"  size="large" @click="loginHandler()">登录</van-button>
      </van-tab>
      <van-tab title="注册">
          <van-cell-group>
            <van-field v-model="registUsername"   required clearable label="用户名"   type="text" placeholder="请输入用户名" />
            <van-field v-model="registPassword"   required clearable label="密码"  type="password" placeholder="请输入密码" />
            <van-field v-model="confirmPassword"   required clearable label="确认密码"  type="password" placeholder="请再次输入密码" />
         </van-cell-group>
         <van-button type="danger"  size="large" @click="registHandler()">注册</van-button>
      </van-tab>
    </van-tabs>
   
  </div>
</template>
<script>
import axios from'axios';
import Url from '@/service.config.js'
export default {
  name: 'home',
  components: {
  },
  data(){
    return{
      loginUsername:'',
      loginPassword:'',
      registUsername:'',
      registPassword:'',
      confirmPassword:'',

    }
  },
  methods:{
    registHandler(){
      axios({
        url:Url.registUser,
        method:'post',
        data:{
          userName:this.registUsername,
          password:this.registPassword,
        }
      })
      .then(res=>{
        if(res.data.code=200){
         this.$toast.success('注册成功！');
        }else{
         this.$toast.fail('注册失败！');
        }

      })
      .catch(err=>{
         this.$toast.fail('注册失败！');
      });
      this.registPassword='';
      this.registUsername='';
      this.confirmPassword='';

    },
    loginHandler(){

    }
  }
}
</script>
