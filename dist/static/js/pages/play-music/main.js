global.webpackJsonp([3],{

/***/ 13:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(7);



var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/* harmony default export */ __webpack_exports__["default"] = ({
  config: {
    navigationBarTitleText: '伯乐音乐'
  }
});

/***/ }),

/***/ 20:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["a"] = ({
  data: function data() {
    return {
      mesage: '',
      lyric: "[00:00] 漂洋过海来看你.[00:02] 演唱：刘明湘.[00:04] 词曲：李宗盛.[00:08] 歌词编辑：丁仔.[00:15] 中文歌词库 www.dingzai.com.[00:21] 为你我用了半年的积蓄.[00:24] 飘洋过海的来看你.[00:29] 为了这次相聚.[00:31] 我连见面时的呼吸 都曾反复练习.[00:36] .[00:38] 言语从来没能将我的情意.[00:42] 表达千万分之一.[00:47] 为了这个遗憾 我在夜里想了又想.[00:51] 不肯睡去.[00:54] .[00:55] 记忆它总是慢慢的累积.[00:59] 在我心中无法抹去.[01:04] 为了你的承诺.[01:05] 我在最绝望的时候 都忍着不哭泣.[01:13] .[01:14] 陌生的城市啊 熟悉的角落里.[01:23] 也曾彼此安慰 也曾相拥叹息.[01:26] 不管将会面对什么样的结局.[01:30] .[01:31] 在漫天风沙里望着你远去.[01:35] 我竟悲伤的不能自已.[01:39] 多盼能送君千里 直到山穷水尽.[01:44] 一生和你相依.[01:49] .[02:07] 陌生的城市啊 熟悉的角落里.[02:15] 也曾彼此安慰 也曾相拥叹息.[02:19] 不管将会面对什么样的结局.[02:23] .[02:23] 在漫天风沙里望着你远去.[02:27] 我竟悲伤的不能自已.[02:32] 多盼能送君千里 直到山穷水尽.[02:36] 一生和你相依.[02:42] .[02:43] 多盼能送君千里 直到山穷水尽.[02:50] 一生和你相依",
      lytime: [],
      lytext: [],
      lyindex: 0,
      lyheight: 180
    };
  },

  methods: {
    lyricReady: function lyricReady() {
      var root = this;
      var lyric = root.lyric;
      console.log(lyric);
      var lyArr = lyric.split('.');
      var lytime = [];
      var lytext = [];
      for (var i = 0; i < lyArr.length; i++) {
        var text = lyArr[i].split(' ')[1];
        if (text == null) {
          continue;
        }
        var time = lyArr[i].split(' ')[0];
        var minute = time.substring(1, time.indexOf(':'));
        var second = time.substring(time.indexOf(':') + 1, time.length);
        time = parseInt(minute) * 60 + parseInt(second);
        lytime.push(time);
        lytext.push(text);
      }
      this.lytime = lytime;
      this.lytext = lytext;
    },
    play: function play() {
      console.log('play');
      //        this.audioCtx.play();

      wx.playBackgroundAudio({
        dataUrl: 'http://ws.stream.qqmusic.qq.com/M500001VfvsJ21xFqb.mp3?guid=ffffffff82def4af4b12b3cd9337d5e7&uin=346897220&vkey=6292F51E1E384E06DCBDC9AB7C49FD713D632D313AC4858BACB8DDD29067D3C601481D36E62053BF8DFEAF74C0A5CCFADD6471160CAF3E6A&fromtag=46',
        success: function success(e) {
          console.log(e, 'success');
        },
        fail: function fail(e) {
          console.log(e, 'fail');
        },
        complete: function complete() {
          console.log('comnplete');
        }
      });
    }
  },
  created: function created() {
    console.log('playmusic');
    this.lyricReady();
    //      this.audioCtx = wx.createAudioContext('myAudio')
    //      this.audioCtx.play()
  }
});

/***/ }),

/***/ 22:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 28:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "container"
  }, [_vm._m(0), _vm._v(" "), _c('div', {
    staticClass: "body"
  }, [_c('div', {
    staticClass: "lyric",
    style: ('top:' + _vm.lyheight + 'px')
  }, _vm._l((_vm.lytext), function(item, index) {
    return _c('div', {
      staticClass: "lyric-item",
      style: (index == _vm.lyindex ? 'color:red' : '')
    }, [_vm._v("\n        " + _vm._s(item) + "\n      ")])
  }))]), _vm._v(" "), _c('footer', {
    attrs: {
      "eventid": '0'
    },
    on: {
      "click": function($event) {
        _vm.play()
      }
    }
  }, [_vm._v("\n    播放\n    ")])], 1)
}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('header', [_c('div', {
    staticClass: "song"
  }, [_vm._v("江南")]), _vm._v(" "), _c('div', {
    staticClass: "singer-wrap"
  }, [_c('div', {
    staticClass: "singer"
  }, [_vm._v("林俊杰")])])])
}]
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-38cf9f98", esExports)
  }
}

/***/ }),

/***/ 7:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_38cf9f98_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(28);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(22)
}
var normalizeComponent = __webpack_require__(1)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-38cf9f98"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_38cf9f98_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\play-music\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-38cf9f98", Component.options)
  } else {
    hotAPI.reload("data-v-38cf9f98", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ })

},[13]);
//# sourceMappingURL=main.js.map