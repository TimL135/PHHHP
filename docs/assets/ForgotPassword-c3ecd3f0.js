import{d,T as u,o as l,c,w as i,a,u as s,Z as p,g as f,t as _,h as w,b as t,e as g,n as y,f as b}from"./app-d30909a5.js";import{_ as h}from"./GuestLayout.vue_vue_type_script_setup_true_lang-5e37c440.js";import{_ as k}from"./InputError.vue_vue_type_script_setup_true_lang-68fa5bb0.js";import{_ as x,a as V}from"./TextInput.vue_vue_type_script_setup_true_lang-06631e00.js";import{P as v}from"./PrimaryButton-d86ee1bb.js";import"./ApplicationLogo-75ab334d.js";import"./_plugin-vue_export-helper-c27b6911.js";const B=t("div",{class:"mb-4 text-sm text-gray-600"}," Forgot your password? No problem. Just let us know your email address and we will email you a password reset link that will allow you to choose a new one. ",-1),N={key:0,class:"mb-4 font-medium text-sm text-green-600"},P=["onSubmit"],C={class:"flex items-center justify-end mt-4"},D=d({__name:"ForgotPassword",props:{status:{}},setup($){const e=u({email:""}),m=()=>{e.post(route("password.email"))};return(o,r)=>(l(),c(h,null,{default:i(()=>[a(s(p),{title:"Forgot Password"}),B,o.status?(l(),f("div",N,_(o.status),1)):w("",!0),t("form",{onSubmit:b(m,["prevent"])},[t("div",null,[a(x,{for:"email",value:"Email"}),a(V,{id:"email",type:"email",class:"mt-1 block w-full",modelValue:s(e).email,"onUpdate:modelValue":r[0]||(r[0]=n=>s(e).email=n),required:"",autofocus:"",autocomplete:"username"},null,8,["modelValue"]),a(k,{class:"mt-2",message:s(e).errors.email},null,8,["message"])]),t("div",C,[a(v,{class:y({"opacity-25":s(e).processing}),disabled:s(e).processing},{default:i(()=>[g(" Email Password Reset Link ")]),_:1},8,["class","disabled"])])],40,P)]),_:1}))}});export{D as default};