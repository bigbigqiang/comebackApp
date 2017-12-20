// pages/card/card.js
let app = getApp()
const util = require('../../util/util.js')
Page({

    /**
     * 页面的初始数据
     */
    data: {
        contact_box: false,
        status: 1,
        tips: false,
        movies: '',
        id: ''
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {
        if (options.type) {
            wx.redirectTo({
                url: '/pages/help/pet' + '?id=' + options.id + '&env=' + options.env,
            })
            return false
        }
        this.setData({
            res: app.api.res[options.env],
            id: options.id,
            host: app.api.hosts[options.env],
            env: options.env,
            scene: options.scene || 'normal'
        })
        app.globalData.host = app.api.hosts[options.env]
        this.getcode(app.api.hosts[options.env], options.id)
    },
    /**
     * 扫描定位贴二维码详细信息
     */
    getcode(host, id) {
        let self = this
        app.request(host + app.api.scanLable, { id: id }, (res) => {
            if (res.label) {
                wx.setNavigationBarTitle({
                    title: (res.label.trueName || '用户') + '的定位贴',
                })
                self.setData({
                    item: res,
                    showloading: true
                })
            } else {
                wx.setNavigationBarTitle({
                    title: res.call.creatorName + '的求助',
                })
                res.call.createTime = util.formatT(Date.parse(res.call.createTime.replace(/-/g, "/")))
                if (res.call.lossLocation) {
                    let address = res.call.lossLocation.split(',')
                    res.call.latitude = address[0]
                    res.call.longitude = address[1]
                }
                if (res.clues && res.clues.length > 0) {
                    res.clues.forEach((item) => {
                        item.createTime = util.humanTime(Date.parse(item.createTime.replace(/-/g, "/")))
                        if (item.createLocation) {
                            let address = item.createLocation.split(',')
                            item.latitude = address[0]
                            item.longitude = address[1]
                        }
                        item.imageNames = item.imageNames ? item.imageNames.split(',') : []
                    })
                }
                let movie = res.call.lossImageName ? res.call.lossImageName.split(',') : []
                self.setData({
                    tips: true,
                    info: res,
                    movies: movie,
                    showloading: true
                })
            }
            self.getlocal();
        })
    },
    /**
    * 微信获取当前位置
    */
    getlocal() {
        let self = this
        wx.getLocation({
            type: 'wgs84',
            success(res) {
                let local = res.longitude + ',' + res.latitude
                self.setData({
                    local: local
                })
                self.shareLocal()
            }
        })
    },
    close() {
        this.setData({
            contact_box: false,
            tips: false
        })
    },
    /**
    * 分享位置
    */
    shareLocal() {
        if (this.data.local && this.data.scene == 'normal') {
            let self = this, para
            if (this.data.info) {
                para = {
                    flag: this.data.info.flag,
                    id: this.data.info.call.callId || '',
                    lid: this.data.info.call.labelId,
                    geoLocation: this.data.local,
                    type: 0,
                    from: 0
                }
            }
            if (this.data.item) {
                para = {
                    flag: this.data.item.flag,
                    id: this.data.item.label.callId || '',
                    lid: this.data.item.label.labelId,
                    geoLocation: this.data.local,
                    type: 0,
                    from: 0
                }
                this.setData({
                    contact_box: false,
                    tips: false
                })
            }
            app.request(this.data.host + app.api.sendLocal, para, (res) => { })
        }
    },
    /**
     * 切换状态
     */
    switchType(e) {
        this.setData({
            status: e.target.id
        })
    },
    /**
    * 转发分享
    */
    onShareAppMessage(res) {
        // console.log(this.data.env)
        let title
        if (this.data.info) {
            title = this.data.info.call.creatorName + '的求助'
        } else {
            title = this.data.item.label.trueName + '的定位贴'
        }
        return {
            title: title,
            path: '/pages/help/detail?id=' + this.data.id + '&env=' + this.data.env + '&scene=share' + '&t=' + new Date().getTime(),
            success(res) { },
            fail(res) { }
        }
    },
    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady() {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow() {
    },

    /**
     * 拨打电话
     */
    call(e) {
        wx.makePhoneCall({
            phoneNumber: e.target.dataset.id,
            success(res) {
                // console.log('success:' + JSON.stringify(res))
            },
            fail(res) {
                if (res.errMsg == 'makePhoneCall:fail') {
                    wx.showModal({
                        title: '提示',
                        content: '拨打失败，请手动拨打电话：' + e.target.dataset.id
                    })
                }
                console.log('fail:' + JSON.stringify(res))
            }
        })
    },
    /**
    * 弹出联系人框
    */
    next_contact() {
        this.setData({
            contact_box: true
        })
    },
    /**
     * 关闭弹出框
     */
    hide() {
        this.setData({
            contact_box: false,
            tips: false
        })
    },
    /**
    * 打开位置
    */
    openLocation(e) {
        var local = e.target.dataset.name;
        var longitude = e.target.dataset.longitude;
        var latitude = e.target.dataset.latitude;
        wx.openLocation({
            longitude: Number(longitude),
            latitude: Number(latitude),
            name: local,
            address: local
        })
    },
    /**
     * 预览截图
     */
    perviewImg(e) {
        let self = this
        let url = e.target.dataset.url
        if (url) {
            url.forEach((item, ind) => {
                url[ind] = self.data.res + '/' + item
            })
        }
        wx.previewImage({
            current: e.target.dataset.id,
            urls: url || [e.target.dataset.id]
        })
    }
})