// pages/home/home.js
let app = getApp()
Page({

    /**
     * 页面的初始数据
     */
    data: {
        position: "给家人绑定位置",
        positionOptions: ['上装', '下装', '其他'],
        index:0,
        imageSrc:"/image/petPosition.jpg",
        remarker:""
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {

    },
    /** 
     * 监听底部选项
    */
    choosePosition(){
      let _this =this;
      wx.showActionSheet({
        itemList: _this.data.positionOptions,
        success: function (res) {
          _this.setData({
            position: _this.data.positionOptions[res.tapIndex]
          })
        },
        fail: function (res) {
          console.log(res.errMsg)
        }
      })
    },
    /**
     * 上传照片
     */
    uploadImage(){
      let self = this;
      wx.chooseImage({
        count:1,
        success: function(res) {
          self.setData({
            imageSrc: res.tempFilePaths[0]
          });
        },
      })
    },
    /**
    * 关闭弹出框
    */
    hide: function () {
    },     
    /**
    * 生命周期函数--监听页面显示
    */
    onShow() {

    },
    toChoosePet() {
      wx.navigateTo({
        url: '../choosePet/choosePet'
      })
    },
    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide() {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload() {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh() {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom() {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage() {

    }
})