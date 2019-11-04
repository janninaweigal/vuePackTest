webpackJsonp([41],{"e+33":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=a("woOf"),o=a.n(r),n=a("BO1k"),i=a.n(n),s={name:"BudgetManage",components:{uploadFile:a("J8Iu").a},data:function(){var e=this;return{formTitle:"工程合同资料",transferValue:!0,form:{formName:"",formType:null,capitalId:null,formSource:"",formRemark:""},typeList:{0:{name:"工程合同资料",label:"工程合同模板"},1:{name:"申报资料",label:"申报类模板"},2:{name:"检查资料",label:"检查类模板"},3:{name:"验收资料",label:"验收类模板"},4:{name:"前期资料",label:"前期类模板"},5:{name:"实施资料",label:"实施类模板"}},curTime:"",popUp:!1,columns:[{title:"表单来源",key:"formType",width:100,render:function(t,a){return t("span",{style:{color:"#2d8cf0",cursor:"pointer"},on:{click:function(){e.showInfo(a.row)}}},a.row.formSource)}},{title:"资金类别",key:"capitalName",render:function(t,a){var r=a.row;return t("div",[t("Icon",{props:{type:"md-globe"},style:{fontSize:"18px",color:"#559DF9",marginRight:"10px",cursor:"pointer"},on:{click:function(){e.getContentByFileids(r.fileids,!0)}}}),t("span",{style:{color:"#559DF9",cursor:"pointer"},on:{click:function(){e.getContentByFileids(r.fileids,!0)}}},r.capitalName)])}},{className:"noPaddingRight",title:"操作",key:"action",width:70,render:function(t,a){var r=a.row;return t("div",[t("Icon",{props:{type:"md-download"},style:{fontSize:"18px",color:"#559DF9",cursor:"pointer"},on:{click:function(){e.getContentByFileids(r.fileids,!1)}}})])}}],capitalList:[],formList:[],searchData:{formType:0,ascending:!1,orderBy:"form_id"}}},mounted:function(){var e=(new Date).toLocaleString("chinese",{hour12:!1});this.curTime=e.substring(0,15),this.getCapitalList(),this.getFormList()},methods:{onPreview:function(e,t){e?this.commonUtil.onlinePreview(e,t):this.$Message.error("还未上传文件")},downloadFile:function(e,t){var a=this;e?(a.$Spin.show(),a.commonUtil.downFile("/file/download",{fileId:e},function(e){a.$Spin.hide(),a.savePdf(t,e)},function(e){a.$Message.error("网络连接错误"),a.$Spin.hide()},a)):a.$Message.error("下载失败")},findData:function(e,t){var a=!0,r=!1,o=void 0;try{for(var n,s=i()(e);!(a=(n=s.next()).done);a=!0){var l=n.value;if(-1!==l.name.indexOf(t))return l}}catch(e){r=!0,o=e}finally{try{!a&&s.return&&s.return()}finally{if(r)throw o}}return null},getContentByFileids:function(e,t){var a=this;a.fileItems=[],e?(a.$Spin.show({render:function(e){return e("div",[e("Icon",{class:"demo-spin-icon-load",props:{type:"ios-loading",size:18}}),e("div","加载中")])}}),a.commonUtil.ajaxGetUtil("/file/searchFileInfoByIds/"+e,{},function(e){if(a.$Spin.hide(),1===e.code){var r=e.data;if(t){var o=a.findData(r,"pdf");null===o&&a.$Message.error("暂无上传pdf文件可以预览!"),a.onPreview(o.id,o.name)}else{var n=a.findData(r,"doc");null===n&&a.$Message.error("暂无上传doc文件可以下载!"),a.downloadFile(n.id,n.name)}}else a.$Message.error(e.msg)},function(e){a.$Message.error("网络连接错误"),a.$Spin.hide()},a)):a.$Message.error("暂无文件上传")},savePdf:function(e,t){var a=new Blob([t]),r=document.createElement("a");r.href=window.URL.createObjectURL(a),r.download=e,document.body.appendChild(r);var o=document.createEvent("MouseEvents");o.initEvent("click",!1,!1),r.dispatchEvent(o),document.body.removeChild(r)},getFormList:function(){var e=this;e.$Spin.show({render:function(e){return e("div",[e("Icon",{class:"demo-spin-icon-load",props:{type:"ios-loading",size:18}}),e("div","加载中")])}}),e.commonUtil.ajaxPostUtil("/form/searchForm/list",e.searchData,function(t){if(e.$Spin.hide(),1===t.code){var a=t.data,r=e.typeList,o=!0,n=!1,s=void 0;try{for(var l,c=i()(a.formList);!(o=(l=c.next()).done);o=!0){var m=l.value;m.formTypeName=r[m.formType]?r[m.formType].label:""}}catch(e){n=!0,s=e}finally{try{!o&&c.return&&c.return()}finally{if(n)throw s}}e.formList=a.formList}else e.$Message.error(t.msg)},function(t){e.$Message.error("网络连接错误"),e.$Spin.hide()},e),e.commonUtil.getAuditCountApi(e),e.currentRow={}},getCapitalList:function(){var e=this;e.$Spin.show(),e.commonUtil.ajaxPostUtil("/capital/searchCapital/list",{capitalName:""},function(t){if(e.$Spin.hide(),1===t.code){var a=t.data;e.capitalList=a.capitalList}else e.$Message.error(t.msg)},function(t){e.$Message.error("网络连接错误"),e.$Spin.hide()},e)},showInfo:function(e){var t=o()({},e);this.isDisabled=!0,this.showData(t)},showData:function(e){var t=this;this.form=e,this.$nextTick(function(){t.$refs.uploadFile.getFileItems()}),this.popUp=!0},selectTemplate:function(e){var t=parseInt(e.replace(/[^0-9]/gi,""));this.formTitle=this.typeList[t].name,this.searchData.formType=t,this.getFormList()}}},l={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("Breadcrumb",{staticClass:"breadcrumb"},[r("BreadcrumbItem",[r("Icon",{attrs:{type:"ios-home-outline"}}),e._v("表单模板\n    ")],1),e._v(" "),r("BreadcrumbItem",{staticClass:"curBreadcrumb"},[r("Icon",{attrs:{type:"logo-buffer"}}),e._v(" 表单模板\n    ")],1),e._v(" "),r("span",{staticClass:"screenContent"},[r("img",{staticStyle:{width:"11px","margin-right":"8px","margin-left":"10px"},attrs:{src:a("hmnq")}}),e._v("\n      "+e._s(e.curTime))])],1),e._v(" "),r("Col",{staticClass:"modelTable",attrs:{span:"21"}},[r("Content",{staticClass:"content",style:{padding:"14px 24px",minHeight:"220px",background:"#fff"}},[r("Divider",{attrs:{orientation:"left"}},[e._v(e._s(e.formTitle))]),e._v(" "),r("Table",{staticClass:"table",attrs:{columns:e.columns,data:e.formList}})],1)],1),e._v(" "),r("Col",{staticStyle:{"padding-left":"5%"},attrs:{span:"3"}},[r("Anchor",{attrs:{"show-ink":"","offset-top":8},on:{"on-select":e.selectTemplate}},e._l(e.typeList,function(e,t){return r("AnchorLink",{key:t,attrs:{id:"link"+t,href:"#link"+t,title:e.name}})}),1)],1),e._v(" "),r("Modal",{staticClass:"selStyle specialWidth",attrs:{"mask-closable":!1},model:{value:e.popUp,callback:function(t){e.popUp=t},expression:"popUp"}},[r("p",{attrs:{slot:"header"},slot:"header"},[r("span",[e._v("表单信息")])]),e._v(" "),r("Tabs",{staticClass:"innerTabStyle",attrs:{value:"name1"}},[r("TabPane",{attrs:{label:"信息设置",name:"name1"}},[r("Form",{attrs:{model:e.form,"label-width":80}},[r("Row",[r("Col",{attrs:{span:"12"}},[r("FormItem",{attrs:{label:"表单类型",prop:"formType"}},[r("Select",{attrs:{disabled:"",transfer:e.transferValue,filterable:"",clearable:"",placeholder:"请选择表单类型"},model:{value:e.form.formType,callback:function(t){e.$set(e.form,"formType",t)},expression:"form.formType"}},e._l(e.typeList,function(t,a){return r("Option",{key:a,attrs:{value:parseInt(a)}},[e._v(e._s(t.label))])}),1)],1)],1),e._v(" "),r("Col",{attrs:{span:"12"}},[r("FormItem",{attrs:{label:"资金类别",prop:"capitalId"}},[r("Select",{attrs:{disabled:"",transfer:e.transferValue,clearable:"",filterable:"",placeholder:"请选择资金类别"},model:{value:e.form.capitalId,callback:function(t){e.$set(e.form,"capitalId",t)},expression:"form.capitalId"}},e._l(e.capitalList,function(t){return r("Option",{key:t.capitalId,attrs:{value:t.capitalId}},[e._v(e._s(t.capitalName))])}),1)],1)],1)],1),e._v(" "),r("Col",{attrs:{span:"12"}},[r("FormItem",{attrs:{label:"表单名称",prop:"formName"}},[r("Input",{attrs:{disabled:"",placeholder:"请填写表单名称"},model:{value:e.form.formName,callback:function(t){e.$set(e.form,"formName",t)},expression:"form.formName"}})],1)],1),e._v(" "),r("Col",{attrs:{span:"12"}},[r("FormItem",{attrs:{label:"表单来源",prop:"formSource"}},[r("Input",{attrs:{disabled:"",placeholder:"请填写表单来源"},model:{value:e.form.formSource,callback:function(t){e.$set(e.form,"formSource",t)},expression:"form.formSource"}})],1)],1),e._v(" "),r("Col",{attrs:{span:"24"}},[r("FormItem",{attrs:{label:"使用说明"}},[r("Input",{attrs:{disabled:"",type:"textarea",autosize:{minRows:1,maxRows:5},placeholder:"请填写使用说明"},model:{value:e.form.formRemark,callback:function(t){e.$set(e.form,"formRemark",t)},expression:"form.formRemark"}})],1)],1)],1)],1),e._v(" "),r("TabPane",{attrs:{label:"附件",name:"name2"}},[r("uploadFile",{ref:"uploadFile",attrs:{"is-disabled":"",form:e.form,"is-pdf":!1}})],1)],1),e._v(" "),r("p",{staticStyle:{"text-align":"left"},attrs:{slot:"footer"},slot:"footer"},[r("Button",{attrs:{icon:"md-print"}},[e._v("\n        打印\n      ")]),e._v(" "),r("Button",{attrs:{icon:"md-exit"}},[e._v("\n        导出\n      ")])],1)],1)],1)},staticRenderFns:[]},c=a("VU/8")(s,l,!1,null,null,null);t.default=c.exports}});
//# sourceMappingURL=41.9c2602ebe3c434057429.js.map