import request from "../../utils/request.js"

Page({
  data: {
    query: "",
    //商品列表，接口请求回来的
    goods:[]
  },

  onLoad: function(options){
    // options是页面传的参数，比如 {query: "曲面电视"}
    const {query} = options
    this.setData({
      // query:query
      query
    })

    //请求列表数据
    request({
      url: "/api/public/v1/goods/search",
      data: {
        query,
        pagenum: 1,
        pagesize: 10
      }
    }).then(res =>{
      //goods是商品列表
      const {goods} = res.data.message

      //循环给每个商品价格保留两位小数点
      const newGoods = goods.map(v =>{
        v.goods_price = Number(v.goods_price).toFixed(2)
        return v;
      })

      this.setData({
        goods:newGoods
      })
    })


  }



})