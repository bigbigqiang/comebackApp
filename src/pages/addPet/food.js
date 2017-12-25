// pages/babyFirstAid/drug.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    foodText: "",
    num:0
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
      foodText: pages[pages.length - 2].data.allFoodText
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
      foodText: e.detail.value,
      num: e.detail.value.length
    })
  },
  confirm() {
    if (this.data.foodText.trim() == "") {
      return
    } else {
      let pages = getCurrentPages();
      let foodText = this.data.foodText;
      pages[pages.length - 2].setData({
        foodText: (foodText.length > 12) ? (foodText.slice(0, 12) + "...") : foodText,
        allFoodText: this.data.foodText
      });
      wx.navigateBack();
    }
  }
})