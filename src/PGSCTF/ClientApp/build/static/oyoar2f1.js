/* The PGS::CTF Project @unknown
 * 
 * License   : GNU Affero General Public License v3.0 (Core)
 * License   : LicenseRef-PGSCTF-Restricted (Restricted components)
 * Commit    : Unofficial build version
 * Build     : 2026-01-11T18:30:01.190Z
 * Copyright (C) 2026 FlagForge. All Rights Reserved.
 */
import{Ji as e,Na as t,Oa as n,Qr as r,ba as i,ki as a}from"./index.h3ia39tz.js";var o={container:`zc`,text:`Ac`,textWrapper:`Bc`,clone:`Cc`,scroll:`Dc`},s=t(n()),c=t(i());const l=({text:t,onClick:n,size:i,speedCharPerSec:l=3.2,...u})=>{let d=(0,s.useRef)(null),f=(0,s.useRef)(null),[p,m]=(0,s.useState)(!1),[h,g]=(0,s.useState)(!1),[_,v]=(0,s.useState)(4),y=(0,s.useCallback)(()=>{if(h)return;let e=d.current,t=f.current;if(!e||!t)return;let n=parseFloat(getComputedStyle(t).fontSize||`14`)||14,r=t.scrollWidth;if(r-e.clientWidth>0){let e=r/(l*n);v(Math.max(3,e)),m(!0)}g(!0)},[h,l]);return(0,c.jsx)(a,{ref:d,className:o.container,onClick:n,onMouseEnter:y,"data-scroll":p||void 0,__vars:{"--scroll-time":`${_}s`},...u,children:(0,c.jsxs)(`div`,{className:o.textWrapper,children:[(0,c.jsx)(r,{ref:f,className:o.text,title:t,fz:i,children:t}),p&&(0,c.jsx)(r,{className:e(o.text,o.clone),fz:i,"aria-hidden":!0,children:t})]})})};export{l as t};