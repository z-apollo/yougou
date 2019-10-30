Page({

  data: {
    current: 0
  },

  handleClick(event) {
    const {index} = event.target.dataset
    this.setData({
      current: index
    })
  }

})