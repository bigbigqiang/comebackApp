// pages/chooseContact/chooseContact.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    contacts: [{ "name": "东东", "phone": "13255556666" }, { "name": "关关", "phone": "13255557777"}],
    newName:"",
    newPhone:"",
    editFlag:false,
    currentIndex:0,
    toastText:"",
    showToast:false,
    cover:false
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
  /**
    * 自定义弹出框显示
    */
  showCustomToast(msg) {
    this.setData({
      toastText: msg,
      showToast: true
    });
    this.hide();
  }, 
  addToContact(e){
    let index = e.currentTarget.id;
    let pages = getCurrentPages();
    let contacts = pages[pages.length - 2].data.contacts;
    contacts.push(this.data.contacts[index]);
    pages[pages.length - 2].setData({
      contacts: contacts
    });
    wx.navigateBack();
  },
  /**
    * 点击编辑按钮
    */
  editContact(e){
    let index = e.target.id;
    this.setData({
      editFlag:true,
      cover: true,
      currentIndex: index,
      newName: this.data.contacts[index].name,
      newPhone: this.data.contacts[index].phone
    })
  },
  /**
    * 监听名字输入
    */
  verifyName(e){
    this.setData({
      newName:e.detail.value
    })
  },
  /**
    * 监听手机输入
    */
  verifyPhone(e) {
    this.setData({
      newPhone: e.detail.value
    })
  },
  /**
    * 点击添加联系人
    */
  addContact(){
    this.setData({
      cover:true,
      editFlag: false,
      newName: "",
      newPhone: ""
    })
  },
  /**
    * 点击取消
    */
  cancel(){
    this.setData({
      cover: false,
      newName:"",
      newPhone:""
    })
  },
  /**
    * 点击确认
    */
  confirm(){
    let newPhone = this.data.newPhone;
    let newName = this.data.newName;
    let contacts = this.data.contacts;
    if (!(/^1[34578]\d{9}$/.test(newPhone)) && (newName.trim().length < 1 || newName.trim().length > 5)) {
      this.showCustomToast("名字或手机号码有误")
      return;
    } else if (this.data.editFlag){    
      contacts[this.data.currentIndex].name = newName;
      contacts[this.data.currentIndex].phone = newPhone;
      this.setData({
        cover: false,
        newName: "",
        newPhone: "",
        editFlag: false,
        contacts: contacts
      })
    } else{
      let new_data = { "name": newName, "phone": newPhone };
      contacts.push(new_data);
      this.setData({
        cover: false,
        newName: "",
        newPhone: "",
        contacts: contacts
      })
    }

  }
})