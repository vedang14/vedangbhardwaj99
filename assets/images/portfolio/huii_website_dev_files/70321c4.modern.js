(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{2569:function(e,t,o){var content=o(3947);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(42).default)("231d0659",content,!0,{sourceMap:!1})},3946:function(e,t,o){"use strict";var l=o(2569),d=o.n(l);o.d(t,"default",(function(){return d.a}))},3947:function(e,t,o){var l=o(41)(!1);l.push([e.i,".modal_iaY5v .modal-dialog{width:100vw;height:100vh;max-width:initial;margin:0 auto;padding:3.125rem}@media (max-width: 1023.98px){.modal_iaY5v .modal-dialog{margin:0 auto}}.modal_iaY5v .modal-dialog .modal-content{width:100%;margin:0 auto;height:100%;border-radius:0;background:transparent}.modal_iaY5v .modal-dialog .modal-content .modal-body{width:100%;height:100%;padding:0}.modal_iaY5v .modal-dialog .modal-content .modal-body>div{width:100%;height:100%;text-align:center;display:flex;align-items:center;justify-content:center}.modal_iaY5v .modal-dialog .modal-content .modal-body img,.modal_iaY5v .modal-dialog .modal-content .modal-body video{max-width:100%;max-height:100%;margin:0 auto;background:#fff}.modal_iaY5v .close_GocI3{display:block;position:fixed;top:.9375rem;right:.9375rem;z-index:9999;border-radius:50%;background:#fff;font-size:1.5rem;color:#000;box-shadow:none !important}.lottie_71yYH{width:auto;height:100%;overflow:hidden;margin:0 auto;background:#fff}\n",""]),l.locals={modal:"modal_iaY5v",close:"close_GocI3",lottie:"lottie_71yYH"},e.exports=l},3956:function(e,t,o){"use strict";o.r(t);var l=o(1013),d=o(4054),n=o(300),r=o(1034),m={components:{BModal:d.a,UilTimes:l.a},mixins:[r.a],props:{item:{type:Object,default:()=>{}},brandPreview:{type:String,default:null},selectedPreviewIndex:{type:Number,default:0}},methods:{generateSrcSetPx:n.b,onClose(){this.$modal.close("modalItemPreviewFs")}}},c=o(3946),f=o(8);var component=Object(f.a)(m,(function(){var e=this,t=e._self._c;return t("b-modal",{attrs:{id:"modalItemPreviewFs","modal-class":e.$style.modal,visible:"",centered:"","no-close-on-backdrop":"","no-fade":"","hide-header":"","hide-footer":""},on:{hidden:e.onClose}},[t("div",{on:{click:e.onClose}},[t("a",{class:["btn btn-md btn-icon",e.$style.close],attrs:{href:"#"},on:{click:function(t){return t.stopPropagation(),t.preventDefault(),e.onClose.apply(null,arguments)}}},[t("uil-times")],1),e._v(" "),"lottie"===e.item.asset?[e.brandPreview?t("lottie-player",{class:e.$style.lottie,attrs:{src:e.brandPreview,autoplay:"",loop:""}}):t("video",{attrs:{src:e.item.urls.preview,autoplay:"",muted:"",loop:"",playsinline:"",type:"video/mp4"},domProps:{muted:!0}})]:[e.brandPreview&&e.isLoggedIn&&e.canDownload?t("img",{key:e.item.id,attrs:{src:e.brandPreview,alt:e.name}}):t("img",e._b({attrs:{alt:e.name}},"img",e.generateSrcSetPx({url:"3d"===e.item.asset&&e.item.preview_files.length?e.item.preview_files[e.selectedPreviewIndex].preview:e.item.urls.preview,h:700,format:"3d"===e.item.asset?"jpeg":null}),!1))]],2)])}),[],!1,(function(e){this.$style=c.default.locals||c.default}),null,null);t.default=component.exports}}]);
//# sourceMappingURL=70321c4.modern.js.map