<template>
  <div>
    <!--<ul class="container log-list">-->
      <!--<li v-for="(log, index) in logs" :class="{ red: aa }" :key="index" class="log-item">-->
        <!--<card :text="(index + 1) + ' . ' + log"></card>-->
      <!--</li>-->
    <!--</ul>-->
    <!--<web-view src="https://www.baidu.com/" class="camera"></web-view>-->
    <camera class="camera"></camera>
  </div>
</template>

<script>
import { formatTime } from '@/utils/index'
import card from '@/components/card'

export default {
  components: {
    card
  },

  data () {
    return {
      logs: []
    }
  },

  created () {
    const logs = (wx.getStorageSync('logs') || [])
    this.logs = logs.map(log => formatTime(new Date(log)))
  },
  mounted () {
    const ctx = wx.createCameraContext()
    setInterval(function () {
      console.log('222')
      ctx.takePhoto({
        quality: 'high',
        success: (res) => {
//          this.setData({
//            src: res.tempImagePath
//          })
          console.log('111')
          console.log(res)
        }
      })
    }, 1000)
  }
}
</script>

<style>
.log-list {
  display: flex;
  flex-direction: column;
  padding: 40rpx;
}

.log-item {
  margin: 10rpx;
}
.camera{
  position: fixed;
  height:100%;
  width: 100%;
}
</style>
