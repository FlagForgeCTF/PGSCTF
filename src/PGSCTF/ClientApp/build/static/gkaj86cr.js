/* The PGS::CTF Project @unknown
 * 
 * License   : GNU Affero General Public License v3.0 (Core)
 * License   : LicenseRef-PGSCTF-Restricted (Restricted components)
 * Commit    : Unofficial build version
 * Build     : 2026-01-11T18:05:03.233Z
 * Copyright (C) 2026 FlagForge. All Rights Reserved.
 */
import{Di as e,Fi as t,Na as n,Oa as r,Ri as i,Yi as a,ba as o,ha as s,ki as c,xi as l,ya as u}from"./index.k141k1jt.js";var d=n(r(),1),f=n(o(),1),[p,m]=u(`Card component was not found in tree`),h={root:`m_e615b15f`,section:`m_599a2148`},g=e((e,n)=>{let{classNames:r,className:i,style:a,styles:o,vars:s,withBorder:l,inheritPadding:u,mod:d,...p}=t(`CardSection`,null,e),h=m();return(0,f.jsx)(c,{ref:n,mod:[{"with-border":l,"inherit-padding":u},d],...h.getStyles(`section`,{className:i,style:a,styles:o,classNames:r}),...p})});g.classes=h,g.displayName=`@mantine/core/CardSection`;var _=a((e,{padding:t})=>({root:{"--card-padding":s(t)}})),v=e((e,n)=>{let r=t(`Card`,null,e),{classNames:a,className:o,style:s,styles:c,unstyled:u,vars:m,children:v,padding:y,attributes:b,...x}=r,S=i({name:`Card`,props:r,classes:h,className:o,style:s,classNames:a,styles:c,unstyled:u,attributes:b,vars:m,varsResolver:_}),C=d.Children.toArray(v),w=C.map((e,t)=>typeof e==`object`&&e&&`type`in e&&e.type===g?(0,d.cloneElement)(e,{"data-first-section":t===0||void 0,"data-last-section":t===C.length-1||void 0}):e);return(0,f.jsx)(p,{value:{getStyles:S},children:(0,f.jsx)(l,{ref:n,unstyled:u,...S(`root`),...x,children:w})})});v.classes=h,v.displayName=`@mantine/core/Card`,v.Section=g;export{v as t};