/**
 * 小程序配置文件
 */


let res = {
    "prod": "http://iworld-wxa.bs.umres.cn/img.m-talk.mobi",
    "test": "http://iworld-wxa.bs.umres.cn/qx-mtalk-test.oss-cn-shanghai.aliyuncs.com",
    "show": "http://iworld-wxa.bs.umres.cn/qx-mtalk-show.oss-cn-shanghai.aliyuncs.com"
}

let hosts = {
    "prod": "https://m.m-talk.mobi/mtalk2",
    "test": "https://www.mm-mworld.com:443/mtalk2",
    "show": "https://show.m-talk.mobi/mtalk2"
}

let code_rule = [
    { "tag": "prod", "uri": "http://m.m-talk.mobi:8090/share/scanLabel.do?LabelGuid=" },
    { "tag": "prod", "uri": "http://m.m-talk.mobi:8090/share/scanLabel.do?l=" },
    { "tag": "prod", "uri": "http://m.m-talk.mobi/share/scanLabel.do?LabelGuid=" },
    { "tag": "prod", "uri": "http://m.m-talk.mobi/share/scanLabel.do?l=" },
    { "tag": "prod", "uri": "http://m-talk.mobi/s/?l=" },
    { "tag": "test", "uri": "http://www.mm-mworld.com:8090/share/scanLabel.do?l=" },
    { "tag": "test", "uri": "http://www.mm-mworld.com:8090/share/scanLabel.do?labelGuid=" },
    { "tag": "show", "uri": "http://show.m-talk.mobi/s/?l=" }
]

let config = {

    res: res,

    hosts: hosts,
    code_rule: code_rule,
    // 扫描定位贴二维码
    scanLable: `/Share/scanLableByOtherApp.do`,

    //给家人留言
    leaveMsg: `/WcUser/saveWcPhone.do`,

    //发送呼的
    sendLocal: '/Share/replyClueByScanByOtherApp.do'

};

module.exports = config
