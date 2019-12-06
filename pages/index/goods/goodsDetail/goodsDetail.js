// pages/index/goods/goodsDetail/goodsDetail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isShow:0,//设置背景和其他点击事件内容的出现与颖仓
    inputValue:1,//设置input的值
    isColor:1,//颜色的设置
    isSize:1,//尺寸的设置
  },
  // 加减的点击事件
  bindCal:function (e) {
    var numAdd=this.data.inputValue+ parseInt(e.target.dataset.cul) 
    if(numAdd<=0) return
    this.setData({
      inputValue:numAdd
    })
    console.log(this.data.inputValue)
  },
  // 颜色选择
  ColorChoose:function (e) {
    this.setData({
      isColor:e.target.dataset.color
    })
    console.log(this.data.isColor)
  },
  // 尺寸选择
  sizeChoose:function (e) {
    this.setData({
      isSize:e.target.dataset.size
    })
    console.log(this.data.isColor)
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  // 领红包的点击事件
  bindRedBag:function () {
    this.setData({
      isShow:1
    })
    console.log(this.isShow)
  },
  // 选择规格的点击事件
  bindChoose:function(){
    this.setData({
      isShow:2
    })
  },
  // 取消规格和背景和红包
  cancel:function(){
    this.setData({
      isShow:0
    })
  },
  // 点击跳转进入购物车页面
  bindToShoppingCar:function () {
    wx.switchTab({
      url: '../../../kinds/kinds'
    });
      
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})