(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{235:function(e,t,i){"use strict";i.r(t);var n,a,s,l,o,r,c,d=i(183),u=i.n(d),p=i(184),m=i.n(p),f=i(186),h=i(206),v=i(18),b={list:v.a.url("/devops/machines").method("get").code("machines:list"),save:v.a.url("/devops/machines").method("post").code("machine:save"),update:v.a.url("/devops/machines/{id}").method("put").code("machine:update"),del:v.a.url("/devops/machines/{id}").method("delete").code("machine:delete"),serviceManage:(new v.a).code("machine:serviceManage"),files:v.a.url("/devops/machines/{id}/files").method("get").code("machineFile:files"),lsFile:v.a.url("/devops/machines/files/{fileId}/ls").method("get").code("machineFile:ls"),rmFile:v.a.url("/devops/machines/files/{fileId}/rm").method("delete").code("machineFile:rm"),uploadFile:v.a.url("/devops/machines/files/upload").code("machineFile:upload"),fileContent:v.a.url("/devops/machines/files/{fileId}/cat").method("get").code("machineFile:cat"),updateFileContent:v.a.url("/devops/machines/files/{id}").method("put").code("machineFile:updateFileContent"),addConf:v.a.url("/devops/machines/{machineId}/files").method("post").code("machineFile:addConf"),delConf:v.a.url("/devops/machines/files/{id}").method("delete").code("machineFile:delConf")},g={FileTypeEnum:(new(i(40).a)).add("DIRECTORY","目录",1).add("FILE","文件",2)},w=(i(39),{name:"FileManage",props:{visible:Boolean,machineId:[Number],title:String},data:function(){return{permission:b,addFile:b.addConf,delFile:b.delConf,updateFileContent:b.updateFileContent,files:b.files,enums:g,activeName:"conf-file",token:sessionStorage.getItem("token"),form:{id:null,type:null,name:"",remark:""},fileTable:[],btnLoading:!1,fileContent:{fileId:null,content:"",contentVisible:!1,dialogTitle:"",path:""},tree:{title:"",visible:!1,folder:{},node:{},resolve:{}},props:{label:"name",children:"zones",isLeaf:"leaf"}}},watch:{machineId:{handler:function(){this.machineId&&this.getFiles()},deep:!0}},methods:{getFiles:(o=m()(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.files.request({id:this.machineId});case 2:t=e.sent,this.fileTable=t;case 4:case"end":return e.stop()}}),e,this)}))),function(){return o.apply(this,arguments)}),handleClick:function(e,t){},add:function(){this.fileTable=[{}].concat(this.fileTable)},addFiles:(l=m()(u.a.mark((function e(t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.machineId=this.machineId,e.next=3,this.addFile.request(t);case 3:this.$message.success("添加成功"),this.getFiles();case 5:case"end":return e.stop()}}),e,this)}))),function(e){return l.apply(this,arguments)}),deleteRow:function(e,t){var i=this;t.id?this.$confirm("此操作将删除 [".concat(t.name,"], 是否继续?"),"提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){i.delFile.request({machineId:i.machineId,id:t.id}).then((function(t){i.fileTable.splice(e,1)}))})):this.fileTable.splice(e,1)},getConf:function(e){if(1==e.type)return this.tree.folder=e,this.tree.title=e.name,this.tree.node.childNodes=[],this.loadNode(this.tree.node,this.tree.resolve),void(this.tree.visible=!0);this.getFileContent(e.id,e.path)},getFileContent:(s=m()(u.a.mark((function e(t,i){var n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.permission.fileContent.request({fileId:t,path:i});case 2:n=e.sent,this.fileContent.content=n,this.fileContent.fileId=t,this.fileContent.dialogTitle=i,this.fileContent.path=i,this.fileContent.contentVisible=!0;case 8:case"end":return e.stop()}}),e,this)}))),function(e,t){return s.apply(this,arguments)}),updateContent:(a=m()(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.updateFileContent.request({content:this.fileContent.content,id:this.fileContent.fileId,path:this.fileContent.path});case 2:this.$message.success("修改成功"),this.fileContent.contentVisible=!1,this.fileContent.content="";case 5:case"end":return e.stop()}}),e,this)}))),function(){return a.apply(this,arguments)}),handleClose:function(){this.$emit("cancel"),this.activeName="conf-file",this.fileTable=[],this.tree.folder={}},loadNode:(n=m()(u.a.mark((function e(t,i){var n,a,s,l,o,r,c,d,p,m,f;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("function"==typeof i){e.next=2;break}return e.abrupt("return");case 2:if(0!==t.level){e.next=8;break}return this.tree.node=t,this.tree.resolve=i,n=this.tree.folder,a=n?n.path:"/",e.abrupt("return",i([{name:a,type:"d",path:a}]));case 8:return l=t.data,s=l&&l.name!=l.path?l.path:this.tree.folder.path,e.next=12,this.permission.lsFile.request({fileId:this.tree.folder.id,path:s});case 12:for(o=e.sent,r=!0,c=!1,d=void 0,e.prev=16,p=o[Symbol.iterator]();!(r=(m=p.next()).done);r=!0)"d"!=(f=m.value).type&&(f.leaf=!0);e.next=24;break;case 20:e.prev=20,e.t0=e.catch(16),c=!0,d=e.t0;case 24:e.prev=24,e.prev=25,r||null==p.return||p.return();case 27:if(e.prev=27,!c){e.next=30;break}throw d;case 30:return e.finish(27);case 31:return e.finish(24);case 32:return e.abrupt("return",i(o));case 33:case"end":return e.stop()}}),e,this,[[16,20,24,32],[25,,27,31]])}))),function(e,t){return n.apply(this,arguments)}),deleteFile:function(e,t){var i=this,n=t.path;this.$confirm("此操作将删除 [".concat(n,"], 是否继续?"),"提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){i.permission.rmFile.request({fileId:i.tree.folder.id,path:n}).then((function(t){i.$message.success("删除成功"),i.$refs.fileTree.remove(e)}))})).catch((function(){}))},uploadSuccess:function(e){e.success?this.$message.success("文件上传中..."):this.$message.error(e.msg)},dontOperate:function(e){var t=e.path+e.name;return-1!=["/","//","/usr","/opt","/run","/etc","/proc","/var","/mnt","/boot","/dev","/home","/media","/root"].indexOf(t)}},components:{}}),y=i(66),_=Object(y.a)(w,(function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"file-manage"},[i("el-dialog",{attrs:{title:e.title,visible:e.visible,"show-close":!0,"before-close":e.handleClose,width:"800px"},on:{"update:visible":function(t){e.visible=t}}},[i("div",{staticStyle:{float:"right"}},[i("el-button",{directives:[{name:"permission",rawName:"v-permission",value:e.addFile.code,expression:"addFile.code"}],attrs:{type:"primary",icon:"el-icon-plus",size:"mini",plain:""},on:{click:e.add}},[e._v("添加")])],1),e._v(" "),i("el-table",{staticStyle:{width:"100%"},attrs:{data:e.fileTable,stripe:""}},[i("el-table-column",{attrs:{prop:"name",label:"名称",width:""},scopedSlots:e._u([{key:"default",fn:function(t){return[i("el-input",{attrs:{size:"mini",disabled:null!=t.row.id,clearable:""},model:{value:t.row.name,callback:function(i){e.$set(t.row,"name",i)},expression:"scope.row.name"}})]}}])}),e._v(" "),i("el-table-column",{attrs:{prop:"name",label:"类型",width:""},scopedSlots:e._u([{key:"default",fn:function(t){return[i("el-select",{staticStyle:{width:"100px"},attrs:{disabled:null!=t.row.id,size:"mini",placeholder:"请选择"},model:{value:t.row.type,callback:function(i){e.$set(t.row,"type",i)},expression:"scope.row.type"}},e._l(e.enums.FileTypeEnum,(function(e){return i("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)]}}])}),e._v(" "),i("el-table-column",{attrs:{prop:"path",label:"路径",width:""},scopedSlots:e._u([{key:"default",fn:function(t){return[i("el-input",{attrs:{disabled:null!=t.row.id,size:"mini",clearable:""},model:{value:t.row.path,callback:function(i){e.$set(t.row,"path",i)},expression:"scope.row.path"}})]}}])}),e._v(" "),i("el-table-column",{attrs:{label:"操作",width:""},scopedSlots:e._u([{key:"default",fn:function(t){return[null==t.row.id?i("el-button",{ref:t.row,attrs:{type:"success",icon:"el-icon-success",size:"mini",plain:""},on:{click:function(i){return e.addFiles(t.row)}}},[e._v("确定")]):e._e(),e._v(" "),null!=t.row.id?i("el-button",{ref:t.row,attrs:{type:"primary",icon:"el-icon-tickets",size:"mini",plain:""},on:{click:function(i){return e.getConf(t.row)}}},[e._v("查看")]):e._e(),e._v(" "),i("el-button",{directives:[{name:"permission",rawName:"v-permission",value:e.delFile.code,expression:"delFile.code"}],ref:t.row,attrs:{type:"danger",icon:"el-icon-delete",size:"mini",plain:""},on:{click:function(i){return e.deleteRow(t.$index,t.row)}}},[e._v("删除")])]}}])})],1)],1),e._v(" "),i("el-dialog",{attrs:{title:e.tree.title,visible:e.tree.visible,width:"650px"},on:{"update:visible":function(t){return e.$set(e.tree,"visible",t)}}},[i("div",{staticStyle:{height:"45vh",overflow:"auto"}},[i("el-tree",{ref:"fileTree",attrs:{load:e.loadNode,props:e.props,lazy:"","node-key":"id","expand-on-click-node":!1},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.node,a=t.data;return i("span",{staticClass:"custom-tree-node"},["d"!=a.type||n.expanded?e._e():i("span",[i("i",{staticClass:"el-icon-folder"})]),e._v(" "),"d"==a.type&&n.expanded?i("span",[i("i",{staticClass:"el-icon-folder-opened"})]):e._e(),e._v(" "),"-"==a.type?i("span",[i("i",{staticClass:"el-icon-document"})]):e._e(),e._v(" "),i("span",{staticStyle:{display:"inline-block",width:"400px"}},[e._v("\n            "+e._s(n.label)+"\n            "),"-"==a.type?i("span",{staticStyle:{color:"#67c23a"}},[e._v("\n                ["+e._s(a.size)+"]\n            ")]):e._e()]),e._v(" "),i("span",["-"==a.type?i("el-link",{directives:[{name:"permission",rawName:"v-permission",value:e.permission.fileContent.code,expression:"permission.fileContent.code"}],attrs:{type:"info",icon:"el-icon-view",underline:!1},on:{click:function(t){return e.getFileContent(e.tree.folder.id,a.path)}}}):e._e(),e._v(" "),i("el-upload",{directives:[{name:"permission",rawName:"v-permission",value:e.permission.uploadFile.code,expression:"permission.uploadFile.code"}],staticStyle:{display:"inline-block"},attrs:{"on-success":e.uploadSuccess,headers:{token:e.token},data:{fileId:e.tree.folder.id,path:a.path},action:e.permission.uploadFile.getUrl(),"show-file-list":!1,name:"file",multiple:"",limit:100}},["d"==a.type?i("el-link",{attrs:{icon:"el-icon-upload",underline:!1}}):e._e()],1),e._v(" "),e.dontOperate(a)?e._e():i("el-link",{directives:[{name:"permission",rawName:"v-permission",value:e.permission.rmFile.code,expression:"permission.rmFile.code"}],attrs:{type:"danger",icon:"el-icon-delete",underline:!1},on:{click:function(t){return e.deleteFile(n,a)}}})],1)])}}])})],1)]),e._v(" "),i("el-dialog",{attrs:{title:e.fileContent.dialogTitle,visible:e.fileContent.contentVisible,width:"650px"},on:{"update:visible":function(t){return e.$set(e.fileContent,"contentVisible",t)}}},[i("el-form",{attrs:{model:e.form}},[i("el-form-item",[i("el-input",{attrs:{type:"textarea",autosize:{minRows:10,maxRows:15},autocomplete:"off"},model:{value:e.fileContent.content,callback:function(t){e.$set(e.fileContent,"content",t)},expression:"fileContent.content"}})],1)],1),e._v(" "),i("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[i("el-button",{attrs:{size:"mini"},on:{click:function(t){e.fileContent.contentVisible=!1}}},[e._v("取 消")]),e._v(" "),i("el-button",{directives:[{name:"permission",rawName:"v-permission",value:e.updateFileContent.code,expression:"updateFileContent.code"}],attrs:{type:"primary",size:"mini"},on:{click:e.updateContent}},[e._v("确 定")])],1)],1)],1)}),[],!1,null,null,null).exports,x={data:function(){return{table:[],permission:b,currentId:null,currentData:null,params:{host:null,clusterId:null},dialog:{machineId:null,visible:!1,title:null},formDialog:{visible:!1,title:null,formInfo:{addPermission:b.save,updatePermission:b.update,formRows:[[{type:"input",label:"名称：",name:"name",placeholder:"请输入名称",rules:[{required:!0,message:"请输入名称",trigger:["blur","change"]}]}],[{type:"input",label:"ip：",name:"ip",placeholder:"请输入ip",rules:[{required:!0,message:"请输入ip",trigger:["blur","change"]}]}],[{type:"input",label:"端口号：",name:"port",placeholder:"请输入端口号",inputType:"number",rules:[{required:!0,message:"请输入ip",trigger:["blur","change"]}]}],[{type:"input",label:"用户名：",name:"username",placeholder:"请输入用户名",rules:[{required:!0,message:"请输入用户名",trigger:["blur","change"]}]}],[{type:"input",label:"密码：",name:"password",placeholder:"请输入密码",inputType:"password"}]]},formData:null}}},methods:{choose:function(e){e&&(this.currentId=e.id,this.currentData=e)},openFormDialog:function(e){var t;e?(this.formDialog.formData=this.currentData,t="编辑机器"):(this.formDialog.formData={port:22},t="添加机器"),this.formDialog.title=t,this.formDialog.visible=!0},deleteMachine:(c=m()(u.a.mark((function e(t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.permission.del.request({id:t});case 2:this.$message.success("操作成功"),this.search();case 4:case"end":return e.stop()}}),e,this)}))),function(e){return c.apply(this,arguments)}),fileManage:function(e){this.dialog.machineId=e.id,this.dialog.visible=!0,this.dialog.title="".concat(e.name," => ").concat(e.ip)},cancel:function(){this.dialog.visible=!1,this.dialog.machineId=null},closeDialog:function(){this.formDialog.visible=!1,this.formDialog.formData=null},submitSuccess:function(){this.currentId=null,this.currentData=null,this.search()},search:(r=m()(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.permission.list.request(this.params);case 2:t=e.sent,this.table=t;case 4:case"end":return e.stop()}}),e,this)}))),function(){return r.apply(this,arguments)})},mounted:function(){this.search()},components:{ToolBar:f.a,FileManage:_,DynamicFormDialog:h.a}},k=Object(y.a)(x,(function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[i("ToolBar",[i("el-button",{directives:[{name:"permission",rawName:"v-permission",value:e.permission.save.code,expression:"permission.save.code"}],attrs:{type:"primary",icon:"el-icon-plus",size:"mini",plain:""},on:{click:function(t){return e.openFormDialog(!1)}}},[e._v("添加")]),e._v(" "),i("el-button",{directives:[{name:"permission",rawName:"v-permission",value:e.permission.save.code,expression:"permission.save.code"}],attrs:{type:"primary",icon:"el-icon-edit",size:"mini",disabled:null==e.currentId,plain:""},on:{click:function(t){return e.openFormDialog(e.currentData)}}},[e._v("编辑")]),e._v(" "),i("el-button",{directives:[{name:"permission",rawName:"v-permission",value:e.permission.del.code,expression:"permission.del.code"}],attrs:{disabled:null==e.currentId,type:"danger",icon:"el-icon-delete",size:"mini"},on:{click:function(t){return e.deleteMachine(e.currentId)}}},[e._v("删除")]),e._v(" "),i("el-button",{directives:[{name:"permission",rawName:"v-permission",value:e.permission.serviceManage.code,expression:"permission.serviceManage.code"}],attrs:{type:"success",disabled:null==e.currentId,size:"mini",plain:""},on:{click:function(t){return e.fileManage(e.currentData)}}},[e._v("文件管理")]),e._v(" "),i("div",{staticStyle:{float:"right"}},[i("el-input",{staticStyle:{width:"140px"},attrs:{placeholder:"host",size:"mini",plain:"",clearable:""},on:{clear:e.search},model:{value:e.params.host,callback:function(t){e.$set(e.params,"host",t)},expression:"params.host"}}),e._v(" "),i("el-button",{attrs:{type:"success",icon:"el-icon-search",size:"mini"},on:{click:e.search}})],1)],1),e._v(" "),i("el-table",{staticStyle:{width:"100%"},attrs:{data:e.table,stripe:""},on:{"current-change":e.choose}},[i("el-table-column",{attrs:{label:"选择",width:"55px"},scopedSlots:e._u([{key:"default",fn:function(t){return[i("el-radio",{attrs:{label:t.row.id},model:{value:e.currentId,callback:function(t){e.currentId=t},expression:"currentId"}},[i("i")])]}}])}),e._v(" "),i("el-table-column",{attrs:{prop:"name",label:"名称",width:""}}),e._v(" "),i("el-table-column",{attrs:{prop:"ip",label:"IP",width:""}}),e._v(" "),i("el-table-column",{attrs:{prop:"port",label:"端口",width:""}}),e._v(" "),i("el-table-column",{attrs:{prop:"username",label:"用户名"}}),e._v(" "),i("el-table-column",{attrs:{prop:"createTime",label:"创建时间"}}),e._v(" "),i("el-table-column",{attrs:{prop:"updateTime",label:"更新时间"}})],1),e._v(" "),i("FileManage",{attrs:{title:e.dialog.title,visible:e.dialog.visible,machineId:e.dialog.machineId},on:{cancel:function(t){return e.cancel()}}}),e._v(" "),i("dynamic-form-dialog",{attrs:{visible:e.formDialog.visible,title:e.formDialog.title,formInfo:e.formDialog.formInfo,formData:e.formDialog.formData},on:{cancel:e.closeDialog,submitSuccess:e.submitSuccess}})],1)}),[],!1,null,null,null).exports;i.d(t,"default",(function(){return k}))}}]);