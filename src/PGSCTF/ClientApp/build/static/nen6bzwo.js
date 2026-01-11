/* The PGS::CTF Project @unknown
 * 
 * License   : GNU Affero General Public License v3.0 (Core)
 * License   : LicenseRef-PGSCTF-Restricted (Restricted components)
 * Commit    : Unofficial build version
 * Build     : 2026-01-11T18:30:01.190Z
 * Copyright (C) 2026 FlagForge. All Rights Reserved.
 */
import{m as e}from"./cwn94w6e.js";import{n as t}from"./obcyl8uq.js";import{Ii as n,Na as r,Oa as i,Vi as a,ba as o,ki as s,pi as c}from"./index.h3ia39tz.js";var l={default:`Sc`,inner:`Tc`,label:`Uc`,icon:`Vc`,hidable:`Wc`,panes:`Xc`},u=r(i()),d=r(o()),f=e=>{let{color:t,label:n,active:r,icon:i,tabKey:a,disabled:o,...c}=e;return(0,d.jsx)(s,{...c,component:`button`,type:`button`,role:`tab`,disabled:o,__vars:{"--tab-active-color":t},"data-active":r||void 0,className:l.default,children:(0,d.jsxs)(`div`,{className:l.inner,children:[i&&(0,d.jsx)(`div`,{className:l.icon,children:i}),n&&(0,d.jsx)(`div`,{className:l.label,children:n})]})},a)};const p=r=>{let{active:i,onTabChange:o,tabs:s,withIcon:p,aside:m,disabled:h,...g}=r,[_,v]=(0,u.useState)(i??0),y=a(),{colorScheme:b}=n(),x=e=>e?y.colors[y.primaryColor][b===`dark`?4:6]:void 0,S=e(_,0,s.length-1);(0,u.useEffect)(()=>{v(i??0)},[i]);let C=s.map((e,t)=>(0,d.jsx)(f,{...e,disabled:h,color:x(e.color),active:S===t,onClick:()=>{v(t),o&&o(t,e.tabKey)}},e.tabKey));return(0,d.jsxs)(c,{gap:0,justify:`space-between`,w:`100%`,wrap:`nowrap`,children:[m,p&&(0,d.jsx)(t,{className:l.hidable}),(0,d.jsx)(c,{className:l.panes,...g,children:C})]})};export{p as t};