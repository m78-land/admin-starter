var e=Object.defineProperty,t=Object.prototype.hasOwnProperty,r=Object.getOwnPropertySymbols,n=Object.prototype.propertyIsEnumerable,l=(t,r,n)=>r in t?e(t,r,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[r]=n;import{C as a,i as o,bp as s,I as c,B as i,bq as m}from"./vendor.e0acae8b.js";import{u,F as p}from"./index.539b5aaf.js";import{g as d}from"./getResponseColumn.d04dec0f.js";import{M as f,R as b,G as E}from"./index.00d1a385.js";function g({children:e,toggle:g,onSearch:h,onReset:y,formProps:j}){const v=null==j?void 0:j.form,[O]=u(),w=v||O,x=a.useMemo((()=>e?o(e)?e:[e]:[]),[e]);function C(){return a.createElement(a.Fragment,null,a.createElement(i,{text:!0,title:"重置查询条件",onClick:()=>{w.resetFields(),null==y||y()}},a.createElement(m,null)),a.createElement(i,{color:"primary",onClick:w.submit},"查询"))}function F(e){const o=d(e),i=12/o,m=1===o&&g;return a.createElement(b,null,a.createElement(p,((e,a)=>{for(var o in a||(a={}))t.call(a,o)&&l(e,o,a[o]);if(r)for(var o of r(a))n.call(a,o)&&l(e,o,a[o]);return e})({form:w,onFinish:e=>null==h?void 0:h(s(e)),fullWidth:!0},j),x.map(((e,t)=>{const r=g||t<o;return a.createElement(E.Item,{key:t,col:i,hidden:!r},e)})),a.createElement(c,{when:m},a.createElement("div",{className:"tr p-8"},C()))),a.createElement(c,{when:!m},a.createElement(b,{crossAlign:"center",style:{paddingTop:30,paddingRight:8}},C())))}return x.length?a.createElement(f,null,F):null}export{g as S};