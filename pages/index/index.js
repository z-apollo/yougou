import request from "../../utils/request.js"

Page({

  data: {
    banners: [],
    menus: [],
    floors: []
  },

  onLoad() {
    //轮播图
    request({
      url: "/api/public/v1/home/swiperdata"
    }).then(res => {
      // console.log(res)
      const {message} = res.data
      this.setData({
        banners: message
      }) 
    })
    //菜单列表
    request({
      url:"/api/public/v1/home/catitems"
    }).then(res =>{
      // console.log(res)
      const {message} = res.data
      this.setData({
        menus: message
      })
    })
    //楼层列表
    request({
      url:"/api/public/v1/home/floordata"
    }).then(res =>{
      // console.log(res)
      const {message} = res.data
      this.setData({
        floors: message
      })
    })


  }

})