// pages/help/message.js
let app = getApp()
Page({

    /**
     * 页面的初始数据
     */
    data: {
        phone: ''
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        this.setData({
            id: options.id
        })
    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {

    },

    /**
     * 发送报告位置
    */

    next_page: function () {
        if (!this.data.phone) {
            wx.showModal({
                title: '提示',
                content: '请填写你的联系方式',
                showCancel: false,
                confirmColor: '#f8494c'
            })
            return false
        }
        var reg = /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1}))+\d{8})$/;
        if (!reg.test(this.data.phone)) {
            wx.showModal({
                title: '提示',
                content: '请填写正确的手机号',
                showCancel: false,
                confirmColor: '#f8494c'
            })
            return false
        }
        wx.showLoading({
            title: '提交中...',
        })
        let para = {
            labelId: this.data.id,
            openId: this.data.id,
            phoneNo: this.data.phone
        }
        app.request(app.globalData.host + app.api.leaveMsg, para, (res) => {
            //留言成功
            if (res.code == 100) {
                wx.redirectTo({
                    url: '/pages/tip/msg'
                })
            }
            wx.hideLoading()
            //留言失败，目前默认留言成功
            if (res.code == 101) {
                wx.showModal({
                    title: '提示',
                    content: res.message,
                    showCancel: false,
                    confirmColor: '#f8494c'
                })
            }
        }, 'POST')
    },
    /**
     * 拨打电话
    */
    bindTextAreaBlur: function (e) {
        this.setData({
            phone: e.detail.value
        })
    },
    /**
     * 拨打电话
     */
    call: function (e) {
        wx.makePhoneCall({
            phoneNumber: e.target.id
        })
    },
    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function () {

    }
})