/* The PGS::CTF Project @unknown
 * 
 * License   : GNU Affero General Public License v3.0 (Core)
 * License   : LicenseRef-PGSCTF-Restricted (Restricted components)
 * Commit    : Unofficial build version
 * Build     : 2026-01-11T18:30:01.190Z
 * Copyright (C) 2026 FlagForge. All Rights Reserved.
 */
import{Na as e,Oa as t}from"./index.h3ia39tz.js";var n=e(t(),1);function r(e){return t=>{if(!t)e(t);else if(typeof t==`function`)e(t);else if(typeof t==`object`&&`nativeEvent`in t){let{currentTarget:n}=t;n.type===`checkbox`?e(n.checked):e(n.value)}else e(t)}}function i(e){let[t,i]=(0,n.useState)(e);return[t,r(i)]}export{i as t};