import{C as e,e as t,B as a}from"./vendor.e0acae8b.js";import{M as l,A as s,W as m,G as r,b as c,S as i}from"./index.00d1a385.js";import{l as n}from"./listData.5ce8b0a7.js";import{R as o}from"./ResponsePagination.6fd5083c.js";import{F as p}from"./index.539b5aaf.js";import{D as d,a as E}from"./index.bdbb7cc0.js";import{R as b}from"./index.7be30bdd.js";import{S as u}from"./SimplifyFilter.fb60b2e5.js";import"./getResponseColumn.d04dec0f.js";var f="_PictureList_1j68s_1",g="_PictureListWrap_1j68s_6",v="_PictureListImage_1j68s_16",_="_PictureListDesc_1j68s_22";const j=({image:a,title:m,desc:r,actions:c})=>e.createElement(l,null,(l=>e.createElement("div",{className:t(f,`__${l.type}`)},e.createElement("div",{className:g},e.createElement(s,{ratio:.65},e.createElement("img",{src:a,className:v,alt:"🍊 橘子"})),e.createElement("div",{className:"p-12"},e.createElement("div",{className:"fs-md ellipsis"},m),r&&e.createElement("div",{className:t(_,"ellipsis-2")},r),c&&e.createElement("div",{className:"mt-8 ellipsis"},c))))));export default()=>e.createElement(m,{topBar:function(t){return e.createElement(u,{toggle:t,onReset:()=>console.log("reset"),onSearch:e=>console.log("search",e)},e.createElement(p.Item,{label:"关键词",name:"keyword"},e.createElement(c,{placeholder:"输入关键词搜索"})),e.createElement(p.Item,{label:"类别",name:"type"},e.createElement(i,{multiple:!0,showTag:!1,options:[{label:"🍉 水果",value:1},{label:"🍆 蔬菜",value:2},{label:"🌮 熟食",value:3},{label:"🥤 饮品",value:4}],placeholder:"请选择操作员查询"})),e.createElement(p.Item,{label:"入库时间",name:"date"},e.createElement(d,{placeholder:"选择入库期/保质期查询",type:E.DATE,range:!0})),e.createElement(p.Item,{label:"发布者",name:"publisher"},e.createElement(c,{placeholder:"输入发布者姓名查询"})),e.createElement(p.Item,{label:"是否审核",name:"is_audit"},e.createElement(b,{name:"like",options:[{label:"是",value:1},{label:"否",value:2}]})))},topBarType:"eclipse",footer:e.createElement(o,{total:40,defaultPage:1,jumper:!0})},e.createElement(r,{gutter:12},n.slice(0,8).map(((t,l)=>e.createElement(r.Item,{key:l,xs:12,sm:6,md:4,xl:3,xxl:2.4},e.createElement(j,{image:t.image,title:t.title,desc:t.desc,actions:e.createElement("div",null,e.createElement(a,{size:"small",text:!0},"✒编辑"),e.createElement(a,{size:"small",text:!0},"🗑删除"),e.createElement(a,{size:"small",text:!0},"🔒锁定"))}))))));
