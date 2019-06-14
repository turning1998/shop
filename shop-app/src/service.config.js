//统一接口配置
const MOCKURL="http://www.data.com/";//后端接口
const SERVERURL="http://localhost:3000/";//真实URL,服务器地址
const URL={
    getrecommendList:MOCKURL+'getrecommendList',
    getHot:MOCKURL+"xxxx",
    registUser:SERVERURL+"user/registUser"
}
export default URL;