// pages/babyFirstAid/medical.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    medicalText:""
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
      medicalText: pages[pages.length - 2].data.allMedicalText
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
      medicalText: e.detail.value
    })
  },
  confirm() {
    if (this.data.medicalText.trim() == "") {
      return
    } else {
      let pages = getCurrentPages();
      let medicalText = this.data.medicalText;
      pages[pages.length - 2].setData({
        medicalText: (medicalText.length > 12) ? (medicalText.slice(0, 12) + "...") : medicalText,
        allMedicalText: this.data.medicalText
      });
      wx.navigateBack(); 
    }
  }
})