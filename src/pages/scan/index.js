// pages/scan/index.js
let app = getApp()
const util = require('../../util/util.js')
Page({

    /**
     * 页面的初始数据
     */
    data: {
        flag_status: {
            "$0": {
                name: '该定位贴未激活',
                content: '请到钦家APP激活定位贴'
            },
            "$5": {
                name: '抱歉，该定位贴已停用',
                content: '请前往钦家APP绑定更多定位贴'
            },
            "$6": {
                name: '抱歉，该定位贴已停用',
                content: '请前往钦家APP绑定更多定位贴'
            },
            "$7": {
                name: '抱歉，该定位贴已失效',
                content: '请前往钦家APP绑定更多定位贴'
            },
            "$8": {
                name: '抱歉，该定位贴已删除',
                content: '请前往钦家APP绑定更多定位贴'
            }
        },
        tips: false
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {
        wx.showLoading({
            title: 'Loading...',
        })

        let code_rules = app.api.code_rule

        let base_url = util.getparas(options.q)
        let uri = util.inArray(base_url[0], code_rules)
        if (uri) {
            let para = base_url[1]
            let host = app.api.hosts[uri.tag]
            app.globalData.host = host
            this.getcode(host, para, uri.tag)
        } else {
            wx.hideLoading()
            wx.showModal({
                title: '提示',
                content: '抱歉，此二维码无效',
                showCancel: false,
                confirmColor: '#f8494c',
                success: () => {
                    wx.redirectTo({
                        url: '/pages/home/home',
                    })
                }
            })
        }
    },

    /**
     * 扫描定位贴二维码
     */
    getcode(host, labelGuid, env) {
        let self = this
        app.request(host + app.api.scanLable, { id: labelGuid }, (res) => {
            wx.hideLoading()
            let flag = '$' + res.flag
            if (this.data.flag_status[flag]) {
                self.setData({
                    tips: true,
                    msg: this.data.flag_status[flag]
                })
            } else {
                let para = '?id=' + labelGuid + '&env=' + env,
                    url = '/pages/help/detail'
                if (res.kubun == 1) url = '/pages/help/pet'
                wx.redirectTo({
                    url: url + para
                })
            }
        })
    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady() {

    },
    /**
    * 关闭弹出框
    */
    hide: function () {
        this.setData({
            tips: false
        })
        wx.redirectTo({
            url: '/pages/home/home',
        })
    },
    /**
     * 生命周期函数--监听页面显示
     */
    onShow() {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage() {

    }
})