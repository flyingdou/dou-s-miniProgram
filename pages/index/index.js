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
    
  },

 
  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    
  },

  /**
   * 用户点击连接wifi时
   */
   getConnect: function () {
     wx.startWifi({
       
     })

     wx.connectWifi({
       SSID: 'doudou',
       BSSID: 'doudou',
       password: '111222333444'
     })
   }




})