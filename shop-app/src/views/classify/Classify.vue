<!--分类-->
<!--首页-->
<template>
  <div >
     <van-nav-bar title="商品分类"/>
      <van-row>
          <van-col span="6" class="nav">  <!--导航-->
              <ul>
                <li  @click="selectClassify(item.typeId,index)" :class="{active:active==index}"  v-for="(item,index) in types" :key="index">
                  {{item.typeName}}
                </li>
              </ul>
          </van-col>
          <van-col span="18" class="container">
              <van-list class="content" >
                  <div></div>
              </van-list>
          </van-col>
  
      </van-row>
  </div>

</template>

<script>
import axios from 'axios';
import Url from '@/service.config.js'
export default {
  name: 'home',
  data() {
    return {
      types:[],//类型
      productList:[],
      typeId:1,            //当前选择的商品id
      active:0,
      start:0,//读取数据的开始位置
      limit:10,//读取数据数量
    };
  },
  created(){
    axios({
      url:Url.getTypes
    }).then((res)=>{
      console.log(res.data);
      this.types=res.data;
      this.selectClassify(this.typeId,this.active);
    }).catch(err=>{
        console.log(err);
    })
  },
  methods:{
    selectClassify(typeId,index){
      this.active=index;
      this.typeId=typeId;
      this.getProductList();
    },
    //获取商品信息
    getProductList(){
      axios({
        url:Url.getProductByType,
        method:'get',
        params:{
          typeId:this.typeId,
          start:this.start,
          limit:this.limit,
        }

      }).then(
        res=>{
          console.log(res);
        }
      ).catch(err=>{

      })
    }
  }
};
</script>
<style lang="scss">
.nav{
  background-color: rgb(75, 136, 177);
  li{
    height: 0.6rem;
    line-height: 0.6rem;
    border-bottom: 1px solid #fff;
    padding: 3px;
    text-align: center;
  }
  .active{
    background-color: rgb(197, 42, 42);
  }
}
.container{
  background-color: #408080;
}

</style>


