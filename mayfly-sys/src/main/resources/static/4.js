(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{192:function(e,n,t){var a=t(37),i=t(209);"string"==typeof(i=i.__esModule?i.default:i)&&(i=[[e.i,i,""]]);var s={insert:"head",singleton:!1},r=(a(e.i,i,s),i.locals?i.locals:{});e.exports=r},193:function(e,n,t){var a=t(37),i=t(211);"string"==typeof(i=i.__esModule?i.default:i)&&(i=[[e.i,i,""]]);var s={insert:"head",singleton:!1},r=(a(e.i,i,s),i.locals?i.locals:{});e.exports=r},194:function(e,n,t){var a=t(37),i=t(213);"string"==typeof(i=i.__esModule?i.default:i)&&(i=[[e.i,i,""]]);var s={insert:"head",singleton:!1},r=(a(e.i,i,s),i.locals?i.locals:{});e.exports=r},195:function(e,n,t){"use strict";var a=t(39);n.a={login:function(e){return a.a.request("POST","/open/v1/login",e)},logout:function(e){return a.a.request("POST","/sys/accounts/logout/{token}",e)}}},196:function(e,n,t){var a=t(37),i=t(215);"string"==typeof(i=i.__esModule?i.default:i)&&(i=[[e.i,i,""]]);var s={insert:"head",singleton:!1},r=(a(e.i,i,s),i.locals?i.locals:{});e.exports=r},207:function(e,n,t){
/*!
* screenfull
* v3.3.3 - 2018-09-04
* (c) Sindre Sorhus; MIT License
*/
!function(){"use strict";var n="undefined"!=typeof window&&void 0!==window.document?window.document:{},t=e.exports,a="undefined"!=typeof Element&&"ALLOW_KEYBOARD_INPUT"in Element,i=function(){for(var e,t=[["requestFullscreen","exitFullscreen","fullscreenElement","fullscreenEnabled","fullscreenchange","fullscreenerror"],["webkitRequestFullscreen","webkitExitFullscreen","webkitFullscreenElement","webkitFullscreenEnabled","webkitfullscreenchange","webkitfullscreenerror"],["webkitRequestFullScreen","webkitCancelFullScreen","webkitCurrentFullScreenElement","webkitCancelFullScreen","webkitfullscreenchange","webkitfullscreenerror"],["mozRequestFullScreen","mozCancelFullScreen","mozFullScreenElement","mozFullScreenEnabled","mozfullscreenchange","mozfullscreenerror"],["msRequestFullscreen","msExitFullscreen","msFullscreenElement","msFullscreenEnabled","MSFullscreenChange","MSFullscreenError"]],a=0,i=t.length,s={};a<i;a++)if((e=t[a])&&e[1]in n){for(a=0;a<e.length;a++)s[t[0][a]]=e[a];return s}return!1}(),s={change:i.fullscreenchange,error:i.fullscreenerror},r={request:function(e){var t=i.requestFullscreen;e=e||n.documentElement,/ Version\/5\.1(?:\.\d+)? Safari\//.test(navigator.userAgent)?e[t]():e[t](a?Element.ALLOW_KEYBOARD_INPUT:{})},exit:function(){n[i.exitFullscreen]()},toggle:function(e){this.isFullscreen?this.exit():this.request(e)},onchange:function(e){this.on("change",e)},onerror:function(e){this.on("error",e)},on:function(e,t){var a=s[e];a&&n.addEventListener(a,t,!1)},off:function(e,t){var a=s[e];a&&n.removeEventListener(a,t,!1)},raw:i};i?(Object.defineProperties(r,{isFullscreen:{get:function(){return Boolean(n[i.fullscreenElement])}},element:{enumerable:!0,get:function(){return n[i.fullscreenElement]}},enabled:{enumerable:!0,get:function(){return Boolean(n[i.fullscreenEnabled])}}}),t?e.exports=r:window.screenfull=r):t?e.exports=!1:window.screenfull=!1}()},208:function(e,n,t){"use strict";var a=t(192);t.n(a).a},209:function(e,n,t){(n=t(38)(!1)).push([e.i,".footer {\n  width: 100%;\n  font-size: 14px;\n  background: #fff;\n  line-height: 50px;\n  padding: 0 12px;\n  height: 50px;\n  color: #444;\n  border-top: 1px solid #d2d6de;\n}\n.footer .version {\n  float: right;\n}\n.footer .version b {\n  font-weight: 700;\n}\n.footer .version .github {\n  color: #444;\n  font-size: 20px;\n  margin-left: 8px;\n}\n.footer .version .github:hover {\n  color: #8BC34A;\n}\n",""]),e.exports=n},210:function(e,n,t){"use strict";var a=t(193);t.n(a).a},211:function(e,n,t){(n=t(38)(!1)).push([e.i,".scroll-container[data-v-57db7e32] {\n  cursor: ew-resize;\n  white-space: nowrap;\n  position: relative;\n  overflow: hidden;\n  width: 100%;\n}\n.scroll-container .scroll-wrapper[data-v-57db7e32] {\n  padding: 0 4px;\n  position: absolute;\n  transition: left 0.3s ease-in-out;\n}\n",""]),e.exports=n},212:function(e,n,t){"use strict";var a=t(194);t.n(a).a},213:function(e,n,t){(n=t(38)(!1)).push([e.i,".nav-bar[data-v-7da66065] {\n  margin-top: 50px;\n  height: 38px;\n  width: 100%;\n  z-index: 8;\n  background: #fff;\n  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.12), 0 0 3px 0 rgba(0, 0, 0, 0.04);\n}\n.nav-bar .nav-bar-tag[data-v-7da66065] {\n  height: 26px;\n  color: #495060;\n  margin: 6px 2px;\n  padding-left: 6px;\n  padding-right: 6px;\n  font-size: 12px;\n  line-height: 26px;\n  border: 1px solid #ebeef5;\n  border-radius: 2px;\n  display: inline-block;\n}\n.nav-bar .nav-bar-tag .close-box[data-v-7da66065] {\n  display: inline-block;\n  height: 100%;\n  border-left: 1px solid #ebeef5;\n  margin-left: 6px;\n}\n.nav-bar .nav-bar-tag[data-v-7da66065]:hover {\n  opacity: 0.85;\n}\n.nav-bar .nav-bar-tag .point[data-v-7da66065] {\n  display: none;\n  width: 8px;\n  height: 8px;\n  border-radius: 50%;\n  margin: auto 0;\n  position: relative;\n  background: #fff;\n}\n.nav-bar .nav-bar-tag .el-icon-close[data-v-7da66065] {\n  font-weight: bolder;\n  margin-left: 6px;\n}\n.nav-bar .nav-bar-tag .el-icon-close[data-v-7da66065]:hover {\n  color: #ff0000;\n}\n.nav-bar .active[data-v-7da66065] {\n  border: 1px solid #3d8dbc;\n  background: #303643;\n  color: #fff;\n}\n.nav-bar .active .point[data-v-7da66065] {\n  display: inline-block;\n}\n.nav-bar .scroll-container[data-v-7da66065] {\n  flex: 1;\n  height: 100%;\n}\n",""]),e.exports=n},214:function(e,n,t){"use strict";var a=t(196);t.n(a).a},215:function(e,n,t){(n=t(38)(!1)).push([e.i,".sidebar-hidden .header .logo {\n  background: #222d32;\n  width: 64px;\n}\n.sidebar-hidden .header .logo .big {\n  display: none;\n}\n.sidebar-hidden .header .logo .min {\n  display: block;\n}\n.sidebar-hidden .aside .sidebar-toggle .icon-left {\n  transform: rotate(180deg);\n}\n.sidebar-hidden .main .app-body {\n  margin-left: 64px;\n}\n.sidebar-close .header .logo {\n  width: 0;\n  overflow: hidden;\n}\n.sidebar-close .aside {\n  margin-left: -230px;\n}\n.sidebar-close .main .app-body {\n  margin-left: 0;\n}\n.sidebar-hidden.sidebar-close .aside {\n  margin-left: -64px;\n}\n.main {\n  display: flex;\n}\n.main .el-menu:not(.el-menu--collapse) {\n  width: 230px;\n}\n.main .app {\n  width: 100%;\n  background-color: #ecf0f5;\n}\n.main .aside {\n  position: fixed;\n  margin-top: 50px;\n  z-index: 10;\n  background-color: #222d32;\n  transition: all 0.3s ease-in-out;\n}\n.main .aside .menu {\n  overflow-y: auto;\n  height: calc(100vh);\n}\n.main .app-body {\n  margin-left: 230px;\n  -webkit-transition: margin-left 0.3s ease-in-out;\n  transition: margin-left 0.3s ease-in-out;\n}\n.main .main-container {\n  margin-top: 50px;\n  padding: 2px;\n  min-height: calc(100vh - 50px);\n}\n.header {\n  width: 100%;\n  position: fixed;\n  display: flex;\n  height: 50px;\n  background-color: #303643;\n  z-index: 10;\n}\n.header .logo {\n  width: 230px;\n  height: 50px;\n  text-align: center;\n  line-height: 50px;\n  color: #fff;\n  background-color: #303643;\n  -webkit-transition: width 0.35s;\n  transition: all 0.3s ease-in-out;\n}\n.header .logo .min {\n  display: none;\n}\n.header .right {\n  position: absolute;\n  right: 0;\n}\n.header .header-btn {\n  overflow: hidden;\n  height: 50px;\n  display: inline-block;\n  text-align: center;\n  line-height: 50px;\n  cursor: pointer;\n  padding: 0 14px;\n  color: #fff;\n}\n.header .header-btn .el-badge__content {\n  top: 14px;\n  right: 7px;\n  text-align: center;\n  font-size: 9px;\n  padding: 0 3px;\n  background-color: #00a65a;\n  color: #fff;\n  border: none;\n  white-space: nowrap;\n  vertical-align: baseline;\n  border-radius: 0.25em;\n}\n.header .header-btn:hover {\n  background-color: #222d32;\n}\n.menu {\n  border-right: none;\n  moz-user-select: -moz-none;\n  -moz-user-select: none;\n  -o-user-select: none;\n  -khtml-user-select: none;\n  -webkit-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n}\n.el-menu--vertical {\n  min-width: 190px;\n}\n.setting-category {\n  padding: 10px 0;\n  border-bottom: 1px solid #eee;\n}\n#mainContainer iframe {\n  border: none;\n  outline: none;\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  background-color: #ecf0f5;\n}\n.el-submenu__title {\n  font-weight: 500;\n}\n.el-menu-item {\n  font-weight: 500;\n}\n",""]),e.exports=n},232:function(e,n,t){"use strict";t.r(n);var a=t(207),i=t.n(a),s={data:function(){return{}},methods:{}},r=(t(208),t(66)),o=Object(r.a)(s,(function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"footer"},[t("div",{staticClass:"version"},[t("b",[e._v("Version")]),e._v(" "+e._s(e.$Config.version)+"\n    "),t("a",{attrs:{href:e.$Config.gitHub,target:"_blank"}},[t("i",{staticClass:"fa fa-github github"})])]),e._v(" "),t("strong",[e._v("Copyright © 2014-2016 "),t("a",{attrs:{href:"javascript:;"}},[e._v(e._s(e.$Config.siteName))]),e._v(".")]),e._v(" All rights reserved.\n")])}),[],!1,null,null,null).exports,l={name:"scrollPane",data:function(){return{left:0}},methods:{handleScroll:function(e){var n=e.wheelDelta||3*-e.deltaY,t=this.$refs.scrollContainer.offsetWidth,a=this.$refs.scrollWrapper.offsetWidth;n>0?this.left=Math.min(0,this.left+n):t-15<a?this.left<-(a-t+15)?this.left=this.left:this.left=Math.max(this.left+n,t-a-15):this.left=0},moveToTarget:function(e){var n=this.$refs.scrollContainer.offsetWidth,t=e.offsetLeft,a=e.offsetWidth;t<-this.left?this.left=15-t:t+15>-this.left&&t+a<-this.left+n-15||(this.left=-(t-(n-a)+15))}}},c=(t(210),{data:function(){return{nav:[]}},components:{ScrollPane:Object(r.a)(l,(function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{ref:"scrollContainer",staticClass:"scroll-container",on:{wheel:function(n){return n.preventDefault(),e.handleScroll(n)}}},[t("div",{ref:"scrollWrapper",staticClass:"scroll-wrapper",style:{left:e.left+"px"}},[e._t("default")],2)])}),[],!1,null,"57db7e32",null).exports},watch:{$route:{handler:function(){var e=this.$route.path,n=!0,t=!1,a=void 0;try{for(var i,s=this.nav[Symbol.iterator]();!(n=(i=s.next()).done);n=!0){if(i.value.path===e)return}}catch(e){t=!0,a=e}finally{try{n||null==s.return||s.return()}finally{if(t)throw a}}this.nav.push({path:e,title:this.$route.meta.title})},deep:!0}},methods:{closeSelectedTag:function(e){var n=this.nav,t=n[e].path;n.splice(e,1),t==this.$route.path&&this.$router.push(n[n.length-1].path)}},mounted:function(){this.nav.push({path:this.$route.path,title:this.$route.meta.title})}}),d=(t(212),Object(r.a)(c,(function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("nav",{staticClass:"nav-bar"},[t("ScrollPane",{staticClass:"nav-bar-scroll"},e._l(e.nav,(function(n,a){return t("router-link",{key:a.path,staticClass:"nav-bar-tag",class:e.$route.path==n.path?" active":"",attrs:{to:n.path}},[t("i",{staticClass:"point"}),e._v("\n      "+e._s(n.title)+"\n      "),t("div",{directives:[{name:"show",rawName:"v-show",value:1!=e.nav.length,expression:"nav.length != 1"}],staticClass:"close-box"},[t("span",{staticClass:"el-icon-close",on:{click:function(n){return n.preventDefault(),n.stopPropagation(),e.closeSelectedTag(a)}}})])])})),1)],1)}),[],!1,null,"7da66065",null).exports),u={props:["menus"],name:"MenuTree",methods:{toPath:function(e){this.$emit("toPath",e)}}},h=Object(r.a)(u,(function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",[e._l(this.menus,(function(n){return[n.children&&1===n.children[0].type?t("el-submenu",{key:n.id,attrs:{index:n.code?n.code:n.id+""}},[t("template",{slot:"title"},[t("i",{class:n.icon}),e._v(" "),t("span",{attrs:{slot:"title"},slot:"title"},[e._v(e._s(n.name))])]),e._v(" "),t("MenuTree",{attrs:{menus:n.children},on:{toPath:e.toPath}})],2):t("el-menu-item",{key:n.id,attrs:{index:n.code?n.code:n.id+""},on:{click:function(t){return e.toPath(n.code)}}},[t("i",{staticClass:"iconfont",class:n.icon}),e._v(" "),t("span",{attrs:{slot:"title"},slot:"title"},[e._v(e._s(n.name))])])]}))],2)}),[],!1,null,null,null).exports,f=t(195),p={data:function(){return{iframe:!1,iframeSrc:null,fixedTabBar:!0,switchTabBar:!0,isCollapse:!1,username:null,menus:[]}},methods:{toPath:function(e){e&&(e.startsWith("http://")||e.startsWith("https://"))?window.open(e):(this.iframe=!1,this.iframeSrc=null,this.$router.push({path:e}))},NavBarWidth:function(){var e=document.getElementById("nav-bar");e&&(this.fixedTabBar&&this.switchTabBar?document.body.classList.contains("sidebar-close")?e.style.width="100%":this.isCollapse?e.style.width="calc(100% - 64px)":e.style.width="calc(100% - 230px)":e.style.width="100%")},screenfullToggle:function(){if(!i.a.enabled)return this.$message({message:"你的浏览器不支持全屏！",type:"warning"}),!1;i.a.toggle()},saveFixedTabBar:function(e){e?localStorage.setItem("fixedTabBar",e):localStorage.removeItem("fixedTabBar"),this.NavBarWidth()},saveSwitchTabBarVal:function(e){var n=document.getElementById("mainContainer");n.style.minHeight=e?"calc(100vh - 139px)":"calc(100vh - 101px)",e?localStorage.setItem("switchTabBar",e):localStorage.removeItem("switchTabBar"),this.NavBarWidth()},sidebarToggle:function(e){e.preventDefault(),this.isCollapse?(document.body.classList.remove("sidebar-hidden"),this.siteName=this.$Config.siteName,this.isCollapse=!1):(document.body.classList.add("sidebar-hidden"),this.isCollapse=!0),this.NavBarWidth()},hiddenSidebar:function(e){e.preventDefault(),document.body.classList.toggle("sidebar-close"),this.NavBarWidth()},logout:function(){f.a.logout({token:this.$Permission.getToken()}),sessionStorage.clear(),this.$router.push({path:"/login"})}},mounted:function(){var e=this;this.menus=JSON.parse(sessionStorage.getItem(this.$Config.name.resourcesKey)),this.username=JSON.parse(sessionStorage.getItem(this.$Config.name.adminKey)).username,this.switchTabBar&&(document.getElementById("mainContainer").style.minHeight="calc(100vh - 88px)"),this.isCollapse?document.body.classList.add("sidebar-hidden"):(document.body.classList.remove("sidebar-hidden"),this.siteName=this.$Config.siteName),setTimeout((function(){e.NavBarWidth()}),1e3)},components:{EuiFooter:o,NavBar:d,MenuTree:h}},g=(t(214),Object(r.a)(p,(function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"main"},[t("div",{staticClass:"header"},[t("div",{staticClass:"logo"},[t("span",{staticClass:"big"},[e._v(e._s(e.$Config.name.siteName))])]),e._v(" "),t("div",{staticClass:"right"},[t("span",{staticClass:"header-btn",on:{click:e.screenfullToggle}},[t("i",{staticClass:"fa fa-arrows-alt"})]),e._v(" "),t("span",{staticClass:"header-btn"},[t("el-badge",{staticClass:"badge",attrs:{value:3}},[t("i",{staticClass:"el-icon-bell"})])],1),e._v(" "),t("el-dropdown",[t("span",{staticClass:"header-btn"},[e._v("\n           "+e._s(e.username)),t("i",{staticClass:"el-icon-arrow-down el-icon--right"})]),e._v(" "),t("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[t("el-dropdown-item",{nativeOn:{click:function(n){return e.$router.push("/personal")}}},[t("i",{staticClass:"fa fa-cog",staticStyle:{"padding-right":"8px"}}),e._v("个人中心")]),e._v(" "),t("el-dropdown-item",{nativeOn:{click:function(n){return e.logout(n)}}},[t("i",{staticClass:"fa fa-key",staticStyle:{"padding-right":"8px"}}),e._v("退出系统")])],1)],1)],1)]),e._v(" "),t("div",{staticClass:"app"},[t("div",{staticClass:"aside"},[t("div",{staticClass:"menu"},[t("el-menu",{staticClass:"menu",attrs:{"background-color":"#222d32","text-color":"#bbbbbb","active-text-color":"#fff","default-active":e.$route.path,collapse:e.isCollapse}},[t("MenuTree",{attrs:{menus:this.menus},on:{toPath:e.toPath}})],1)],1)]),e._v(" "),t("div",{staticClass:"app-body"},[e.switchTabBar?t("NavBar",{style:e.fixedTabBar&&e.switchTabBar?"position: fixed;top: 0;":"",attrs:{id:"nav-bar"}}):e._e(),e._v(" "),t("div",{staticClass:"main-container",style:e.fixedTabBar&&e.switchTabBar?"margin-top: 88px;":"",attrs:{id:"mainContainer"}},[e.iframe?t("iframe",{attrs:{src:e.iframeSrc}}):t("router-view")],1)],1)])])}),[],!1,null,null,null));n.default=g.exports}}]);