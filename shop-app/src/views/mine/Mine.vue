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
         <verify></verify>
         <van-button type="primary"  size="large"  :loading=loginLoading  loading-text="登录中" @click="loginHandler()">登录</van-button>
      </van-tab>
      <van-tab title="注册">
          <van-cell-group>
            <van-field v-model="registUsername"   required clearable label="用户名"   type="text" placeholder="请输入用户名" />
            <van-field v-model="registPassword"   required clearable label="密码"  type="password" placeholder="请输入密码" />
            <van-field v-model="confirmPassword"   required clearable label="确认密码"  type="password" placeholder="请再次输入密码" />
         </van-cell-group>
         <van-button type="danger"  size="large" :loading=registLoading  loading-text="注册中" @click="registHandler()">注册</van-button>
      </van-tab>
    </van-tabs>
   
  </div>
</template>
<script>
import axios from'axios';
import Url from '@/service.config.js'
import {mapActions} from 'vuex';
import Verify from './Verify.vue'
export default {
  name: 'home',
  components: {
    Verify
  },
  data(){
    return{
      registLoading:false,
      loginLoading:false,
      loginUsername:'',
      loginPassword:'',
      registUsername:'',
      registPassword:'',
      confirmPassword:'',

    }
  },
  methods:{
    ...mapActions(['loginAction']),//方法

    //注册
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
        this.registLoading=true;
        console.log(res.data);
        if(res.data.code==200){
           setTimeout(()=>{
              this.$toast.success('注册成功！');
              this.registLoading=false;
               this.registPassword='';
                this.registUsername='';
                this.confirmPassword='';
             },1000);
        
        }else{
             setTimeout(()=>{
                this.$toast.fail(res.data.message);
                this.registLoading=false;
                this.registPassword='';
                this.registUsername='';
                this.confirmPassword='';
             },1000);
        }
      })
      .catch(err=>{
         this.$toast.fail('注册失败！');
         this.registPassword='';
         this.registUsername='';
         this.confirmPassword='';
      });
     

    },
    //登录
    loginHandler(){
       axios({
        url:Url.loginUser,
        method:'post',
        data:{
          userName:this.loginUsername,
          password:this.loginPassword,
        }
      })
      .then(res=>{
        //console.log(res);
         this.loginLoading=true;
         if(res.data.code==200){
            
           new Promise((resolve,reject)=>{
             setTimeout(()=>{
               resolve();
             },1000);
           }).then(()=>{
             //保存登录状态
             console.log(res.data.userInfo);
             this.loginAction(res.data.userInfo);
             
             this.$toast.success('登录成功！');
             this.$router.push('/');
           }).catch(err=>{
             this.$toast.fail('登录状态失败！');
             console.log(err);
           })
        }else{
          console.log(res.data);
           setTimeout(()=>{
                 this.$toast.fail(res.data.message);
                  this.loginLoading=false;
             },1000);
       
         
        }

      })
      .catch(err=>{
            console.log(err);
             this.$toast.fail('登录失败！');
       
      });
    
    
    }
  }
}
</script>
