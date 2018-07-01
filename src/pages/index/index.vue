<template>
  <div class="container">
    <header>
      <div :class="chooseHeader==1?'chooseHeader':''" @click="chooseHeaderM(1)">发现</div>
      <div :class="chooseHeader==2?'chooseHeader':''" @click="chooseHeaderM(2)">热门</div>
      <div :class="chooseHeader==3?'chooseHeader':''" @click="chooseHeaderM(3)">搜索</div>
    </header>

    <div v-for="item in musicInfo" class="song">
      <div class="operate">
        <i class="iconfont icon-tianjia"></i>
      </div>
      <div class="song-right" @click="goPlay(item)">
        <div class="songName">{{item.songName}}</div>
        <div class="song-right-bottom">
          <div class="singer">{{item.singer}}</div>
          <div class="composing">{{item.composing}}</div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import card from '@/components/card'

export default {
  data () {
    return {
      musicInfo: [
        {
          singer: '赵雷',
          songName: '成都',
          composing: '赵雷'
        }
      ],
      chooseHeader:1
    }
  },
  components: {
    card
  },
  methods: {
    chooseHeaderM: function (option) {
      this.chooseHeader = Number(option)
    },
    goPlay: function (option) {
      console.log(option)
      wx.navigateTo({
        'url':'/pages/play-music/main'
      })
    },
    bindViewTap () {
      const url = '../logs/main'
      wx.navigateTo({ url })
    },
    getUserInfo () {
      // 调用登录接口
      wx.login({
        success: () => {
          wx.getUserInfo({
            success: (res) => {
              this.userInfo = res.userInfo
            }
          })
        }
      })
    },
    clickHandle (msg, ev) {
      console.log('clickHandle:', msg, ev)
    }
  },

  created () {
    // 调用应用实例的方法获取全局数据
    this.getUserInfo()
  }
}
</script>

<style lang="scss" scoped>
  @import '../../scss/index.scss';



</style>
