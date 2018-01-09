// pages/scenicCar/scenicCar.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
  
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that=this;

    var data = {
      "datas": [
        {
          "id": 1,
          "imgurl": "../../images/car.png",
          "price": "6.18万",
          "cp": "浙B66666",
          "cx": "江淮IEV7S" 
        },
        {
          "id": 1,
          "imgurl": "../../images/car.png",
          "price": "6.18万",
          "cp": "浙B66666",
          "cx": "江淮IEV7S" 
        },
        {
          "id": 3,
          "imgurl": "../../images/car.png",
          "price": "6.18万",
          "cp": "浙B66666",
          "cx": "江淮IEV7S" 
        },
        {
          "id": 4,
          "imgurl": "../../images/car.png",
          "price": "6.18万",
          "cp": "浙B66666",
          "cx": "江淮IEV7S" 
        }
      ]
    };
    //console.log(data.datas);
    //设置车辆展示信息
    that.setData({
      carInfoData: data.datas
    }) 
  },

  //打开预约页面
  openReserve:function(){
    wx.navigateTo({
      url: '../reserve/reserve'
    })
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