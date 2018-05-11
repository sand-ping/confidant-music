<template>
  <div class="container">
    <header>
      <div class="song">江南</div>
      <div class="singer-wrap">
        <div class="singer">林俊杰</div>
      </div>
    </header>
    <div class="body">
      <div class="lyric" :style="'top:'+lyheight+'px'">
        <div class="lyric-item" v-for="(item,index) in lytext" :style="index==lyindex?'color:red':''">
          {{item}}
        </div>
      </div>
    </div>
    <footer @click="play()">
      <div class="progress-wrap">
        <div class="starttime">00:00</div>
        <div class="progress"></div>
        <div class="endtime">02:20</div>
      </div>
      <div class="operate"></div>
      <!--<audio src="http://ws.stream.qqmusic.qq.com/M500001VfvsJ21xFqb.mp3?guid=ffffffff82def4af4b12b3cd9337d5e7&uin=346897220&vkey=6292F51E1E384E06DCBDC9AB7C49FD713D632D313AC4858BACB8DDD29067D3C601481D36E62053BF8DFEAF74C0A5CCFADD6471160CAF3E6A&fromtag=46" id="myAudio" controls="true"></audio>-->
    </footer>
  </div>
</template>

<script>

  export default {
    data () {
      return {
        mesage:'',
        lyric:"[00:00] 漂洋过海来看你.[00:02] 演唱：刘明湘.[00:04] 词曲：李宗盛.[00:08] 歌词编辑：丁仔.[00:15] 中文歌词库 www.dingzai.com.[00:21] 为你我用了半年的积蓄.[00:24] 飘洋过海的来看你.[00:29] 为了这次相聚.[00:31] 我连见面时的呼吸 都曾反复练习.[00:36] .[00:38] 言语从来没能将我的情意.[00:42] 表达千万分之一.[00:47] 为了这个遗憾 我在夜里想了又想.[00:51] 不肯睡去.[00:54] .[00:55] 记忆它总是慢慢的累积.[00:59] 在我心中无法抹去.[01:04] 为了你的承诺.[01:05] 我在最绝望的时候 都忍着不哭泣.[01:13] .[01:14] 陌生的城市啊 熟悉的角落里.[01:23] 也曾彼此安慰 也曾相拥叹息.[01:26] 不管将会面对什么样的结局.[01:30] .[01:31] 在漫天风沙里望着你远去.[01:35] 我竟悲伤的不能自已.[01:39] 多盼能送君千里 直到山穷水尽.[01:44] 一生和你相依.[01:49] .[02:07] 陌生的城市啊 熟悉的角落里.[02:15] 也曾彼此安慰 也曾相拥叹息.[02:19] 不管将会面对什么样的结局.[02:23] .[02:23] 在漫天风沙里望着你远去.[02:27] 我竟悲伤的不能自已.[02:32] 多盼能送君千里 直到山穷水尽.[02:36] 一生和你相依.[02:42] .[02:43] 多盼能送君千里 直到山穷水尽.[02:50] 一生和你相依",
        lytime:[],
        lytext:[],
        lyindex:0,
        lyheight:180,
      }
    },
    methods:{
      lyricReady:function () {
        var root=this;
        var lyric=root.lyric;
        console.log(lyric)
        var lyArr=lyric.split('.');
        var lytime=[];
        var lytext=[];
        for(let i=0;i<lyArr.length;i++){
          var text=lyArr[i].split(' ')[1];
          if(text==null){
            continue;
          }
          var time=lyArr[i].split(' ')[0];
          var minute=time.substring(1,time.indexOf(':'));
          var second=time.substring(time.indexOf(':')+1,time.length);
          time=parseInt(minute)*60+parseInt(second);
          lytime.push(time);
          lytext.push(text);
        }
        this.lytime=lytime;
        this.lytext=lytext;
      },
      play:function () {
        console.log('play');
//        this.audioCtx.play();

        wx.playBackgroundAudio({
          dataUrl: 'http://ws.stream.qqmusic.qq.com/M500001VfvsJ21xFqb.mp3?guid=ffffffff82def4af4b12b3cd9337d5e7&uin=346897220&vkey=6292F51E1E384E06DCBDC9AB7C49FD713D632D313AC4858BACB8DDD29067D3C601481D36E62053BF8DFEAF74C0A5CCFADD6471160CAF3E6A&fromtag=46',
          success:function (e) {
            console.log(e,'success');
          },
          fail:function (e) {
            console.log(e,'fail');
          },
          complete: function(){
            console.log('comnplete');
          }
        })
      }
    },
    created () {
      console.log('playmusic')
      this.lyricReady();
//      this.audioCtx = wx.createAudioContext('myAudio')
//      this.audioCtx.play()
    }

  }
</script>

<style lang="scss" scoped>
  @import '../../scss/playMusic.scss';
  /*@import url('../../scss/playMusic.scss');*/
</style>
