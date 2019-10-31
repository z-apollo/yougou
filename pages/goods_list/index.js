import request from "../../utils/request.js"

Page({
  data: {
    query: "",
    //商品列表，接口请求回来的
    goods:[],

    //是否有更多
    hasMore: true,
    //当前的页数
    pagenum: 1
  },

  onLoad: function(options){
    // options是页面传的参数，比如 {query: "曲面电视"}
    const {query} = options
    this.setData({
      // query:query
      query
    })

    //请求列表数据
    this.getList();
  },

  //请求列表数据（封装）
  getList(){
    request({
      url: "/api/public/v1/goods/search",
      data:{
        query: this.data.query,
        pagenum: this.data.pagenum,
        pagesize: 10
      }
    }).then(res =>{
      //goods是商品列表
      const {goods} = res.data.message
      //判断是否是最后一页
      if(goods.length < 10){
        this.setData({
          hasMore: false
        })
      }
      //循环给每个商品价格保留两位小数点
      const newGoods = goods.map(v => {
        v.goods_price = Number(v.goods_price).toFixed(2)
        return v;
      })
      //合并数组
      this.setData({
        goods: [...this.data.goods, ...newGoods]
      })
    })
  },

  //触底事件
  onReachBottom(){
    //有更多数据的时候才请求下一页数据
    if(this.data.hasMore){
      //请求下一页数据
      this.setData({
        pagenum: this.data.pagenum + 1
      })
      this.getList()
    }

  }


})