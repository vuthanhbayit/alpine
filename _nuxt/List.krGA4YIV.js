import{d as r,ab as l,H as u,M as n,a4 as p,k as m}from"./entry.EJQKS0iG.js";import{u as d,f,_}from"./MDCSlot.Y7P07YM-.js";const y=()=>({unwrap:d,flatUnwrap:f}),h={primary:"heroicons-outline:check",info:"heroicons-outline:information-circle",success:"heroicons-outline:check-circle",warning:"heroicons-outline:exclamation",danger:"heroicons-outline:exclamation-circle"},w=r({props:{icon:{type:String,default:null},type:{type:String,default:"primary",validator:e=>["primary","info","success","warning","danger"].includes(e)}},setup(e){const o=l(),{flatUnwrap:t,unwrap:s}=y(),c=u(()=>e.icon||h[e.type]);return()=>{const i=t((o.default&&o.default())??[],["ul"]).map(a=>s(a,["li"]));return n("ul",i.map(a=>n("li",[n("span",{class:`list-icon ${e.type}`},n(p,{name:c.value,class:"icon"})),n("span",n(_,{use:()=>a}))])))}}}),b=m(w,[["__scopeId","data-v-892bdddb"]]);export{b as default};
