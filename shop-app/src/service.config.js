//统一接口配置
const MOCKURL="http://www.data.com/";//后端接口
const SERVERURL="http://localhost:3000/";//真实URL,服务器地址
const URL={
    getrecommendList:MOCKURL+'getrecommendList',
    getHot:MOCKURL+"xxxx",
    registUser:SERVERURL+"user/registUser",//注册  user控制器  下的方法-->registUser
    loginUser:SERVERURL+"user/loginUser",
    getTypes:SERVERURL+"type/getTypes",//商品类型
    getProductByType:SERVERURL+"product/getProductByType"//商品信息
}
export default URL;