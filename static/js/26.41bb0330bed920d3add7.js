webpackJsonp([26],{EU7t:function(e,t){},i6s8:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a("woOf"),i=a.n(n),r=a("BO1k"),s=a.n(r),l=a("mvHQ"),o=a.n(l),c=a("QeYY"),m=a("J8Iu"),u=a("94jl"),d=a("7s5I"),p=a("TwlK"),h=a.n(p),f={name:"Bidding",components:{Crumbs:c.a,uploadFile:m.a,audit:d.a},mixins:[u.a],data:function(){var e=this;return{isScreen:!1,searchData:{anjuan_timin:"",startTime:null,endTime:null,juanming:"",ascending:!1,orderBy:"",pageNo:1,pageSize:10},archivesList:[],popUp:!1,form:{anjuan_timin:"",juan_name:"",fileTitle:"",name:"",remark:""},ruleValidateType:{name:[{required:!0,message:"请填写文件名称",trigger:"blur"}],juan_name:[{type:"number",required:!0,message:"请选择卷名",trigger:"change"}],anjuan_timin:[{type:"number",required:!0,message:"请选择案卷题名",trigger:"change"}],remark:[{required:!0,message:"请填写备注",trigger:"blur"}]},columns:[{type:"index",title:"序号",width:60,align:"center",fixed:"left",indexMethod:this.indexMethod},{title:"发布时间",key:"juan_name",align:"center",render:function(t,a){var n=a.row.juan_name;return t("div",e.volumeList.filter(function(e){return e.adminMenuId===n})[0].adminMenuName.replace(/管理/g,"文件"))}},{title:"标题",key:"anjuan_timin",align:"center",render:function(t,a){var n=a.row.anjuan_timin;return t("div",e.titleList.filter(function(e){return e.adminMenuId===n})[0].adminMenuName)}},{title:"发布人",key:"name",render:function(t,a){return t("span",{style:{color:"#2d8cf0",cursor:"pointer"},on:{click:function(){e.showInfo(a.row,"popUp")}}},a.row.name)}},{title:"资金类别",key:"capitalName"}],listUrl:"/archives/searchArchives/list",volumeList:[],titleList:[],archiveTitleList:[]}},created:function(){this.searchList(),this.getSelectList()},methods:{handleDelete:function(){this.deleteData("/archives/deleteArchives/","id")},getSelectList:function(){var e=this.$store.state.user.menuList,t=[],a=[],n=!0,i=!1,r=void 0;try{for(var l,c=s()(e);!(n=(l=c.next()).done);n=!0){var m=l.value;if(1===m.isVolumeName){var u=m.menuModelList;m.adminMenuName=m.adminMenuName.replace(/管理/g,"文件"),t.push(m),u.length>0&&a.push.apply(a,u)}}}catch(e){i=!0,r=e}finally{try{!n&&c.return&&c.return()}finally{if(i)throw r}}this.volumeList=t,this.titleList=a,sessionStorage.setItem("volumeList",o()(t)),sessionStorage.setItem("titleList",o()(a)),this.archiveTitleList=a},changeVolume:function(e,t){var a=this.volumeList;t||(this.form.anjuan_timin=null),this.archiveTitleList=e?a.filter(function(t){return t.adminMenuId===e})[0].menuModelList:this.titleList},searchList:function(){var e=this;e.search(e.getNewSearchData(),function(t,a){if(t){var n=a.data;e.archivesList=n.archivesList,e.total=n.totalCount,e.$nextTick(function(){var e=!0,t=!1,a=void 0;try{for(var i,r=s()(n.archivesList);!(e=(i=r.next()).done);e=!0){var l=i.value;h()("#code"+l.id,l.code,{format:"CODE128",text:l.code,displayValue:!0,textPosition:"bottom"})}}catch(e){t=!0,a=e}finally{try{!e&&r.return&&r.return()}finally{if(t)throw a}}})}})},isShowScreen:function(e){this.isScreen=e},handleAdd:function(){this.clearData(),this.isCreate=!0,this.isDisabled=!1,this.popUp=!0},clearData:function(){this.form={anjuan_timin:"",juan_name:"",fileTitle:"",name:"",remark:""},this.$refs.form.resetFields();var e=this.$refs.uploadFile;e&&e.clearFileItems()},handleModify:function(){var e=this;if(this.isSelected){this.clearData();var t=i()({},this.currentRow);this.form=t,this.changeVolume(t.juan_name,!0),this.isCreate=!1,this.isDisabled=!1,this.$nextTick(function(){e.$refs.uploadFile.getFileItems(),e.popUp=!0})}else this.$Message.warning("您未选择需要修改的内容")},handleCancel:function(e){this.$refs[e].resetFields(),this.popUp=!1},handleConfirm:function(e){var t=this,a=this.isCreate,n=i()({},this.form),r=a?"/archives/addArchives":"/archives/updateArchives";n.fileIds=this.$refs.uploadFile.getFileIds(),this.submitForm(e,n,r,function(){t.popUp=!1,t.searchList()})}}},v={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"bidding"},[a("Crumbs",{attrs:{"parent-manage":"信息管理","children-manage":"信息发布"},on:{isShowScreen:e.isShowScreen}}),e._v(" "),e.isScreen?a("Content",{staticClass:"content screenStyle",style:{padding:"24px",background:"#fff",marginBottom:"10px"}},[a("Form",{attrs:{model:e.searchData,"label-width":85}},[a("Row",[a("Col",{attrs:{span:"11"}},[a("FormItem",{attrs:{label:"卷名",width:"100%"}},[a("Select",{attrs:{transfer:"",filterable:"",clearable:""},model:{value:e.searchData.juanming,callback:function(t){e.$set(e.searchData,"juanming",t)},expression:"searchData.juanming"}},e._l(e.volumeList,function(t){return a("Option",{key:t.adminMenuId,attrs:{value:t.adminMenuId}},[e._v(e._s(t.adminMenuName))])}),1)],1)],1),e._v(" "),a("Col",{attrs:{span:"11",offset:"2"}},[a("FormItem",{attrs:{label:"案卷题名",width:"100%"}},[a("Select",{attrs:{transfer:"",filterable:"",clearable:""},model:{value:e.searchData.anjuan_timin,callback:function(t){e.$set(e.searchData,"anjuan_timin",t)},expression:"searchData.anjuan_timin"}},e._l(e.titleList,function(t){return a("Option",{key:t.adminMenuId,attrs:{value:t.adminMenuId}},[e._v(e._s(t.adminMenuName))])}),1)],1)],1)],1),e._v(" "),a("Row",{staticStyle:{"margin-top":"15px"}},[a("Col",{attrs:{span:"11"}},[a("FormItem",{attrs:{label:"日期开始时间"}},[a("DatePicker",{staticStyle:{width:"100%"},attrs:{type:"date",options:e.startTimeOptions,placeholder:"请选择日期开始时间",placement:"bottom-start"},on:{"on-change":e.startTimeChange},model:{value:e.searchData.startTime,callback:function(t){e.$set(e.searchData,"startTime",t)},expression:"searchData.startTime"}})],1)],1),e._v(" "),a("Col",{attrs:{span:"11",offset:"2"}},[a("FormItem",{attrs:{label:"日期结束时间"}},[a("DatePicker",{staticStyle:{width:"100%"},attrs:{type:"date",options:e.endTimeOptions,placeholder:"请选择日期结束时间",placement:"bottom-start"},on:{"on-change":e.endTimeChange},model:{value:e.searchData.endTime,callback:function(t){e.$set(e.searchData,"endTime",t)},expression:"searchData.endTime"}})],1)],1)],1),e._v(" "),a("Row",{staticStyle:{"margin-top":"15px","text-align":"right"}},[a("Button",{attrs:{type:"primary"},on:{click:e.searchList}},[e._v("确认")])],1)],1)],1):e._e(),e._v(" "),a("Content",{staticClass:"content",style:{padding:"14px 24px",minHeight:"220px",background:"#fff"}},[a("Button",{attrs:{type:"primary",icon:"md-add"},on:{click:e.handleAdd}},[e._v("\n      新增\n    ")]),e._v(" "),a("Button",{attrs:{type:"primary",icon:"ios-create"},on:{click:e.handleModify}},[e._v("\n      修改\n    ")]),e._v(" "),a("Button",{attrs:{type:"primary",icon:"md-close"},on:{click:e.handleDelete}},[e._v("\n      删除\n    ")]),e._v(" "),a("Button",{attrs:{icon:"md-print"},on:{click:function(t){return t.stopPropagation(),e.printContent(18)}}},[e._v("\n      打印\n    ")]),e._v(" "),a("Button",{attrs:{icon:"md-exit"},on:{click:function(t){return e.excelExcel("/archives/exportArchivesListExcel")}}},[e._v("\n      导出\n    ")]),e._v(" "),a("Table",{ref:"archivesList",staticClass:"table",staticStyle:{"margin-top":"15px"},attrs:{"highlight-row":"",columns:e.columns,data:e.archivesList},on:{"on-current-change":e.selectRow}}),e._v(" "),a("Page",{staticStyle:{"text-align":"right"},attrs:{total:e.total,current:e.searchData.pageNo,"page-size":e.searchData.pageSize,"show-sizer":"",transfer:""},on:{"on-change":e.pageNoChange,"on-page-size-change":e.pageSizeChange}}),e._v(" "),a("Modal",{staticClass:"selStyle specialWidth",attrs:{"mask-closable":!1},model:{value:e.popUp,callback:function(t){e.popUp=t},expression:"popUp"}},[a("p",{attrs:{slot:"header"},slot:"header"},[e.isDisabled?a("span",[e._v("档案信息")]):a("span",[e._v("请添加档案信息")])]),e._v(" "),a("Tabs",{staticClass:"innerTabStyle",attrs:{animated:!1,value:"name1"}},[a("TabPane",{attrs:{label:"信息设置",name:"name1"}},[a("Form",{ref:"form",attrs:{model:e.form,rules:e.ruleValidateType,"label-width":80}},[a("Row",[a("Col",{attrs:{span:"24"}},[a("FormItem",{attrs:{label:"标题",prop:"name"}},[a("Input",{attrs:{disabled:e.isDisabled,clearable:"",placeholder:"请填写标题"},model:{value:e.form.name,callback:function(t){e.$set(e.form,"name","string"==typeof t?t.trim():t)},expression:"form.name"}})],1)],1)],1),e._v(" "),a("Row",[a("Col",{attrs:{span:"24"}},[a("FormItem",{attrs:{label:"发布人",prop:"juan_name"}},[a("Input",{attrs:{disabled:e.isDisabled,clearable:"",placeholder:"请输入发布人"},model:{value:e.form.name,callback:function(t){e.$set(e.form,"name","string"==typeof t?t.trim():t)},expression:"form.name"}})],1)],1),e._v(" "),a("Col",{attrs:{span:"12"}},[a("FormItem",{attrs:{label:"资金类别",prop:"anjuan_timin"}},[a("Select",{attrs:{disabled:e.isDisabled,transfer:"",filterable:"",clearable:"",placeholder:"请选择资金类别"},model:{value:e.form.anjuan_timin,callback:function(t){e.$set(e.form,"anjuan_timin",t)},expression:"form.anjuan_timin"}},e._l(e.archiveTitleList,function(t){return a("Option",{key:t.adminMenuId,attrs:{value:parseInt(t.adminMenuId)}},[e._v(e._s(t.adminMenuName))])}),1)],1)],1)],1),e._v(" "),a("Col",{attrs:{span:"24"}},[a("FormItem",{attrs:{label:"备注",prop:"remark"}},[a("Input",{attrs:{disabled:e.isDisabled,type:"textarea",autosize:{minRows:1,maxRows:5},placeholder:"请填写备注"},model:{value:e.form.remark,callback:function(t){e.$set(e.form,"remark","string"==typeof t?t.trim():t)},expression:"form.remark"}})],1)],1)],1)],1),e._v(" "),a("TabPane",{attrs:{label:"附件",name:"name7"}},[a("uploadFile",{ref:"uploadFile",attrs:{"is-disabled":e.isDisabled,form:{fileids:e.form.archivesFileids}}})],1)],1),e._v(" "),a("p",{staticStyle:{"text-align":"left"},attrs:{slot:"footer"},slot:"footer"},[a("Button",{attrs:{icon:"md-print"}},[e._v("打印")]),e._v(" "),a("Button",{attrs:{icon:"md-exit"}},[e._v("导出")]),e._v(" "),e.isDisabled?e._e():a("Button",{staticStyle:{float:"right","margin-left":"8px"},on:{click:function(t){return e.handleCancel("form")}}},[e._v("\n          取消\n        ")]),e._v(" "),e.isDisabled?e._e():a("Button",{staticStyle:{float:"right"},attrs:{type:"primary"},on:{click:function(t){return e.handleConfirm("form")}}},[e._v("\n          确认\n        ")])],1)],1)],1),e._v(" "),a("audit",{ref:"audit",attrs:{form:e.auditForm}})],1)},staticRenderFns:[]};var g=a("VU/8")(f,v,!1,function(e){a("EU7t")},"data-v-2a12e4dd",null);t.default=g.exports}});
//# sourceMappingURL=26.41bb0330bed920d3add7.js.map