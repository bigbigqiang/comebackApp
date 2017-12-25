Page({
  /**
   * 页面的初始数据
   */
  data: {
    babys: [{
      id: 0,
      name: "球球",
      photo: "/image/default-photo.png",
      age: 2,
      petType: "约克夏梗",
      sex: 1
    }, {
      id: 1,
      name: "大黑",
      photo: "/image/default-photo.png",
      age: 3,
      petType:"约克夏梗",
      sex: 0
    }],
    showModal: false,
    modalText: "",
    modalId: 0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

  },
  /**
   * 隐藏modal
   */
  hideModal() {
    this.setData({
      showModal: false,
      modalText: ""
    })
  },
  /**
  * 显示modal
  */
  showModal(msg) {
    this.setData({
      showModal: true,
      modalText: msg
    })
  },
  /**
  * modal确认按钮
  */
  confirmModal() {
    this.hideModal();
    wx.showToast({
      title: '绑定成功！',
      complete:function(){
        setTimeout(function(){
          wx.navigateBack({
            delta: 2
          })
        },1500)
      }
    })
  },
  /** 
   * 监听底部选项
  */
  listenPicker(e) {
    this.setData({
      taped: true,
      index: e.detail.value
    })
  },
  /**
   * 上传照片
   */
  uploadImage() {
    let self = this;
    wx.chooseImage({
      count: 1,
      success: function (res) {
        self.setData({
          imageSrc: res.tempFilePaths[0]
        });
      },
    })
  },
  /**
  * 确认绑定弹出框
  */
  showTooltip(e) {
    this.setData({
      modalId: e.target.id
    })
    this.showModal('确定绑定球球？绑定后不可更改')
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
  toAddPet() {
    wx.redirectTo({
      url: '../addPet/addPet'
    })
  }
})