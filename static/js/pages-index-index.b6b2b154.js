(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-index-index"],{2409:function(t,n,e){var i=e("24fb");n=i(!1),n.push([t.i,".button[data-v-544fceb2]{width:%?300?%;height:%?100?%;display:flex;margin:%?50?% auto;align-items:center;justify-content:center;font-size:%?40?%;background-color:#048f8e;color:#fff}",""]),t.exports=n},4947:function(t,n,e){"use strict";var i;e.d(n,"b",(function(){return o})),e.d(n,"c",(function(){return u})),e.d(n,"a",(function(){return i}));var o=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-uni-view",[e("v-uni-view",{staticClass:"button",on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.toGame.apply(void 0,arguments)}}},[t._v("开始游戏")]),e("v-uni-view",{staticClass:"button",on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.toIndex.apply(void 0,arguments)}}},[t._v("退出游戏")])],1)},u=[]},7391:function(t,n,e){"use strict";e.r(n);var i=e("cb14"),o=e.n(i);for(var u in i)"default"!==u&&function(t){e.d(n,t,(function(){return i[t]}))}(u);n["default"]=o.a},cb14:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i={data:function(){return{}},methods:{toIndex:function(){"ios"==uni.getSystemInfoSync().platform?plus.ios.import("UIApplication").sharedApplication().performSelector("exit"):"android"==uni.getSystemInfoSync().platform&&plus.runtime.quit()},toGame:function(){uni.redirectTo({url:"/pages/game/game"})}}};n.default=i},d6f2:function(t,n,e){var i=e("2409");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var o=e("4f06").default;o("5366aed6",i,!0,{sourceMap:!1,shadowMode:!1})},e2e0:function(t,n,e){"use strict";var i=e("d6f2"),o=e.n(i);o.a},f323:function(t,n,e){"use strict";e.r(n);var i=e("4947"),o=e("7391");for(var u in o)"default"!==u&&function(t){e.d(n,t,(function(){return o[t]}))}(u);e("e2e0");var a,r=e("f0c5"),c=Object(r["a"])(o["default"],i["b"],i["c"],!1,null,"544fceb2",null,!1,i["a"],a);n["default"]=c.exports}}]);