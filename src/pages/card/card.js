// pages/card/card.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        contact_box: false
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {

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
        wx.setNavigationBarTitle({
            title: '袁**的定位贴'
        })
    },
    /**
     * 转发分享
    */
    onShareAppMessage: function (res) {

        return {
            title: '袁**的定位贴',
            path: '/pages/card/card',
            success: function (res) {
                // 转发成功
            },
            fail: function (res) {
                // 转发失败
            }
        }
    },

    /**
    * 弹出联系人框
    */
    next_contact: function () {
        this.setData({
            contact_box: true
        })
        wx.setNavigationBarColor({
            frontColor: '#000000',
            backgroundColor: 'rgba(0, 0, 0, 0.5)'
        })
    },
    hide: function () {
        this.setData({
            contact_box: false
        })
        wx.setNavigationBarColor({
            frontColor: '#000000',
            backgroundColor: '#ffffff'
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