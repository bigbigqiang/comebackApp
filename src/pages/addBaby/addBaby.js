// pages/addBaby/addBaby.js
let app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    sex:["男","女"],
    date:'2016-09-01',
    avatarSrc: '/image/defaultAvatar.png',
    sexIndex:0,
    bloodType: ["A型", "B型", "AB型", "O型"],
    bloodIndex: 0,
    allergyText: "",
    drugText: "",
    medicalText: "",
    allAllergyText: "",
    allDrugText: "",
    allMedicalText: "",
    contacts: [
      // { "name": "东东", "phone": "13255556666" }, 
      // { "name": "关关", "phone": "13255557777" }
      ]
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
  /**
    * 关闭弹出框
    */
  hide: function () {
    setTimeout(() => {
      this.setData({
        showToast: false
      })
    }, 1500)
  },
  showCustomToast(msg) {
    this.setData({
      toastText: msg,
      showToast: true
    });
    this.hide();
  },  
  /**
   * 选择性别监听事件
   */
  listenSexPicker(e){
    this.setData({
      sexIndex: e.detail.value
    })
  },
   /**
   * 选择日期监听事件
   */
  listenDatePicker(e){
    this.setData({
      date: e.detail.value
    })
  },
   /**
   * 选择头像
   */
  actionSheetTap(){
    let self = this;
    wx.chooseImage({
      count: 1,
      success: function (res) {
        self.setData({
          avatarSrc: res.tempFilePaths[0]
        });
      }
    })
  },
  /**
   * 选择血型
   */
  listenBloodTypePicker(e) {
    this.setData({
      bloodIndex: e.detail.value
    })
  },
  /**
   * 检测身高
   */
  verifyH(e) {
    if (e.detail.value > 230 || e.detail.value < 1) {
      this.showCustomToast("身高只能在1~230（cm）之间")
    }
  },
  /**
   * 检测体重
   */
  verifyW(e) {
    if (e.detail.value > 149 || e.detail.value < 3) {
      this.showCustomToast("体重只能在3~149（kg）之间")
    }
  },
  /** 
   * 删除紧急联系人
  */
  deleteContact(e){
    let _this = this;
    wx.showModal({
      content: '确定删除紧急联系人?',
      success(res) {
        if (res.confirm) {
          _this.data.contacts.splice(e.target.id, 1);
          _this.setData({
            contacts: _this.data.contacts
          })
        } else {
          return;
        }
      }

    })
  },
  /** 
   * 跳转到选择联系人
  */
  chooseContact() {
    wx.navigateTo({
      url: 'chooseContact',
    })
  },
  /** 
   * 跳转到过敏说明
  */
  toAllergy() {
    wx.navigateTo({
      url: 'allergy'
    })
  },
  /** 
   * 跳转到药物说明
  */
  toDrug() {
    wx.navigateTo({
      url: 'drug'
    })
  },
  /** 
   * 跳转到医疗说明
  */
  toMedical() {
    wx.navigateTo({
      url: 'medical?text=' + this.data.medicalText
    })
  },
  toSuccess(){
    wx.navigateTo({
      url: '../bindSuccess/bindSuccess',
    })
  }
})