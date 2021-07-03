import{C as e,e as t,B as l}from"./vendor.e0acae8b.js";import{M as a,W as m,b as n,S as r,g as s}from"./index.00d1a385.js";import{l as c}from"./listData.5ce8b0a7.js";import{R as o}from"./ResponsePagination.6fd5083c.js";import{F as i}from"./index.539b5aaf.js";import{g as d}from"./getResponseColumn.d04dec0f.js";import{D as E,a as p}from"./index.bdbb7cc0.js";import{R as u}from"./index.7be30bdd.js";var b="_TextList_bod7d_1",g="_TextListTitle_bod7d_10";const f=({title:m,desc:n,tags:r,infos:s,actions:c})=>e.createElement(a,null,(a=>e.createElement("div",{className:t(b,{__small:a.isXS()})},e.createElement("div",{className:g},m),(null==r?void 0:r.length)&&e.createElement("div",null,r.map(((t,a)=>e.createElement(l,{key:a,size:"mini",outline:!0,color:"primary"},t)))),e.createElement("div",{className:"ellipsis-2"},n),s&&e.createElement("div",null,s),c&&e.createElement("div",null,c))));export default()=>{function t(t){return e.createElement(i,{onReset:()=>console.log("reset"),onFinish:e=>console.log(e),column:d(t)},e.createElement(i.Item,{label:"关键词",name:"keyword"},e.createElement(n,{placeholder:"输入关键词搜索"})),e.createElement(i.Item,{label:"类别",name:"type"},e.createElement(r,{multiple:!0,showTag:!1,options:[{label:"🍉 水果",value:1},{label:"🍆 蔬菜",value:2},{label:"🌮 熟食",value:3},{label:"🥤 饮品",value:4}],placeholder:"请选择操作员查询"})),e.createElement(i.Item,{label:"入库时间",name:"date"},e.createElement(E,{placeholder:"选择入库期/保质期查询",type:p.DATE,range:!0})),e.createElement(i.Item,{label:"发布者",name:"publisher"},e.createElement(n,{placeholder:"输入发布者姓名查询"})),e.createElement(i.Item,{label:"是否审核",name:"is_audit"},e.createElement(u,{name:"like",options:[{label:"是",value:1},{label:"否",value:2}]})),e.createElement(i.Actions,null,e.createElement("div",{className:"tr"},e.createElement(l,{type:"reset"},"重置"),e.createElement(l,{type:"submit",color:"primary"},"查询"))))}return e.createElement(a,null,(a=>e.createElement(m,{topBar:t(a),footer:e.createElement(o,{total:40,defaultPage:1,jumper:!0})},c.map(((t,a)=>e.createElement(f,{key:a,title:t.title,desc:t.desc,tags:t.tags,infos:e.createElement(e.Fragment,null,e.createElement("a",null,e.createElement("img",{style:{height:30,width:30},className:"circle-img mr-8",src:s,alt:"logo"}),t.user.name),e.createElement("span",{className:"color-second ml-12"},"录入于: 2021-04-01")),actions:e.createElement("div",null,e.createElement(l,{size:"small",text:!0},"✒编辑"),e.createElement(l,{size:"small",text:!0},"🗑删除"),e.createElement(l,{size:"small",text:!0},"🔒锁定"))}))))))};