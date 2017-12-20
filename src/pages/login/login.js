// pages/login/login.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    disabled: true,
    visible: false,
    account: "",
    password: ""
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
  getAccount(e) {
    if (e.detail.value.trim() !== "") {
      this.setData({
        account: e.detail.value
      })
      if (this.data.password !== "") {
        this.setData({
          disabled: false
        })
      }
    } else {
      this.setData({
        disabled: true
      })
    }
  },
  swichVisible() {
    this.setData({
      visible: !this.data.visible
    })
  },
  getPassword(e) {
    if (e.detail.value.trim() !== "") {
      this.setData({
        password: e.detail.value
      })
      if (this.data.account !== "") {
        this.setData({
          disabled: false
        })
      }
    } else {
      this.setData({
        disabled: true
      })
    }
  },
  login() {
    if (!disabled){
      if (!(/^1[34578]\d{9}$/.test(this.data.account))) {
        wx.showToast({
          title: '手机号码有误',
        })
        return;
      }
    }else{
      console.log("准备验证")
    }
  },
  toRegister(){
    wx.navigateTo({
      url: '../register/register',
    })
  },
  findpwd(){
    wx.navigateTo({
      url: '../findpwd/findpwd',
    })
  }
})