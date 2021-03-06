/**
 * Created by kazaff on 2014/6/4.
 */
"use strict";

module.exports = {
    domain: "http://192.168.137.251:8080"  //目标域，不会请求跨域资源，避免第三方资源的耗时，确保以“/”结束
    , startUrl: "/KnowledgeClient/"  //起始地址
    , concurrency: 10 //并发数
    , maxLevel: 4  //扫描层级
    , time: 3 //时间点，例如3表示凌晨三点
    , retry: 5 //请求异常后的重试次数
    , timeout: 30 //单次请求超时时间，单位为秒
    , mail: {
        name: "系统邮件：网页爬虫"
        , host: "smtp.126.com"
        , secureConnection: true
        , port: 465
        , auth: {
            user: "zhaotaiyuan@126.com"
            , pass: "********"
        }
        , template: '<h3>OMG:</h3><p>爬虫检测到异常页面，请登录SSH进行查看！</p>'
        , target: "edisondik@163.com"
    }
    , cache: {
        host: "127.0.0.1"
        , port: 6379
        , auth: 123
        , key: "*"      //要清理的key的规则
    }
};
