import request from "../../utils/request.js"

Page({
  data: {
    detail:{}
  },

  onLoad: function(options) {
    //获取id
    const {goods_id} = options

    //请求商品详情
    request({
      url:"/api/public/v1/goods/detail",
      data:{
        goods_id
      }
    }).then(res =>{
      // console.log(res)
      const {message} = res.data

      //detail是商品详情
      this.setData({
        detail: message
      })
    })
  }


})