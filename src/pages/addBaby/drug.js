// pages/babyFirstAid/drug.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    drugText: "",
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
      drugText: pages[pages.length - 2].data.allDrugText
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
      drugText: e.detail.value,
      num: e.detail.value.length
    })
  },
  confirm() {
    if (this.data.drugText.trim() == "") {
      return
    } else {
      let pages = getCurrentPages();
      let drugText = this.data.drugText;
      pages[pages.length - 2].setData({
        drugText: (drugText.length > 12) ? (drugText.slice(0, 12) + "...") : drugText,
        allDrugText: this.data.drugText
      });
      wx.navigateBack(); 
    }
  }
})