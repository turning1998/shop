<!--首页-->
<template>
  <div class="home">
    <div class="home-title">
      <!-- header -->
      <van-nav-bar title="首页">
        <van-icon name="search" slot="left" />
        <van-icon name="cart-o" slot="right" />
      </van-nav-bar>
    </div>
    <!--中间部分-->
    <div class="home-content">
          <!--轮播图-->
          <div class="home-content-slideshow">
            <van-swipe :autoplay="3000">
              <van-swipe-item  class="home-content-slideshow-item"   v-for="(imgItem, index) in images" :key="index">
                <img v-lazy="imgItem.imgSrc" >
              </van-swipe-item>
            </van-swipe>
          </div>
          <!--热门商品-->
          <div class="home-content-hot-commodity">
              <div class="home-content-hot-commodity-title">热门商品</div>
              <swiper class="home-content-hot-commodity-swiper"  :options="swiperOption">
                  <swiper-slide   v-for="(item,index) in hotCommodity" :key="index">
                    <div class="home-content-hot-commodity-swiper-content">
                        <img :src="item.img" alt="">
                        <div class="img-name">{{item.name}}</div>
                        <div>${{item.price}}</div>
                    </div>
                  </swiper-slide>
              </swiper>
          </div>
          <!--推荐商品-->
          <div class="home-content-recommend-commodity">
            <p class="home-content-recommend-commodity-title">推荐商品</p>
            <ul class="home-content-recommend-commodity-item" >
              <li v-for="(item,index) in recommendItem" :key="index">
                    <img :src="item.img" alt="">
                    <p class="name">{{item.name}}</p>
                    <p>{{item.price}}</p>
              </li>
            </ul>
          </div>
    </div>
  </div>
</template>

<script>

import 'swiper/dist/css/swiper.css'
import {swiper, swiperSlide} from 'vue-awesome-swiper'
import axios from 'axios'
import url from '@/service.config.js'
export default {
  name: 'home',
  components: {
         swiper,swiperSlide
  },
   data() {
    return {
      //轮播图
      images: [
        {   
          name:'img1',
          imgSrc:'https://img.yzcdn.cn/2.jpg',
        },{
          name:'img2',
          imgSrc: 'https://img.yzcdn.cn/2.jpg'
        },
        {
          name:'img3',
          imgSrc: 'https://img.yzcdn.cn/2.jpg'
        },
        {
          name:'img4',
          imgSrc: 'https://img.yzcdn.cn/2.jpg'
        }
      ],
      //热门商品
      hotCommodity:[
        {
          "name": "  玉米籽粒机",
          "img": "http://img49.nongjx.com/2/20180426/636603348531851190929_198_170_5.png",
          "price": "面议",
          "company": "河北中农博远农业装备有",
          "city": "石家庄市"
        },
        {
          "name": "  4LZ-2.0 自走式谷物联合收割机",
          "img": "http://img61.nongjx.com/2/20170321/636257194316398458936_198_170_5.jpg",
          "price": "面议",
          "company": "爱科（中国）投资有限公",
          "city": "常州市"
        },
        {
          "name": "  玉米收获机",
          "img": "http://img42.nongjx.com/2/2008/2007810231158117_198_170_5.jpg",
          "price": "面议",
          "company": "山东时风（集团）聊城农",
          "city": null
        },
        {
          "name": "  优质玉米秸秆自动捡拾打捆机",
          "img": "http://img57.nongjx.com/2/20131107/635194288343054809839_198_170_5.jpg",
          "price": "面议",
          "company": "沈阳方科机械制造有限公",
          "city": "沈阳市"
        },
        {
          "name": "  畜牧固定秸秆打包机 加菌料青储打捆包膜机",
          "img": "http://img49.nongjx.com/2/20180505/636611241104211752847_198_170_5.png",
          "price": "15600",
          "company": "曲阜洪升机械有限公司",
          "city": "济宁市"
        },
        {
         "name": "  VB-VBP3100系列可变腔圆捆打捆机",
         "img": "http://img57.nongjx.com/2/20171122/636469555088384823669_198_170_5.jpg",
         "price": "面议",
         "company": "法国库恩公司",
         "city": "北京市"
        },
        {
         "name": "  摘毛豆去荚机厂家 田间柴油带动毛豆脱荚机",
         "img": "http://img47.nongjx.com/2/20180629/636658591249324294459_198_170_5.jpg",
         "price": "9800",
         "company": "曲阜市润众机械制造有限",
         "city": "曲阜市"
        },
        {
         "name": "  多功能韭菜收割机 玉米青储机 多用割晒机",
         "img": "http://img48.nongjx.com/2/20180927/636736616039290776714_198_170_5.jpg",
         "price": "3160",
         "company": "曲阜浩发机械有限公司",
         "city": "济宁市"
        },
        {
         "name": "  菜园小型除草机 四冲汽油割灌机",
         "img": "http://img48.nongjx.com/2/20180920/636730488779461000136_198_170_5.jpg",
         "price": "920",
         "company": "曲阜润丰机械有限公司",
         "city": "济宁市"
        },
      ], 
      swiperOption: {
        slidesPerView:3
        },
      //推荐商品
      recommendItem:[]
    }
  },
  created(){
    axios.get(url.getrecommendList).then(res=>{
      this.recommendItem=res.data;
      console.log(this.recommendItem);
    }).catch(()=>{
      console.log("获取商品列表失败");
    });

  }
}
</script>
<style lang="scss">
body{
  background-color: #c0c0c0;
}
.home{
   &-title{
     position: fixed;
     top: 0;
     left: 0;
     height: 1rem;
     width: 100%;
     z-index:999;
   }
   &-content{
      margin:1rem 0;
      &-slideshow{
         height:3rem;
         width: 100%;
        &-item{
          width: 100%;
          height: 3rem;
          img{
             width: 100%;
             height: 3rem;
          }
        }
      }
      &-hot-commodity{
        background-color: #fff;
        &-title{
          width: 100%;
          height:0.5rem;
          padding-left:0.2rem;
          line-height: 0.5rem;
          text-align:left;
          box-sizing:border-box;
          color: #fff;
          background-color: #ff8080;
        }
        &-swiper{
          &-content{
              width:2rem;
              text-align: center;
               img{
                width: 2rem;
                height: 2rem;
                }
                .img-name{
                  overflow: hidden;
                  text-overflow: ellipsis;
                  white-space: nowrap;
                }
          }
         }
      }
      &-recommend-commodity{
        background-color: #fff;
        text-align: center;
        &-title{
          width: 100%;
          height:0.5rem;
          padding-left:0.2rem;
          line-height: 0.5rem;
          text-align:left;
          box-sizing:border-box;
          color: #fff;
          background-color: #ff8080;;
        }
        &-item{
          display: flex;
          flex-wrap: wrap;//换行
          justify-content: space-around;//水平对齐，间距相同，父元素设置
          li{
            flex-basis: 45%;//相当于设置width；但优先级高于width
            img{
              width: 2rem;
              height: 2rem;
            }
            .name{
               overflow: hidden;
               text-overflow:ellipsis;
               display: -webkit-box;
               -webkit-box-orient:vertical;
               -webkit-line-clamp:2;
               width: 2rem;
               margin: 0 auto;
               height: 1rem;
               
            }
          }
        }


      }
    }
}


/*









.home-title{
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 222;
 
}
.slideshow{
  height:3rem;
  margin-top: 1rem;
  &-item{
    width: 100%;
    img{
      width: 100%;
      height: 3rem;
    }
  }
}
body{
  height: 3000px;
}
.hot-commodity{
   &-title{
      width: 100%;
      height:0.5rem;
      padding-left:0.2rem;
      line-height: 0.5rem;
      text-align:left;
      box-sizing:border-box;
   }
   &-swiper{
     &-content{
       width:2rem;
       text-align: center;
       img{
         width: 2rem;
         height: 2rem;
       }

     }

   }
}*/
</style>
