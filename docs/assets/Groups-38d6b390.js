import{_ as ne}from"./AuthenticatedLayout.vue_vue_type_script_setup_true_lang-2b406674.js";import{d as W,q as ee,l as N,m as A,s as te,i as F,o as u,g as d,u as e,r as q,h as I,b as f,x as se,n as z,t as $,y as J,a as t,T as j,w as a,e as h,c as R,f as oe,F as S,p as T,O as ue,Z as re}from"./app-d30909a5.js";import{a as de,u as ie,E as le,g as ae,B as k,T as X,S as pe,r as ce,R as me,D as fe,b as ve,c as Q,M as L,C as _e,_ as K}from"./showTask.vue_vue_type_script_setup_true_lang-39e73943.js";import{_ as M}from"./InputError.vue_vue_type_script_setup_true_lang-68fa5bb0.js";import{_ as Y}from"./_plugin-vue_export-helper-c27b6911.js";import"./ApplicationLogo-75ab334d.js";const ge=Y(de,[["__scopeId","data-v-e4eb5562"]]),he={key:0,class:"icon"},be=["value"],Ve=["type","maxlength","value"],ke={inheritAttrs:!1},ye=W({...ke,__name:"Email",props:{modelValue:{},name:{default:""},error:{default:""},errorColor:{default:"red"},labelClass:{},sideWidth:{default:20},sideInputType:{},sideInputClass:{},sideInputMaxLength:{},sideInputVModel:{},placeholder:{default:""},borderColor:{},backgroundColor:{default:"#f8fafc"}},emits:["update:modelValue","update:sideInputVModel"],setup(C,{emit:b}){const o=C;ee(m=>({"1485a252":m.backgroundColor,"207649c6":s.value,"77e582da":e(E),be3bbb44:e(O)}));const{modelValue:r,error:_,errorColor:l,labelClass:w,sideWidth:V,sideInputType:c,sideInputClass:p,sideInputMaxLength:v,sideInputVModel:G,placeholder:x,borderColor:U,name:D}=N(o),g=A(!1),i=te(),s=F(()=>ae(_.value,D.value)?l==null?void 0:l.value:U==null?void 0:U.value),n=F(()=>!!i.icon),y=F(()=>!!i.button),{inputWidth:E,sideWidthComputed:O}=ie(V);function P(m){b("update:modelValue",m.target.value)}function Z(m){b("update:sideInputVModel",m.target.value)}return(m,B)=>(u(),d("div",{class:z(["input-contain",e(x)?"mt-3":""]),style:J({backgroundColor:m.backgroundColor})},[n.value&&(g.value||e(r))?(u(),d("div",he,[q(m.$slots,"icon",{},void 0,!0)])):I("",!0),f("input",se(m.$attrs,{class:["form-control shadow-none",{dirty:e(r)}],type:"email",value:e(r),onInput:P,style:[y.value||e(c)?`border-radius: 0.5rem 0 0 0.5rem; width:${e(E)}`:"",n.value?"padding-left: 1.5rem;":"padding-left: none;"],onFocus:B[0]||(B[0]=H=>g.value=!0),onBlur:B[1]||(B[1]=H=>g.value=!1),autocomplete:"off"}),null,16,be),e(x)?(u(),d("label",{key:1,class:z(["text",e(w)])},$(e(x)),3)):I("",!0),y.value?(u(),d("button",{key:2,class:"sideButton",style:J(`width:${e(O)}`)},[q(m.$slots,"button",{},void 0,!0)],4)):I("",!0),e(c)?(u(),d("input",{key:3,class:z(["sideInput",e(p)]),type:e(c),maxlength:e(v),onInput:Z,value:e(G)},null,42,Ve)):I("",!0),t(le,{error:e(_),"error-color":e(l),name:e(D)},null,8,["error","error-color","name"])],6))}}),$e=Y(ye,[["__scopeId","data-v-61ea04c0"]]),Ie={key:0,class:"icon"},we=["value"],Ce=["type","maxlength","value"],Ge={inheritAttrs:!1},Se=W({...Ge,__name:"Search",props:{modelValue:{},name:{default:""},error:{default:""},errorColor:{default:"red"},labelClass:{},sideWidth:{default:20},sideInputType:{},sideInputClass:{},sideInputMaxLength:{},sideInputVModel:{},placeholder:{default:""},borderColor:{},backgroundColor:{default:"#f8fafc"}},emits:["update:modelValue","update:sideInputVModel"],setup(C,{emit:b}){const o=C;ee(m=>({b0134f84:m.backgroundColor,"559e67ad":s.value,bdd855da:E.value,ad12e3f6:O.value}));const{modelValue:r,error:_,errorColor:l,labelClass:w,sideWidth:V,sideInputType:c,sideInputClass:p,sideInputMaxLength:v,sideInputVModel:G,placeholder:x,borderColor:U,name:D}=N(o),g=A(!1),i=te(),s=F(()=>ae(_.value,D.value)?l==null?void 0:l.value:U==null?void 0:U.value),n=F(()=>!!i.icon),y=F(()=>!!i.button),E=F(()=>{let m=100;return(c||y)&&(m-=V.value||0),m+"%"}),O=F(()=>V.value+"%");function P(m){b("update:modelValue",m.target.value)}function Z(m){b("update:sideInputVModel",m.target.value)}return(m,B)=>(u(),d("div",{class:z(["input-contain",e(x)?"mt-3":""]),style:J({backgroundColor:m.backgroundColor})},[n.value&&(g.value||e(r))?(u(),d("div",Ie,[q(m.$slots,"icon",{},void 0,!0)])):I("",!0),f("input",se(m.$attrs,{class:["form-control shadow-none",{dirty:e(r)}],type:"search",value:e(r),onInput:P,style:[y.value||e(c)?`border-radius: 0.5rem 0 0 0.5rem; width:${E.value}`:"",n.value?"padding-left: 1.5rem;":"padding-left: none;"],onFocus:B[0]||(B[0]=H=>g.value=!0),onBlur:B[1]||(B[1]=H=>g.value=!1),autocomplete:"off"}),null,16,we),e(x)?(u(),d("label",{key:1,class:z(["text",e(w)])},$(e(x)),3)):I("",!0),y.value?(u(),d("button",{key:2,class:"sideButton",style:J(`width:${O.value}`)},[q(m.$slots,"button",{},void 0,!0)],4)):I("",!0),e(c)?(u(),d("input",{key:3,class:z(["sideInput",e(p)]),type:e(c),maxlength:e(v),onInput:Z,value:e(G)},null,42,Ce)):I("",!0),t(le,{error:e(_),"error-color":e(l),name:e(D)},null,8,["error","error-color","name"])],6))}}),Ue=Y(Se,[["__scopeId","data-v-dd2c760a"]]),Me=W({__name:"createGroup",setup(C){const b=j({name:""});async function o(){b.post("api/addGroup")}return(r,_)=>(u(),d("div",null,[t(e(X),{placeholder:"Gruppen name",modelValue:e(b).name,"onUpdate:modelValue":_[0]||(_[0]=l=>e(b).name=l)},{button:a(()=>[t(e(k),{sideButton:"",onClick:o,loading:e(b).processing},{default:a(()=>[h("erstellen")]),_:1},8,["loading"])]),_:1},8,["modelValue"]),t(M,{message:e(b).errors.name},null,8,["message"])]))}}),xe=["onSubmit"],Be=W({__name:"createTask",props:{group:{},groupUser:{},user:{},modelValue:{type:Boolean}},setup(C){const b=C,{group:o,groupUser:r,user:_}=N(b),l=j({title:"",notes:"",done:!1,creator_id:_.value.id,repeat:0,worker_id:null,appointment:""}),w=A("");function V(){l.post(`api/${o.value.id}/addTask`,{onSuccess:()=>{l.reset(),w.value="",Q()}})}return(c,p)=>(u(),d("form",{onSubmit:oe(V,["prevent"])},[t(e(X),{placeholder:"kurz Beschreibung",modelValue:e(l).title,"onUpdate:modelValue":p[0]||(p[0]=v=>e(l).title=v),name:"title"},null,8,["modelValue"]),t(M,{message:e(l).errors.title},null,8,["message"]),t(e(pe),{placeholder:"zuweisen",modelValue:w.value,"onUpdate:modelValue":p[1]||(p[1]=v=>w.value=v),options:e(r),"option-projection":v=>v.name,onSelectItem:p[2]||(p[2]=v=>e(l).worker_id=v.id)},null,8,["modelValue","options","option-projection"]),t(M,{message:e(l).errors.worker_id},null,8,["message"]),t(e(me),{class:"mt-2",modelValue:e(l).repeat,"onUpdate:modelValue":p[3]||(p[3]=v=>e(l).repeat=v),options:e(ce)},null,8,["modelValue","options"]),t(M,{message:e(l).errors.repeat},null,8,["message"]),e(l).repeat>=1?(u(),R(e(fe),{key:0,placeholder:"nächster Termin",modelValue:e(l).appointment,"onUpdate:modelValue":p[4]||(p[4]=v=>e(l).appointment=v)},null,8,["modelValue"])):I("",!0),t(M,{message:e(l).errors.appointment},null,8,["message"]),t(e(ve),{placeholder:"Notizen (optinoal)",modelValue:e(l).notes,"onUpdate:modelValue":p[5]||(p[5]=v=>e(l).notes=v)},null,8,["modelValue"]),t(M,{message:e(l).errors.notes},null,8,["message"]),t(e(k),{class:"btn btn-primary w-100 mt-2",loading:e(l).processing},{default:a(()=>[h("erstellen")]),_:1},8,["loading"])],40,xe))}}),Te={class:"container"},Fe={class:"m-1"},je={class:"m-1"},De={class:"my-2"},ze={class:"m-1"},Ae=f("div",{style:{height:"1px"}},null,-1),We={class:"m-1"},Le={class:"mb-1"},Ne={class:"m-1"},Ee={class:"mb-1"},Oe={class:"m-1"},Re=f("div",null,"nicht zugewiesen",-1),qe={class:"mb-1"},Je={class:"m-1"},Pe={class:"d-flex justify-content-end"},Ze=f("div",{style:{height:"1px"}},null,-1),He={class:"m-1"},Ke=W({__name:"showGroup",props:{group:{},user:{}},setup(C){const b=C,{group:o,user:r}=N(b),_=A(!1),l=A(!1),w=F(()=>{const g=[];return g.push({title:"Mitglieder",hash:"users"}),o.value.owner_id==r.value.id&&g.push({title:"Einstellungen",hash:"settings"}),g.push({title:"Aufgabe hinzufügen",hash:"addTask",noAccordion:!0}),g.push({title:"Meine Aufgaben",hash:"myTasks"}),g.push({title:"Aufgaben",hash:"tasks"}),g.push({title:"Gruppe verlassen",hash:"leave"}),g}),V=j({email:""});function c(){V.post(`api/${o.value.id}/addGroupUser`,{onSuccess:()=>{V.reset()}})}const p=j({});function v(g){p.post(`api/${o.value.id}/${g.id}/kickGroupUser`)}const G=j({name:o.value.name,is_public:o.value.is_public});function x(){G.post(`api/${o.value.id}/editSettingsGroup`)}const U=j({});function D(g){U.post(`api/${g}/leaveGroup`,{onSuccess:()=>{Q()}})}return(g,i)=>(u(),d("div",null,[t(e(ge),{items:w.value},{users:a(()=>[(u(!0),d(S,null,T(e(o).users,s=>(u(),R(e(L),{title:s.name},{button:a(()=>[f("div",Fe,[t(e(k),{class:"btn btn-primary w-100"},{default:a(()=>[h($(s.name),1)]),_:2},1024)])]),default:a(()=>[f("div",Te,[s.id!=e(r).id?(u(),d(S,{key:0},[t(e(k),{href:"mailto:"+s.email,disabled:e(r).id==s.id,class:"btn btn-primary w-100"},{default:a(()=>[h(" Nachricht schreiben ")]),_:2},1032,["href","disabled"]),e(r).id==e(o).owner_id?(u(),R(e(k),{key:0,class:"btn btn-danger w-100 mt-2",onClick:n=>v(s)},{default:a(()=>[h($(s.name)+" kicken ",1)]),_:2},1032,["onClick"])):I("",!0)],64)):I("",!0)])]),_:2},1032,["title"]))),256)),f("div",je,[t(e(k),{class:"btn btn-primary w-100",href:"mailto:"+[...e(o).users.filter(s=>s.id!=e(r).id).map(s=>s.email)]},{default:a(()=>[h(" Nachricht an alle ")]),_:1},8,["href"]),t(e($e),{placeholder:"email",modelValue:e(V).email,"onUpdate:modelValue":i[1]||(i[1]=s=>e(V).email=s)},{button:a(()=>[t(e(k),{sideButton:"",onClick:i[0]||(i[0]=s=>c())},{default:a(()=>[h("hinzufügen")]),_:1})]),_:1},8,["modelValue"]),t(M,{message:e(V).errors.email},null,8,["message"])])]),settings:a(()=>[f("div",null,[t(e(X),{placeholder:"name",modelValue:e(G).name,"onUpdate:modelValue":i[2]||(i[2]=s=>e(G).name=s)},null,8,["modelValue"]),t(M,{message:e(G).errors.name},null,8,["message"]),f("div",De,[t(e(_e),{modelValue:e(G).is_public,"onUpdate:modelValue":i[3]||(i[3]=s=>e(G).is_public=s)},{default:a(()=>[h("öffentlich")]),_:1},8,["modelValue"]),t(M,{message:e(G).errors.is_public},null,8,["message"])]),f("div",ze,[t(e(k),{class:"btn btn-primary w-100",onClick:i[4]||(i[4]=s=>x()),loading:e(G).processing},{default:a(()=>[h("speichern")]),_:1},8,["loading"])])])]),addTask:a(()=>[t(e(L),{title:"Aufgabe hinzufügen",modelValue:_.value,"onUpdate:modelValue":i[6]||(i[6]=s=>_.value=s)},{button:a(()=>[Ae,f("div",We,[t(e(k),{class:"py-2 btn btn-success w-100"},{default:a(()=>[h("Aufgabe hinzufügen")]),_:1})])]),default:a(()=>[t(Be,{group:e(o),groupUser:e(o).users,user:e(r),modelValue:_.value,"onUpdate:modelValue":i[5]||(i[5]=s=>_.value=s)},null,8,["group","groupUser","user","modelValue"])]),_:1},8,["modelValue"])]),myTasks:a(()=>[(u(),d(S,null,T([!0,!1],s=>f("div",null,[f("div",null,$((s?"":"nicht ")+"erledigt"),1),(u(!0),d(S,null,T(Object.entries(e(o).tasks).filter(n=>n[1].worker_id==e(r).id).filter(n=>n[1].done==s).sort((n,y)=>+(n[1].appointment||n[1].created_at)-+(y[1].appointment||y[1].created_at)),n=>(u(),d("div",Le,[t(e(L),{title:n[1].title},{button:a(()=>[f("div",Ne,[t(e(k),{class:"btn btn-primary w-100"},{default:a(()=>[h($(n[1].title)+" ("+$(new Date(n[1].appointment||n[1].created_at).toLocaleDateString())+") ",1)]),_:2},1024)])]),default:a(()=>[t(K,{task:n[1],group:e(o),groupUser:e(o).users,user:e(r),"task-id":+n[0],modelValue:l.value,"onUpdate:modelValue":i[7]||(i[7]=y=>l.value=y)},null,8,["task","group","groupUser","user","task-id","modelValue"])]),_:2},1032,["title"])]))),256))])),64))]),tasks:a(()=>[(u(),d(S,null,T([!0,!1],s=>f("div",null,[f("div",null,$((s?"":"nicht ")+"erledigt"),1),(u(!0),d(S,null,T(Object.entries(e(o).tasks).filter(n=>n[1].done==s).filter(n=>n[1].worker_id||n[1].done==!0).sort((n,y)=>+(n[1].appointment||n[1].created_at)-+(y[1].appointment||y[1].created_at)),n=>(u(),d("div",Ee,[t(e(L),{title:n[1].title},{button:a(()=>[f("div",Oe,[t(e(k),{class:"btn btn-primary w-100"},{default:a(()=>[h($(n[1].title)+" ("+$(new Date(n[1].appointment||n[1].created_at).toLocaleDateString())+") ",1)]),_:2},1024)])]),default:a(()=>[t(K,{task:n[1],group:e(o),groupUser:e(o).users,user:e(r),"task-id":+n[0],modelValue:l.value,"onUpdate:modelValue":i[8]||(i[8]=y=>l.value=y)},null,8,["task","group","groupUser","user","task-id","modelValue"])]),_:2},1032,["title"])]))),256))])),64)),f("div",null,[Re,(u(!0),d(S,null,T(Object.entries(e(o).tasks).filter(s=>!s[1].worker_id&&!s[1].done).sort((s,n)=>+(s[1].appointment||s[1].created_at)-+(n[1].appointment||n[1].created_at)),s=>(u(),d("div",qe,[t(e(L),{title:s[1].title},{button:a(()=>[f("div",Je,[t(e(k),{class:"btn btn-primary w-100"},{default:a(()=>[h($(s[1].title)+" ("+$(new Date(s[1].appointment||s[1].created_at).toLocaleDateString())+") ",1)]),_:2},1024)])]),default:a(()=>[t(K,{task:s[1],group:e(o),groupUser:e(o).users,user:e(r),"task-id":+s[0],modelValue:l.value,"onUpdate:modelValue":i[9]||(i[9]=n=>l.value=n)},null,8,["task","group","groupUser","user","task-id","modelValue"])]),_:2},1032,["title"])]))),256))])]),leave:a(()=>[t(e(L),{title:`${e(o).name} verlassen?`},{button:a(()=>[Ze,f("div",He,[t(e(k),{class:"py-2 btn btn-danger w-100"},{default:a(()=>[h("Gruppe verlassen")]),_:1})])]),default:a(()=>[f("div",Pe,[t(e(k),{class:"btn btn-danger me-2 w-50",onClick:i[10]||(i[10]=s=>D(e(o).id)),loading:e(U).processing},{default:a(()=>[h("Ja")]),_:1},8,["loading"]),t(e(k),{class:"btn btn-primary w-50",onClick:i[11]||(i[11]=s=>e(Q)())},{default:a(()=>[h("Nein")]),_:1})])]),_:1},8,["title"])]),_:1},8,["items"])]))}}),Qe={class:"d-flex justify-content-between mt-2"},Xe=W({__name:"searchGroup",props:{searchGroups:{}},setup(C){const b=C,{searchGroups:o}=N(b),r=j({search:""}),_=j({});async function l(V){_.post(`api/${V.id}/joinGroup`,{onSuccess:()=>{o.value=o.value.filter(c=>c.id!=V.id)}})}async function w(){r.data().search==""?r.errors.search="The search field is required.":ue.reload({only:["searchGroups"],data:r.data()})}return(V,c)=>(u(),d("div",null,[t(e(Ue),{placeholder:"Gruppen name/id",modelValue:e(r).search,"onUpdate:modelValue":c[0]||(c[0]=p=>e(r).search=p)},{button:a(()=>[t(e(k),{sideButton:"",onClick:w,loading:e(r).processing},{default:a(()=>[h("suche")]),_:1},8,["loading"])]),_:1},8,["modelValue"]),t(M,{message:e(r).errors.search},null,8,["message"]),(u(!0),d(S,null,T(e(o),p=>(u(),d("div",Qe,[h($(p.name)+" ",1),t(e(k),{onClick:v=>l(p),loading:e(_).processing},{default:a(()=>[h("join")]),_:2},1032,["onClick","loading"])]))),256))]))}}),Ye={key:0},et={class:"mt-2"},tt={class:"mt-2"},rt=W({__name:"Groups",props:{user:{},groups:{},searchGroups:{}},setup(C){const b=C,{user:o,groups:r}=N(b),_=A(""),l=A("");return(w,V)=>(u(),d(S,null,[t(e(re),{title:"Dashboard"}),t(ne,null,{default:a(()=>[f("div",null,[e(r).length==0?(u(),d("h4",Ye,"Du hast noch keine Gruppe")):I("",!0),e(r).length>0?(u(!0),d(S,{key:1},T(e(r),c=>{var p;return u(),R(e(k),{class:z(["m-1 btn",((p=e(r).find(v=>v.id==l.value))==null?void 0:p.name)==c.name?"btn-success":"btn-primary"]),onClick:v=>l.value=c.id},{default:a(()=>[h($(c.name),1)]),_:2},1032,["class","onClick"])}),256)):I("",!0),(u(!0),d(S,null,T(e(r),c=>(u(),d(S,null,[l.value==c.id?(u(),R(Ke,{key:0,group:c,user:e(o)},null,8,["group","user"])):I("",!0)],64))),256)),f("div",et,[t(Xe,{user:e(o),searchGroups:w.searchGroups},null,8,["user","searchGroups"])]),f("div",tt,[t(Me,{user:e(o),modelValue:_.value,"onUpdate:modelValue":V[0]||(V[0]=c=>_.value=c)},null,8,["user","modelValue"])])])]),_:1})],64))}});export{rt as default};
