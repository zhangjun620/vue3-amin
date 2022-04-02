/**
 * @description 项目基本配置
 */


export default {
  /**
   * @description 配置显示在浏览器标签的title
   */
   title: '榆林市长城安全巡查监管平台',
   
  /**
   * @description 子路径
   */
   subPath: process.env.VUE_APP_PUBLIC_PATH,

   /**
    * @description Api地址
    */
   baseUrl: process.env.VUE_APP_API_URL,
 
   /**
    * @description SSO AppId
    */
   APPID: process.env.VUE_APP_SSO_APPID,
 
   /**
    * @description SSO AppSecret(加密解密用)
    */
   APPSecret: process.env.VUE_APP_SSO_APPSECRET,
 
   /**
    * @description 路由模式
    */
   routerModel: 'history',
 
   /**
    * @description 默认打开的首页的路由name值，默认为home
    */
   homeName: 'home'
}