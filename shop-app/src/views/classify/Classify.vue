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
          <van-col span="18" class="container" >
            <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
                <van-list @load="onLoad()" v-model="isLoading"    class="content" :finished="finished">
                  <div @click="goDetail(item._id)"   class="content-item" :key="index"  v-for="(item,index) in  productList">
                    <img :src="item.img" alt="">
                    <p class="content-item-name">{{item.name}}</p>
                    <p>{{item.price}}</p>
                  </div>
                </van-list>
            </van-pull-refresh>
             
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
      finished:false,//是否数据取完
      isLoading:false,//上拉加载

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
      this.productList=[];
      this.getProductList();
      this.finished=false;
    },
    //获取商品信息
    getProductList(){
      this.isLoading=true;
      axios({
        url:Url.getProductByType,
        method:'get',
        params:{
          typeId:this.typeId,
          start:this.productList.length,
          limit:this.limit,
        }

      }).then(res=>{
          console.log(res.data);
          if(res.data.length!=0){
             this.productList= this.productList.concat(res.data);
          }else{
            this.finished=true;
          }
          this.isLoading=false;
          }).catch(err=>{

      })
    },
    //加载下一个10条数据
    onLoad(){
      setTimeout(()=>{
         this.getProductList();
      },2000);
    },
    //下拉刷新
    onRefresh(){
      setTimeout(()=>{
         this.productList=[];
      this.getProductList();
      },2000)
     

    },
    //商品详情
    goDetail(id){
      console.log(id);
      //传参
      /*this.$router.push({
        path:'/details',
        query:{
          id:id
        }
      })
      接收:consle.log(this.$route.query.id)==>url
      类似get取参,  有详细的id，刷新id取不到
      local:8080/detail?3823737

      或
        this.$router.push({
        name:'details',
        params:{
            id:id
        }
      });
       接收:consle.log(this.$route.params.id)==>没有参数，刷新id取不到
        local:8080/detail
      
      或
      this.$router.push(`/detail/${id}`)
      在router.js中配置 path: '/detail/:id'
      接收:consle.log(this.$route.params.id)
      local:8080/detail/433434跟router配置一样,无？
      */
       this.$router.push(`/detail/${id}`)

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
  position: fixed;
  top: 46px;
  bottom:1rem;
  right:0;
  overflow-y:scroll;

}
.content{
  display: flex;
  padding-bottom: 1rem;
  flex-wrap: wrap;
  &-item{
    width:40%;
    padding:0 10px;
    text-align:center;
    img{
      width: 2rem;
      height: 2rem;

    }
    &-name{
       overflow: hidden;
       text-overflow:ellipsis;
       display: -webkit-box;
       -webkit-box-orient:vertical;
      -webkit-line-clamp:2;
    }

  }
}

</style>


