(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{1099:function(t,o,e){var content=e(1112);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(56).default)("20f2ca79",content,!0,{sourceMap:!1})},1110:function(t,o,e){"use strict";e(206),e(11);var n=e(1116);e(2).default.directive("b-visible",n.a);var r={props:{tag:{type:String,default:"div"},once:{type:Boolean,default:!1},margin:{type:Number,default:0},onShow:{type:Function,default:null}},data:function(){return{isVisible:!1,isLoading:!1}},methods:{visibleHandler:function(t){var o=this;this.isVisible=t,t&&this.onShow&&(this.isLoading=!0,this.onShow().finally((function(){o.isLoading=!1})))}},render:function(t){return t(this.tag,{directives:[{name:"b-visible",value:this.visibleHandler,modifiers:{once:this.once,margin:this.margin}}]},this.isVisible?this.$slots.default:this.isLoading&&this.$slots.loading?this.$slots.loading:null)}},l=e(9),component=Object(l.a)(r,undefined,undefined,!1,null,null,null);o.a=component.exports},1111:function(t,o,e){"use strict";var n=e(1099),r=e.n(n);e.d(o,"default",(function(){return r.a}))},1112:function(t,o,e){var n=e(55)(!1);n.push([t.i,".footerMetaContainer_V4gpH{font-size:80%;line-height:1.65}.footerMetaContainer_V4gpH h1,.footerMetaContainer_V4gpH h2,.footerMetaContainer_V4gpH h3,.footerMetaContainer_V4gpH h4,.footerMetaContainer_V4gpH h5,.footerMetaContainer_V4gpH h6{font-size:1rem;line-height:1.65}\n",""]),n.locals={footerMetaContainer:"footerMetaContainer_V4gpH"},t.exports=n},1113:function(t,o,e){"use strict";e(37),e(33),e(27),e(11),e(40),e(30),e(41);var n=e(7),r=e(131);function l(object,t){var o=Object.keys(object);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(object);t&&(e=e.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),o.push.apply(o,e)}return o}var c={computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(o){Object(n.a)(t,o,source[o])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(o){Object.defineProperty(t,o,Object.getOwnPropertyDescriptor(source,o))}))}return t}({},Object(r.d)({footerContent:function(t){return t.layouts.default.footerContent}}))},d=c,m=e(1111),v=e(9);var component=Object(v.a)(d,(function(){var t=this,o=t._self._c;return t.footerContent?o("div",{class:t.$style.footerMetaContainer},[o("div",{staticClass:"container-fluid p-4",domProps:{innerHTML:t._s(t.footerContent)}})]):t._e()}),[],!1,(function(t){this.$style=m.default.locals||m.default}),null,null);o.a=component.exports},1141:function(t,o,e){"use strict";var n=e(1208),r=e(1209),l=e(1197),c=e(1198),d=e(1199),m=e(1160),v=e(1200),f=e(1204),_=e.n(f),k=e(1467),h=(e(11),e(66),e(75),e(1183)),w={components:{LazyComponent:e(1110).a,Copyright:function(){return e.e(59).then(e.bind(null,4272))},UilLockAlt:h.a}},x=e(9),y=Object(x.a)(w,(function(){var t=this,o=t._self._c;return o("div",{staticClass:"copyrights text-secondary"},[o("div",{staticClass:"container"},[o("div",{staticClass:"row"},[o("div",{staticClass:"col-sm-6 py-3 py-sm-6 overflow-hidden"},[o("lazy-component",[o("copyright")],1)],1),t._v(" "),o("div",{staticClass:"col-sm-6 py-3 py-sm-6 text-right"},[o("span",{staticClass:"d-flex align-items-center justify-content-end"},[o("uil-lock-alt",{staticClass:"text-green",attrs:{size:"22"}}),t._v(" "),o("span",{staticClass:"ml-3"},[t._v(t._s(t.$t("common.secure_payment")))]),t._v(" "),o("img",{staticClass:"ml-4",attrs:{src:e(573),alt:"Stripe",height:"20"}})],1)])])])])}),[],!1,null,null,null).exports,C=e(1113),N={components:{UilApple:n.a,UilWindows:r.a,UilDribbble:l.a,UilInstagram:c.a,UilFacebook:d.a,UilTwitter:m.a,UilLinkedin:v.a,FooterCopyright:y,FooterMeta:C.a},computed:{total:function(){return _()(k.items_count-k.assets.items.photos_count).format("0,0")}}},O=(e(1481),Object(x.a)(N,(function(){var t=this,o=t._self._c;return o("div",{staticClass:"footerWrapper"},[o("footer",{attrs:{id:"footer"}},[o("div",{staticClass:"container"},[o("div",{staticClass:"row py-5 py-md-8 justify-content-between"},[o("div",{staticClass:"col-sm-auto d-flex align-items-center"},[o("img",{staticClass:"mr-3",attrs:{src:e(556),alt:"IconScout Logo",height:"44"}}),t._v(" "),o("span",{staticClass:"text-secondary"},[t._v("\n            "+t._s(t.$t("footer.large.sub_heading"))+"\n          ")])]),t._v(" "),o("span",{staticClass:"lead text-secondary align-self-center"},[o("em",{staticClass:"text-primary-dark font-weight-semi-bold"},[t._v(t._s(t.total))]),t._v("\n          "+t._s(t.$t("footer.large.counting"))+"\n        ")])]),t._v(" "),o("hr",{staticClass:"my-0"}),t._v(" "),o("div",{staticClass:"row py-6"},[o("div",{staticClass:"col-lg-2 col-md-3 col-sm-3"},[o("div",{staticClass:"h5"},[t._v(t._s(t.$t("footer.large.title_one")))]),t._v(" "),o("ul",{staticClass:"list-unstyled footer-links"},[o("li",[o("nuxt-link",{directives:[{name:"track",rawName:"v-track",value:{data:{location:"footer",item:"free_icons"}},expression:"{\n                  data: { location: 'footer', item: 'free_icons' },\n                }"}],attrs:{to:{name:"free-icons"}}},[t._v("Free Icons")])],1),t._v(" "),o("li",[o("nuxt-link",{directives:[{name:"track",rawName:"v-track",value:{data:{location:"footer",item:"emoji_icons"}},expression:"{\n                  data: { location: 'footer', item: 'emoji_icons' },\n                }"}],attrs:{to:{name:"categories-slug-asset",params:{slug:"emoji",asset:"icons"}}}},[t._v("Free Emoji Icons")])],1),t._v(" "),o("li",[o("nuxt-link",{directives:[{name:"track",rawName:"v-track",value:{data:{location:"footer",item:"logo_icons"}},expression:"{\n                  data: { location: 'footer', item: 'logo_icons' },\n                }"}],attrs:{to:{name:"icons-slug",params:{slug:"logos"}}}},[t._v("Free Logo Icons")])],1),t._v(" "),o("li",[o("nuxt-link",{directives:[{name:"track",rawName:"v-track",value:{data:{location:"footer",item:"ios_icons"}},expression:"{\n                  data: { location: 'footer', item: 'ios_icons' },\n                }"}],attrs:{to:{name:"icon-pack-slug",params:{slug:"ios-icons"}}}},[t._v("iOS Icons")])],1),t._v(" "),o("li",[o("nuxt-link",{directives:[{name:"track",rawName:"v-track",value:{data:{location:"footer",item:"sticker_icons"}},expression:"{\n                  data: { location: 'footer', item: 'sticker_icons' },\n                }"}],attrs:{to:{name:"styles-slug",params:{slug:"sticker"}}}},[t._v("Sticker Icons")])],1),t._v(" "),o("li",[o("nuxt-link",{directives:[{name:"track",rawName:"v-track",value:{data:{location:"footer",item:"gradient_icons"}},expression:"{\n                  data: { location: 'footer', item: 'gradient_icons' },\n                }"}],attrs:{to:{name:"styles-slug",params:{slug:"gradient"}}}},[t._v("Gradient Icons")])],1),t._v(" "),o("li",[o("nuxt-link",{directives:[{name:"track",rawName:"v-track",value:{data:{location:"footer",item:"assets_of_the_day"}},expression:"{\n                  data: { location: 'footer', item: 'assets_of_the_day' },\n                }"}],attrs:{to:{name:"l-assets-of-the-day"}}},[t._v("Free Assets of The Day")])],1)])]),t._v(" "),o("div",{staticClass:"col-lg-2 col-md-3 col-sm-3"},[o("div",{staticClass:"h5"},[t._v(t._s(t.$t("footer.large.title_two")))]),t._v(" "),o("ul",{staticClass:"list-unstyled footer-links"},[o("li",[o("nuxt-link",{directives:[{name:"track",rawName:"v-track",value:{data:{location:"footer",item:"unicons"}},expression:"{\n                  data: { location: 'footer', item: 'unicons' },\n                }"}],attrs:{to:{name:"unicons"}}},[t._v("Unicons Icon Font")])],1),t._v(" "),o("li",[o("nuxt-link",{directives:[{name:"track",rawName:"v-track",value:{data:{location:"footer",item:"icon_editor"}},expression:"{\n                  data: { location: 'footer', item: 'icon_editor' },\n                }"}],attrs:{to:{name:"color-editor"}}},[t._v("Color Editor")])],1),t._v(" "),o("li",[o("nuxt-link",{directives:[{name:"track",rawName:"v-track",value:{data:{location:"footer",item:"plugins"}},expression:"{\n                  data: { location: 'footer', item: 'plugins' },\n                }"}],attrs:{to:{name:"plugins"}}},[t._v("Apps & Plugins")])],1),t._v(" "),o("li",[o("nuxt-link",{directives:[{name:"track",rawName:"v-track",value:{data:{location:"footer",item:"hire"}},expression:"{\n                  data: { location: 'footer', item: 'hire' },\n                }"}],attrs:{to:{name:"contributors"}}},[t._v("Hire Designers")])],1),t._v(" "),o("li",[o("nuxt-link",{directives:[{name:"track",rawName:"v-track",value:{data:{location:"footer",item:"api"}},expression:"{\n                  data: { location: 'footer', item: 'api' },\n                }"}],attrs:{to:{name:"api-for-developers"}}},[t._v("IconScout API")])],1)])]),t._v(" "),o("div",{staticClass:"col-lg-2 col-md-3 col-sm-3"},[o("div",{staticClass:"h5"},[t._v(t._s(t.$t("footer.large.title_three")))]),t._v(" "),o("ul",{staticClass:"list-unstyled footer-links"},[o("li",[o("a",{directives:[{name:"track",rawName:"v-track",value:{data:{location:"footer",item:"blog"}},expression:"{\n                  data: { location: 'footer', item: 'blog' },\n                }"}],attrs:{href:"https://iconscout.com/blog",target:"_blank"}},[t._v("Blog")])]),t._v(" "),o("li",[o("a",{directives:[{name:"track",rawName:"v-track",value:{data:{location:"footer",item:"about"}},expression:"{\n                  data: { location: 'footer', item: 'about' },\n                }"}],attrs:{href:"https://lottiefiles.com/team?utm_source=iconscout&utm_medium=footer",target:"_blank",rel:"nofollow noopener"}},[t._v("About")])]),t._v(" "),o("li",[o("nuxt-link",{directives:[{name:"track",rawName:"v-track",value:{data:{location:"footer",item:"access"}},expression:"{\n                  data: { location: 'footer', item: 'access' },\n                }"}],attrs:{to:{name:"access"}}},[t._v("Access Features")])],1),t._v(" "),o("li",[o("nuxt-link",{directives:[{name:"track",rawName:"v-track",value:{data:{location:"footer",item:"become_contributor"}},expression:"{\n                  data: { location: 'footer', item: 'become_contributor' },\n                }"}],attrs:{to:{name:"become-contributor"},rel:"nofollow"}},[t._v("Sell on IconScout")])],1),t._v(" "),o("li",[o("nuxt-link",{directives:[{name:"track",rawName:"v-track",value:{data:{location:"footer",item:"startup_program"}},expression:"{\n                  data: { location: 'footer', item: 'startup_program' },\n                }"}],attrs:{to:{name:"special-scout-plan-for-startup-students-hackathon-ngo"},rel:"nofollow"}},[t._v("Startup Program")])],1),t._v(" "),o("li",[o("a",{directives:[{name:"track",rawName:"v-track",value:{data:{location:"footer",item:"hiring"}},expression:"{\n                  data: { location: 'footer', item: 'hiring' },\n                }"}],attrs:{href:"https://lottiefiles.com/careers?utm_source=iconscout&utm_medium=footer",rel:"nofollow noopener",target:"_blank"}},[t._v("\n                We're Hiring\n              ")])])])]),t._v(" "),o("div",{staticClass:"col-lg-2 col-md-3 col-sm-3"},[o("div",{staticClass:"h5"},[t._v(t._s(t.$t("footer.large.title_four")))]),t._v(" "),o("ul",{staticClass:"list-unstyled footer-links"},[o("li",[o("nuxt-link",{directives:[{name:"track",rawName:"v-track",value:{data:{location:"footer",item:"terms"}},expression:"{\n                  data: { location: 'footer', item: 'terms' },\n                }"}],attrs:{to:{name:"legal-slug",params:{slug:"terms-of-use"}},target:"_blank",rel:"nofollow noopener"}},[t._v("Terms of Use")])],1),t._v(" "),o("li",[o("nuxt-link",{directives:[{name:"track",rawName:"v-track",value:{data:{location:"footer",item:"privacy_policy"}},expression:"{\n                  data: { location: 'footer', item: 'privacy_policy' },\n                }"}],attrs:{to:{name:"legal-slug",params:{slug:"privacy-policy"}},target:"_blank",rel:"nofollow noopener"}},[t._v("Privacy Policy")])],1),t._v(" "),o("li",[o("nuxt-link",{directives:[{name:"track",rawName:"v-track",value:{data:{location:"footer",item:"licence"}},expression:"{\n                  data: { location: 'footer', item: 'licence' },\n                }"}],attrs:{to:{name:"licenses"},target:"_blank"}},[t._v("License Agreement")])],1),t._v(" "),o("li",[o("nuxt-link",{directives:[{name:"track",rawName:"v-track",value:{data:{location:"footer",item:"contributor_terms"}},expression:"{\n                  data: { location: 'footer', item: 'contributor_terms' },\n                }"}],attrs:{to:{name:"legal-slug",params:{slug:"contributor-terms"}},target:"_blank",rel:"nofollow noopener"}},[t._v("Contributor Terms")])],1),t._v(" "),o("li",[o("a",{directives:[{name:"track",rawName:"v-track",value:{data:{location:"footer",item:"support"}},expression:"{\n                  data: { location: 'footer', item: 'support' },\n                }"}],attrs:{href:"https://support.iconscout.com",target:"_blank",rel:"nofollow noopener"}},[t._v("Support Center")])]),t._v(" "),o("li",[o("a",{directives:[{name:"track",rawName:"v-track",value:{data:{location:"footer",item:"community"}},expression:"{\n                  data: { location: 'footer', item: 'community' },\n                }"}],attrs:{href:"https://discord.gg/RfXAwxXXU9",target:"_blank",rel:"nofollow noopener"}},[t._v("Join Discord Community")])])])]),t._v(" "),o("div",{staticClass:"col-lg-auto col-md-12"},[o("div",{staticClass:"h5"},[t._v("Get IconScout for desktop")]),t._v(" "),o("ul",{staticClass:"social-icons d-inline-flex mb-4"},[o("li",[o("nuxt-link",{directives:[{name:"track",rawName:"v-track",value:{data:{location:"footer",item:"apple-desktop-app"}},expression:"{\n                  data: { location: 'footer', item: 'apple-desktop-app' },\n                }"}],staticClass:"text-secondary px-4",attrs:{to:{name:"desktop-app-slug",params:{slug:"for-mac"}},target:"_blank"}},[o("uil-apple",{attrs:{size:"20"}})],1)],1),t._v(" "),o("li",[o("nuxt-link",{directives:[{name:"track",rawName:"v-track",value:{data:{location:"footer",item:"windows-desktop-app"}},expression:"{\n                  data: { location: 'footer', item: 'windows-desktop-app' },\n                }"}],staticClass:"text-secondary px-4",attrs:{to:{name:"desktop-app-slug",params:{slug:"for-windows"}},target:"_blank"}},[o("uil-windows",{attrs:{size:"20"}})],1)],1)]),t._v(" "),o("div",{staticClass:"d-none h5"},[t._v("\n            "+t._s(t.$t("footer.large.subscribe_title"))+"\n          ")]),t._v(" "),o("div",{staticClass:"mr-5"},[o("div",{staticClass:"h5"},[t._v("Get LottieFiles mobile app")]),t._v(" "),o("ul",{staticClass:"d-inline-flex mb-4 list-unstyled"},[o("li",{staticClass:"mr-3"},[o("a",{directives:[{name:"track",rawName:"v-track",value:{data:{location:"footer",item:"download-lf-app-ios"}},expression:"{\n                    data: {\n                      location: 'footer',\n                      item: 'download-lf-app-ios',\n                    },\n                  }"}],staticClass:"text-secondary",attrs:{href:"https://lottiefiles.com/ios",target:"_blank",rel:"nofollow noopener"}},[o("img",{attrs:{width:"120",height:"40",src:e(1479),alt:"Download from App Store"}})])]),t._v(" "),o("li",[o("a",{directives:[{name:"track",rawName:"v-track",value:{data:{location:"footer",item:"download-lf-app-android"}},expression:"{\n                    data: {\n                      location: 'footer',\n                      item: 'download-lf-app-android',\n                    },\n                  }"}],staticClass:"text-secondary",attrs:{href:"https://lottiefiles.com/android",target:"_blank",rel:"nofollow noopener"}},[o("img",{attrs:{width:"130",height:"40",src:e(1480),alt:"Download from Google Play Store"}})])])])]),t._v(" "),o("div",{staticClass:"mt-0 h5"},[t._v("\n            "+t._s(t.$t("footer.large.follow_us_title"))+"\n          ")]),t._v(" "),o("ul",{staticClass:"social-icons"},[o("li",[o("a",{staticClass:"text-secondary",attrs:{href:"https://www.facebook.com/iconscout",target:"_blank",rel:"nofollow noopener"}},[o("uil-facebook",{attrs:{size:"20"}})],1)]),t._v(" "),o("li",[o("a",{staticClass:"text-secondary",attrs:{href:"https://www.instagram.com/iconscout",target:"_blank",rel:"nofollow noopener"}},[o("uil-instagram",{attrs:{size:"20"}})],1)]),t._v(" "),o("li",[o("a",{staticClass:"text-secondary",attrs:{href:"https://twitter.com/iconscout",target:"_blank",rel:"nofollow noopener"}},[o("uil-twitter",{attrs:{size:"20"}})],1)]),t._v(" "),o("li",[o("a",{staticClass:"text-secondary",attrs:{href:"https://www.linkedin.com/company/iconscout",target:"_blank",rel:"nofollow noopener"}},[o("uil-linkedin",{attrs:{size:"20"}})],1)]),t._v(" "),o("li",[o("a",{staticClass:"text-secondary",attrs:{href:"https://dribbble.com/iconscout",target:"_blank",rel:"nofollow noopener"}},[o("uil-dribbble",{attrs:{size:"20"}})],1)])])])])]),t._v(" "),o("footer-copyright")],1),t._v(" "),o("footer-meta")],1)}),[],!1,null,"5608a028",null));o.a=O.exports},1238:function(t,o,e){var content=e(1482);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(56).default)("5b0cea81",content,!0,{sourceMap:!1})},1467:function(t){t.exports=JSON.parse('{"items_count":5699747,"packs_count":158160,"bundles_count":16066,"contributors_count":3012,"assets":{"items":{"3ds_count":114276,"icons_count":4864006,"photos_count":141992,"lotties_count":75792,"illustrations_count":149923},"packs":{"3ds_count":0,"icons_count":1,"photos_count":0,"lotties_count":0,"illustrations_count":0},"bundles":{"3ds_count":2285,"icons_count":7782,"photos_count":677,"lotties_count":2138,"illustrations_count":1727}}}')},1479:function(t,o,e){t.exports=e.p+"img/download-appstore.43fc34f.svg"},1480:function(t,o,e){t.exports=e.p+"img/download-googleplay.14447b4.svg"},1481:function(t,o,e){"use strict";e(1238)},1482:function(t,o,e){var n=e(55)(!1);n.push([t.i,".footerWrapper[data-v-5608a028]{background:#EBEDF5}.footerWrapper .h5[data-v-5608a028]{margin-bottom:20px}.footerWrapper .footer-links>li[data-v-5608a028]{margin-top:0;margin-bottom:.75rem}.footerWrapper .footer-links>li a[data-v-5608a028]{color:#596080;font-weight:400;font-size:1rem;line-height:1.5rem}.footerWrapper .footer-links>li a[data-v-5608a028]:hover{color:#000;text-decoration:none}.footerWrapper .form-control[data-v-5608a028]{box-shadow:none;border:none}.footerWrapper .social-icons[data-v-5608a028]{list-style:none;margin:0;padding:0;display:flex;align-items:center}.footerWrapper .social-icons>li[data-v-5608a028]{margin-left:-1px;width:100%}.footerWrapper .social-icons>li>a[data-v-5608a028]{display:block;border:1px solid #D8DBEB;padding:10px;text-align:center;transition:all 0.2s ease-in-out}.footerWrapper .social-icons>li>a[data-v-5608a028]:hover{background-color:#D8DBEB;position:relative}.footerWrapper .copyrights[data-v-5608a028]{background-color:#D8DBEB}.footerWrapper .footermore[data-v-5608a028]{color:#95b2ff}\n",""]),t.exports=n}}]);
//# sourceMappingURL=d2942d5.js.map