(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-8fe21abe"],{"07c7":function(e,t,c){},"36ad":function(e,t,c){"use strict";var a=c("f2bf");const n={class:"page-header"},s={class:"page-title"};function r(e,t,c,r,o,i){return Object(a["openBlock"])(),Object(a["createElementBlock"])("header",n,[Object(a["createElementVNode"])("h1",s,Object(a["toDisplayString"])(c.title),1)])}c("13d5");var o=c("f382"),i={props:{title:String,data:Array,showSearch:{type:Boolean,default:!0}},data(){return{keyword:"",itemNumbers:0}},created(){this.itemNumbers=this.getItemNumbers(this.data)},methods:{getItemNumbers(e){return e.reduce((e,t)=>t.children?e+t.children.length:e+1,0)},search(){const{keyword:e,data:t}=this,c=e&&e.trim().toLowerCase();let a=o["a"].map(t,e=>({...e}));c&&(a=o["a"].filter(a,e=>e.title.toLowerCase().includes(c)||e.desc&&e.desc.toLowerCase().includes(c)||e.description&&e.description.toLowerCase().includes(c))),this.itemNumbers=this.getItemNumbers(a),this.$emit("search",a)}}},l=(c("9f15"),c("9196"),c("6b0d")),d=c.n(l);const b=d()(i,[["render",r]]);t["a"]=b},"3c78":function(e,t,c){},"6de4":function(e,t,c){},"6fb1":function(e,t,c){"use strict";c("3c78")},"70e4":function(e,t,c){"use strict";c.r(t);var a=c("7f58"),n=(c("781c"),c("5fef")),s=(c("068c"),c("4c02")),r=(c("83b2"),c("36ad")),o=c("f2bf");const i={class:"page-solutions"},l={class:"blog-container"},d={class:"apps-list"},b={class:"app-title"},u=["href"],f={key:1,class:"disabled"},p={class:"solution-desc"};function h(e,t,c,h,m,j){const O=r["a"],k=s["a"],w=n["a"],g=a["a"];return Object(o["openBlock"])(),Object(o["createElementBlock"])("div",i,[Object(o["createElementVNode"])("div",l,[Object(o["createVNode"])(O,{title:"方案",data:h.data,onSearch:h.search},null,8,["data","onSearch"]),Object(o["createElementVNode"])("div",d,[Object(o["createVNode"])(g,{gutter:20},{default:Object(o["withCtx"])(()=>[(Object(o["openBlock"])(!0),Object(o["createElementBlock"])(o["Fragment"],null,Object(o["renderList"])(h.viewData,e=>(Object(o["openBlock"])(),Object(o["createBlock"])(w,{span:6,xs:24,sm:12,md:8,key:e},{default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(k,{class:"box-card",shadow:"never"},{default:Object(o["withCtx"])(()=>[Object(o["createElementVNode"])("h3",b,[e.enable?(Object(o["openBlock"])(),Object(o["createElementBlock"])("a",{key:0,target:"_blank",href:"#/solution/"+e.name},Object(o["toDisplayString"])(e.title),9,u)):(Object(o["openBlock"])(),Object(o["createElementBlock"])("span",f,Object(o["toDisplayString"])(e.title),1))]),Object(o["createElementVNode"])("p",p,Object(o["toDisplayString"])(e.desc),1)]),_:2},1024)]),_:2},1024))),128))]),_:1})])])])}var m=c("ade8"),j={components:{PageHeader:r["a"]},setup(){const e=Object(o["ref"])(m),t=t=>{e.value=t};return{data:m,viewData:e,search:t}}},O=(c("9416"),c("6fb1"),c("6b0d")),k=c.n(O);const w=k()(j,[["render",h]]);t["default"]=w},"7c0b":function(e,t,c){},"83b2":function(e,t,c){"use strict";c("771d"),c("7c0b")},9196:function(e,t,c){"use strict";c("6de4")},9416:function(e,t,c){"use strict";c("07c7")},"9f15":function(e,t,c){"use strict";c("c40c")},c40c:function(e,t,c){}}]);