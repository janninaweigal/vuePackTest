webpackJsonp([13],{asEI:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n={name:"Massage",data:function(){var t=this;return{transferValue:!0,formValidateType:{name:"",quality:"",remark:""},ruleValidateType:{name:[{required:!0,message:"请填写机构名称",trigger:"blur"}],quality:[{required:!0,message:"请选择机构性质",trigger:"change"}]},screen:{yW:"",zG:"",zJ:""},curTime:"",showContact:!1,selTypeMod:!1,cityList:[{value:"New York",label:"New York"},{value:"London",label:"London"},{value:"Sydney",label:"Sydney"},{value:"Ottawa",label:"Ottawa"},{value:"Paris",label:"Paris"},{value:"Canberra",label:"Canberra"}],checkText:"提交审核",columns:[{title:"Action",className:"imgStyle",key:"action",width:20,render:function(t,e){return t("div",[t("Icon",{props:{type:"ios-document",color:"#2D8CF0"},style:{fontSize:"14px"},on:{click:function(){console.log(111)}}})])}},{className:"noPaddingLeft blueCol",title:"",key:"name",width:550,align:"left",render:function(e,a){return e("div",[e("Button",{props:{type:"text",size:"small",color:"#2D8CF0"},on:{click:function(){t.showInfo()}}},"关于天津市农药包装废弃物回收处理工作验收通知")])}},{title:"发布机构",key:"add"},{className:"noPaddingRight",title:"Action",key:"action",width:60,render:function(t,e){return t("div",[t("Icon",{props:{type:"ios-download-outline"},style:{fontSize:"18px",color:"#559DF9"},on:{click:function(){console.log(111)}}})])}}],data:[{add:"天津市农业农村委员会",age:"竣工验收证明书",img:"0"},{name:"Jim Green",age:"工程质量保修书",img:"0"},{name:"Joe Black",age:"竣工验收证明书",img:"0"},{name:"Jon Snow",age:"工程质量保修书",img:"0"}]}},mounted:function(){var t=(new Date).toLocaleString("chinese",{hour12:!1});this.curTime=t.substring(0,15)},methods:{submitType:function(t){this.$refs[t].validate(function(t){})},resetType:function(t){this.$refs[t].resetFields(),this.selTypeMod=!1},addInnerData:function(){this.innerData.push({name:"新加的",age:18,birthday:"919526400000",address:"北京市朝阳区芍药居"})},handleEdit:function(t,e){this.editName=t.name,this.editAge=t.age,this.editAddress=t.address,this.editfenxiang=t.address,this.editBirthday=t.birthday,this.editIndex=e},handleSave:function(t){this.data[t].name=this.editName,this.data[t].age=this.editAge,this.data[t].birthday=this.editBirthday,this.data[t].address=this.editAddress,this.data[t].fenXiang=this.editfenxiang,this.editIndex=-1},getBirthday:function(t){var e=new Date(parseInt(t));return e.getFullYear()+"-"+(e.getMonth()+1)+"-"+e.getDate()},ok:function(){},cancel:function(){},showInfo:function(){this.selTypeMod=!0},showCheck:function(){var t=this;this.checkText="正在审核",this.$Modal.confirm({title:"是否确认提交审核",content:"",onOk:function(){t.$Message.info("Clicked ok")},onCancel:function(){t.$Message.info("Clicked cancel")}})}}},i={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("Breadcrumb",{staticClass:"breadcrumb"},[n("BreadcrumbItem",[n("Icon",{attrs:{type:"ios-home-outline"}}),t._v("信息通知\n    ")],1),t._v(" "),n("BreadcrumbItem",{staticClass:"curBreadcrumb"},[n("Icon",{attrs:{type:"logo-buffer"}}),t._v(" 信息通知\n    ")],1),t._v(" "),n("span",{staticClass:"screenContent"},[n("img",{staticStyle:{width:"11px","margin-right":"8px","margin-left":"10px"},attrs:{src:a("hmnq")}}),t._v("\n      "+t._s(t.curTime))])],1),t._v(" "),n("Col",{staticClass:"modelTable",attrs:{span:"21"}},[n("Content",{staticClass:"content",style:{padding:"14px 24px",minHeight:"220px",background:"#fff"}},[n("Divider",{attrs:{orientation:"left"}},[t._v("\n      2019.03.10\n    ")]),t._v(" "),n("Table",{ref:"checkTable",staticClass:"table",attrs:{id:"model1",columns:t.columns,data:t.data}})],1)],1),t._v(" "),n("Col",{staticStyle:{"padding-left":"4.8%"},attrs:{span:"3"}},[n("Anchor",{attrs:{"show-ink":""}},[n("AnchorLink",{attrs:{href:"#model1",title:"2019.03.10"}}),t._v(" "),n("AnchorLink",{attrs:{href:"#model2",title:"2019.03.22"}})],1)],1),t._v(" "),n("Modal",{staticClass:"selStyle specialWidth",attrs:{"mask-closable":!1},model:{value:t.selTypeMod,callback:function(e){t.selTypeMod=e},expression:"selTypeMod"}},[n("p",{attrs:{slot:"header"},slot:"header"},[n("span",[t._v("请添加表单信息")])]),t._v(" "),n("Tabs",{staticClass:"innerTabStyle",attrs:{value:"name1"}},[n("TabPane",{attrs:{label:"信息设置",name:"name1"}},[n("Form",{ref:"formValidateType",attrs:{model:t.formValidateType,rules:t.ruleValidateType,"label-width":80}},[n("Row",[n("Col",{attrs:{span:"11"}},[n("FormItem",{attrs:{label:"表单类型",prop:"name"}},[n("Select",{attrs:{transfer:t.transferValue,filterable:"",placeholder:"请选择表单类型"},model:{value:t.formValidateType.quality,callback:function(e){t.$set(t.formValidateType,"quality",e)},expression:"formValidateType.quality"}},[n("Option",{attrs:{value:"0"}},[t._v("\n                  申报类模板\n                ")]),t._v(" "),n("Option",{attrs:{value:"1"}},[t._v("\n                  检查类模板\n                ")]),t._v(" "),n("Option",{attrs:{value:"2"}},[t._v("\n                  验收类模板\n                ")])],1)],1)],1),t._v(" "),n("Col",{attrs:{span:"11",offset:"2"}},[n("FormItem",{attrs:{label:"资金类别",prop:"quality"}},[n("Select",{attrs:{transfer:t.transferValue,filterable:"",placeholder:"请选择机构性质"},model:{value:t.formValidateType.quality,callback:function(e){t.$set(t.formValidateType,"quality",e)},expression:"formValidateType.quality"}},[n("Option",{attrs:{value:"0"}},[t._v("\n                  政府机关\n                ")]),t._v(" "),n("Option",{attrs:{value:"1"}},[t._v("\n                  事业法人\n                ")]),t._v(" "),n("Option",{attrs:{value:"2"}},[t._v("\n                  合作组织\n                ")]),t._v(" "),n("Option",{attrs:{value:"3"}},[t._v("\n                  企业法人\n                ")])],1)],1)],1)],1),t._v(" "),n("Col",{attrs:{span:"24"}},[n("FormItem",{attrs:{label:"表单名称",prop:"quality"}},[n("Input",{attrs:{placeholder:"请填写表单名称"},model:{value:t.formValidateType.remark,callback:function(e){t.$set(t.formValidateType,"remark",e)},expression:"formValidateType.remark"}})],1)],1),t._v(" "),n("Col",{attrs:{span:"24"}},[n("FormItem",{attrs:{label:"使用说明"}},[n("Input",{attrs:{type:"textarea",autosize:{minRows:1,maxRows:5},placeholder:"请填写使用说明"},model:{value:t.formValidateType.remark,callback:function(e){t.$set(t.formValidateType,"remark",e)},expression:"formValidateType.remark"}})],1)],1)],1)],1),t._v(" "),n("TabPane",{attrs:{label:"PDF附件",name:"name7"}},[n("Icon",{attrs:{size:"16",type:"md-alert"}}),t._v(" "),n("b",[t._v("请上传与设置信息一致的附件或证明性文件，本系统只接受PDF格式文件，请上传前进行确认。")]),t._v(" "),n("Upload",{attrs:{action:"//jsonplaceholder.typicode.com/posts/"}},[n("span",[t._v("点击此处上传")])])],1),t._v(" "),n("TabPane",{attrs:{label:"WORD附件",name:"name8"}},[n("Icon",{attrs:{size:"16",type:"md-alert"}}),t._v(" "),n("b",[t._v("请上传与设置信息一致的附件或证明性文件，本系统只接受WORD格式文件，请上传前进行确认。")]),t._v(" "),n("Upload",{attrs:{action:"//jsonplaceholder.typicode.com/posts/"}},[n("span",[t._v("点击此处上传")])])],1)],1),t._v(" "),n("p",{attrs:{slot:"footer"},slot:"footer"},[n("Button",{staticStyle:{float:"left"},attrs:{icon:"md-print"}},[t._v("\n        打印\n      ")]),t._v(" "),n("Button",{staticStyle:{float:"left"},attrs:{icon:"md-exit"}},[t._v("\n        导出\n      ")]),t._v(" "),n("Button",{attrs:{type:"primary"},on:{click:function(e){return t.submitType("formValidateType")}}},[t._v("\n        确认\n      ")]),t._v(" "),n("Button",{staticStyle:{"margin-left":"8px"},on:{click:function(e){return t.resetType("formValidateType")}}},[t._v("\n        取消\n      ")])],1)],1)],1)},staticRenderFns:[]};var s=a("VU/8")(n,i,!1,function(t){a("ppsm")},null,null);e.default=s.exports},ppsm:function(t,e){}});
//# sourceMappingURL=13.93a737883803670b0784.js.map