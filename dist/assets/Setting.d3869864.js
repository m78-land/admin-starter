import{n as e,C as t,o as a}from"./vendor.e0acae8b.js";import{F as l}from"./index.539b5aaf.js";import{i as m,b as n,C as r,j as o}from"./index.00d1a385.js";import{S as c}from"./SimplifyFormLayout.042caa79.js";import{R as s}from"./index.7be30bdd.js";import"./getResponseColumn.d04dec0f.js";export default()=>{const i=e(m.setState,(e=>a(e,250)));return t.createElement(c,{formProps:{onValuesChange:i,initialValues:m.getState()},footer:null},t.createElement(l.Item,{label:"Logo",name:"logo"},t.createElement(n,null)),t.createElement(l.Item,{label:"后台名称",name:"name",desc:"显示在logo下方的名称"},t.createElement(n,null)),t.createElement(l.Item,{label:"窗口大小",name:"initFull",valuePropName:"checked",desc:"设为全屏时，所有未预设尺寸的窗口一律全屏打开"},t.createElement(r,{type:"switch",beforeLabel:"自动",label:"全屏"})),t.createElement(l.Item,{label:"最大窗口数",name:"maxWindow",desc:"同时打开的最大窗口数量, 可以根据电脑配置适当增减此值"},t.createElement(n,{type:"integer"})),t.createElement(l.Item,{label:"黑暗模式",name:"darkMode",valuePropName:"checked"},t.createElement(r,{type:"switch"})),t.createElement(l.Item,{label:"主题色",name:"color"},t.createElement(n,{type:"color",style:{width:100},allowClear:!1})),t.createElement(l.Item,{label:"次要主题色",name:"subColor"},t.createElement(n,{type:"color",style:{width:100},allowClear:!1})),t.createElement(l.Item,{label:"桌面类型",name:"deskType"},t.createElement(s,{options:[{label:"工作台",value:o.workbench},{label:"桌面",value:o.desk}]})),t.createElement(l.Item,{label:"桌面背景",name:"deskBg"},t.createElement(n,null)),t.createElement(l.Item,{label:"背景透明度",name:"deskOpacity"},t.createElement(n,{type:"integer"})))};
