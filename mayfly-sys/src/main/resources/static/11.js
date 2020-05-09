(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{161:function(e,t,r){var o=r(36),n=r(175);"string"==typeof(n=n.__esModule?n.default:n)&&(n=[[e.i,n,""]]);var s={insert:"head",singleton:!1};o(n,s);e.exports=n.locals||{}},171:function(e,t,r){"use strict";r(174);var o=r(61),n=Object(o.a)({},(function(){var e=this.$createElement;return(this._self._c||e)("div",{staticClass:"toolbar"},[this._t("default")],2)}),[],!1,null,null,null);t.a=n.exports},174:function(e,t,r){"use strict";var o=r(161);r.n(o).a},175:function(e,t,r){(t=r(37)(!1)).push([e.i,"\n.toolbar {\n  width: 100%;\n  padding: 8px;\n  background-color: #ffffff;\n  overflow: hidden;\n  line-height: 32px;\n  border: 1px solid #e6ebf5;\n}\n",""]),e.exports=t},176:function(e,t,r){"use strict";var o=r(6),n=r.n(o),s=r(11),a=r.n(s),i=r(182),l=function(){function e(t){n()(this,e),this.url=t}return a()(e,[{key:"url",value:function(e){return this.url=e,this}},{key:"method",value:function(e){return this.method=e,this}},{key:"getUrl",value:function(){return i.a.getApiUrl(this.url)}},{key:"request",value:function(e){return i.a.send(this,e)}}],[{key:"url",value:function(t){return new e(t)}}]),e}();t.a=l},181:function(e,t,r){"use strict";r.d(t,"c",(function(){return n})),r.d(t,"d",(function(){return s})),r.d(t,"a",(function(){return a})),r.d(t,"b",(function(){return i}));var o=r(176),n={list:o.a.url("/sys/resources").method("get"),detail:o.a.url("/sys/resources/{id}").method("get"),save:o.a.url("/sys/resources").method("post"),update:o.a.url("/sys/resources/{id}").method("put"),del:o.a.url("/sys/resources/{id}").method("delete"),changeStatus:o.a.url("/sys/resources/{id}/{status}").method("put")},s={list:o.a.url("/sys/roles").method("get"),save:o.a.url("/sys/roles").method("post"),update:o.a.url("/sys/roles/{id}").method("put"),del:o.a.url("/sys/roles/{id}").method("delete"),roleResourceIds:o.a.url("/sys/roles/{id}/resourceIds").method("get"),roleResources:o.a.url("/sys/roles/{id}/resources").method("get"),saveResources:o.a.url("/sys/roles/{id}/resources").method("post")},a={list:o.a.url("/sys/accounts").method("get"),save:o.a.url("/sys/accounts").method("post"),del:o.a.url("/sys/accounts/{id}").method("delete"),changeStatus:o.a.url("/sys/accounts/{id}/{status}").method("put"),roleIds:o.a.url("/sys/accounts/{id}/roleIds").method("get"),roles:o.a.url("/sys/accounts/{id}/roles").method("get"),resources:o.a.url("/sys/accounts/{id}/resources").method("get"),saveRoles:o.a.url("/sys/accounts/{id}/roles").method("post")},i={list:o.a.url("/sys/logs").method("get")}},189:function(e,t,r){"use strict";var o=r(190);t.a={ResourceTypeEnum:(new o.a).add("MENU","菜单",1).add("PERMISSION","权限",2),accountStatus:(new o.a).add("ENABLE","正常",1).add("DISABLE","禁用",0),logType:(new o.a).add("UPDATE","修改",2).add("DELETE","删除",3).add("SYS_LOG","系统",4).add("ERR_LOG","异常",5)}},237:function(e,t,r){"use strict";r.d(t,"b",(function(){return n})),r.d(t,"c",(function(){return s})),r.d(t,"a",(function(){return a}));var o=r(12),n={resource:o.a.code("resource"),save:o.a.code("resource:save"),update:o.a.code("resource:update"),del:o.a.code("resource:delete")},s={role:o.a.code("role"),del:o.a.code("role:delete"),saveResources:o.a.code("role:saveResources")},a={account:o.a.code("account"),changeStatus:o.a.code("account:changeStatus"),del:o.a.code("account:delete"),saveRoles:o.a.code("account:saveRoles")}},238:function(e,t,r){"use strict";var o={name:"HelpHint",props:{placement:{default:"top"},content:String},data:function(){return{}}},n=r(61),s=Object(n.a)(o,(function(){var e=this.$createElement,t=this._self._c||e;return t("span",[t("span",{staticStyle:{"margin-right":"8px"}},[this._t("default")],2),this._v(" "),t("el-tooltip",{attrs:{content:this.content,placement:this.placement}},[t("i",{staticClass:"el-icon-question",staticStyle:{cursor:"pointer"}})])],1)}),[],!1,null,null,null);t.a=s.exports},752:function(e,t,r){"use strict";r.r(t),r.d(t,"default",(function(){return S}));var o=r(172),n=r.n(o),s=r(173),a=r.n(s),i=r(171),l=r(238),c=r(181),u={name:"RoleEdit",props:{visible:Boolean,data:[Object,Boolean],title:String},data:function(){return{form:{id:null,name:"",remark:""},btnLoading:!1}},watch:{data:{handler:function(){if(this.data)for(var e in this.form)this.form[e]=this.data[e];else for(var t in this.form)this.form[t]=""},deep:!0}},methods:{handleChange:function(){},btnOk:function(){var e=this;return a()(n.a.mark((function t(){var r;return n.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.form,r=e.form.id?c.d.update:c.d.save,t.next=4,r.request(e.form);case 4:e.$emit("val-change",e.form),e.btnLoading=!0,setTimeout((function(){e.btnLoading=!1}),1e3);case 7:case"end":return t.stop()}}),t)})))()}},components:{}},d=r(61),f=Object(d.a)(u,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"role-dialog"},[r("el-dialog",{attrs:{title:e.title,visible:e.visible,"show-close":!1,width:"500px"}},[r("el-form",{attrs:{model:e.form,size:"small","label-width":"90px"}},[r("el-form-item",{attrs:{label:"角色名称:",required:""}},[r("el-input",{attrs:{"auto-complete":"off"},model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"角色描述:"}},[r("el-input",{attrs:{type:"textarea",rows:3,placeholder:"请输入角色描述"},model:{value:e.form.remark,callback:function(t){e.$set(e.form,"remark",t)},expression:"form.remark"}})],1)],1),e._v(" "),r("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[r("el-button",{attrs:{size:"small"},on:{click:function(t){return e.$emit("cancel")}}},[e._v("取 消")]),e._v(" "),r("el-button",{attrs:{type:"primary",loading:e.btnLoading,size:"small"},on:{click:e.btnOk}},[e._v("确 定")])],1)],1)],1)}),[],!1,null,null,null).exports,h=r(237),m=r(189);function p(e){if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(e=function(e,t){if(!e)return;if("string"==typeof e)return v(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return v(e,t)}(e))){var t=0,r=function(){};return{s:r,n:function(){return t>=e.length?{done:!0}:{done:!1,value:e[t++]}},e:function(e){throw e},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,n,s=!0,a=!1;return{s:function(){o=e[Symbol.iterator]()},n:function(){var e=o.next();return s=e.done,e},e:function(e){a=!0,n=e},f:function(){try{s||null==o.return||o.return()}finally{if(a)throw n}}}}function v(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,o=new Array(t);r<t;r++)o[r]=e[r];return o}var y={props:{visible:Boolean,role:[Object,Boolean],defaultCheckedKeys:Array,resources:Array,title:String},data:function(){return{enums:m.a,defaultProps:{children:"children",label:"name"}}},methods:{getAllLeafIds:function(e){var t,r=[],o=p(e);try{for(o.s();!(t=o.n()).done;){var n=t.value;this.setLeafIds(n,r)}}catch(e){o.e(e)}finally{o.f()}return r},setLeafIds:function(e,t){if(null!==e.children){var r,o=p(e.children);try{for(o.s();!(r=o.n()).done;){var n=r.value;this.setLeafIds(n,t)}}catch(e){o.e(e)}finally{o.f()}}else t.push(e.id)},btnOk:function(){var e=this;return a()(n.a.mark((function t(){var r,o,s;return n.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=e.$refs.menuTree.getCheckedKeys(),o=e.$refs.menuTree.getHalfCheckedKeys(),s=[].concat(r,o).join(","),t.next=5,c.d.saveResources.request({id:e.role.id,resourceIds:s});case 5:e.$message.success("保存成功!"),e.$emit("cancel");case 7:case"end":return t.stop()}}),t)})))()}},mounted:function(){}},g=Object(d.a)(y,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("el-dialog",{attrs:{title:"分配“"+e.role.name+"”菜单&权限",visible:e.visible,"show-close":!1,width:"400px",height:"400px"}},[r("el-tree",{ref:"menuTree",staticStyle:{height:"50vh",overflow:"auto"},attrs:{data:e.resources,"show-checkbox":"","node-key":"id","default-checked-keys":e.defaultCheckedKeys,props:e.defaultProps},scopedSlots:e._u([{key:"default",fn:function(t){var o=t.node,n=t.data;return r("span",{staticClass:"custom-tree-node"},[n.type==e.enums.ResourceTypeEnum.MENU.value?r("span",[e._v(e._s(o.label))]):e._e(),e._v(" "),n.type==e.enums.ResourceTypeEnum.PERMISSION.value?r("span",{staticStyle:{color:"#67c23a"}},[e._v(e._s(o.label))]):e._e()])}}])}),e._v(" "),r("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[r("el-button",{attrs:{type:"primary",size:"small"},on:{click:e.btnOk}},[e._v("确 定")]),e._v(" "),r("el-button",{attrs:{size:"small"},on:{click:function(t){return e.$emit("cancel")}}},[e._v("取 消")])],1)],1)],1)}),[],!1,null,null,null).exports,b={props:{visible:Boolean,resources:Array,title:String},data:function(){return{enums:m.a,defaultProps:{children:"children",label:"resourceName"}}},methods:{info:function(e){this.$alert('<strong style="margin-right: 18px">资源名称:</strong>'+e.resourceName+' <br/><strong style="margin-right: 18px">分配账号:</strong>'+e.createAccount+' <br/><strong style="margin-right: 18px">分配时间:</strong>'+e.createTime,"分配信息",{type:"info",dangerouslyUseHTMLString:!0,closeOnClickModal:!0,showConfirmButton:!1}).catch((function(e){}))},closeDialog:function(){this.$emit("close")}},mounted:function(){}},w=Object(d.a)(b,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("el-dialog",{attrs:{title:e.title,visible:e.visible,width:"400px",height:"400px"},on:{close:e.closeDialog}},[r("el-tree",{staticStyle:{height:"50vh",overflow:"auto"},attrs:{data:e.resources,"node-key":"id",props:e.defaultProps,"expand-on-click-node":!1},scopedSlots:e._u([{key:"default",fn:function(t){var o=t.node,n=t.data;return r("span",{staticClass:"custom-tree-node"},[n.type==e.enums.ResourceTypeEnum.MENU.value?r("span",[e._v(e._s(o.label))]):e._e(),e._v(" "),n.type==e.enums.ResourceTypeEnum.PERMISSION.value?r("span",{staticStyle:{color:"#67c23a"}},[e._v(e._s(o.label))]):e._e(),e._v(" "),r("el-link",{staticStyle:{"margin-left":"25px"},attrs:{icon:"el-icon-view",type:"info",underline:!1},on:{click:function(t){return e.info(n)}}})],1)}}])})],1)],1)}),[],!1,null,null,null).exports;function _(e){if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(e=function(e,t){if(!e)return;if("string"==typeof e)return k(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return k(e,t)}(e))){var t=0,r=function(){};return{s:r,n:function(){return t>=e.length?{done:!0}:{done:!1,value:e[t++]}},e:function(e){throw e},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,n,s=!0,a=!1;return{s:function(){o=e[Symbol.iterator]()},n:function(){var e=o.next();return s=e.done,e},e:function(e){a=!0,n=e},f:function(){try{s||null==o.return||o.return()}finally{if(a)throw n}}}}function k(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,o=new Array(t);r<t;r++)o[r]=e[r];return o}var x={data:function(){return{permission:h.c,dialogFormVisible:!1,currentEditPermissions:!1,query:{pageNum:1,pageSize:10,name:null},total:0,roles:[],chooseId:null,chooseData:null,resourceDialog:{visible:!1,role:{},resources:[],defaultCheckedKeys:[]},roleEdit:{title:"角色编辑",visible:!1,role:{}},showResourceDialog:{visible:!1,resources:[],title:""}}},methods:{search:function(){var e=this;return a()(n.a.mark((function t(){var r;return n.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.d.list.request(e.query);case 2:r=t.sent,e.roles=r.list,e.total=r.total;case 5:case"end":return t.stop()}}),t)})))()},handlePageChange:function(e){this.query.pageNum=e,this.search()},choose:function(e){e&&(this.chooseId=e.id,this.chooseData=e)},roleEditChange:function(e){this.roleEdit.visible=!1,this.$message.success("修改成功！"),this.search()},editRole:function(e){this.roleEdit.data=e||!1,this.roleEdit.visible=!0},deleteRole:function(e){var t=this;return a()(n.a.mark((function r(){return n.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,t.$confirm("此操作将删除 [".concat(e.name,"] 该角色，以及与该角色有关的账号角色关联信息和资源角色关联信息, 是否继续?"),"提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"});case 3:return r.next=5,c.d.del.request({id:e.id});case 5:t.$message.success("删除成功！"),t.search(),r.next=11;break;case 9:r.prev=9,r.t0=r.catch(0);case 11:case"end":return r.stop()}}),r,null,[[0,9]])})))()},showResources:function(e){var t=this;return a()(n.a.mark((function r(){return n.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,c.d.roleResources.request({id:e.id});case 2:t.showResourceDialog.resources=r.sent,t.showResourceDialog.title='"'+e.name+'"的菜单&权限',t.showResourceDialog.visible=!0;case 5:case"end":return r.stop()}}),r)})))()},closeShowResourceDialog:function(){this.showResourceDialog.visible=!1,this.showResourceDialog.resources=[]},editResource:function(e){var t=this;return a()(n.a.mark((function r(){var o,s,a,i,l,u,d,f;return n.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,c.c.list.request();case 2:return o=r.sent,t.resourceDialog.resources=o,r.next=6,c.d.roleResourceIds.request({id:e.id});case 6:s=r.sent,a=s,i=[],l=t.getAllLeafIds(t.resourceDialog.resources),u=_(l);try{for(u.s();!(d=u.n()).done;)f=d.value,a.includes(f)&&i.push(f)}catch(e){u.e(e)}finally{u.f()}t.resourceDialog.defaultCheckedKeys=i,t.resourceDialog.visible=!0,t.resourceDialog.role=e;case 15:case"end":return r.stop()}}),r)})))()},getAllLeafIds:function(e){var t,r=[],o=_(e);try{for(o.s();!(t=o.n()).done;){var n=t.value;this.setLeafIds(n,r)}}catch(e){o.e(e)}finally{o.f()}return r},setLeafIds:function(e,t){if(null!==e.children){var r,o=_(e.children);try{for(o.s();!(r=o.n()).done;){var n=r.value;this.setLeafIds(n,t)}}catch(e){o.e(e)}finally{o.f()}}else t.push(e.id)},cancelEditResources:function(){var e=this;this.resourceDialog.visible=!1,setTimeout((function(){e.resourceDialog.role=!1,e.resourceDialog.defaultCheckedKeys=[]}),10)}},mounted:function(){this.search()},components:{ToolBar:i.a,HelpHint:l.a,RoleEdit:f,ResourceEdit:g,ShowResource:w}},S=Object(d.a)(x,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"role-list"},[r("ToolBar",[r("el-button",{directives:[{name:"permission",rawName:"v-permission",value:e.permission.role.code,expression:"permission.role.code"}],attrs:{type:"primary",icon:"el-icon-plus",size:"mini"},on:{click:function(t){return e.editRole(!1)}}},[e._v("添加")]),e._v(" "),r("el-button",{directives:[{name:"permission",rawName:"v-permission",value:e.permission.role.code,expression:"permission.role.code"}],attrs:{disabled:null==e.chooseId,type:"primary",icon:"el-icon-edit",size:"mini"},on:{click:function(t){return e.editRole(e.chooseData)}}},[e._v("编辑")]),e._v(" "),r("el-button",{directives:[{name:"permission",rawName:"v-permission",value:e.permission.saveResources.code,expression:"permission.saveResources.code"}],attrs:{disabled:null==e.chooseId,type:"success",icon:"el-icon-setting",size:"mini"},on:{click:function(t){return e.editResource(e.chooseData)}}},[e._v("分配菜单&权限")]),e._v(" "),r("el-button",{directives:[{name:"permission",rawName:"v-permission",value:e.permission.del.code,expression:"permission.del.code"}],attrs:{disabled:null==e.chooseId,type:"danger",icon:"el-icon-delete",size:"mini"},on:{click:function(t){return e.deleteRole(e.chooseData)}}},[e._v("删除")]),e._v(" "),r("div",{staticStyle:{float:"right"}},[r("el-input",{staticStyle:{width:"140px"},attrs:{placeholder:"请输入角色名称！",size:"small",clearable:""},on:{clear:e.search},model:{value:e.query.name,callback:function(t){e.$set(e.query,"name",t)},expression:"query.name"}}),e._v(" "),r("el-button",{attrs:{type:"success",icon:"el-icon-search",size:"mini"},on:{click:e.search}})],1)],1),e._v(" "),r("el-table",{ref:"table",staticStyle:{width:"100%"},attrs:{data:e.roles,border:""},on:{"current-change":e.choose}},[r("el-table-column",{attrs:{label:"选择",width:"50px"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("el-radio",{attrs:{label:t.row.id},model:{value:e.chooseId,callback:function(t){e.chooseId=t},expression:"chooseId"}},[r("i")])]}}])}),e._v(" "),r("el-table-column",{attrs:{prop:"name",label:"角色名称"}}),e._v(" "),r("el-table-column",{attrs:{prop:"remark",label:"描述","min-width":"180px","show-overflow-tooltip":""}}),e._v(" "),r("el-table-column",{attrs:{prop:"createTime",label:"创建时间"}}),e._v(" "),r("el-table-column",{attrs:{prop:"updateTime",label:"修改时间"}}),e._v(" "),r("el-table-column",{attrs:{label:"查看更多","min-width":"80px"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("el-link",{directives:[{name:"permission",rawName:"v-permission",value:e.permission.role.code,expression:"permission.role.code"}],attrs:{type:"info"},on:{click:function(r){return e.showResources(t.row)}}},[e._v("菜单&权限")])]}}])})],1),e._v(" "),r("el-pagination",{staticStyle:{"text-align":"center"},attrs:{background:"",layout:"prev, pager, next, total, jumper",total:e.total,"current-page":e.query.pageNum,"page-size":e.query.pageSize},on:{"current-change":e.handlePageChange,"update:currentPage":function(t){return e.$set(e.query,"pageNum",t)},"update:current-page":function(t){return e.$set(e.query,"pageNum",t)}}}),e._v(" "),r("role-edit",{attrs:{title:e.roleEdit.title,visible:e.roleEdit.visible,data:e.roleEdit.data},on:{"val-change":e.roleEditChange,cancel:function(t){e.roleEdit.visible=!1}}}),e._v(" "),r("resource-edit",{attrs:{visible:e.resourceDialog.visible,role:e.resourceDialog.role,resources:e.resourceDialog.resources,defaultCheckedKeys:e.resourceDialog.defaultCheckedKeys},on:{cancel:function(t){return e.cancelEditResources()}}}),e._v(" "),r("show-resource",{attrs:{visible:e.showResourceDialog.visible,title:e.showResourceDialog.title,resources:e.showResourceDialog.resources},on:{close:e.closeShowResourceDialog}})],1)}),[],!1,null,null,null).exports}}]);