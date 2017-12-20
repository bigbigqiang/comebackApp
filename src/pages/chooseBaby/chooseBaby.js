// pages/home/home.js
let app = getApp()
Page({

    /**
     * 页面的初始数据
     */
    data: {
        babys:[{
          id:0,
          babyId:1,
          name:"魏鑫大宝",
          photo:"/image/default-photo.png",
          age:12,
          sex:1
        },{
          id:1,
          babyId: 0,
          name:"魏莉小宝",
          photo: "/image/default-photo.png",
          age:5,
          sex:0
        }]
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {

    },
    /** 
     * 监听底部选项
    */
    listenPicker(e){
      this.setData({
        taped:true,
        index:e.detail.value
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
    * 确认绑定弹出框
    */
    showTooltip() {
      wx.showModal({
        title: '',
        content: '确定绑定魏莉小宝？绑定后不可更改',
        success(res){
          console.log(res);
        }
      })
    },     
    /**
    * 生命周期函数--监听页面显示
    */
    onShow() {

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

    },
    toAddBaby(){
      wx.navigateTo({
        url: '../addBaby/addBaby'
      })
    }
})