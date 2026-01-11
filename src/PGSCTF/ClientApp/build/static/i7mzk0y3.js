/* The PGS::CTF Project @unknown
 * 
 * License   : GNU Affero General Public License v3.0 (Core)
 * License   : LicenseRef-PGSCTF-Restricted (Restricted components)
 * Commit    : Unofficial build version
 * Build     : 2026-01-11T18:30:01.190Z
 * Copyright (C) 2026 FlagForge. All Rights Reserved.
 */
import{Fi as e,Na as t,Oa as n,ba as r,na as i,ra as a}from"./index.h3ia39tz.js";var o=t(r(),1),s=t(n(),1),c={multiple:!1},l=(0,s.forwardRef)((t,n)=>{let{onChange:r,children:l,multiple:u,accept:d,name:f,form:p,resetRef:m,disabled:h,capture:g,inputProps:_,...v}=e(`FileButton`,c,t),y=(0,s.useRef)(null),b=()=>{!h&&y.current?.click()};return i(m,()=>{y.current&&(y.current.value=``)}),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(`input`,{style:{display:`none`},type:`file`,accept:d,multiple:u,onChange:e=>{if(e.currentTarget.files===null)return r(u?[]:null);r(u?Array.from(e.currentTarget.files):e.currentTarget.files[0]||null)},ref:a(n,y),name:f,form:p,capture:g,..._}),l({onClick:b,...v})]})});l.displayName=`@mantine/core/FileButton`;export{l as t};