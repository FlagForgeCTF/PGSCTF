/* The PGS::CTF Project @unknown
 * 
 * License   : GNU Affero General Public License v3.0 (Core)
 * License   : LicenseRef-PGSCTF-Restricted (Restricted components)
 * Commit    : Unofficial build version
 * Build     : 2026-01-11T18:05:03.233Z
 * Copyright (C) 2026 FlagForge. All Rights Reserved.
 */
import{Na as e,Nn as t,Oa as n,Rn as r}from"./index.k141k1jt.js";var i=e(n());const a=(e,n)=>{let{data:i,error:a,mutate:o}=r.edit.useEditGetGameChallenge(e,n,t);return{challenge:i,error:a,mutate:o}},o=e=>{let{data:n,error:a,mutate:o}=r.edit.useEditGetGameChallenges(e,t),[s,c]=(0,i.useState)(null);return(0,i.useEffect)(()=>{n&&c(n.toSorted((e,t)=>(e.category??``)>(t.category??``)?-1:1))},[n]),{challenges:s,error:a,mutate:o}};export{o as n,a as t};