/* The PGS::CTF Project @unknown
 * 
 * License   : GNU Affero General Public License v3.0 (Core)
 * License   : LicenseRef-PGSCTF-Restricted (Restricted components)
 * Commit    : Unofficial build version
 * Build     : 2026-01-11T18:30:01.190Z
 * Copyright (C) 2026 FlagForge. All Rights Reserved.
 */
import{i as e}from"./hs4yfuc4.js";import{Na as t,Oa as n,Wr as r,Zn as i,ba as a,gi as o,lr as s,ur as c}from"./index.h3ia39tz.js";var l=t(n()),u=t(a());const d=new Map([[i.Admin,3],[i.Monitor,1],[i.User,0],[i.Banned,-1]]),f=(e,t)=>d.get(t??i.User)>=d.get(e),p=({requiredRole:t,children:n})=>{let{role:i,error:a}=e(),f=c(),p=s(),m=d.get(t);return(0,l.useEffect)(()=>{a&&a.status===401&&f(`/account/login?from=${p.pathname}`,{replace:!0}),i&&d.get(i)<m&&f(`/404`)},[i,a,m,f]),i&&d.get(i)<m?(0,u.jsx)(r,{h:`calc(100vh - 32px)`,children:(0,u.jsx)(o,{})}):(0,u.jsx)(u.Fragment,{children:n})};export{p as n,f as t};