webpackJsonp([14],{hded:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n={name:"SatisfactionManage",components:{Crumbs:a("QeYY").a},data:function(){return{isSlectRow:!1,isScreen:!1,showTitle:!1,screen:{contractType:"",dataRange:"",partyUnit:""},tableContent:[{age:1}],selTypeMod:!1,isDisabled:!1,transferValue:!0,formValidateType:{date:"",person:"",sample:"",satisfy:"",beizhu:""},ruleValidateType:{date:[{type:"Date",required:!0,message:"请填写调查时间",trigger:"change"}],person:[{required:!0,message:"请填写调查责任人",trigger:"blur"}],sample:[{required:!0,message:"请填写样本书",trigger:"blur"}],satisfy:[{required:!0,message:"请填写满意度",trigger:"blur"}]}}},computed:{columns:function(){return[{type:"index",title:"序号",width:60,align:"center",fixed:"left"},{title:"调查时间",key:"age"},{title:"调查责任人",key:"age"},{title:"样本书",key:"age"},{title:"满意度",key:"age"},{title:"审核状态",key:"age",fixed:"right",align:"center",width:"120"}]}},methods:{isShowScreen:function(e){this.isScreen=e},handleScreen:function(){},handleAdd:function(){this.isDisabled=!1,this.selTypeMod=!0},handleModify:function(){},handlePrint:function(){},handleExport:function(){},selectRow:function(e,t){this.isSlectRow=!0},handleCancel:function(e){this.$refs[e].resetFields(),this.selTypeMod=!1},handleConfirm:function(e){this.$refs[e].validate(function(e){})}}},s={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"satisfaction-manage"},[a("Crumbs",{attrs:{"parent-manage":"工作效果","children-manage":"满意度管理"},on:{isShowScreen:e.isShowScreen}}),e._v(" "),e.isScreen?a("Content",{staticClass:"content screenStyle",style:{padding:"24px",background:"#fff",marginBottom:"10px"}},[a("Form",{attrs:{model:e.screen,"label-width":62}},[a("Row",{attrs:{type:"flex",justify:"space-between"}},[a("Col",{attrs:{span:"7"}},[a("FormItem",{attrs:{label:"合同类别",width:"100%"}},[a("Select",{attrs:{filterable:""},model:{value:e.screen.contractType,callback:function(t){e.$set(e.screen,"contractType",t)},expression:"screen.contractType"}},[a("Option",{attrs:{value:"beijing"}},[e._v("New York")]),e._v(" "),a("Option",{attrs:{value:"shanghai"}},[e._v("London")]),e._v(" "),a("Option",{attrs:{value:"shenzhen"}},[e._v("Sydney")])],1)],1)],1),e._v(" "),a("Col",{attrs:{span:"7"}},[a("FormItem",{attrs:{label:"日期范围"}},[a("DatePicker",{staticStyle:{width:"100%"},attrs:{type:"daterange",placement:"bottom-end",placeholder:"Select date"},model:{value:e.screen.dataRange,callback:function(t){e.$set(e.screen,"dataRange",t)},expression:"screen.dataRange"}})],1)],1),e._v(" "),a("Col",{attrs:{span:"7"}},[a("FormItem",{attrs:{label:"乙方单位",width:"100%"}},[a("Select",{attrs:{filterable:""},model:{value:e.screen.partyUnit,callback:function(t){e.$set(e.screen,"partyUnit",t)},expression:"screen.partyUnit"}},[a("Option",{attrs:{value:"beijing"}},[e._v("New York")]),e._v(" "),a("Option",{attrs:{value:"shanghai"}},[e._v("London")]),e._v(" "),a("Option",{attrs:{value:"shenzhen"}},[e._v("Sydney")])],1)],1)],1)],1),e._v(" "),a("Row",{staticStyle:{"margin-top":"15px"},attrs:{type:"flex",justify:"end"}},[a("Col",{staticStyle:{"text-align":"right","margin-right":"8px"},attrs:{span:"1"}},[a("Button",{attrs:{type:"primary"},on:{click:e.handleScreen}},[e._v("确认")])],1)],1)],1)],1):e._e(),e._v(" "),a("Content",{staticClass:"content",style:{padding:"14px 24px",minHeight:"220px",background:"#fff"}},[a("Button",{attrs:{type:"primary",icon:"md-add"},on:{click:e.handleAdd}},[e._v("\n      新增\n    ")]),e._v(" "),a("Button",{attrs:{type:"primary",icon:"ios-create"},on:{click:e.handleModify}},[e._v("\n      修改\n    ")]),e._v(" "),a("Button",{attrs:{type:"primary",icon:"md-close"}},[e._v("\n      删除\n    ")]),e._v(" "),a("Button",{attrs:{icon:"md-print"},on:{click:e.handlePrint}},[e._v("\n      打印\n    ")]),e._v(" "),a("Button",{attrs:{icon:"md-exit"},on:{click:e.handleExport}},[e._v("\n      导出\n    ")]),e._v(" "),a("Table",{ref:"tableContent",staticClass:"table",staticStyle:{"margin-top":"15px"},attrs:{"highlight-row":"",columns:e.columns,data:e.tableContent},on:{"on-current-change":e.selectRow}}),e._v(" "),a("Page",{staticStyle:{"text-align":"right","margin-top":"15px"},attrs:{total:100,"show-sizer":""}}),e._v(" "),a("Modal",{staticClass:"selStyle specialWidth",attrs:{"mask-closable":!1},model:{value:e.selTypeMod,callback:function(t){e.selTypeMod=t},expression:"selTypeMod"}},[a("p",{attrs:{slot:"header"},slot:"header"},[e.isDisabled||e.showTitle?a("span",[e._v("满意度信息")]):a("span",[e._v("请添加满意度信息")])]),e._v(" "),a("Tabs",{staticClass:"innerTabStyle",attrs:{animated:!1,value:"name1"}},[a("TabPane",{attrs:{label:"信息设置",name:"name1"}},[a("Form",{ref:"formValidateType",attrs:{model:e.formValidateType,rules:e.ruleValidateType,"label-width":80}},[a("Row",[a("Col",{attrs:{span:"12"}},[a("FormItem",{attrs:{label:"调查时间",prop:"date"}},[a("DatePicker",{staticStyle:{width:"100%",height:"auto"},attrs:{type:"date",placement:"bottom-start",placeholder:"请填写调查时间",transfer:e.transferValue},model:{value:e.formValidateType.time,callback:function(t){e.$set(e.formValidateType,"time",t)},expression:"formValidateType.time"}})],1)],1),e._v(" "),a("Col",{attrs:{span:"12"}},[a("FormItem",{attrs:{label:"责任人",prop:"person"}},[a("Input",{attrs:{disabled:e.isDisabled,clearable:"",placeholder:"请填写调查责任人"},model:{value:e.formValidateType.person,callback:function(t){e.$set(e.formValidateType,"person","string"==typeof t?t.trim():t)},expression:"formValidateType.person"}})],1)],1)],1),e._v(" "),a("Row",[a("Col",{attrs:{span:"12"}},[a("FormItem",{attrs:{label:"样本书",prop:"sample"}},[a("Input",{attrs:{disabled:e.isDisabled,clearable:"",placeholder:"请填写样本书"},model:{value:e.formValidateType.sample,callback:function(t){e.$set(e.formValidateType,"sample","string"==typeof t?t.trim():t)},expression:"formValidateType.sample"}})],1)],1),e._v(" "),a("Col",{attrs:{span:"12"}},[a("FormItem",{attrs:{label:"满意度",prop:"satisfy"}},[a("Input",{attrs:{disabled:e.isDisabled,clearable:"",placeholder:"请填写满意度"},model:{value:e.formValidateType.satisfy,callback:function(t){e.$set(e.formValidateType,"satisfy","string"==typeof t?t.trim():t)},expression:"formValidateType.satisfy"}})],1)],1)],1),e._v(" "),a("Col",{attrs:{span:"24"}},[a("FormItem",{attrs:{label:"备注",prop:"beizhu"}},[a("Input",{attrs:{disabled:e.isDisabled,type:"textarea",autosize:{minRows:1,maxRows:5},placeholder:"请填写备注"},model:{value:e.formValidateType.beizhu,callback:function(t){e.$set(e.formValidateType,"beizhu","string"==typeof t?t.trim():t)},expression:"formValidateType.beizhu"}})],1)],1)],1)],1),e._v(" "),a("TabPane",{attrs:{label:"附件",name:"name7"}},[e.isDisabled?e._e():a("Icon",{attrs:{size:"16",type:"md-alert"}}),e._v(" "),e.isDisabled?e._e():a("b",[e._v("请上传与设置信息一致的附件或证明性文件，本系统只接受PDF格式文件，请上传前进行确认。")]),e._v(" "),e.isDisabled?a("b",{staticStyle:{"margin-bottom":"10px",display:"inline-block"}},[a("Icon",{attrs:{size:"16",type:"md-alert"}}),e._v("未上传相关附件")],1):a("Upload",{attrs:{action:"//jsonplaceholder.typicode.com/posts/"}},[a("Button",{staticClass:"uploadBtn",staticStyle:{border:"none",color:"#2b85e4"},attrs:{icon:"ios-cloud-upload-outline"}},[e._v("\n              点击此处上传\n            ")])],1)],1)],1),e._v(" "),a("p",{staticStyle:{"text-align":"left"},attrs:{slot:"footer"},slot:"footer"},[a("Button",{attrs:{icon:"md-print"}},[e._v("打印")]),e._v(" "),a("Button",{attrs:{icon:"md-exit"}},[e._v("导出")]),e._v(" "),e.isDisabled?e._e():a("Button",{staticStyle:{float:"right","margin-left":"8px"},on:{click:function(t){return e.handleCancel("formValidateType")}}},[e._v("\n          取消\n        ")]),e._v(" "),e.isDisabled?e._e():a("Button",{staticStyle:{float:"right"},attrs:{type:"primary"},on:{click:function(t){return e.handleConfirm("formValidateType")}}},[e._v("\n          确认\n        ")])],1)],1)],1)],1)},staticRenderFns:[]};var i=a("VU/8")(n,s,!1,function(e){a("i1tD")},"data-v-52f6a4e4",null);t.default=i.exports},i1tD:function(e,t){}});
//# sourceMappingURL=14.fadc45f61541ebc1098d.js.map