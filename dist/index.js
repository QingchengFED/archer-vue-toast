!function(e,t){if("object"==typeof exports&&"object"==typeof module)module.exports=t();else if("function"==typeof define&&define.amd)define([],t);else{var n=t();for(var i in n)("object"==typeof exports?exports:e)[i]=n[i]}}(this,function(){return function(e){function t(i){if(n[i])return n[i].exports;var o=n[i]={exports:{},id:i,loaded:!1};return e[i].call(o.exports,o,o.exports,t),o.loaded=!0,o.exports}var n={};return t.m=e,t.c=n,t.p="",t(0)}([function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(10),r=i(o);t.default={install:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=e.extend(r.default),i=null;e.prototype.$toast=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};i=new n({el:document.createElement("div"),data:function(){return{txt:e.txt||t.txt||"这是toast",time:e.time||t.time||2e3,transition:e.transition||t.transition||"fade",show:!1}},methods:{showToast:function(){this.show=!0},hideToast:function(){this.show=!1,this.$nextTick(function(){i=null})}},created:function(){var e=this;this.showToast();var t=setTimeout(function(){e.hideToast(),t=null},e.time)}}),i.$appendTo(document.body)}}}},function(e,t){e.exports=function(){var e=[];return e.toString=function(){for(var e=[],t=0;t<this.length;t++){var n=this[t];n[2]?e.push("@media "+n[2]+"{"+n[1]+"}"):e.push(n[1])}return e.join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var i={},o=0;o<this.length;o++){var r=this[o][0];"number"==typeof r&&(i[r]=!0)}for(o=0;o<t.length;o++){var s=t[o];"number"==typeof s[0]&&i[s[0]]||(n&&!s[2]?s[2]=n:n&&(s[2]="("+s[2]+") and ("+n+")"),e.push(s))}},e}},function(e,t,n){function i(e,t){for(var n=0;n<e.length;n++){var i=e[n],o=c[i.id];if(o){o.refs++;for(var r=0;r<o.parts.length;r++)o.parts[r](i.parts[r]);for(;r<i.parts.length;r++)o.parts.push(p(i.parts[r],t))}else{for(var s=[],r=0;r<i.parts.length;r++)s.push(p(i.parts[r],t));c[i.id]={id:i.id,refs:1,parts:s}}}}function o(e){for(var t=[],n={},i=0;i<e.length;i++){var o=e[i],r=o[0],s=o[1],a=o[2],d=o[3],p={css:s,media:a,sourceMap:d};n[r]?n[r].parts.push(p):t.push(n[r]={id:r,parts:[p]})}return t}function r(e,t){var n=m(),i=g[g.length-1];if("top"===e.insertAt)i?i.nextSibling?n.insertBefore(t,i.nextSibling):n.appendChild(t):n.insertBefore(t,n.firstChild),g.push(t);else{if("bottom"!==e.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");n.appendChild(t)}}function s(e){e.parentNode.removeChild(e);var t=g.indexOf(e);t>=0&&g.splice(t,1)}function a(e){var t=document.createElement("style");return t.type="text/css",r(e,t),t}function d(e){var t=document.createElement("link");return t.rel="stylesheet",r(e,t),t}function p(e,t){var n,i,o;if(t.singleton){var r=x++;n=v||(v=a(t)),i=l.bind(null,n,r,!1),o=l.bind(null,n,r,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=d(t),i=f.bind(null,n),o=function(){s(n),n.href&&URL.revokeObjectURL(n.href)}):(n=a(t),i=u.bind(null,n),o=function(){s(n)});return i(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;i(e=t)}else o()}}function l(e,t,n,i){var o=n?"":i.css;if(e.styleSheet)e.styleSheet.cssText=C(t,o);else{var r=document.createTextNode(o),s=e.childNodes;s[t]&&e.removeChild(s[t]),s.length?e.insertBefore(r,s[t]):e.appendChild(r)}}function u(e,t){var n=t.css,i=t.media;if(i&&e.setAttribute("media",i),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}function f(e,t){var n=t.css,i=t.sourceMap;i&&(n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(i))))+" */");var o=new Blob([n],{type:"text/css"}),r=e.href;e.href=URL.createObjectURL(o),r&&URL.revokeObjectURL(r)}var c={},A=function(e){var t;return function(){return"undefined"==typeof t&&(t=e.apply(this,arguments)),t}},h=A(function(){return/msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase())}),m=A(function(){return document.head||document.getElementsByTagName("head")[0]}),v=null,x=0,g=[];e.exports=function(e,t){t=t||{},"undefined"==typeof t.singleton&&(t.singleton=h()),"undefined"==typeof t.insertAt&&(t.insertAt="bottom");var n=o(e);return i(n,t),function(e){for(var r=[],s=0;s<n.length;s++){var a=n[s],d=c[a.id];d.refs--,r.push(d)}if(e){var p=o(e);i(p,t)}for(var s=0;s<r.length;s++){var d=r[s];if(0===d.refs){for(var l=0;l<d.parts.length;l++)d.parts[l]();delete c[d.id]}}}};var C=function(){var e=[];return function(t,n){return e[t]=n,e.filter(Boolean).join("\n")}}()},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={}},function(e,t,n){t=e.exports=n(1)(),t.i(n(6),""),t.push([e.id,"","",{version:3,sources:[],names:[],mappings:"",file:"toast.vue",sourceRoot:"webpack://"}])},function(e,t,n){t=e.exports=n(1)(),t.push([e.id,"p[_v-5ee1d392]{margin:0}.g-layerWrap[_v-5ee1d392]{position:fixed;left:0;top:0;right:0;bottom:0;background-color:transparent;text-align:center;line-height:0;z-index:100}.m-toast[_v-5ee1d392]{margin:9.58333rem auto;display:inline-block;vertical-align:middle;min-width:95px;max-width:300px;box-sizing:border-box;background-color:rgba(0,0,0,.7);border-radius:3px;color:#fff;padding:.66667rem 1.25rem;font-size:1.08333rem;line-height:1.66667rem}.fade-transition[_v-5ee1d392]{-webkit-transition:all .5s ease;transition:all .5s ease}.fade-enter[_v-5ee1d392],.fade-leave[_v-5ee1d392]{opacity:0}.fadeup-transition[_v-5ee1d392]{-webkit-transition:all .5s ease;transition:all .5s ease}.fadeup-enter[_v-5ee1d392]{opacity:0;top:2.5rem}.fadeup-leave[_v-5ee1d392]{opacity:0;top:-1.66667rem}","",{version:3,sources:["/./src/toast.vue.style"],names:[],mappings:"AAAA,eAAE,QAAQ,CAAC,0BAAa,eAAe,OAAO,MAAM,QAAQ,SAAS,6BAA6B,kBAAkB,cAAc,WAAW,CAAC,sBAAS,uBAAkB,qBAAqB,sBAAsB,eAAe,gBAAgB,sBAAsB,gCAAiC,kBAAkB,WAAW,0BAAiB,qBAAe,sBAAgB,CAAC,8BAAiB,gCAAA,uBAAuB,CAAC,kDAAwB,SAAS,CAAC,gCAAmB,gCAAA,uBAAuB,CAAC,2BAAc,UAAU,UAAQ,CAAC,2BAAc,UAAU,eAAS,CAAC",file:"toast.vue",sourcesContent:["p{margin:0}.g-layerWrap{position:fixed;left:0;top:0;right:0;bottom:0;background-color:transparent;text-align:center;line-height:0;z-index:100}.m-toast{margin:115px auto;display:inline-block;vertical-align:middle;min-width:95px;max-width:300px;box-sizing:border-box;background-color:rgba(0,0,0,0.7);border-radius:3PX;color:#fff;padding:8px 15px;font-size:13px;line-height:20px}.fade-transition{transition:all .5s ease}.fade-enter,.fade-leave{opacity:0}.fadeup-transition{transition:all .5s ease}.fadeup-enter{opacity:0;top:30px}.fadeup-leave{opacity:0;top:-20px}"],sourceRoot:"webpack://"}])},function(e,t,n){t=e.exports=n(1)(),t.push([e.id,"@media screen and (min-width:320px){html{font-size:10px}}@media screen and (min-width:375px){html{font-size:12px}}@media screen and(min-width:414px){html{font-size:14px}}@media screen and(min-width:600px){html{font-size:16px}}","",{version:3,sources:["/./src/media_query.less"],names:[],mappings:"AAAA,oCACE,KACE,cAAgB,CACjB,CACF,AAED,oCACE,KACE,cAAgB,CACjB,CACF,AAED,mCACE,KACE,cAAgB,CACjB,CACF,AAED,mCACE,KACE,cAAgB,CACjB,CACF",file:"media_query.less",sourcesContent:["@media screen and (min-width: 320px) {\n  html {\n    font-size: 10px;\n  }\n}\n\n@media screen and (min-width: 375px) {\n  html {\n    font-size: 12px;\n  }\n}\n\n@media screen and(min-width: 414px) {\n  html {\n    font-size: 14px;\n  }\n}\n\n@media screen and(min-width: 600px) {\n  html {\n    font-size: 16px;\n  }\n}"],sourceRoot:"webpack://"}])},function(e,t,n){var i=n(4);"string"==typeof i&&(i=[[e.id,i,""]]);n(2)(i,{});i.locals&&(e.exports=i.locals)},function(e,t,n){var i=n(5);"string"==typeof i&&(i=[[e.id,i,""]]);n(2)(i,{});i.locals&&(e.exports=i.locals)},function(e,t){e.exports=' <div class=g-layerWrap :transition=transition v-if=show _v-5ee1d392=""> <div class=m-toast _v-5ee1d392=""> <p class=txt _v-5ee1d392="">{{txt}}</p> </div> </div> '},function(e,t,n){var i,o;n(7),n(8),i=n(3),o=n(9),e.exports=i||{},e.exports.__esModule&&(e.exports=e.exports.default),o&&(("function"==typeof e.exports?e.exports.options:e.exports).template=o)}])});