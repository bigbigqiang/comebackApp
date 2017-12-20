const config = require('./config')
App({
    api: config,
    globalData: {
        haswxLogin: false,
        openid: null,
        sendLocation: false
    },
    onLaunch: function (options) {
        let scene = options.scene
        if (scene == 1011 || scene == 1012 || scene == 1013) {
            this.globalData.sendLocation = true
        }
        // console.log("[onLaunch] 场景值:", scene)
    },
    request(url, param, callback, method) {
        wx.request({
            url: url,
            data: param,
            method: method || 'GET',
            dataType: 'json',
            header: { 'Content-Type': 'application/json' },
            success: function (ret) {
                return typeof callback == "function" && callback(ret.data)
            },
            fail: function () {
                wx.hideLoading()
                wx.showModal({
                    title: '提示',
                    content: '网络连接失败',
                    showCancel: false,
                    confirmText: '我知道了',
                    confirmColor: '#f8494c',
                    success(res) {
                        if (res.confirm) {
                        }
                    }
                })
                return false
            }
        })
    },

    // lazy loading openid
    getUserOpenId(callback) {
        var self = this

        if (self.globalData.openid) {
            callback(null, self.globalData.openid)
        } else {
            wx.login({
                success: function (data) {
                    wx.request({
                        url: openIdUrl,
                        data: {
                            code: data.code
                        },
                        success: function (res) {
                            console.log('拉取openid成功', res)
                            self.globalData.openid = res.data.openid
                            callback(null, self.globalData.openid)
                        },
                        fail: function (res) {
                            console.log('拉取用户openid失败，将无法正常使用开放接口等服务', res)
                            callback(res)
                        }
                    })
                },
                fail: function (err) {
                    console.log('wx.login 接口调用失败，将无法正常使用开放接口等服务', err)
                    callback(err)
                }
            })
        }
    },
    //lazy loading wxUserinfo
    getUserInfo: function () {
        var self = this
        if (self.globalData.hasLogin === false) {
            wx.login({
                success: _getUserInfo
            })
        } else {
            _getUserInfo()
        }
        function _getUserInfo() {
            wx.getUserInfo({
                success: function (res) {
                    self.globalData.hasLogin = res.userInfo
                }
            })
        }
    }
})
