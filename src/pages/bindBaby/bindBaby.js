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
        taped:false,
        showToast:false,
        toastText:"",
        imageSrc:"/image/babyCloth.png",
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
            taped:true,
            imageSrc: res.tempFilePaths[0]
          });
        },
      })
    },
    /**
    * 关闭弹出框
    */
    hide: function () {
      setTimeout(()=>{
        this.setData({
          showToast: false
        })
      },1500)
    }, 
    showCustomToast(msg){
      this.setData({
        toastText:msg,
        showToast: true        
      });
      this.hide();
    },    
    /**
    * 生命周期函数--监听页面显示
    */
    onShow() {

    },
    /**
    * 跳转到选择宝贝
    */
    toChooseBaby() {
      if (this.data.position !=="给家人绑定位置"){
        wx.navigateTo({
          url: '../chooseBaby/chooseBaby',
        })
      }else{
        this.showCustomToast("请选择定位帖绑定位置");
        // wx.showToast({
        //   title: '请选择绑定位置',
        //   icon:"loading"
        // })
      }
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