// pages/search/index.js
Page({
  data: {
    showCancel:false,
    searchValue:""
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
  }

})