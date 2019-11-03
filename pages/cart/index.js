Page({

  data: {
    //收货地址
    address:{},
    goods: null
  },

  //获取收货地址
  handleAddress(){
    wx.chooseAddress({
      //成功的方法
      success:(res) =>{
        //设置收货地址
        this.setData({
          address:{
            userName: res.userName,
            telNumber: res.telNumber,
            detail: res.provinceName + res.cityName + res.countyName + res.detailInfo
          }
        })
      }
    })
  },

  onShow(){
    //每次打开页面的时候都在本地获取购物车的数据
    const goods = wx.getStorageSync("goods") || null
    
    this.setData({
      goods
    })
  }
})