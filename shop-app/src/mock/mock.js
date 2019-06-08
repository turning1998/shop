import Mock from 'mockjs'; //package.json下的mockjs
//import data from './data.json';
/* Mock.mock('http://www.yulang.com/getList',{data:data.list});
Mock.mock('http://www.yulang.com/getUser',{
    'name|2':'x', //  |后面代表规则：name=xx重复两次
    'age|18-35':20   //生成18-35的随机数
}); */
/*Mock.mock('http://www.yulang.com/regxp',{
      'regexp1':/[a-z][A-Z][0-9]/, //eg aS0
      'regexp2':/\d{5,10}/,    //重复5次或10次
})*/
//生成列表
/* Mock.mock('http://www.yulang.com/list',{
     'info|10-20':[           //列表生成10到20之间的数据
         {
            'index|+1':1,  //从1开始，每次自增1
            'name':'@first @last',//英文名称 
            'id':'@integer(10000,99999)', //生成10000-99999的数
            'data':'@datetime',//生成日期
            'img':'@image("200*200")', //生成200x200的图片
            'text':'@sentence(6,22)',//首字母大写 6到22个单词

         }
        
     ]
}); */

let Random=Mock.Random;
let productData= ()=>{
    let productList=[];//存放农机信息的数组  100个
    for(let i=0;i<100;i++){
        let product={
            name:Random.ctitle(15,30),
            img:Random.dataImage('100x100', '商品'+Random.integer(1,100)),
            price:Random.integer(1000,10000),
            onwer:Random.cname(),
        }
        productList.push(product)
    }
    return productList;

}
Mock.mock('http://www.data.com/getrecommendList',productData)
