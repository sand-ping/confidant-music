<script>
export default {
  created () {
    // 调用API从本地缓存中获取数据
    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    console.log('app created and cache logs by setStorageSync')
  }
}
</script>

<style>
  html,body{
    width:100%;
    height: 100%;
  }
  @font-face {
    font-family: 'iconfont';  /* project id 585793 */
    src: url('//at.alicdn.com/t/font_585793_cywhoziwglul3di.eot');
    src: url('//at.alicdn.com/t/font_585793_cywhoziwglul3di.eot?#iefix') format('embedded-opentype'),
    url('//at.alicdn.com/t/font_585793_cywhoziwglul3di.woff') format('woff'),
    url('//at.alicdn.com/t/font_585793_cywhoziwglul3di.ttf') format('truetype'),
    url('//at.alicdn.com/t/font_585793_cywhoziwglul3di.svg#iconfont') format('svg');
  }
.iconfont {
  font-family:"iconfont" !important;
  font-size:16px;
  font-style:normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
/*.container {*/
  /*height: 100%;*/
  /*display: flex;*/
  /*flex-direction: column;*/
  /*align-items: center;*/
  /*justify-content: space-between;*/
  /*box-sizing: border-box;*/
/*}*/
/* this rule will be remove */
* {
  transition: width 2s;
  -moz-transition: width 2s;
  -webkit-transition: width 2s;
  -o-transition: width 2s;
}

.icon-shouye1:before { content: "\e627"; }
.icon-wode:before { content: "\e614"; }
.icon-tianjia:before { content: "\e752"; }

</style>
