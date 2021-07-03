import{C as e}from"./vendor.e0acae8b.js";import{M as t,W as a,I as l,a as r,C as n,L as m,b as i,S as o}from"./index.00d1a385.js";import{R as c}from"./ResponsePagination.6fd5083c.js";import{F as s}from"./index.539b5aaf.js";import{D as d,a as E}from"./index.bdbb7cc0.js";import{R as p}from"./index.7be30bdd.js";import{g}from"./getResponseColumn.d04dec0f.js";import{S as b}from"./SimplifyFilter.fb60b2e5.js";const u=e=>{if(e.isSM()||e.isMedium()||e.isLarge())return m.border};export default()=>{function m(t){return e.createElement(b,{toggle:t,onReset:()=>console.log("reset"),onSearch:e=>console.log("search",e)},e.createElement(s.Item,{label:"关键词",name:"keyword"},e.createElement(i,{placeholder:"输入关键词搜索"})),e.createElement(s.Item,{label:"类别",name:"type"},e.createElement(o,{multiple:!0,showTag:!1,options:[{label:"🍉 水果",value:1},{label:"🍆 蔬菜",value:2},{label:"🌮 熟食",value:3},{label:"🥤 饮品",value:4}],placeholder:"请选择操作员查询"})),e.createElement(s.Item,{label:"入库时间",name:"date"},e.createElement(d,{placeholder:"选择入库期/保质期查询",type:E.DATE,range:!0})),e.createElement(s.Item,{label:"发布者",name:"publisher"},e.createElement(i,{placeholder:"输入发布者姓名查询"})),e.createElement(s.Item,{label:"是否审核",name:"is_audit"},e.createElement(p,{name:"like",options:[{label:"是",value:1},{label:"否",value:2}]})))}return e.createElement(t,null,(t=>e.createElement(a,{topBar:m,footer:e.createElement(c,{total:40,defaultPage:1,jumper:!0})},e.createElement(l,{effect:!0,column:g(t),itemStyle:u(t),className:"p-8"},e.createElement(r,{leading:"🍊",title:"橘子",arrow:!0}),e.createElement(r,{leading:"🍉",title:"西瓜",arrow:!0}),e.createElement(r,{leading:"🥝",title:"猕猴桃",arrow:!0,desc:"水果之王"}),e.createElement(r,{leading:"🍇",title:"葡萄",trailing:e.createElement(n,{type:"switch"})}),e.createElement(r,{leading:"🍓",title:"草莓",arrow:!0,trailing:"其实不是水果"}),e.createElement(r,{leading:"🍒",title:e.createElement("span",null,"樱",e.createElement("span",{className:"color-red"},"桃")),arrow:!0}),e.createElement(r,{leading:"🍋",title:"柠檬",arrow:!0,desc:"一年一度的“我吃柠檬”挑战又要开始啦~，请记住我们的活动代号“#WCNM#”"}),e.createElement(r,{leading:"🍍",title:"菠萝",arrow:!0,trailing:"也叫凤梨"}),e.createElement(r,{leading:"🍎",title:"苹果",arrow:!0}),e.createElement(r,{leading:"🍈",title:"甜瓜",arrow:!0}),e.createElement(r,{leading:"🍑",title:"桃",arrow:!0}),e.createElement(r,{leading:"🍐",title:"梨",arrow:!0}),e.createElement(r,{leading:"🍌",title:"香蕉",arrow:!0})))))};
