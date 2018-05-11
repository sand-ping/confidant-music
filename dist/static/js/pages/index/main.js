global.webpackJsonp([4],{

/***/ 11:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(5);



var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 18:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_card__ = __webpack_require__(2);
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
//
//
//



/* harmony default export */ __webpack_exports__["a"] = ({
  data: function data() {
    return {
      musicInfo: [{
        singer: '赵雷',
        songName: '成都',
        composing: '赵雷'
      }],
      chooseHeader: 1
    };
  },

  components: {
    card: __WEBPACK_IMPORTED_MODULE_0__components_card__["a" /* default */]
  },
  methods: {
    chooseHeaderM: function chooseHeaderM(option) {
      this.chooseHeader = Number(option);
    },
    goPlay: function goPlay(option) {
      console.log(option);
      wx.navigateTo({
        'url': '/pages/play-music/main'
      });
    },
    bindViewTap: function bindViewTap() {
      var url = '../logs/main';
      wx.navigateTo({ url: url });
    },
    getUserInfo: function getUserInfo() {
      var _this = this;

      // 调用登录接口
      wx.login({
        success: function success() {
          wx.getUserInfo({
            success: function success(res) {
              _this.userInfo = res.userInfo;
            }
          });
        }
      });
    },
    clickHandle: function clickHandle(msg, ev) {
      console.log('clickHandle:', msg, ev);
    }
  },

  created: function created() {
    // 调用应用实例的方法获取全局数据
    this.getUserInfo();
  }
});

/***/ }),

/***/ 23:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 29:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "container"
  }, [_c('header', [_c('div', {
    class: _vm.chooseHeader == 1 ? 'chooseHeader' : '',
    attrs: {
      "eventid": '0'
    },
    on: {
      "click": function($event) {
        _vm.chooseHeaderM(1)
      }
    }
  }, [_vm._v("发现")]), _vm._v(" "), _c('div', {
    class: _vm.chooseHeader == 2 ? 'chooseHeader' : '',
    attrs: {
      "eventid": '1'
    },
    on: {
      "click": function($event) {
        _vm.chooseHeaderM(2)
      }
    }
  }, [_vm._v("热门")]), _vm._v(" "), _c('div', {
    class: _vm.chooseHeader == 3 ? 'chooseHeader' : '',
    attrs: {
      "eventid": '2'
    },
    on: {
      "click": function($event) {
        _vm.chooseHeaderM(3)
      }
    }
  }, [_vm._v("搜索")])]), _vm._v(" "), _vm._l((_vm.musicInfo), function(item, index) {
    return _c('div', {
      staticClass: "song"
    }, [_c('div', {
      staticClass: "operate"
    }, [_c('i', {
      staticClass: "iconfont icon-tianjia"
    })], 1), _vm._v(" "), _c('div', {
      staticClass: "song-right",
      attrs: {
        "eventid": '3-' + index
      },
      on: {
        "click": function($event) {
          _vm.goPlay(item)
        }
      }
    }, [_c('div', {
      staticClass: "songName"
    }, [_vm._v(_vm._s(item.songName))]), _vm._v(" "), _c('div', {
      staticClass: "song-right-bottom"
    }, [_c('div', {
      staticClass: "singer"
    }, [_vm._v(_vm._s(item.singer))]), _vm._v(" "), _c('div', {
      staticClass: "composing"
    }, [_vm._v(_vm._s(item.composing))])])])])
  })], 2)
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-5307a380", esExports)
  }
}

/***/ }),

/***/ 5:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_5307a380_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(29);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(23)
}
var normalizeComponent = __webpack_require__(1)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-5307a380"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_5307a380_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\index\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-5307a380", Component.options)
  } else {
    hotAPI.reload("data-v-5307a380", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ })

},[11]);
//# sourceMappingURL=main.js.map