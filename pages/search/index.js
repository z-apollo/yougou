// pages/search/index.js
Page({
  data: {
    //是否显示/取消按钮
    showCancel:false,
    //输入框的值
    searchValue:"",
    //搜索历史列表
    keywords: []
  },

  onLoad: function (options) {

  },

  handleInput(event){
    // console.log(event)
    //输入框的值
    const {value} = event.detail
    let showCancel
    //判断输入框有没有值，value.trim()去除前后空格
    showCancel = value.trim() ? true : false
    this.setData({
      showCancel:showCancel,
      searchValue:value
    })
  },

  handleCancel(){
    this.setData({
      searchValue:"",
      showCancel:false
    })
  },

  //点击键盘右下角确定按钮时候触发
  handleConfirm(){
    //先从本地存储拿出来数组，没有的等于空的数组
    const arr = wx.getStorageSync('search') || []

    //判断本地是否有数据，有的话就在前面追加
    arr.unshift(this.data.searchValue)

    //保存到本地
    wx.setStorageSync('search', arr)

    //跳转到搜索列表页
    wx.navigateTo({
      url:"/pages/goods_list/index?query=" + this.data.searchValue
    })
  },

  handleClear(){
    wx.removeStorageSync('search')

    this.setData({
      keywords:[]
    })
  },

  onShow(){
    //每次显示页面都从本地获取数据
    this.setData({
      keywords: wx.getStorageSync("search") || []
    })
  }

})