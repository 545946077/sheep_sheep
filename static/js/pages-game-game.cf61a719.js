(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-game-game"],{2103:function(t,i,e){"use strict";var n=e("4ea4");e("4de4"),e("4160"),e("caad"),e("d81d"),e("4e82"),e("a434"),e("b65f"),e("d3b7"),e("2532"),e("159b"),e("ddb0"),Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var o=n(e("2909")),r={data:function(){return{list:[],eliminateList:[],hierarchy:10,number:30,valueList:[],show:!1,result:!1,innerAudioContext:null,innerAudioContext2:null,innerAudioContext3:null}},onLoad:function(){this.init(),this.innerAudioContext=uni.createInnerAudioContext(),this.innerAudioContext.sessionCategory="ambient",this.innerAudioContext.src="../../static/ylgy/back.mp3",this.innerAudioContext.loop=!0,this.innerAudioContext2=uni.createInnerAudioContext(),this.innerAudioContext2.sessionCategory="ambient",this.innerAudioContext2.src="../../static/ylgy/click.mp3",this.innerAudioContext3=uni.createInnerAudioContext(),this.innerAudioContext3.sessionCategory="ambient",this.innerAudioContext3.src="../../static/ylgy/eliminate.mp3"},onShow:function(){this.innerAudioContext.play()},onHide:function(){this.innerAudioContext.pause()},methods:{init:function(){var t=this;this.list=[],this.eliminateList=[],this.show=!1,this.valueList=[{id:1,url:"Pet10501.png"},{id:2,url:"Pet10504.png"},{id:3,url:"Pet10507.png"},{id:4,url:"Pet10509.png"},{id:5,url:"Pet20501.png"},{id:6,url:"Pet20502.png"},{id:7,url:"Pet20503.png"},{id:8,url:"Pet20506.png"},{id:9,url:"Pet40502.png"},{id:10,url:"Pet40505.png"}];var i=(0,o.default)(new Array(this.hierarchy*this.number).keys());i=i.map((function(i,e){return t.valueList[e%10]})),i.sort((function(){return Math.random()-.5}));for(var e=0,n=0;n<this.hierarchy;n++){var r=n%2==1?36:49,a=(0,o.default)(new Array(r).keys());a.sort((function(){return Math.random()-.5})),a.length=this.number;for(var s=0;s<r;s++)if(a.includes(s)){var u=void 0;u=n%2==1?{id:n+""+s,value:i[e],x:s%6*102+50,y:102*Math.trunc(s/6)+50,z:this.hierarchy-n,position:[n,s%6,Math.trunc(s/6)]}:{id:n+""+s,value:i[e],x:s%7*102,y:102*Math.trunc(s/7),z:this.hierarchy-n,position:[n,s%7,Math.trunc(s/7)]},this.list.push(u),e++}}this.refresh()},shuffle:function(){var t=this.list.map((function(t){if(!t.isProp)return t.value}));t.sort((function(){return Math.random()-.5})),this.list.forEach((function(i,e){i.isProp||(i.value=t[e])}))},out:function(){for(var t=0;t<3;t++){var i=this.eliminateList[0];i&&(i.z=0,this.list.push(i),this.eliminateList.splice(0,1),this.move(i,t))}this.refreshSlot()},move:function(t,i){setTimeout((function(){t.x=220+102*i,t.y=850,t.position=[20,20,20],t.isProp=!0}),80)},refresh:function(){var t=this;this.list.forEach((function(i){i.active=t.isCover(i)}))},isCover:function(t){var i=t.position,e=!1;return this.list.forEach((function(t){t.position[0]<i[0]&&t.position[0]%2!=i[0]%2&&(i[0]%2==0?i[1]-t.position[1]!=0&&i[1]-t.position[1]!=1||i[2]-t.position[2]!=0&&i[2]-t.position[2]!=1||(e=!0):t.position[1]-i[1]!=0&&t.position[1]-i[1]!=1||t.position[2]-i[2]!=0&&t.position[2]-i[2]!=1||(e=!0))})),e},toIndex:function(){this.innerAudioContext.stop(),uni.redirectTo({url:"/pages/index/index"})},refreshSlot:function(t,i){var e=this;this.eliminateList.forEach((function(t,i){t.z=100,t.y=1e3,t.x=102*i})),t&&this.eliminateList.filter((function(i){return i.value.id==t.value.id})).length>=3&&setTimeout((function(){e.eliminateList.splice(i-1,3),e.refreshSlot(t),e.innerAudioContext3.stop(),e.innerAudioContext3.play()}),300)},_findIndex:function(t,i,e){for(var n=t.length;n--;)if(t[n][i].id==e.id)return n;return-1},onClick:function(t,i){var e=this,n=this._findIndex(this.eliminateList,"value",t.value);n<0?this.eliminateList.push(t):this.eliminateList.splice(n+1,0,t),this.list.splice(i,1),this.refresh(),setTimeout((function(){e.refreshSlot(t,n),e.gameOver(t)}),80),this.innerAudioContext2.stop(),this.innerAudioContext2.play()},gameOver:function(t){if(this.eliminateList.length>=7&&this.eliminateList.filter((function(i){return i.value.id==t.value.id})).length<3)return this.result=!1,void(this.show=!0);0==this.list.length&&(this.result=!0,this.show=!0)}}};i.default=r},2909:function(t,i,e){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.default=u;var n=s(e("6005")),o=s(e("db90")),r=s(e("06c5")),a=s(e("3427"));function s(t){return t&&t.__esModule?t:{default:t}}function u(t){return(0,n.default)(t)||(0,o.default)(t)||(0,r.default)(t)||(0,a.default)()}},3427:function(t,i,e){"use strict";function n(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}Object.defineProperty(i,"__esModule",{value:!0}),i.default=n},6005:function(t,i,e){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.default=r;var n=o(e("6b75"));function o(t){return t&&t.__esModule?t:{default:t}}function r(t){if(Array.isArray(t))return(0,n.default)(t)}},6078:function(t,i,e){"use strict";var n=e("dc73"),o=e.n(n);o.a},"62a3":function(t,i,e){"use strict";e.r(i);var n=e("2103"),o=e.n(n);for(var r in n)"default"!==r&&function(t){e.d(i,t,(function(){return n[t]}))}(r);i["default"]=o.a},"882c":function(t,i,e){"use strict";e.r(i);var n=e("9a88"),o=e("62a3");for(var r in o)"default"!==r&&function(t){e.d(i,t,(function(){return o[t]}))}(r);e("6078");var a,s=e("f0c5"),u=Object(s["a"])(o["default"],n["b"],n["c"],!1,null,"7c09904d",null,!1,n["a"],a);i["default"]=u.exports},"9a88":function(t,i,e){"use strict";var n;e.d(i,"b",(function(){return o})),e.d(i,"c",(function(){return r})),e.d(i,"a",(function(){return n}));var o=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("v-uni-view",{staticClass:"back"},[e("v-uni-view",{staticClass:"content"},[t._l(t.list,(function(i,n){return e("v-uni-view",{key:i.id,staticClass:"item",style:"position: absolute;left:"+i.x+"rpx;top:"+i.y+"rpx;z-index:"+i.z+";",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onClick(i,n)}}},[e("v-uni-image",{staticClass:"img",attrs:{src:"../../static/ylgy/"+i.value.url,mode:""}}),i.active?e("v-uni-view",{staticClass:"zzc",on:{click:function(i){i.stopPropagation(),arguments[0]=i=t.$handleEvent(i)}}}):t._e()],1)})),e("v-uni-view",{ref:"eliminate",staticClass:"eliminate"},t._l(t.eliminateList,(function(t,i){return e("v-uni-view",{key:t.id,staticClass:"item eliminateItem",style:"position: absolute;left:"+t.x+"rpx;top:"+t.y+"rpx;z-index:"+t.z+";"},[e("v-uni-image",{staticClass:"img",attrs:{src:"../../static/ylgy/"+t.value.url,mode:""}})],1)})),1)],2),e("v-uni-view",{staticClass:"prop"},[e("v-uni-view",{staticClass:"li",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.out.apply(void 0,arguments)}}},[t._v("退三张")]),e("v-uni-view",{staticClass:"li",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.shuffle.apply(void 0,arguments)}}},[t._v("洗牌")])],1),t.show?e("v-uni-view",{staticClass:"pop"},[e("v-uni-view",{staticClass:"title"},[t._v("游戏"+t._s(t.result?"成功":"失败"))]),t.result?t._e():e("v-uni-view",{staticClass:"button",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.out(),t.show=!1}}},[t._v("免费复活")]),e("v-uni-view",{staticClass:"button",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.init()}}},[t._v("重新挑战")]),e("v-uni-view",{staticClass:"button",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.toIndex.apply(void 0,arguments)}}},[t._v("回到首页")])],1):t._e()],1)},r=[]},b65f:function(t,i,e){var n=e("23e7"),o=Math.ceil,r=Math.floor;n({target:"Math",stat:!0},{trunc:function(t){return(t>0?r:o)(t)}})},db90:function(t,i,e){"use strict";function n(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}e("a4d3"),e("e01a"),e("d28b"),e("a630"),e("d3b7"),e("3ca3"),e("ddb0"),Object.defineProperty(i,"__esModule",{value:!0}),i.default=n},dc73:function(t,i,e){var n=e("f94c");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var o=e("4f06").default;o("7bda7a7c",n,!0,{sourceMap:!1,shadowMode:!1})},f94c:function(t,i,e){var n=e("24fb");i=n(!1),i.push([t.i,"uni-view[data-v-7c09904d]{box-sizing:border-box}.back[data-v-7c09904d]{background-color:#c3fe8b;overflow:hidden;min-height:100vh}.content[data-v-7c09904d]{width:%?700?%;margin:%?100?% auto;padding-top:%?1000?%;position:relative}.item[data-v-7c09904d]{width:%?100?%;height:%?100?%;background-color:#f5ffcd;border:%?2?% solid #000;display:flex;align-items:center;justify-content:center;transition:all .3s;position:relative;box-shadow:0 %?12?% 0 #72a211;border-radius:%?15?%}.img[data-v-7c09904d]{width:90%;height:90%}.zzc[data-v-7c09904d]{width:100%;height:100%;position:absolute;left:0;top:0;background-color:rgba(0,0,0,.5)}.eliminate[data-v-7c09904d]{width:%?700?%;height:%?117?%;border:1px solid #000}.prop[data-v-7c09904d]{display:flex;justify-content:space-around;margin-top:%?50?%}.prop .li[data-v-7c09904d]{width:%?150?%;height:%?100?%;background-color:#22a4ff;border:1px solid #000;border-radius:%?10?%;display:flex;align-items:center;justify-content:center;color:#ffda0e;font-weight:700;font-size:%?30?%;box-shadow:0 6px 0 #1580ca}.pop[data-v-7c09904d]{position:fixed;left:0;top:0;z-index:999;width:100vw;height:100vh;background-color:rgba(0,0,0,.7);display:flex;flex-direction:column;align-items:center;justify-content:center}.title[data-v-7c09904d]{color:#fff;font-size:%?60?%}.button[data-v-7c09904d]{width:%?300?%;height:%?100?%;display:flex;margin:%?30?% auto;align-items:center;justify-content:center;font-size:%?40?%;background-color:#048f8e;color:#fff}",""]),t.exports=i}}]);