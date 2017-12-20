// pages/babyFirstAid/allergy.js
let app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    allergyText:""
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
      allergyText: pages[pages.length - 2].data.allAllergyText
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
  /**
   * 获取输入框内容
   */
  getMessage(e){
    this.setData({
      allergyText:e.detail.value
    })
  },
  /**
   * 点击确认按钮
   */
  confirm(){
    if (this.data.allergyText.trim()==""){
      return
    }else{
      let pages = getCurrentPages();
      let allergyText = this.data.allergyText;
      pages[pages.length-2].setData({
        allergyText: (allergyText.length > 12) ? (allergyText.slice(0, 12) + "...") : allergyText,
        allAllergyText: this.data.allergyText
      });
      wx.navigateBack();     
    }
  }
})