import{d as V,r as L,w as N,o as f,c as y,a as l,b as c,e as r,f as k,g as d,h as u,F as I,i as W,j as B,t as _,k as C,p as E,l as D,D as J,_ as O}from"./index-DBZxWVnF.js";function U(o){for(let e=1;e<o.length;e++)if(o[e]<=o[e-1])return!1;return!0}const x=o=>(E("data-v-09131417"),o=o(),D(),o),F={class:"page"},K={class:"content"},j={class:"title-word"},A={class:"title-cn"},M={class:"explain-item"},T=x(()=>l("span",{class:"label"},"英义：",-1)),$={class:"explain-item"},q=x(()=>l("span",{class:"label"},"词根：",-1)),z={class:"explain-item"},G=x(()=>l("span",{class:"label"},"例句：",-1)),H={class:"explain-item"},P=x(()=>l("span",{class:"label"},"翻译：",-1)),Q=V({__name:"SearchView",setup(o){const e=L({searchList:[],searchLimit:"0",searchWord:"",activeNames:[],explain:{}}),S=a=>{console.log("newWord",a),e.explain[a]||(e.explain[a]={}),e.explain[a].loadingStatus="loading",J.getWordMean(a).then(({data:t})=>{e.explain[a]=t,localStorage.setItem(a,JSON.stringify(t)),e.explain[a].loadingStatus=""}).catch(()=>{e.explain[a].loadingStatus="error"}).finally(()=>{})},g=a=>{if(!e.explain[a]){const t=localStorage.getItem(a);if(t){e.explain[a]=JSON.parse(t);return}S(a)}};N(()=>e.activeNames,(a,t)=>{if(a.length>t.length){const n=a[a.length-1];g(n)}});const v=a=>{if(console.log("eee=",a),e.searchWord=a.trim(),!e.searchWord)return;const t=e.searchWord.split(" ");e.searchList=C.etc4.reduce((n,p)=>{const h=t.map(i=>p.indexOf(i));if(h.every(i=>i!=-1)&&U(h)){let i=!0,m=!0;return e.searchLimit.includes("1")&&!p.startsWith(t[0])&&(i=!1),e.searchLimit.includes("2")&&!p.endsWith(t[t.length-1])&&(m=!1),i&&m?(g(p),[...n,p]):n}return n},[]),console.log("eee=",e.searchList)};return(a,t)=>{const n=d("el-option"),p=d("el-select"),h=d("el-button"),i=d("el-input"),m=d("el-collapse-item"),b=d("el-collapse");return f(),y("div",F,[l("div",K,[c(i,{trim:"both",modelValue:e.searchWord,"onUpdate:modelValue":t[2]||(t[2]=s=>e.searchWord=s),class:"search-input",style:{},placeholder:"模糊搜索单词，多字母组合之间用空格隔开；例：m rry",onKeyup:t[3]||(t[3]=k(s=>v(s.target.value),["enter"]))},{prepend:r(()=>[c(p,{modelValue:e.searchLimit,"onUpdate:modelValue":t[0]||(t[0]=s=>e.searchLimit=s),placeholder:"条件搜索",style:{width:"115px"}},{default:r(()=>[c(n,{label:"指定开头",value:"1"}),c(n,{label:"指定结尾",value:"2"}),c(n,{label:"首尾都指定",value:"12"}),c(n,{label:"首尾不限制",value:"0"})]),_:1},8,["modelValue"])]),append:r(()=>[c(h,{type:"primary",onClick:t[1]||(t[1]=s=>v(e.searchWord))},{default:r(()=>[u("搜索")]),_:1})]),_:1},8,["modelValue"]),c(b,{modelValue:e.activeNames,"onUpdate:modelValue":t[4]||(t[4]=s=>e.activeNames=s),class:"search-result"},{default:r(()=>[(f(!0),y(I,null,W(e.searchList,s=>(f(),B(m,{key:s,name:s},{title:r(()=>[l("div",null,[l("span",j,_(s),1),l("span",A,_(e.explain[s]&&e.explain[s].mean_cn),1)])]),default:r(()=>[l("p",M,[T,u(_(e.explain[s]&&e.explain[s].mean_en),1)]),l("p",$,[q,u(_(e.explain[s]&&e.explain[s].word_etyma),1)]),l("p",z,[G,u(_(e.explain[s]&&e.explain[s].sentence),1)]),l("p",H,[P,u(_(e.explain[s]&&e.explain[s].sentence_trans),1)])]),_:2},1032,["name"]))),128))]),_:1},8,["modelValue"])])])}}}),X=O(Q,[["__scopeId","data-v-09131417"]]);export{X as default};
