webpackJsonp([3],{KODo:function(t,e,a){"use strict";var n=a("cnR4"),r=a("P0nn"),i=a("J8Iu"),s={name:"AuditReport",components:{uploadFile:i.a},props:{searchData:{type:Object,default:function(){}}},data:function(){return{form:{reportName:"",auditOrgName:"",reportAuditTime:"",auditResult:""},popUp:!1}},methods:{search:function(){var t=this,e=this;e.$Spin.show({render:function(t){return t("div",[t("Icon",{class:"demo-spin-icon-load",props:{type:"ios-loading",size:18}}),t("div","加载中")])}}),e.commonUtil.ajaxGetUtil("/auditReport/searchAuditReport/"+e.searchData.reportId,{},function(a){if(e.$Spin.hide(),1===a.code){var n=a.data;n&&(e.form=n,e.form.reportAuditTime=e.$moment(e.form.reportAuditTime).format("YYYY年MM月DD日 HH:mm:ss"),e.form.fileids=n.reportFileids),t.popUp=!0}else e.$Message.error(a.msg)},function(t){e.$Message.error("网络连接错误"),e.$Spin.hide()},e)}}},o={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("Modal",{staticClass:"selStyle specialWidth",attrs:{"mask-closable":!1},model:{value:t.popUp,callback:function(e){t.popUp=e},expression:"popUp"}},[a("p",{attrs:{slot:"header"},slot:"header"},[t._v("\n      审计报告\n    ")]),t._v(" "),a("Tabs",{staticClass:"innerTabStyle",attrs:{animated:!1,value:"name1"}},[a("TabPane",{attrs:{label:"信息设置",name:"name1"}},[a("Form",{ref:"form",attrs:{model:t.form,"label-width":80}},[a("Row",[a("Col",{attrs:{span:"11"}},[a("FormItem",{attrs:{label:"报告名称"}},[a("Input",{attrs:{disabled:""},model:{value:t.form.reportName,callback:function(e){t.$set(t.form,"reportName",e)},expression:"form.reportName"}})],1)],1),t._v(" "),a("Col",{attrs:{span:"11",offset:"2"}},[a("FormItem",{attrs:{label:"审计机构"}},[a("Input",{attrs:{disabled:""},model:{value:t.form.auditOrgName,callback:function(e){t.$set(t.form,"auditOrgName",e)},expression:"form.auditOrgName"}})],1)],1)],1),t._v(" "),a("Row",[a("Col",{attrs:{span:"11"}},[a("FormItem",{attrs:{label:"审计时间"}},[a("DatePicker",{staticStyle:{width:"100%"},attrs:{type:"datetime",format:"yyyy-MM-dd HH:mm",transfer:!0,disabled:""},model:{value:t.form.reportAuditTime,callback:function(e){t.$set(t.form,"reportAuditTime",e)},expression:"form.reportAuditTime"}})],1)],1),t._v(" "),a("Col",{attrs:{span:"11",offset:"2"}},[a("FormItem",{attrs:{label:"审计结果"}},[a("Input",{attrs:{disabled:""},model:{value:t.form.auditResult,callback:function(e){t.$set(t.form,"auditResult",e)},expression:"form.auditResult"}})],1)],1)],1)],1)],1),t._v(" "),a("TabPane",{attrs:{label:"附件",name:"name2"}},[a("uploadFile",{ref:"uploadFile",attrs:{"is-disabled":"",form:t.form}})],1)],1),t._v(" "),a("p",{staticStyle:{"text-align":"left"},attrs:{slot:"footer"},slot:"footer"},[a("Button",{attrs:{icon:"md-print"}},[t._v("打印")]),t._v(" "),a("Button",{attrs:{icon:"md-exit"}},[t._v("导出")])],1)],1)],1)},staticRenderFns:[]},l=a("VU/8")(s,o,!1,null,null,null).exports,c=a("BO1k"),d=a.n(c),m={name:"Archive",components:{uploadFile:i.a},props:{searchData:{type:Object,default:function(){}}},data:function(){return{form:{anjuan_timin:"",juan_name:"",fileTitle:"",name:"",remark:""},isPopUp:!1,menuList:sessionStorage.getItem("menuList")?JSON.parse(sessionStorage.getItem("menuList")):[],volumeList:[],titleList:[]}},mounted:function(){this.getSelectList()},methods:{getSelectList:function(){var t=this.menuList,e=[],a=[],n=!0,r=!1,i=void 0;try{for(var s,o=d()(t);!(n=(s=o.next()).done);n=!0){var l=s.value;if(1===l.isVolumeName){var c=l.menuModelList;l.adminMenuName=l.adminMenuName.replace(/管理/g,"文件"),e.push(l),c.length>0&&a.push.apply(a,c)}}}catch(t){r=!0,i=t}finally{try{!n&&o.return&&o.return()}finally{if(r)throw i}}this.volumeList=e,this.titleList=a},search:function(){var t=this;t.$Spin.show({render:function(t){return t("div",[t("Icon",{class:"demo-spin-icon-load",props:{type:"ios-loading",size:18}}),t("div","加载中")])}}),t.commonUtil.ajaxGetUtil("/archives/searchArchives/"+t.searchData.id,{},function(e){t.$Spin.hide(),t.isPopUp=!0,1===e.code?(t.form=e.data,t.$nextTick(function(){t.$refs.uploadFile.getFileItems()})):t.$Message.error(e.msg)},function(e){t.$Message.error("网络连接错误"),t.$Spin.hide()},t)}}},u={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("Modal",{staticClass:"selStyle specialWidth",attrs:{"mask-closable":!1},model:{value:t.isPopUp,callback:function(e){t.isPopUp=e},expression:"isPopUp"}},[a("p",{attrs:{slot:"header"},slot:"header"},[t._v("\n      档案信息\n    ")]),t._v(" "),a("Tabs",{staticClass:"innerTabStyle",attrs:{animated:!1,value:"name1"}},[a("TabPane",{attrs:{label:"信息设置",name:"name1"}},[a("Form",{ref:"form",attrs:{model:t.form,"label-width":80}},[a("Row",[a("Col",{attrs:{span:"24"}},[a("FormItem",{attrs:{label:"文件名称"}},[a("Input",{attrs:{disabled:"",clearable:""},model:{value:t.form.name,callback:function(e){t.$set(t.form,"name","string"==typeof e?e.trim():e)},expression:"form.name"}})],1)],1)],1),t._v(" "),a("Row",[a("Col",{attrs:{span:"12"}},[a("FormItem",{attrs:{label:"卷名"}},[a("Select",{attrs:{disabled:"",transfer:"",clearable:""},model:{value:t.form.juan_name,callback:function(e){t.$set(t.form,"juan_name",e)},expression:"form.juan_name"}},t._l(t.volumeList,function(e){return a("Option",{key:e.adminMenuId,attrs:{value:parseInt(e.adminMenuId)}},[t._v(t._s(e.adminMenuName))])}),1)],1)],1),t._v(" "),a("Col",{attrs:{span:"12"}},[a("FormItem",{attrs:{label:"案卷题名"}},[a("Select",{attrs:{disabled:"",transfer:"",clearable:""},model:{value:t.form.anjuan_timin,callback:function(e){t.$set(t.form,"anjuan_timin",e)},expression:"form.anjuan_timin"}},t._l(t.titleList,function(e){return a("Option",{key:e.adminMenuId,attrs:{value:parseInt(e.adminMenuId)}},[t._v(t._s(e.adminMenuName))])}),1)],1)],1)],1),t._v(" "),a("Col",{attrs:{span:"24"}},[a("FormItem",{attrs:{label:"备注"}},[a("Input",{attrs:{disabled:"",type:"textarea",autosize:{minRows:1,maxRows:5}},model:{value:t.form.remark,callback:function(e){t.$set(t.form,"remark","string"==typeof e?e.trim():e)},expression:"form.remark"}})],1)],1)],1)],1),t._v(" "),a("TabPane",{attrs:{label:"附件",name:"name7"}},[a("uploadFile",{ref:"uploadFile",attrs:{"is-disabled":"",form:{fileids:t.form.archivesFileids}}})],1)],1)],1)],1)},staticRenderFns:[]},p=a("VU/8")(m,u,!1,null,null,null).exports,f=a("SuqQ"),h=a("a5i8"),v=a("CyoZ"),b={name:"Contract",components:{constructionModel:f.a,setUpModel:h.a,entrustModel:v.a},props:{contractId:{type:Number,default:null}},data:function(){return{signGist:{1:"比选",2:"招标",3:"其他"},budgetGist:{1:"土地平整、消防池及水系挖土登",2:"规划设计费",3:"勘察费",4:"建设管理费",5:"土地使用费"},contractTypeList:{1:{modal:"constructionModel",name:"建设工程施工合同"},2:{modal:"setUpModel",name:"设备购置合同"},3:{modal:"entrustModel",name:"委托业务合同"}},contractAttr:{1:"新签合同",2:"补充合同"}}},mounted:function(){},methods:{search:function(){var t=this;t.$Spin.show(),t.commonUtil.ajaxGetUtil("/contract/searchContractInfo/"+t.contractId,{},function(e){if(t.$Spin.hide(),1===e.code){var a=e.data;t.selectModal(a.contractType)}else t.$Message.error(e.msg)},function(e){t.$Message.error("网络连接错误"),t.$Spin.hide()},t)},selectModal:function(t){var e=this,a=this.contractTypeList[t].modal;this.$nextTick(function(){e.$refs[a].showModal(t)})}}},g={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("constructionModel",{ref:"constructionModel",attrs:{"contract-id":t.contractId,"sign-gist":t.signGist,"contract-attr":t.contractAttr,"budget-gist":t.budgetGist,"is-disabled":""}}),t._v(" "),a("setUpModel",{ref:"setUpModel",attrs:{"contract-id":t.contractId,"sign-gist":t.signGist,"contract-attr":t.contractAttr,"budget-gist":t.budgetGist,"is-disabled":""}}),t._v(" "),a("entrustModel",{ref:"entrustModel",attrs:{"contract-id":t.contractId,"sign-gist":t.signGist,"contract-attr":t.contractAttr,"budget-gist":t.budgetGist,"is-disabled":""}})],1)},staticRenderFns:[]},y=a("VU/8")(b,g,!1,null,null,null).exports,_={name:"Template",components:{uploadFile:i.a},data:function(){return{popUp:!1,contractList:[],sellList:{0:"建筑工程服务",1:"机械设备购置",2:"其他"},typeList:{0:"普票",1:"专票"},tabName:"name1",form:{contractid:"",partyBName:"",code:"",invoiceType:"",sellType:"",money:null,invoiceTime:"",remark:""},billInfoList:[],columns:[{type:"index",title:"序号",width:60,align:"center",fixed:"left"},{title:"货物或应税劳务,服务名称",key:"name"},{title:"规格型号",key:"model"},{title:"单位",key:"danWei"},{title:"数量",key:"number"},{title:"含税单位",key:"hanShuiDanWei"},{title:"含税金额",key:"hanShuiMoney"}]}},mounted:function(){this.getContractList()},methods:{getContractList:function(){var t=this;t.$Spin.show(),t.commonUtil.ajaxPostUtil("/contract/searchContractList",{},function(e){t.$Spin.hide(),1===e.code?t.contractList=e.data.contractList:t.$Message.error(e.msg)},function(){t.$Message.error("网络连接错误"),t.$Spin.hide()},t)},clearData:function(){this.form={contractid:"",partyBName:"",code:"",invoiceType:"",sellType:"",money:null,invoiceTime:"",remark:""},this.tabName="name1",this.$refs.form.resetFields();var t=this.$refs.uploadFile;t&&t.clearFileItems()},getBillInfoList:function(t){var e=this;e.clearData(),e.$Spin.show({render:function(t){return t("div",[t("Icon",{class:"demo-spin-icon-load",props:{type:"ios-loading",size:18}}),t("div","加载中")])}}),e.commonUtil.ajaxGetUtil("/bill/searchBillInfo/"+t,{},function(t){if(e.$Spin.hide(),1===t.code){var a=t.data;a.invoiceTime=new Date(a.invoiceTime),e.form=a,e.billInfoList=t.data.billList,e.$nextTick(function(){e.$refs.uploadFile.getFileItems(),e.popUp=!0})}else e.$Message.error(t.msg)},function(t){e.$Message.error("网络连接错误"),e.$Spin.hide()},e)}}},$={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("Modal",{staticClass:"selStyle specialWidth",attrs:{"mask-closable":!1},model:{value:t.popUp,callback:function(e){t.popUp=e},expression:"popUp"}},[a("p",{attrs:{slot:"header"},slot:"header"},[t._v("票据信息")]),t._v(" "),a("Tabs",{staticClass:"innerTabStyle",attrs:{animated:!1},model:{value:t.tabName,callback:function(e){t.tabName=e},expression:"tabName"}},[a("TabPane",{attrs:{label:"基本信息",name:"name1"}},[a("Form",{ref:"form",attrs:{model:t.form,"label-width":80}},[a("Row",[a("Col",{attrs:{span:"12"}},[a("FormItem",{attrs:{label:"合同名称",prop:"contractid"}},[a("Select",{attrs:{disabled:"",transfer:"",clearable:""},model:{value:t.form.contractid,callback:function(e){t.$set(t.form,"contractid",e)},expression:"form.contractid"}},t._l(t.contractList,function(e){return a("Option",{key:e.contractId,attrs:{value:parseInt(e.contractId)}},[t._v(t._s(e.contractName))])}),1)],1)],1),t._v(" "),a("Col",{attrs:{span:"12"}},[a("FormItem",{attrs:{label:"乙方名称",prop:"partyBName"}},[a("Input",{attrs:{disabled:""},model:{value:t.form.partyBName,callback:function(e){t.$set(t.form,"partyBName",e)},expression:"form.partyBName"}})],1)],1)],1),t._v(" "),a("Row",[a("Col",{attrs:{span:"12"}},[a("FormItem",{attrs:{label:"发票编号",prop:"code"}},[a("Input",{attrs:{disabled:""},model:{value:t.form.code,callback:function(e){t.$set(t.form,"code",e)},expression:"form.code"}})],1)],1),t._v(" "),a("Col",{attrs:{span:"12"}},[a("FormItem",{attrs:{label:"发票类别",prop:"type"}},[a("Select",{attrs:{disabled:"",transfer:"",filterable:"",clearable:"",placeholder:"请选择发票类别"},model:{value:t.form.type,callback:function(e){t.$set(t.form,"type",e)},expression:"form.type"}},t._l(t.typeList,function(e,n){return a("Option",{key:n,attrs:{value:parseInt(n)}},[t._v(t._s(e))])}),1)],1)],1)],1),t._v(" "),a("Row",[a("Col",{attrs:{span:"12"}},[a("FormItem",{attrs:{label:"销售类别",prop:"sellType"}},[a("Select",{attrs:{disabled:"",transfer:"",filterable:"",clearable:""},model:{value:t.form.sellType,callback:function(e){t.$set(t.form,"sellType",e)},expression:"form.sellType"}},t._l(t.sellList,function(e,n){return a("Option",{key:n,attrs:{value:parseInt(n)}},[t._v(t._s(e))])}),1)],1)],1),t._v(" "),a("Col",{attrs:{span:"12"}},[a("FormItem",{attrs:{label:"发票金额",prop:"money"}},[a("Input",{attrs:{disabled:"",number:""},model:{value:t.form.money,callback:function(e){t.$set(t.form,"money",e)},expression:"form.money"}})],1)],1)],1),t._v(" "),a("Row",[a("Col",{attrs:{span:"24"}},[a("FormItem",{attrs:{label:"开票日期",prop:"invoiceTime"}},[a("DatePicker",{staticStyle:{width:"100%"},attrs:{disabled:"",type:"date",transfer:""},model:{value:t.form.invoiceTime,callback:function(e){t.$set(t.form,"invoiceTime",e)},expression:"form.invoiceTime"}})],1)],1)],1),t._v(" "),a("Row",[a("Col",{attrs:{span:"24"}},[a("FormItem",{attrs:{label:"备注"}},[a("Input",{attrs:{disabled:"",type:"textarea",autosize:{minRows:1,maxRows:5}},model:{value:t.form.remark,callback:function(e){t.$set(t.form,"remark",e)},expression:"form.remark"}})],1)],1)],1)],1)],1),t._v(" "),a("TabPane",{attrs:{label:"发票内容",name:"name8"}},[a("Content",{staticClass:"content",style:{padding:"14px 24px",background:"#fff"}},[a("Table",{attrs:{columns:t.columns,data:t.billInfoList}})],1)],1),t._v(" "),a("TabPane",{attrs:{label:"附件",name:"name7"}},[a("uploadFile",{ref:"uploadFile",attrs:{"is-disabled":"",form:{fileids:t.form.billFileids}}})],1)],1)],1)],1)},staticRenderFns:[]},I=a("VU/8")(_,$,!1,null,null,null).exports,S=a("bLuo"),k=a("iOZI"),T={name:"Account",components:{IncomeModel:S.a,PayModel:k.a},data:function(){return{contractArray:{1:"income",2:"pay"},keMuArray:{1:"在建工程",2:"费用",3:"其他"},jieOrDai:{1:"借",2:"贷"},incomeType:{1:"应收",2:"实收"},payType:{1:"应付",2:"实付"},contractList:[],yiFangList:[]}},created:function(){this.getYiFangInfo(),this.getContractList()},methods:{searchList:function(){},search:function(t){var e=this;e.$Spin.show(),e.commonUtil.ajaxGetUtil("/specialAccount/seatchSpecialAccountById/"+t,{},function(t){if(e.$Spin.hide(),1===t.code){var a=t.data,n=a.shouzhi_type;n?(a.date=new Date(a.date),e.$nextTick(function(){e.$refs[e.contractArray[n]].showModal(a)})):e.$Message.error("获取信息失败")}else e.$Message.error(t.msg)},function(){e.$Message.error("网络连接错误"),e.$Spin.hide()},e)},getYiFangInfo:function(){var t=this;t.$Spin.show(),t.commonUtil.ajaxGetUtil("/contract/searchYiFang",{},function(e){t.$Spin.hide(),1===e.code?t.yiFangList=e.data:t.$Message.error(e.msg)},function(){t.$Message.error("网络连接错误"),t.$Spin.hide()},t)},getContractList:function(){var t=this;t.$Spin.show(),t.commonUtil.ajaxPostUtil("/contract/searchContractList",{},function(e){t.$Spin.hide(),1===e.code?t.contractList=e.data.contractList:t.$Message.error(e.msg)},function(){t.$Message.error("网络连接错误"),t.$Spin.hide()},t)}}},x={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("IncomeModel",{ref:"income",attrs:{"jie-or-dai":t.jieOrDai,"ke-mu-array":t.keMuArray,"is-disabled":"","contract-type":t.incomeType},on:{refreshList:t.searchList}}),t._v(" "),a("PayModel",{ref:"pay",attrs:{"jie-or-dai":t.jieOrDai,"ke-mu-array":t.keMuArray,"is-disabled":"","contract-type":t.payType,"contract-list":t.contractList,"yi-fang-list":t.yiFangList},on:{refreshList:t.searchList}})],1)},staticRenderFns:[]},M=a("VU/8")(T,x,!1,null,null,null).exports,C={name:"Bidding",components:{biddModal:a("VPpl").a},data:function(){return{organizationalForm:{1:"公开",2:"竞争性磋商",3:"竞争性谈判"},billType:{1:"政采",2:"其他"}}},mounted:function(){},methods:{searchList:function(){},search:function(t){var e=this;this.$nextTick(function(){e.$refs.biddModal.showModal(t)})}}},w={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("biddModal",{ref:"biddModal",attrs:{"is-disabled":"","organizational-form":this.organizationalForm,"bill-type":this.billType},on:{refreshList:this.searchList}})],1)},staticRenderFns:[]},L=a("VU/8")(C,w,!1,null,null,null).exports,D={name:"AuditModal",components:{implementPlan:n.a,investSummary:r.a,auditReport:l,archive:p,contract:y,billInfo:I,account:M,biddModal:L},data:function(){return{searchData:{auditBatchType:null,relationId:null,adminId:null,auditStatus:null,auditBatchId:null}}},methods:{showModal:function(t){var e=this,a=t.auditBatchType,n=t.relationId;this.searchData={auditBatchType:a,adminId:t.adminId,auditStatus:t.auditStatus,auditBatchId:t.auditBatchId},1===a?(this.searchData.projectId=n,this.$nextTick(function(){e.$refs.investSummary.search()})):2===a?(this.searchData.isOwnProject=!0,this.searchData.projectId=n,this.$nextTick(function(){e.$refs.implementPlan.search()})):3===a?this.$nextTick(function(){e.$refs.billInfo.getBillInfoList(n)}):4===a?(this.searchData.reportId=n,this.$nextTick(function(){e.$refs.auditReport.search()})):5===a?this.$nextTick(function(){e.$refs.account.search(n)}):6===a?(this.searchData.id=n,this.$nextTick(function(){e.$refs.archive.search()})):7===a?(this.searchData.id=n,this.$nextTick(function(){e.$refs.contract.search()})):8===a&&this.$nextTick(function(){e.$refs.biddModal.search(n)})}}},F={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("implementPlan",{ref:"implementPlan",attrs:{"search-data":t.searchData}}),t._v(" "),a("investSummary",{ref:"investSummary",attrs:{"search-data":t.searchData}}),t._v(" "),a("auditReport",{ref:"auditReport",attrs:{"search-data":t.searchData}}),t._v(" "),a("archive",{ref:"archive",attrs:{"search-data":t.searchData}}),t._v(" "),a("contract",{ref:"contract",attrs:{"contract-id":t.searchData.id}}),t._v(" "),a("billInfo",{ref:"billInfo"}),t._v(" "),a("account",{ref:"account"}),t._v(" "),a("biddModal",{ref:"biddModal"})],1)},staticRenderFns:[]},U=a("VU/8")(D,F,!1,null,null,null);e.a=U.exports},iCwA:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a("woOf"),r=a.n(n),i=a("Q0Ca"),s=a("KODo"),o=a("J8Iu"),l=a("9c+7"),c={name:"NoCheck",components:{AuditModal:s.a,uploadFile:o.a},mixins:[l.a],data:function(){var t=this;return{startTimeOptions:{},endTimeOptions:{},total:0,transferValue:!0,innerData:[],innerDataYu:[],innerDataG:[],innerDataYi:[],innerDataOther:[],innerDataTotal:[],innerColumns:[],innerColumnsYu:[],innerColumnsG:[],innerColumnsYi:[],innerColumnsOther:[],innerColumnsTotal:[],editIndex:-1,checkModel:!1,form:{auditBatchId:null,projectId:null,auditStatus:null,auditMessage:"",fileIds:null},formRules:{auditStatus:[{type:"number",required:!0,message:"请选择审核状态",trigger:"change"}]},searchData:{chendanOrgId:"",projectName:"",submitEndTime:null,submitStartTime:null,orderBy:"audit_batch_createtime",ascending:!1,pageNo:1,pageSize:10,auditStatus:0},isScreen:!1,curTime:"",columns:[{type:"index",title:"序号",width:60,align:"center",fixed:"left"},{title:"提交时间",key:"createTime",render:function(t,e){return t("div",Object(i.dateformat)(e.row.createTime,"YYYY-MM-DD HH:mm:ss"))}},{title:"承担单位",key:"chendanOrg"},{title:"项目名称",key:"projectName"},{title:"位置",key:"auditLocation",render:function(e,a){return e("span",{style:{color:"#2d8cf0",cursor:"pointer"},on:{click:function(){t.showLocationInfo(a.row)}}},a.row.auditLocation)}},{align:"center",title:"审核状态",key:"action",fixed:"right",width:120,render:function(e,a){var n=a.row,r=t.status[n.auditStatus];return e("div",[e("Button",{style:{color:r.color+"!important"},props:{type:"text",size:"small"},on:{click:function(){t.form.auditBatchId=n.auditBatchId,t.checkModel=!0}}},r.name)])}}],data:[],companyList:[],status:{0:{name:"正在审核",color:"blue"},1:{name:"审核通过",color:"green"},2:{name:"审核未通过",color:"red"},3:{name:"未审核",color:"orange"}}}},mounted:function(){this.fetchNoPassList(),this.getCompanyList();var t=(new Date).toLocaleString("chinese",{hour12:!1});this.curTime=t.substring(0,15)},methods:{startTimeChange:function(t){this.searchData.submitStartTime=t,this.endTimeOptions={disabledDate:function(e){var a=t?new Date(t).valueOf():null;return e&&e.valueOf()<a}}},endTimeChange:function(t){this.searchData.submitEndTime=t;var e=t?new Date(t).valueOf()-864e5:null;this.startTimeOptions={disabledDate:function(t){return t&&t.valueOf()>e}}},getCompanyList:function(){var t=this;t.$Spin.show(),t.commonUtil.ajaxPostUtil("/organization/searchOrganization/list",{orgType:"",orgName:""},function(e){t.$Spin.hide(),1===e.code?t.companyList=e.data.orgList:t.$Message.error(e.msg)},function(e){t.$Message.error("网络连接错误"),t.$Spin.hide()},t)},pageNoChange:function(t){this.searchData.pageNo=t,this.fetchNoPassList()},pageSizeChange:function(t){this.searchData.pageSize=t,this.fetchNoPassList()},getNewSearchData:function(){var t=r()({},this.searchData),e=t.submitEndTime,a=t.submitStartTime;return e&&(t.submitEndTime=new Date(e+" 23:59:59").getTime()),a&&(t.submitStartTime=new Date(a+" 00:00:00").getTime()),t},fetchNoPassList:function(){var t=this,e=t.getNewSearchData();t.$Spin.show({render:function(t){return t("div",[t("Icon",{class:"demo-spin-icon-load",props:{type:"ios-loading",size:18}}),t("div","加载中")])}}),t.commonUtil.ajaxPostUtil("/audit/list",e,function(e){if(1===e.code){var a=e.data;t.total=a.totalCount,t.data=a.auditBatchList}else t.$Message.error(e.msg);t.$Spin.hide()},function(e){t.$Message.error("网络连接错误"),t.$Spin.hide()},t),t.commonUtil.getAuditCountApi(t)},showLocationInfo:function(t){var e=this;this.$nextTick(function(){e.$refs.modalList.showModal(t)})},submitCheck:function(t){var e=this,a=e.form;a.fileIds=e.$refs.uploadFile.getFileIds(),e.$refs[t].validate(function(t){t&&(e.$Spin.show({render:function(t){return t("div",[t("Icon",{class:"demo-spin-icon-load",props:{type:"ios-loading",size:18}}),t("div","加载中")])}}),e.commonUtil.ajaxPutUtil("/auditBatch/updateAuditBatch",a,function(t){e.$Spin.hide(),1===t.code?(e.checkModel=!1,e.$Message.success(t.msg),e.fetchNoPassList()):e.$Message.error(t.msg)},function(t){e.$Message.error("网络连接错误"),e.$Spin.hide()},e))})},resetCheck:function(t){this.form={auditStatus:null,auditMessage:""},this.$refs[t].resetFields(),this.checkModel=!1},isShowScreen:function(){this.isScreen=!this.isScreen}}},d={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("Breadcrumb",{staticClass:"breadcrumb"},[n("BreadcrumbItem",[n("Icon",{attrs:{type:"ios-home-outline"}}),t._v("审核管理\n    ")],1),t._v(" "),n("BreadcrumbItem",{staticClass:"curBreadcrumb"},[n("Icon",{attrs:{type:"logo-buffer"}}),t._v(" 未审核信息\n    ")],1),t._v(" "),n("span",{staticClass:"screenContent"},[n("img",{staticStyle:{width:"11px","margin-right":"8px","margin-left":"10px"},attrs:{src:a("hmnq")}}),t._v("\n      "+t._s(t.curTime))]),t._v(" "),n("span",{staticClass:"screenContent"},[n("img",{staticStyle:{width:"10.5px","margin-right":"8px"},attrs:{src:a("0dlO")}}),t._v(" "),n("a",{attrs:{href:"javascript:void(0)"},on:{click:t.isShowScreen}},[t._v("\n        筛选\n        "),n("Icon",{attrs:{type:"ios-arrow-down"}})],1)])],1),t._v(" "),t.isScreen?n("Content",{staticClass:"content isScreen",style:{padding:"24px",background:"#fff",marginBottom:"10px"}},[n("Form",{attrs:{model:t.searchData,"label-width":85}},[n("Row",[n("Col",{attrs:{span:"10"}},[n("FormItem",{attrs:{label:"承担单位"}},[n("Select",{attrs:{filterable:"",clearable:"",transfer:!0,placeholder:"请选择承担单位"},model:{value:t.searchData.chendanOrgId,callback:function(e){t.$set(t.searchData,"chendanOrgId",e)},expression:"searchData.chendanOrgId"}},t._l(t.companyList,function(e){return n("Option",{key:e.orgId,attrs:{value:e.orgId}},[t._v(t._s(e.orgName))])}),1)],1)],1),t._v(" "),n("Col",{attrs:{span:"10",offset:"1"}},[n("FormItem",{attrs:{label:"项目名称"}},[n("Input",{attrs:{placeholder:"请填写项目名称"},model:{value:t.searchData.projectName,callback:function(e){t.$set(t.searchData,"projectName",e)},expression:"searchData.projectName"}})],1)],1)],1),t._v(" "),n("Row",{staticStyle:{"margin-top":"15px"}},[n("Col",{attrs:{span:"10"}},[n("FormItem",{attrs:{label:"提交开始时间"}},[n("DatePicker",{staticStyle:{width:"100%"},attrs:{type:"date",options:t.startTimeOptions,placeholder:"请选择提交开始时间",transfer:"",placement:"bottom-start"},on:{"on-change":t.startTimeChange},model:{value:t.searchData.submitStartTime,callback:function(e){t.$set(t.searchData,"submitStartTime",e)},expression:"searchData.submitStartTime"}})],1)],1),t._v(" "),n("Col",{attrs:{span:"10",offset:"1"}},[n("FormItem",{attrs:{label:"提交结束时间"}},[n("DatePicker",{staticStyle:{width:"100%"},attrs:{type:"date",transfer:"",options:t.endTimeOptions,placeholder:"请选择提交结束时间",placement:"bottom-start"},on:{"on-change":t.endTimeChange},model:{value:t.searchData.submitEndTime,callback:function(e){t.$set(t.searchData,"submitEndTime",e)},expression:"searchData.submitEndTime"}})],1)],1),t._v(" "),n("Col",{staticStyle:{float:"right"},attrs:{span:"1"}},[n("Button",{attrs:{type:"primary"},on:{click:t.fetchNoPassList}},[t._v("确认")])],1)],1)],1)],1):t._e(),t._v(" "),n("Content",{staticClass:"content",style:{padding:"14px 24px",minHeight:"220px",background:"#fff"}},[n("Button",{attrs:{icon:"md-print"},on:{click:function(e){return e.stopPropagation(),t.printContent(7)}}},[t._v("\n      打印\n    ")]),t._v(" "),n("Button",{attrs:{icon:"md-exit"},on:{click:function(e){return t.excelExcel("/audit/exportNotAuditListExcel")}}},[t._v("\n      导出\n    ")]),t._v(" "),n("Table",{ref:"checkTable",staticClass:"table",attrs:{"highlight-row":"",columns:t.columns,data:t.data}}),t._v(" "),n("Page",{staticStyle:{"text-align":"right"},attrs:{"show-sizer":"",transfer:"",total:t.total,current:t.searchData.pageNo,"page-size":t.searchData.pageSize},on:{"on-change":t.pageNoChange,"on-page-size-change":t.pageSizeChange}})],1),t._v(" "),n("Modal",{staticClass:"selStyle",attrs:{"mask-closable":!1,width:"75%"},model:{value:t.checkModel,callback:function(e){t.checkModel=e},expression:"checkModel"}},[n("p",{attrs:{slot:"header"},slot:"header"},[n("span",[t._v("请填写审核信息")])]),t._v(" "),n("Tabs",{staticClass:"innerTabStyle",attrs:{animated:!1,value:"name1"}},[n("TabPane",{attrs:{label:"信息设置",name:"name1"}},[n("Form",{ref:"form",attrs:{model:t.form,rules:t.formRules,"label-width":80}},[n("Col",{attrs:{span:"24"}},[n("FormItem",{attrs:{label:"审核结果",prop:"auditStatus"}},[n("RadioGroup",{model:{value:t.form.auditStatus,callback:function(e){t.$set(t.form,"auditStatus",e)},expression:"form.auditStatus"}},[n("Radio",{attrs:{label:1}},[t._v("通过")]),t._v(" "),n("Radio",{attrs:{label:2}},[t._v("未通过")])],1)],1)],1),t._v(" "),n("Col",{attrs:{span:"24"}},[n("FormItem",{attrs:{label:"审核意见"}},[n("Input",{attrs:{type:"textarea",autosize:{minRows:1,maxRows:5},placeholder:"请填写审核意见"},model:{value:t.form.auditMessage,callback:function(e){t.$set(t.form,"auditMessage","string"==typeof e?e.trim():e)},expression:"form.auditMessage"}})],1)],1)],1)],1),t._v(" "),n("TabPane",{staticClass:"uploadStyle",attrs:{label:"附件",name:"name7"}},[n("uploadFile",{ref:"uploadFile",attrs:{"is-disabled":!1,form:t.form}})],1)],1),t._v(" "),n("p",{attrs:{slot:"footer"},slot:"footer"},[n("Button",{staticStyle:{float:"left"},attrs:{icon:"md-print"}},[t._v("\n        打印\n      ")]),t._v(" "),n("Button",{staticStyle:{float:"left"},attrs:{icon:"md-exit"}},[t._v("\n        导出\n      ")]),t._v(" "),n("Button",{attrs:{type:"primary"},on:{click:function(e){return t.submitCheck("form")}}},[t._v("\n        确认\n      ")]),t._v(" "),n("Button",{staticStyle:{"margin-left":"8px"},on:{click:function(e){return t.resetCheck("form")}}},[t._v("\n        取消\n      ")])],1)],1),t._v(" "),n("AuditModal",{ref:"modalList"})],1)},staticRenderFns:[]},m=a("VU/8")(c,d,!1,null,null,null);e.default=m.exports}});
//# sourceMappingURL=3.4465aaae5613b75fda0f.js.map