webpackJsonp([15],{BbxU:function(e,t){},dyWK:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n={name:"SelfTestManage",components:{Crumbs:a("QeYY").a},data:function(){return{isSlectRow:!1,isScreen:!1,showTitle:!1,screen:{contractType:"",dataRange:"",partyUnit:""},tableContent:[{age:1}],selTypeMod:!1,isDisabled:!1,transferValue:!0,formValidateType:{position:"",crop:"",remain:"",recovery:"",person:"",beizhu:""},ruleValidateType:{position:[{required:!0,message:"请填写取样位置",trigger:"blur"}],crop:[{required:!0,message:"请填写作物",trigger:"blur"}],remain:[{required:!0,message:"请填写残留率",trigger:"blur"}],recovery:[{required:!0,message:"请填写回收率",trigger:"blur"}],person:[{required:!0,message:"请填写责任人",trigger:"blur"}]}}},computed:{columns:function(){return[{type:"index",title:"序号",width:60,align:"center",fixed:"left"},{title:"取样位置",key:"age"},{title:"作物",key:"age"},{title:"残留率",key:"age"},{title:"回收率",key:"age"},{title:"责任人",key:"age"},{title:"审核状态",key:"age",fixed:"right",align:"center",width:"120"}]}},methods:{isShowScreen:function(e){this.isScreen=e},handleScreen:function(){},handleAdd:function(){this.isDisabled=!1,this.selTypeMod=!0},handleModify:function(){},handlePrint:function(){},handleExport:function(){},selectRow:function(e,t){this.isSlectRow=!0},handleCancel:function(e){this.$refs[e].resetFields(),this.selTypeMod=!1},handleConfirm:function(e){this.$refs[e].validate(function(e){})}}},r={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"self-test-manage"},[a("Crumbs",{attrs:{"parent-manage":"工作开展","children-manage":"自验管理"},on:{isShowScreen:e.isShowScreen}}),e._v(" "),e.isScreen?a("Content",{staticClass:"content screenStyle",style:{padding:"24px",background:"#fff",marginBottom:"10px"}},[a("Form",{attrs:{model:e.screen,"label-width":62}},[a("Row",{attrs:{type:"flex",justify:"space-between"}},[a("Col",{attrs:{span:"7"}},[a("FormItem",{attrs:{label:"合同类别",width:"100%"}},[a("Select",{attrs:{filterable:""},model:{value:e.screen.contractType,callback:function(t){e.$set(e.screen,"contractType",t)},expression:"screen.contractType"}},[a("Option",{attrs:{value:"beijing"}},[e._v("New York")]),e._v(" "),a("Option",{attrs:{value:"shanghai"}},[e._v("London")]),e._v(" "),a("Option",{attrs:{value:"shenzhen"}},[e._v("Sydney")])],1)],1)],1),e._v(" "),a("Col",{attrs:{span:"7"}},[a("FormItem",{attrs:{label:"日期范围"}},[a("DatePicker",{staticStyle:{width:"100%"},attrs:{type:"daterange",placement:"bottom-end",placeholder:"Select date"},model:{value:e.screen.dataRange,callback:function(t){e.$set(e.screen,"dataRange",t)},expression:"screen.dataRange"}})],1)],1),e._v(" "),a("Col",{attrs:{span:"7"}},[a("FormItem",{attrs:{label:"乙方单位",width:"100%"}},[a("Select",{attrs:{filterable:""},model:{value:e.screen.partyUnit,callback:function(t){e.$set(e.screen,"partyUnit",t)},expression:"screen.partyUnit"}},[a("Option",{attrs:{value:"beijing"}},[e._v("New York")]),e._v(" "),a("Option",{attrs:{value:"shanghai"}},[e._v("London")]),e._v(" "),a("Option",{attrs:{value:"shenzhen"}},[e._v("Sydney")])],1)],1)],1)],1),e._v(" "),a("Row",{staticStyle:{"margin-top":"15px"},attrs:{type:"flex",justify:"end"}},[a("Col",{staticStyle:{"text-align":"right","margin-right":"8px"},attrs:{span:"1"}},[a("Button",{attrs:{type:"primary"},on:{click:e.handleScreen}},[e._v("确认")])],1)],1)],1)],1):e._e(),e._v(" "),a("Content",{staticClass:"content",style:{padding:"14px 24px",minHeight:"220px",background:"#fff"}},[a("Button",{attrs:{type:"primary",icon:"md-add"},on:{click:e.handleAdd}},[e._v("\n      新增\n    ")]),e._v(" "),a("Button",{attrs:{type:"primary",icon:"ios-create"},on:{click:e.handleModify}},[e._v("\n      修改\n    ")]),e._v(" "),a("Button",{attrs:{type:"primary",icon:"md-close"}},[e._v("\n      删除\n    ")]),e._v(" "),a("Button",{attrs:{icon:"md-print"},on:{click:e.handlePrint}},[e._v("\n      打印\n    ")]),e._v(" "),a("Button",{attrs:{icon:"md-exit"},on:{click:e.handleExport}},[e._v("\n      导出\n    ")]),e._v(" "),a("Table",{ref:"tableContent",staticClass:"table",staticStyle:{"margin-top":"15px"},attrs:{"highlight-row":"",columns:e.columns,data:e.tableContent},on:{"on-current-change":e.selectRow}}),e._v(" "),a("Page",{staticStyle:{"text-align":"right","margin-top":"15px"},attrs:{total:100,"show-sizer":""}}),e._v(" "),a("Modal",{staticClass:"selStyle specialWidth",attrs:{"mask-closable":!1},model:{value:e.selTypeMod,callback:function(t){e.selTypeMod=t},expression:"selTypeMod"}},[a("p",{attrs:{slot:"header"},slot:"header"},[e.isDisabled||e.showTitle?a("span",[e._v("自验信息")]):a("span",[e._v("请添加自验信息")])]),e._v(" "),a("Tabs",{staticClass:"innerTabStyle",attrs:{animated:!1,value:"name1"}},[a("TabPane",{attrs:{label:"信息设置",name:"name1"}},[a("Form",{ref:"formValidateType",attrs:{model:e.formValidateType,rules:e.ruleValidateType,"label-width":80}},[a("Row",[a("Col",{attrs:{span:"12"}},[a("FormItem",{attrs:{label:"取样位置",prop:"position"}},[a("Input",{attrs:{disabled:e.isDisabled,clearable:"",placeholder:"请填写取样位置"},model:{value:e.formValidateType.position,callback:function(t){e.$set(e.formValidateType,"position","string"==typeof t?t.trim():t)},expression:"formValidateType.position"}})],1)],1),e._v(" "),a("Col",{attrs:{span:"12"}},[a("FormItem",{attrs:{label:"作物",prop:"crop"}},[a("Input",{attrs:{disabled:e.isDisabled,clearable:"",placeholder:"请填写作物"},model:{value:e.formValidateType.crop,callback:function(t){e.$set(e.formValidateType,"crop","string"==typeof t?t.trim():t)},expression:"formValidateType.crop"}})],1)],1)],1),e._v(" "),a("Row",[a("Col",{attrs:{span:"12"}},[a("FormItem",{attrs:{label:"残留率",prop:"remain"}},[a("Input",{attrs:{disabled:e.isDisabled,clearable:"",placeholder:"请填写残留率"},model:{value:e.formValidateType.remain,callback:function(t){e.$set(e.formValidateType,"remain","string"==typeof t?t.trim():t)},expression:"formValidateType.remain"}})],1)],1),e._v(" "),a("Col",{attrs:{span:"12"}},[a("FormItem",{attrs:{label:"回收率",prop:"recovery"}},[a("Input",{attrs:{disabled:e.isDisabled,clearable:"",placeholder:"请填写回收率"},model:{value:e.formValidateType.recovery,callback:function(t){e.$set(e.formValidateType,"recovery","string"==typeof t?t.trim():t)},expression:"formValidateType.recovery"}})],1)],1)],1),e._v(" "),a("Row",[a("Col",{attrs:{span:"12"}},[a("FormItem",{attrs:{label:"责任人",prop:"person"}},[a("Input",{attrs:{disabled:e.isDisabled,clearable:"",placeholder:"请填写责任人"},model:{value:e.formValidateType.person,callback:function(t){e.$set(e.formValidateType,"person","string"==typeof t?t.trim():t)},expression:"formValidateType.person"}})],1)],1)],1),e._v(" "),a("Col",{attrs:{span:"24"}},[a("FormItem",{attrs:{label:"备注",prop:"beizhu"}},[a("Input",{attrs:{disabled:e.isDisabled,type:"textarea",autosize:{minRows:1,maxRows:5},placeholder:"请填写备注"},model:{value:e.formValidateType.beizhu,callback:function(t){e.$set(e.formValidateType,"beizhu","string"==typeof t?t.trim():t)},expression:"formValidateType.beizhu"}})],1)],1)],1)],1),e._v(" "),a("TabPane",{attrs:{label:"附件",name:"name7"}},[e.isDisabled?e._e():a("Icon",{attrs:{size:"16",type:"md-alert"}}),e._v(" "),e.isDisabled?e._e():a("b",[e._v("请上传与设置信息一致的附件或证明性文件，本系统只接受PDF格式文件，请上传前进行确认。")]),e._v(" "),e.isDisabled?a("b",{staticStyle:{"margin-bottom":"10px",display:"inline-block"}},[a("Icon",{attrs:{size:"16",type:"md-alert"}}),e._v("未上传相关附件")],1):a("Upload",{attrs:{action:"//jsonplaceholder.typicode.com/posts/"}},[a("Button",{staticClass:"uploadBtn",staticStyle:{border:"none",color:"#2b85e4"},attrs:{icon:"ios-cloud-upload-outline"}},[e._v("\n              点击此处上传\n            ")])],1)],1)],1),e._v(" "),a("p",{staticStyle:{"text-align":"left"},attrs:{slot:"footer"},slot:"footer"},[a("Button",{attrs:{icon:"md-print"}},[e._v("打印")]),e._v(" "),a("Button",{attrs:{icon:"md-exit"}},[e._v("导出")]),e._v(" "),e.isDisabled?e._e():a("Button",{staticStyle:{float:"right","margin-left":"8px"},on:{click:function(t){return e.handleCancel("formValidateType")}}},[e._v("\n          取消\n        ")]),e._v(" "),e.isDisabled?e._e():a("Button",{staticStyle:{float:"right"},attrs:{type:"primary"},on:{click:function(t){return e.handleConfirm("formValidateType")}}},[e._v("\n          确认\n        ")])],1)],1)],1)],1)},staticRenderFns:[]};var i=a("VU/8")(n,r,!1,function(e){a("BbxU")},"data-v-4c310886",null);t.default=i.exports}});
//# sourceMappingURL=15.cd6ac02617ea847aaec6.js.map