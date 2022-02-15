// pages/user_infrom.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isInput:false,
    gender:'男',
    profession:'学生',
    marriage: '未婚',
    curr_date: '2022-1-1',
    birth:'2022-1-1',
    gender_arr:['男','女'],
    gender_index: 0,
    marriage_arr:['未婚','已婚','离异','丧偶'],
    marriage_index: 0,

  },
  AgeInput: function (e) {
    //print(this.data.age);
    this.setData({
      age: e.detail.value
    })
  },
  bindDateChange: function(e) {
    this.setData({
      birth: e.detail.value
    })
  },
  bindGenderPickerChange: function(e) {
    this.setData({
      gender_index: e.detail.value,
      gender: this.data.gender_arr[e.detail.value]
    })
  },
  bindMarriagePickerChange: function(e) {
    this.setData({
      marriage_index: e.detail.value,
      marriage: this.data.marriage_arr[e.detail.value]
    })
  },
  GenderInput: function (e) {
    //print(this.data.age);
    this.setData({
      gender: e.detail.value
    })
  },

  ProfessionInput: function(e) {
    this.setData({
      profession: e.detail.value
    })
  },
  MarriageInput: function(e) {
    this.setData({
      marriage: e.detail.value
    })
  },
  edit:function(){
    this.setData({
      isInput: true
    })
  },

  save:function(){
    if( this.data.age==''){
      this.data.age='0'
    }
    if( this.data.age==''){
      this.data.gender='男'
    }
    if( this.data.profession==''){
      this.data.profession='学生'
    }
    if( this.data.marriage==''){
      this.data.marriage='未婚'
    }
    this.setData({
      isInput: false
    })
    //post信息至后台
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const util = require('../../utils/util')
    var date = util.formatDate(new Date());
    console.log(date)
    // 再通过setData更改Page()里面的data，动态更新页面的数据
    this.setData({
      curr_date: date
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

  },

  information:function(){
    wx.navigateTo({
      url: "../information/information"
    })
  },

  advice:function(){
    wx.navigateTo({
      url: "../advice/advice"
    })
  },

  about_us:function(){
    wx.navigateTo({
      url: "../about_us/about_us"
    })
  },

})