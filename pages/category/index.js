import request from "../../utils/request.js"

Page({

  data: {
    current: 0,
    //分类列表
    list: []
  },

  handleClick(event) {
    const {index} = event.target.dataset
    this.setData({
      current: index
    })
  },

  onLoad: function() {
     //请求分类页数据
     request({
       url:"/api/public/v1/categories"
     }).then(res =>{
      //  console.log(res)
       const {message} = res.data
       this.setData({
         list:message
       })
     })
  }

})