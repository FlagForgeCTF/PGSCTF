/* The PGS::CTF Project @unknown
 * 
 * License   : GNU Affero General Public License v3.0 (Core)
 * License   : LicenseRef-PGSCTF-Restricted (Restricted components)
 * Commit    : Unofficial build version
 * Build     : 2026-01-11T18:05:03.233Z
 * Copyright (C) 2026 FlagForge. All Rights Reserved.
 */
import{Na as e,Vi as t,ba as n,k as r,mr as i,pi as a}from"./index.k141k1jt.js";import{t as o}from"./o3iv85oi.js";var s=e(n());const c=e=>{let{disabled:n,participation:c,setParticipation:l,size:u,...d}=e,f=r(),p=f.get(c.status),m=t(),{t:h}=i();return(0,s.jsx)(a,{wrap:`nowrap`,justify:`center`,mx:`xs`,miw:`calc(${m.spacing.xl} * 2)`,...d,children:p.transformTo.map(e=>{let t=f.get(e);return(0,s.jsx)(o,{size:u,iconPath:t.iconPath,color:t.color,message:h(`admin.content.games.review.participation.update`,{status:t.title}),disabled:n,onClick:()=>l(c.id,{status:e,divisionId:c.divisionId})},`${c.id}@${e}`)})})};var l={root:`H_`,item:`I_`,label:`J_`,control:`K_`};export{c as n,l as t};