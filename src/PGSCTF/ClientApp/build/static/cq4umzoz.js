/* The PGS::CTF Project @unknown
 * 
 * License   : GNU Affero General Public License v3.0 (Core)
 * License   : LicenseRef-PGSCTF-Restricted (Restricted components)
 * Commit    : Unofficial build version
 * Build     : 2026-01-11T18:05:03.233Z
 * Copyright (C) 2026 FlagForge. All Rights Reserved.
 */
import{Ca as e,Ii as t,Ji as n,Na as r,Vi as i,Wr as a,ba as o,pi as s}from"./index.k141k1jt.js";var c={bar:`ic`,pulse:`jc`,box:`kc`,back:`lc`,spikes:`mc`,spike:`nc`,l:`oc`,r:`pc`,t:`qc`,b:`rc`},l=r(o());const u=r=>{let{thickness:o=4,spikeLength:u=250,percentage:d,color:f,...p}=r,m=i(),{colorScheme:h}=t(),g=d<100,_=g?h===`dark`?`light`:f??m.primaryColor:`gray`,v=m.colors[_][5],y=m.colors[_][2];return(0,l.jsx)(a,{py:o*u/100,...p,__vars:{"--thickness":e(o),"--spike-length":`${u}%`,"--neg-spike-length":`${-u}%`,"--percentage":`${d}%`,"--spike-color":v,"--bg-color":y,"--pulsing-display":g?`block`:`none`},children:(0,l.jsx)(`div`,{className:c.back,children:(0,l.jsxs)(s,{justify:`right`,className:c.box,children:[(0,l.jsx)(`div`,{className:c.bar,children:(0,l.jsx)(`div`,{})}),(0,l.jsxs)(`div`,{className:c.spikes,children:[(0,l.jsx)(`div`,{className:n(c.spike,c.r)}),(0,l.jsx)(`div`,{className:n(c.spike,c.l)}),(0,l.jsx)(`div`,{className:n(c.spike,c.t)}),(0,l.jsx)(`div`,{className:n(c.spike,c.b)})]})]})})})};export{u as t};