// pages/user/user.js
var app = getApp()
Page({

    /**
     * 页面的初始数据
     */
    data: {
        hasUserInfo: false
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        this.getwxInfo();
    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function () {

    },
    /**
       * 获取微信公共信息
       */
    getwxInfo() {
        var that = this
        if (app.globalData.haswxLogin === false) {
            wx.login({
                success: _getUserInfo
            })
        } else {
            _getUserInfo()
        }
        function _getUserInfo() {
            wx.getUserInfo({
                success(res) {
                    app.globalData.haswxLogin = res.userInfo
                    that.setData({
                        hasUserInfo: res.userInfo,
                        userInfo: res.userInfo
                    })
                }
            })
        }
    },
    /**
    * 获取微信个人信息
    */
    getUserInfo: function (res) {
        var that = this;
        if (app.globalData.haswxLogin === false) {
            console.log(res);
            if (res.detail.userInfo) {
                app.globalData.haswxLogin = res.detail.userInfo
                this.setData({
                    hasUserInfo: true,
                    userInfo: res.detail.userInfo
                })
            } else that.getwxInfo()
        } else {
            this.setData({
                hasUserInfo: true,
                userInfo: app.globalData.haswxLogin
            })
        }
    },
    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function () {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function () {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function () {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function () {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function () {

    }
})