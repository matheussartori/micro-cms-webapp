import{j as o}from"./jsx-runtime-94f6e698.js";import{L as f,B as h}from"./index-c9ae3a6c.js";import{s as n}from"./stitches.config-ab507599.js";import{P as g}from"./PostSummary-d45e9246.js";import{B as v}from"./Button-c1436d77.js";import{R as t,r as y}from"./index-8db94870.js";import{P as x}from"./IconBase.es-c4cd5f5b.js";import{H as b}from"./Header-4cd4ed5d.js";import{P as j}from"./SearchBar-079f86b9.js";import"./Text-cbe73c96.js";import"./Panel-98ea403f.js";import"./index-af05e076.js";import"./typeof-7fd5df1e.js";import"./_commonjsHelpers-042e6b4d.js";import"./Logo-f5709c6e.js";import"./MenuItem-a0ed1a3a.js";import"./isNativeReflectConstruct-2ba5e7f7.js";import"./index-8ce4a492.js";import"./v4-a960c1f4.js";var H=Object.defineProperty,E=Object.defineProperties,V=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,P=Object.prototype.hasOwnProperty,_=Object.prototype.propertyIsEnumerable,m=(r,e,a)=>e in r?H(r,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):r[e]=a,w=(r,e)=>{for(var a in e||(e={}))P.call(e,a)&&m(r,a,e[a]);if(s)for(var a of s(e))_.call(e,a)&&m(r,a,e[a]);return r},O=(r,e)=>E(r,V(e));const A=new Map([["bold",t.createElement(t.Fragment,null,t.createElement("path",{d:"M228,128a12,12,0,0,1-12,12H140v76a12,12,0,0,1-24,0V140H40a12,12,0,0,1,0-24h76V40a12,12,0,0,1,24,0v76h76A12,12,0,0,1,228,128Z"}))],["duotone",t.createElement(t.Fragment,null,t.createElement("path",{d:"M216,48V208a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V48a8,8,0,0,1,8-8H208A8,8,0,0,1,216,48Z",opacity:"0.2"}),t.createElement("path",{d:"M224,128a8,8,0,0,1-8,8H136v80a8,8,0,0,1-16,0V136H40a8,8,0,0,1,0-16h80V40a8,8,0,0,1,16,0v80h80A8,8,0,0,1,224,128Z"}))],["fill",t.createElement(t.Fragment,null,t.createElement("path",{d:"M208,32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM184,136H136v48a8,8,0,0,1-16,0V136H72a8,8,0,0,1,0-16h48V72a8,8,0,0,1,16,0v48h48a8,8,0,0,1,0,16Z"}))],["light",t.createElement(t.Fragment,null,t.createElement("path",{d:"M222,128a6,6,0,0,1-6,6H134v82a6,6,0,0,1-12,0V134H40a6,6,0,0,1,0-12h82V40a6,6,0,0,1,12,0v82h82A6,6,0,0,1,222,128Z"}))],["regular",t.createElement(t.Fragment,null,t.createElement("path",{d:"M224,128a8,8,0,0,1-8,8H136v80a8,8,0,0,1-16,0V136H40a8,8,0,0,1,0-16h80V40a8,8,0,0,1,16,0v80h80A8,8,0,0,1,224,128Z"}))],["thin",t.createElement(t.Fragment,null,t.createElement("path",{d:"M220,128a4,4,0,0,1-4,4H132v84a4,4,0,0,1-8,0V132H40a4,4,0,0,1,0-8h84V40a4,4,0,0,1,8,0v84h84A4,4,0,0,1,220,128Z"}))]]),u=y.forwardRef((r,e)=>t.createElement(x,O(w({ref:e},r),{weights:A})));u.displayName="Plus";const M=n("main",{display:"flex",flexDirection:"column",gap:"1rem",maxWidth:1120,margin:"2rem auto",padding:"0 2rem"}),B=n("div",{display:"flex",flexDirection:"row",justifyContent:"flex-end"}),Z=n("div",{display:"flex",flexDirection:"column",gap:"3rem"}),D=n(g,{"& + div":{"&::before":{content:"",width:"100%",border:"1px solid $gray800",position:"relative",bottom:40}}});function l({posts:r}){return o.jsxs(M,{children:[o.jsx(B,{children:o.jsx(f,{to:"/blog/create",children:o.jsxs(v,{"data-testid":"blog-post-create-button",children:[o.jsx(u,{}),"Add post"]})})}),o.jsx(Z,{"data-testid":"blog-post-container",children:r.map(e=>o.jsx(D,{id:e.id,title:e.title,content:e.content,time:e.time},e.id))})]})}try{l.displayName="BlogTemplate",l.__docgenInfo={description:"",displayName:"BlogTemplate",props:{posts:{defaultValue:null,description:"",name:"posts",required:!0,type:{name:"PostModel[]"}}}}}catch{}const Y={title:"Templates/BlogTemplate",component:l,decorators:[r=>o.jsx(h,{children:o.jsxs(j,{children:[o.jsx(b,{}),r()]})})],args:{posts:[{id:"any_id",content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, fuga autem aperiam quis, consequatur commodi cupiditate beatae earum tenetur illo molestiae debitis molestias eveniet. Itaque, aliquam dolorem. Optio, quis...",time:Date.now(),title:"Lorem Ipsum"}]},argTypes:{posts:{control:{type:null}}}},i={};var p,c,d;i.parameters={...i.parameters,docs:{...(p=i.parameters)==null?void 0:p.docs,source:{originalSource:"{}",...(d=(c=i.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};const ee=["Default"];export{i as Default,ee as __namedExportsOrder,Y as default};
//# sourceMappingURL=BlogTemplate.stories-cb33ef92.js.map