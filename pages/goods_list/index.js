Page({
  data: {
    query: ""
  },

  onLoad: function(options){
    // options是页面传的参数，比如 {query: "曲面电视"}
    const {query} = options

    this.setData({
      // query:query
      query
    })
  }

})