import{j as e}from"./jsx-runtime-94f6e698.js";import{L as u}from"./index-c9ae3a6c.js";import{s as t}from"./stitches.config-ab507599.js";import{T as n}from"./Text-cbe73c96.js";import{P as c}from"./Panel-98ea403f.js";import{f as g}from"./index-af05e076.js";const p=t(c,{display:"flex",flexDirection:"column",gap:"0.5rem",backgroundColor:"transparent"}),f=t(n,{marginBottom:"0.5rem"}),y=t(n,{color:"$gray100","&:hover":{color:"$white"}}),h=t(n,{});function s({time:i,title:l,content:o,id:m,...d}){let r=o.replace(/(<([^>]+)>)/gi,""),a=!1;return o.length>310&&(r=r.slice(0,300),a=!0),e.jsxs(p,{"data-testid":"blog-post-item",...d,children:[e.jsx(f,{as:"time",children:g(i,"MMM d, yyyy")}),e.jsx(u,{to:`/blog/read/${m}`,children:e.jsx(y,{as:"h2",children:l})}),e.jsxs(h,{"data-testid":"blog-post-item-content",children:[r,a&&"..."]})]})}try{s.displayName="PostSummary",s.__docgenInfo={description:"",displayName:"PostSummary",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLDivElement | null) => void) | RefObject<HTMLDivElement> | null"}},glowBorder:{defaultValue:null,description:"",name:"glowBorder",required:!1,type:{name:'boolean | "true" | ({ "@mobile"?: boolean | "true"; "@wide"?: boolean | "true"; "@initial"?: boolean | "true" | undefined; } & { [x: string]: boolean | "true" | undefined; }) | undefined'}},css:{defaultValue:null,description:"",name:"css",required:!1,type:{name:'CSS<{ mobile: "(max-width: 768px)"; wide: "(min-width: 769px)"; }, { colors: { white: string; gray100: string; gray200: string; gray300: string; gray700: string; gray800: string; gray850: string; gray900: string; cyan500: string; cyan300: string; yellow500: string; }; fontSizes: { ...; }; fonts: { ...; }; }, Default...'}},time:{defaultValue:null,description:"",name:"time",required:!0,type:{name:"number"}}}}}catch{}export{s as P};
//# sourceMappingURL=PostSummary-d45e9246.js.map