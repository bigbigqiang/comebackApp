// pages/babyFirstAid/drug.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    descText: "",
    num: 0
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
    let pages = getCurrentPages();
    this.setData({
      descText: pages[pages.length - 2].data.allDescText
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

  },
  getMessage(e) {
    this.setData({
      descText: e.detail.value,
      num: e.detail.value.length
    })
  },
  confirm() {
    if (this.data.descText.trim() == "") {
      return
    } else {
      let pages = getCurrentPages();
      let descText = this.data.descText;
      pages[pages.length - 2].setData({
        descText: (descText.length > 12) ? (descText.slice(0, 12) + "...") : descText,
        allDescText: this.data.descText
      });
      wx.navigateBack();
    }
  }
})