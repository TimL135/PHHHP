import{d as c,T as f,o as w,c as _,w as d,a as e,u as o,Z as V,b as t,e as b,n as g,f as k}from"./app-d30909a5.js";import{_ as v}from"./GuestLayout.vue_vue_type_script_setup_true_lang-5e37c440.js";import{_ as l}from"./InputError.vue_vue_type_script_setup_true_lang-68fa5bb0.js";import{_ as m,a as i}from"./TextInput.vue_vue_type_script_setup_true_lang-06631e00.js";import{P}from"./PrimaryButton-d86ee1bb.js";import"./ApplicationLogo-75ab334d.js";import"./_plugin-vue_export-helper-c27b6911.js";const y=["onSubmit"],x={class:"mt-4"},B={class:"mt-4"},C={class:"flex items-center justify-end mt-4"},j=c({__name:"ResetPassword",props:{email:{},token:{}},setup(p){const n=p,s=f({token:n.token,email:n.email,password:"",password_confirmation:""}),u=()=>{s.post(route("password.store"),{onFinish:()=>s.reset("password","password_confirmation")})};return($,a)=>(w(),_(v,null,{default:d(()=>[e(o(V),{title:"Reset Password"}),t("form",{onSubmit:k(u,["prevent"])},[t("div",null,[e(m,{for:"email",value:"Email"}),e(i,{id:"email",type:"email",class:"mt-1 block w-full",modelValue:o(s).email,"onUpdate:modelValue":a[0]||(a[0]=r=>o(s).email=r),required:"",autofocus:"",autocomplete:"username"},null,8,["modelValue"]),e(l,{class:"mt-2",message:o(s).errors.email},null,8,["message"])]),t("div",x,[e(m,{for:"password",value:"Password"}),e(i,{id:"password",type:"password",class:"mt-1 block w-full",modelValue:o(s).password,"onUpdate:modelValue":a[1]||(a[1]=r=>o(s).password=r),required:"",autocomplete:"new-password"},null,8,["modelValue"]),e(l,{class:"mt-2",message:o(s).errors.password},null,8,["message"])]),t("div",B,[e(m,{for:"password_confirmation",value:"Confirm Password"}),e(i,{id:"password_confirmation",type:"password",class:"mt-1 block w-full",modelValue:o(s).password_confirmation,"onUpdate:modelValue":a[2]||(a[2]=r=>o(s).password_confirmation=r),required:"",autocomplete:"new-password"},null,8,["modelValue"]),e(l,{class:"mt-2",message:o(s).errors.password_confirmation},null,8,["message"])]),t("div",C,[e(P,{class:g({"opacity-25":o(s).processing}),disabled:o(s).processing},{default:d(()=>[b(" Reset Password ")]),_:1},8,["class","disabled"])])],40,y)]),_:1}))}});export{j as default};