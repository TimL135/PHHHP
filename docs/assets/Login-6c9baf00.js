import{d as w,i as v,j as y,v as x,o as i,g as b,T as V,c,w as n,a as t,u as s,Z as B,t as C,h as p,b as l,k as f,e as d,n as $,f as N}from"./app-d30909a5.js";import{_ as P}from"./GuestLayout.vue_vue_type_script_setup_true_lang-5e37c440.js";import{_ as g}from"./InputError.vue_vue_type_script_setup_true_lang-68fa5bb0.js";import{_,a as h}from"./TextInput.vue_vue_type_script_setup_true_lang-06631e00.js";import{P as U}from"./PrimaryButton-d86ee1bb.js";import"./ApplicationLogo-75ab334d.js";import"./_plugin-vue_export-helper-c27b6911.js";const q=["value"],L=w({__name:"Checkbox",props:{checked:{type:Boolean},value:{}},emits:["update:checked"],setup(u,{emit:e}){const m=u,a=v({get(){return m.checked},set(o){e("update:checked",o)}});return(o,r)=>y((i(),b("input",{type:"checkbox",value:o.value,"onUpdate:modelValue":r[0]||(r[0]=k=>a.value=k),class:"rounded border-gray-300 text-indigo-600 shadow-sm focus:ring-indigo-500"},null,8,q)),[[x,a.value]])}}),R={key:0,class:"mb-4 font-medium text-sm text-green-600"},S=["onSubmit"],j={class:"mt-4"},D={class:"block mt-4"},E={class:"flex items-center"},F=l("span",{class:"ml-2 text-sm text-gray-600"},"Remember me",-1),M={class:"flex items-center justify-end mt-4"},J=w({__name:"Login",props:{canResetPassword:{type:Boolean},status:{}},setup(u){const e=V({email:"",password:"",remember:!1}),m=()=>{e.post(route("login"),{onFinish:()=>e.reset("password")})};return(a,o)=>(i(),c(P,null,{default:n(()=>[t(s(B),{title:"Log in"}),a.status?(i(),b("div",R,C(a.status),1)):p("",!0),l("form",{onSubmit:N(m,["prevent"])},[l("div",null,[t(_,{for:"email",value:"Email"}),t(h,{id:"email",type:"email",class:"mt-1 block w-full",modelValue:s(e).email,"onUpdate:modelValue":o[0]||(o[0]=r=>s(e).email=r),required:"",autofocus:"",autocomplete:"username"},null,8,["modelValue"]),t(g,{class:"mt-2",message:s(e).errors.email},null,8,["message"])]),l("div",j,[t(_,{for:"password",value:"Password"}),t(h,{id:"password",type:"password",class:"mt-1 block w-full",modelValue:s(e).password,"onUpdate:modelValue":o[1]||(o[1]=r=>s(e).password=r),required:"",autocomplete:"current-password"},null,8,["modelValue"]),t(g,{class:"mt-2",message:s(e).errors.password},null,8,["message"])]),l("div",D,[l("label",E,[t(L,{name:"remember",checked:s(e).remember,"onUpdate:checked":o[2]||(o[2]=r=>s(e).remember=r)},null,8,["checked"]),F])]),l("div",M,[a.canResetPassword?(i(),c(s(f),{key:0,href:a.route("password.request"),class:"underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"},{default:n(()=>[d(" Forgot your password? ")]),_:1},8,["href"])):p("",!0),t(s(f),{href:a.route("register"),class:"ms-2 underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"},{default:n(()=>[d(" No account? ")]),_:1},8,["href"]),t(U,{class:$(["ml-4",{"opacity-25":s(e).processing}]),disabled:s(e).processing},{default:n(()=>[d(" Log in ")]),_:1},8,["class","disabled"])])],40,S)]),_:1}))}});export{J as default};
