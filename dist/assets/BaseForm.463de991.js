import{n as e,C as l}from"./vendor.e0acae8b.js";import{F as a}from"./index.539b5aaf.js";import{b as t,S as r,T as m}from"./index.00d1a385.js";import{D as n,a as b}from"./index.bdbb7cc0.js";import{C as o}from"./index.048fe4ae.js";import{S as c}from"./SimplifyFormLayout.042caa79.js";import"./getResponseColumn.d04dec0f.js";export default()=>{const s=e((e=>{console.log(e)}));return l.createElement(c,{onFinish:s},l.createElement(a.Item,{label:"生鲜名称",name:"title",required:!0},l.createElement(t,{placeholder:"请输入生鲜名称"})),l.createElement(a.Item,{label:"生鲜描述",name:"desc",required:!0},l.createElement(t,{textArea:!0,charCount:!0,maxLength:100,placeholder:"请输入生鲜描述"})),l.createElement(a.Item,{label:"日期",name:"date",required:!0},l.createElement(n,{placeholder:"选择入库期/保质期",type:b.DATE,range:!0})),l.createElement(a.Item,{label:"类型",name:"type"},l.createElement(o,{name:"like",options:[{label:"🍉 水果",value:1},{label:"🍆 蔬菜",value:2},{label:"🌮 熟食",value:3},{label:"🥤 饮品",value:4,disabled:!0}]})),l.createElement(a.Item,{label:"操作员",name:"staff"},l.createElement(r,{options:[{label:"李圆圆",value:1},{label:"周星星",value:2},{label:"赵玥玥",value:3},{label:"郑阳阳",value:4}],placeholder:"请选择操作员"})),l.createElement(a.Item,{label:"来源地",name:"source"},l.createElement(m,{style:{width:"100%"},multipleCheckable:!0,dataSource:[{label:"仙女座星云",children:[{label:"TQ356"},{label:"G0127"},{label:"Y6684"},{label:"ZW795"}]},{label:"猎户座星云",children:[{label:"Y1966"},{label:"Z0000"},{label:"U1288"},{label:"II949"}]},{label:"织女座星云",children:[{label:"Y1676"},{label:"Z2686"},{label:"U9692"},{label:"II179"}]}],defaultOpens:["JS","基本对象"]})))};
