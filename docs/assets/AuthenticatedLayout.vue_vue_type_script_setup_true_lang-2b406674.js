import{A as M}from"./ApplicationLogo-75ab334d.js";import{d as p,D as N,G as j,i as b,m as D,o as d,g as v,b as e,r as c,j as $,H as C,a as r,w as o,B as E,n as u,c as w,u as _,k as y,t as x,h as z,e as n}from"./app-d30909a5.js";const S={class:"relative"},V=p({__name:"Dropdown",props:{align:{default:"right"},width:{default:"48"},contentClasses:{default:"py-1 bg-white"}},setup(l){const s=l,t=h=>{i.value&&h.key==="Escape"&&(i.value=!1)};N(()=>document.addEventListener("keydown",t)),j(()=>document.removeEventListener("keydown",t));const a=b(()=>({48:"w-48"})[s.width.toString()]),g=b(()=>s.align==="left"?"origin-top-left left-0":s.align==="right"?"origin-top-right right-0":"origin-top"),i=D(!1);return(h,f)=>(d(),v("div",S,[e("div",{onClick:f[0]||(f[0]=k=>i.value=!i.value)},[c(h.$slots,"trigger")]),$(e("div",{class:"fixed inset-0 z-40",onClick:f[1]||(f[1]=k=>i.value=!1)},null,512),[[C,i.value]]),r(E,{"enter-active-class":"transition ease-out duration-200","enter-from-class":"transform opacity-0 scale-95","enter-to-class":"transform opacity-100 scale-100","leave-active-class":"transition ease-in duration-75","leave-from-class":"transform opacity-100 scale-100","leave-to-class":"transform opacity-0 scale-95"},{default:o(()=>[$(e("div",{class:u(["absolute z-50 mt-2 rounded-md shadow-lg",[a.value,g.value]]),style:{display:"none"},onClick:f[2]||(f[2]=k=>i.value=!1)},[e("div",{class:u(["rounded-md ring-1 ring-black ring-opacity-5",h.contentClasses])},[c(h.$slots,"content")],2)],2),[[C,i.value]])]),_:3})]))}}),L=p({__name:"DropdownLink",props:{href:{}},setup(l){return(s,t)=>(d(),w(_(y),{href:s.href,class:"block w-full px-4 py-2 text-left text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out"},{default:o(()=>[c(s.$slots,"default")]),_:3},8,["href"]))}}),B=p({__name:"NavLink",props:{href:{},active:{type:Boolean}},setup(l){const s=l,t=b(()=>s.active?"inline-flex items-center px-1 pt-1 border-b-2 border-indigo-400 text-sm font-medium leading-5 text-gray-900 focus:outline-none focus:border-indigo-700 transition duration-150 ease-in-out":"inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium leading-5 text-gray-500 hover:text-gray-700 hover:border-gray-300 focus:outline-none focus:text-gray-700 focus:border-gray-300 transition duration-150 ease-in-out");return(a,g)=>(d(),w(_(y),{href:a.href,class:u(t.value)},{default:o(()=>[c(a.$slots,"default")]),_:3},8,["href","class"]))}}),m=p({__name:"ResponsiveNavLink",props:{href:{},active:{type:Boolean}},setup(l){const s=l,t=b(()=>s.active?"block w-full pl-3 pr-4 py-2 border-l-4 border-indigo-400 text-left text-base font-medium text-indigo-700 bg-indigo-50 focus:outline-none focus:text-indigo-800 focus:bg-indigo-100 focus:border-indigo-700 transition duration-150 ease-in-out":"block w-full pl-3 pr-4 py-2 border-l-4 border-transparent text-left text-base font-medium text-gray-600 hover:text-gray-800 hover:bg-gray-50 hover:border-gray-300 focus:outline-none focus:text-gray-800 focus:bg-gray-50 focus:border-gray-300 transition duration-150 ease-in-out");return(a,g)=>(d(),w(_(y),{href:a.href,class:u(t.value)},{default:o(()=>[c(a.$slots,"default")]),_:3},8,["href","class"]))}}),A={class:"min-h-screen bg-gray-100"},G={class:"bg-white border-b border-gray-100"},O={class:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"},P={class:"flex justify-between h-16"},T={class:"flex"},H={class:"shrink-0 flex items-center"},R={class:"hidden space-x-8 sm:-my-px sm:ml-10 sm:flex"},U={class:"hidden sm:flex sm:items-center sm:ml-6"},q={class:"ml-3 relative"},F={class:"inline-flex rounded-md"},I={type:"button",class:"inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 bg-white hover:text-gray-700 focus:outline-none transition ease-in-out duration-150"},J=e("svg",{class:"ml-2 -mr-0.5 h-4 w-4",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor"},[e("path",{"fill-rule":"evenodd",d:"M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z","clip-rule":"evenodd"})],-1),K={class:"-mr-2 flex items-center sm:hidden"},Q={class:"h-6 w-6",stroke:"currentColor",fill:"none",viewBox:"0 0 24 24"},W={class:"pt-2 pb-3 space-y-1"},X={class:"pt-4 pb-1 border-t border-gray-200"},Y={class:"px-4"},Z={class:"font-medium text-base text-gray-800"},ee={class:"font-medium text-sm text-gray-500"},te={class:"mt-3 space-y-1"},se={key:0,class:"bg-white shadow"},oe={class:"max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8"},ne=p({__name:"AuthenticatedLayout",setup(l){const s=D(!1);return(t,a)=>(d(),v("div",null,[e("div",A,[e("nav",G,[e("div",O,[e("div",P,[e("div",T,[e("div",H,[r(_(y),{href:t.route("dashboard")},{default:o(()=>[r(M,{class:"block h-9 w-auto fill-current text-gray-800"})]),_:1},8,["href"])]),e("div",R,[r(B,{href:t.route("dashboard"),active:t.route().current("dashboard")},{default:o(()=>[n(" Dashboard ")]),_:1},8,["href","active"]),r(B,{href:t.route("groups"),active:t.route().current("groups")},{default:o(()=>[n(" Groups ")]),_:1},8,["href","active"])])]),e("div",U,[e("div",q,[r(V,{align:"right",width:"48"},{trigger:o(()=>[e("span",F,[e("button",I,[n(x(t.$page.props.user.name)+" ",1),J])])]),content:o(()=>[r(L,{href:t.route("profile.edit")},{default:o(()=>[n(" Profile ")]),_:1},8,["href"]),r(L,{href:t.route("logout"),method:"post",as:"button"},{default:o(()=>[n(" Log Out ")]),_:1},8,["href"])]),_:1})])]),e("div",K,[e("button",{onClick:a[0]||(a[0]=g=>s.value=!s.value),class:"inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"},[(d(),v("svg",Q,[e("path",{class:u({hidden:s.value,"inline-flex":!s.value}),"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M4 6h16M4 12h16M4 18h16"},null,2),e("path",{class:u({hidden:!s.value,"inline-flex":s.value}),"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M6 18L18 6M6 6l12 12"},null,2)]))])])])]),e("div",{class:u([{block:s.value,hidden:!s.value},"sm:hidden"])},[e("div",W,[r(m,{href:t.route("dashboard"),active:t.route().current("dashboard")},{default:o(()=>[n(" Dashboard ")]),_:1},8,["href","active"]),r(m,{href:t.route("groups"),active:t.route().current("groups")},{default:o(()=>[n(" Groups ")]),_:1},8,["href","active"])]),e("div",X,[e("div",Y,[e("div",Z,x(t.$page.props.user.name),1),e("div",ee,x(t.$page.props.user.email),1)]),e("div",te,[r(m,{href:t.route("profile.edit")},{default:o(()=>[n(" Profile ")]),_:1},8,["href"]),r(m,{href:t.route("logout"),method:"post",as:"button"},{default:o(()=>[n(" Log Out ")]),_:1},8,["href"])])])],2)]),t.$slots.header?(d(),v("header",se,[e("div",oe,[c(t.$slots,"header")])])):z("",!0),e("main",null,[c(t.$slots,"default")])])]))}});export{ne as _};