<template>
    <div>
        <van-nav-bar title="商品详情" left-text="返回" @click-left="$router.go(-1)"></van-nav-bar>
        <img :src="detail.img" alt="" class="detail-img" />
        <div class="detail">
            <p class="detail-name">{{detail.name}}</p>
            <p class="detail-price">${{detail.price}}</p>
            <p class="detail-company">公司：{{detail.company}}</p>
             <p class="detail-city"> 产地：{{detail.city}}</p>
        </div>
         <div class="">
        <van-goods-action>
            <van-goods-action-icon icon="chat-o" text="客服"  @click="onClickIcon" />
            <van-goods-action-icon icon="cart-o" text="购物车" @click="onClickIcon" />
            <van-goods-action-button type="warning" text="加入购物车" @click="onClickButton" />
            <van-goods-action-button type="danger" text="立即购买" @click="onClickButton" />
        </van-goods-action>
      </div>
    </div>
</template>

<script>
import axios from 'axios';
import Url from '@/service.config.js'
export default {
    data(){
        return{
            detail:{

            }

        }
    },
    created(){
        //console.log(this.$route.params.id);
        axios({
                 url: Url.getDetail,
                 method:'get',
                 params:{
                     id:this.$route.params.id
                 }
            }).then(res=>{
                this.detail=res.data;
              //  console.log(res.data);

            }).catch();
        }
    ,
    methods:{
        onClickIcon(){

        },
        onClickButton(){
            
        }
    }
}
</script>

<style lang="scss" scoped>
.detail{
    padding:0.2rem;
    &-img{
          width: 100%;
          height:4rem;
    }
    &-name{
        color:#333;
        font-weight: bold;
    }
    &-price{
        color:#ff7300;
        font-size:0.4rem;
    }


}


</style>