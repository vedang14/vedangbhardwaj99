(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{1200:function(t,e,r){var n=r(313),o=r(1207),l=r(1209);t.exports=function(t,e){return l(o(t,e,n),t+"")}},1207:function(t,e,r){var n=r(1208),o=Math.max;t.exports=function(t,e,r){return e=o(void 0===e?t.length-1:e,0),function(){for(var l=arguments,c=-1,f=o(l.length-e,0),v=Array(f);++c<f;)v[c]=l[e+c];c=-1;for(var h=Array(e+1);++c<e;)h[c]=l[c];return h[e]=r(v),n(t,this,h)}}},1208:function(t,e){t.exports=function(t,e,r){switch(r.length){case 0:return t.call(e);case 1:return t.call(e,r[0]);case 2:return t.call(e,r[0],r[1]);case 3:return t.call(e,r[0],r[1],r[2])}return t.apply(e,r)}},1209:function(t,e,r){var n=r(1210),o=r(1212)(n);t.exports=o},1210:function(t,e,r){var n=r(1211),o=r(495),l=r(313),c=o?function(t,e){return o(t,"toString",{configurable:!0,enumerable:!1,value:n(e),writable:!0})}:l;t.exports=c},1211:function(t,e){t.exports=function(t){return function(){return t}}},1212:function(t,e){var r=Date.now;t.exports=function(t){var e=0,n=0;return function(){var o=r(),l=16-(o-n);if(n=o,l>0){if(++e>=800)return arguments[0]}else e=0;return t.apply(void 0,arguments)}}},1255:function(t,e,r){"use strict";r.d(e,"a",(function(){return n}));var n=[16,24,32,48,64,96,128,192,256,512]},1276:function(t,e,r){var n=r(1277);t.exports=function(t,e){return!!(null==t?0:t.length)&&n(t,e,0)>-1}},1277:function(t,e,r){var n=r(491),o=r(1278),l=r(1279);t.exports=function(t,e,r){return e==e?l(t,e,r):n(t,o,r)}},1278:function(t,e){t.exports=function(t){return t!=t}},1279:function(t,e){t.exports=function(t,e,r){for(var n=r-1,o=t.length;++n<o;)if(t[n]===e)return n;return-1}},1280:function(t,e){t.exports=function(t,e,r){for(var n=-1,o=null==t?0:t.length;++n<o;)if(r(e,t[n]))return!0;return!1}},1463:function(t,e,r){var n=r(166),o=r(107);t.exports=function(t){return o(t)&&n(t)}},2515:function(t,e,r){var content=r(3821);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(42).default)("133a2139",content,!0,{sourceMap:!1})},3818:function(t,e,r){var n=r(3819),o=r(1200),l=r(1463),c=o((function(t,e){return l(t)?n(t,e):[]}));t.exports=c},3819:function(t,e,r){var n=r(500),o=r(1276),l=r(1280),c=r(488),f=r(225),v=r(501);t.exports=function(t,e,r,h){var m=-1,x=o,y=!0,d=t.length,O=[],w=e.length;if(!d)return O;r&&(e=c(e,f(r))),h?(x=l,y=!1):e.length>=200&&(x=v,y=!1,e=new n(e));t:for(;++m<d;){var _=t[m],j=null==r?_:r(_);if(_=h||0!==_?_:0,y&&j==j){for(var k=w;k--;)if(e[k]===j)continue t;O.push(_)}else x(e,j,h)||O.push(_)}return O}},3820:function(t,e,r){"use strict";var n=r(2515),o=r.n(n);r.d(e,"default",(function(){return o.a}))},3821:function(t,e,r){var n=r(41)(!1);n.push([t.i,".container_91nKr .remove_NIg1Q:hover{color:#DE524C;text-decoration:none}\n",""]),n.locals={container:"container_91nKr",remove:"remove_NIg1Q"},t.exports=n},4141:function(t,e,r){"use strict";r.r(e);var n=r(11),o=(r(30),r(31),r(1013)),l=r(3818),c=r.n(l),f=r(1255),v=r(1875),h=r(22),m=r(1874);function x(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function y(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?x(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):x(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var d={components:{UilTimes:o.a},mixins:[m.a],props:{aggregations:{type:Object,default:()=>{}}},computed:{filters(){var t=[];return this.appliedFilters.forEach((e=>{var r=this.$route.query[e];Array.isArray(r)?r.forEach((r=>{(!this.params[e]||this.params[e]&&r!==this.params[e].default)&&t.push({value:r,text:this.params[e]&&this.params[e].values[r]?this.params[e].values[r].text:r,key:e})})):(!this.params[e]||this.params[e]&&r!==this.params[e].default)&&t.push({value:r,text:this.params[e]&&this.params[e].values[r]?this.params[e].values[r].text:r,key:e})})),t},params(){var t={default:null,values:{}};this.aggregations.styles&&this.aggregations.styles.length&&this.aggregations.styles.slice().forEach((s=>{t.values[s.slug]={text:s.name}}));var e={default:null,values:{}};v.b.forEach((t=>{e.values[t]={text:t}}));var r={default:null,values:{}};f.a.forEach((s=>{r.values[s]={text:"".concat(s,"x").concat(s)}}));var n={default:null,values:{}};return this.aggregations.orientation&&this.aggregations.orientation.forEach((t=>{n.values[t.slug]={text:t.name}})),{styles:t,price:{default:"all",values:{all:{text:"All"},free:{text:"Free"},premium:{text:"Premium"}}},color:e,icon_grid:r,orientation:n}}},methods:{remove(filter){var t=this.$route.query[filter.key];this.$router.push({params:this.$route.params,query:Object(h.a)(y(y({},this.$route.query),{},{[filter.key]:Array.isArray(t)?c()(t,filter.value):null}))})}}},O=r(3820),w=r(8);var component=Object(w.a)(d,(function(){var t=this,e=t._self._c;return t.filters.length?e("div",{class:["d-flex align-items-center flex-wrap",t.$style.container]},[t._l(t.filters,(function(filter,r){return e("div",{key:r,staticClass:"d-flex align-items-center btn btn-sm btn-default mr-3 mt-sm-5-5 mt-3 btn-rounded has-icon"},[e("span",[t._v(t._s(filter.text))]),t._v(" "),e("a",{class:["ml-2 mb-0 text-dark",t.$style.remove],attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.remove(filter)}}},[e("uil-times",{staticClass:"mb-2",attrs:{size:"20"}})],1)])})),t._v(" "),e("nuxt-link",{staticClass:"font-size-sm pl-1 mt-sm-5-5 mt-3",attrs:{to:{name:t.$route.name,params:t.$route.params}}},[t._v("Clear all")])],2):t._e()}),[],!1,(function(t){this.$style=O.default.locals||O.default}),null,null);e.default=component.exports}}]);
//# sourceMappingURL=7df30e3.modern.js.map