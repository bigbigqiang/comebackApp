var petData = require("../../util/citys.js");
Page({
  /**
   * 页面的初始数据
   */
  data: {
    sex: ["GG", "MM"],
    date: '2016-09-01',
    avatarSrc: '/image/petAvatar.png',
    sexIndex: 0,
    bigTypes: [],
    bigType: "",
    letters: [],
    letter: "",
    pets: [],
    pet: '',
    value: [0, 0, 0],
    values: [0, 0, 0],
    petData: petData,
    inferDefault: "",
    inferStatus: ["已绝育", "未绝育", "不确定"],
    foodText: "",
    descText: "",
    allFoodText: "",
    allDescText: "",
    contacts: [
      // { "name": "东东", "phone": "13255556666" }, 
      // { "name": "关关", "phone": "13255557777" }
    ],
    condition: false,
    showModal: false,
    modalText: "",
    modalId: 0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

    var petData = this.data.petData;

    const bigTypes = [];
    const letters = [];
    const pets = [];

    for (let i = 0; i < petData.length; i++) {
      bigTypes.push(petData[i].name);
    }
    for (let i = 0; i < petData[0].sub.length; i++) {
      letters.push(petData[0].sub[i].name)
    }
    for (let i = 0; i < petData[0].sub[0].sub.length; i++) {
      pets.push(petData[0].sub[0].sub[i].name)
    }

    this.setData({
      'bigTypes': bigTypes,
      'letters': letters,
      'pets': pets,
      'bigType': petData[0].name,
      'letter': petData[0].sub[0].name,
      'pet': petData[0].sub[0].sub[0].name
    })
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
    this.data.contacts.splice(this.data.modalId, 1);
    this.setData({
      contacts: this.data.contacts
    })
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
  * 选择头像
  */
  actionSheetTap() {
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
   * 选择性别监听事件
   */
  listenSexPicker(e) {
    this.setData({
      sexIndex: e.detail.value
    })
  },
  /**
   * 选择日期监听事件
   */
  listenDatePicker(e) {
    this.setData({
      date: e.detail.value
    })
  },
  /** 
   * 删除紧急联系人
  */
  deleteContact(e) {
    this.setData({
      modalId: e.target.id
    })
    this.showModal('确定删除紧急联系人?')
  },
  /** 
   * 选择绝育状态
  */
  chooseInferStatus() {
    let _this = this;
    wx.showActionSheet({
      itemList: _this.data.inferStatus,
      success: function (res) {
        _this.setData({
          inferDefault: _this.data.inferStatus[res.tapIndex]
        })
      },
      fail: function (res) {
        console.log(res.errMsg)
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
  bindChange: function (e) {
    var val = e.detail.value
    var t = this.data.values;
    var petData = this.data.petData;

    if (val[0] != t[0]) {
      const letters = [];
      const pets = [];

      for (let i = 0; i < petData[val[0]].sub.length; i++) {
        letters.push(petData[val[0]].sub[i].name)
      }
      for (let i = 0; i < petData[val[0]].sub[0].sub.length; i++) {
        pets.push(petData[val[0]].sub[0].sub[i].name)
      }

      this.setData({
        bigType: this.data.bigTypes[val[0]],
        letter: petData[val[0]].sub[0].name,
        letters: letters,
        pet: petData[val[0]].sub[0].sub[0].name,
        pets: pets,
        values: val,
        value: [val[0], 0, 0]
      })

      return;
    }
    if (val[1] != t[1]) {
      const pets = [];
      for (let i = 0; i < petData[val[0]].sub[val[1]].sub.length; i++) {
        pets.push(petData[val[0]].sub[val[1]].sub[i].name)
      }
      this.setData({
        letter: this.data.letters[val[1]],
        pet: petData[val[0]].sub[val[1]].sub[0].name,
        pets: pets,
        values: val,
        value: [val[0], val[1], 0]
      })
      return;
    }
    if (val[2] != t[2]) {
      this.setData({
        pet: this.data.pets[val[2]],
        values: val
      })
      return;
    }


  },
  open: function () {
    this.setData({
      condition: !this.data.condition
    })
  },
  toFood(){
    wx.navigateTo({
      url: 'food'
    })
  },
  toDesc(){
    wx.navigateTo({
      url: 'desc'
    })
  },
  toPetSuccess(){
    wx.showToast({
      title: '绑定成功！',
      complete: function () {
        setTimeout(function () {
          wx.navigateBack({
            delta: 3
          })
        }, 1500)
      }
    })
  }
})

