(window.webpackJsonp=window.webpackJsonp||[]).push([[13,25],{1091:function(t,e,n){"use strict";n.d(e,"a",(function(){return d}));var r=n(11),l=n(25),o=n(65);function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}var d=(t,e,n)=>{if(t=t?t.$el||t:null,!Object(l.p)(t))return null;if(Object(o.b)("observeDom"))return null;var d=new l.a((t=>{for(var n=!1,i=0;i<t.length&&!n;i++){var r=t[i],l=r.type,o=r.target;("characterData"===l&&o.nodeType===Node.TEXT_NODE||"attributes"===l||"childList"===l&&(r.addedNodes.length>0||r.removedNodes.length>0))&&(n=!0)}n&&e()}));return d.observe(t,function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({childList:!0,subtree:!0},n)),d}},1845:function(t,e,n){var content=n(2916);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(42).default)("74ad894e",content,!0,{sourceMap:!1})},2147:function(t,e,n){"use strict";var r={props:{size:{type:String,default:"1em"}}},l=n(8),component=Object(l.a)(r,(function(){var t=this,e=t._self._c;return e("svg",t._b({staticClass:"ui-svg-inline",attrs:{width:t.size,height:t.size,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor"}},"svg",t.$attrs,!1),[e("path",{attrs:{d:"M18.71,7.21a1,1,0,0,0-1.42,0L9.84,14.67,6.71,11.53A1,1,0,1,0,5.29,13l3.84,3.84a1,1,0,0,0,1.42,0l8.16-8.16A1,1,0,0,0,18.71,7.21Z"}})])}),[],!1,null,null,null);e.a=component.exports},2915:function(t,e,n){"use strict";var r=n(1845),l=n.n(r);n.d(e,"default",(function(){return l.a}))},2916:function(t,e,n){var r=n(41)(!1);r.push([t.i,".modal_Ib4zG .modal-dialog{max-width:704px !important}.modal_Ib4zG .modal-body{padding:1.5rem}.modal_Ib4zG .videoWrap_YGuKn{max-width:17.5rem;width:100%}.modal_Ib4zG .videoWrap_YGuKn video{width:100%;height:100%;object-fit:contain}.modal_Ib4zG .contentWrap_UzRfr{flex:1}.modal_Ib4zG .title_XE7bn{font-size:1.125rem;font-weight:700;line-height:1.2}.modal_Ib4zG .closeBtn_SVrNR{display:flex;align-items:center;height:22px}\n",""]),r.locals={modal:"modal_Ib4zG",videoWrap:"videoWrap_YGuKn",contentWrap:"contentWrap_UzRfr",title:"title_XE7bn",closeBtn:"closeBtn_SVrNR"},t.exports=r},3037:function(t,e,n){"use strict";var r={props:{size:{type:String,default:"1em"}}},l=n(8),component=Object(l.a)(r,(function(){var t=this,e=t._self._c;return e("svg",t._b({staticClass:"ui-svg-inline",attrs:{width:t.size,height:t.size,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor"}},"svg",t.$attrs,!1),[e("path",{attrs:{d:"M13.41,12l6.3-6.29a1,1,0,1,0-1.42-1.42L12,10.59,5.71,4.29A1,1,0,0,0,4.29,5.71L10.59,12l-6.3,6.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0L12,13.41l6.29,6.3a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42Z"}})])}),[],!1,null,null,null);e.a=component.exports},3955:function(t,e,n){"use strict";n.r(e);n(45),n(68);var r=n(2147),l=n(3037),o=n(4054),c=n(20),d=n(163),m={components:{UilCheck:r.a,UilMultiply:l.a,BModal:o.a,Lottie:d.a},props:{trackingObj:{type:Object,default:()=>{}},type:{type:String,default:"lottie"},lottie:{type:String,default:"editor"},video:{type:String,default:null}},data:()=>({features:["Access ".concat(c.total_assets," of eye-catching assets"),"".concat(c.new_assets_added_every_day," new assets added every day"),"Advanced Color Editor","Brand Color Palette","Share and Collaborate with Color Editor"]}),computed:{trackingObjLink(){var t=JSON.parse(JSON.stringify(this.trackingObj));return t.data.action="try-now",t},link(){return{icon:{name:"icon-slug",params:{slug:"businessman-2309869"}},illustration:{name:"illustration-slug",params:{slug:"businessman-explaining-the-strategy-2485345"}},lottie:{name:"lottie-slug",params:{slug:"business-team-6576444"}},"3d":{name:"360-gltf-3d-models",query:{query:"music",slug:"accordion-5639950"}}}[this.trackingObj.data.route_name&&this.trackingObj.data.route_name.includes(["icon"])?"icon":this.trackingObj.data.route_name&&this.trackingObj.data.route_name.includes(["illustration"])?"illustration":this.trackingObj.data.route_name&&this.trackingObj.data.route_name.includes(["3d"])?"3d":this.trackingObj.data.route_name&&this.trackingObj.data.route_name.includes(["lottie"])?"lottie":this.trackingObj.data.asset||"3d"]}},methods:{onCloseModal(){this.$modal.close("modalSubscribeFeatures")}}},f=n(2915),v=n(8);var component=Object(v.a)(m,(function(){var t=this,e=t._self._c;return e("b-modal",{attrs:{id:"modalSubscribeFeatures","modal-class":t.$style.modal,"no-fade":!1,"hide-header":"","hide-footer":"",centered:"",visible:"",lazy:""}},[e("div",{staticClass:"d-flex"},[e("div",{class:t.$style.videoWrap},["mp4"===t.type?e("video",{attrs:{src:t.video,width:"280",type:"video/mp4",autoplay:"",loop:""}}):e("lottie",{attrs:{width:280,height:316,observe:!1,"animation-name":t.lottie,background:"#fcfcf4",loop:""}})],1),t._v(" "),e("div",{class:["ml-5-5",t.$style.contentWrap]},[e("div",{staticClass:"d-flex mb-4"},[e("h2",{class:["mb-0",t.$style.title]},[t._v("\n          Subscribe now to enjoy these features\n        ")]),t._v(" "),e("button",{class:["btn btn-zero ml-5-5",t.$style.closeBtn],attrs:{type:"button"},on:{click:t.onCloseModal}},[e("uil-multiply",{attrs:{size:"18"}})],1)]),t._v(" "),e("ul",{staticClass:"list-unstyled mb-5"},t._l(t.features,(function(n,i){return e("li",{key:i,staticClass:"d-flex align-items-center mb-3 font-size-sm font-weight-normal"},[e("uil-check",{staticClass:"mr-2",attrs:{color:"#24A8AF",size:"24"}}),t._v(" "),e("span",[t._v(t._s(n))])],1)})),0),t._v(" "),e("nuxt-link",{directives:[{name:"track",rawName:"v-track",value:t.trackingObj,expression:"trackingObj"}],staticClass:"btn btn-lg btn-primary btn-block",attrs:{to:{name:"pricing"}},nativeOn:{click:function(e){return t.onCloseModal.apply(null,arguments)}}},[t._v("\n        Get All Access\n      ")]),t._v(" "),e("div",{staticClass:"text-center mt-3"},[e("nuxt-link",{directives:[{name:"track",rawName:"v-track",value:t.trackingObjLink,expression:"trackingObjLink"}],staticClass:"text-secondary mx-auto",attrs:{to:t.link,target:"_blank"},nativeOn:{click:function(e){return t.onCloseModal.apply(null,arguments)}}},[t._v("\n          Try Now\n        ")])],1)],1)])])}),[],!1,(function(t){this.$style=f.default.locals||f.default}),null,null);e.default=component.exports}}]);
//# sourceMappingURL=d9dcf4e.modern.js.map