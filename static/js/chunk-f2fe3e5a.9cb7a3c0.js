(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-f2fe3e5a"],{"09ef":function(e,t,c){"use strict";c("ecd8")},1414:function(e,t,c){},"291b":function(e,t,c){"use strict";c.r(t);var a=c("7f58"),r=(c("781c"),c("5fef")),i=(c("068c"),c("f2bf"));const s={class:"page-articles"},l={class:"blog-container"},o={class:"hot-solutions"},n=["href"],d={class:"hot-solution-card"},p={class:"solution-title"},b={class:"solution-desc"},u={class:"article-list"},m={class:"article-block"},f={class:"article-head"},h=["href"],j={class:"article-title"},g={class:"article-tag"},O={class:"article-group"},k=Object(i["createElementVNode"])("span",{class:"article-tag-split"},"•",-1),w={class:"article-time"},N={class:"article-desc"};function v(e,t,c,v,E,V){const y=r["a"],B=a["a"];return Object(i["openBlock"])(),Object(i["createElementBlock"])("div",s,[Object(i["createElementVNode"])("div",l,[Object(i["createElementVNode"])("div",o,[Object(i["createVNode"])(B,{gutter:20},{default:Object(i["withCtx"])(()=>[(Object(i["openBlock"])(!0),Object(i["createElementBlock"])(i["Fragment"],null,Object(i["renderList"])(v.solutions,e=>(Object(i["openBlock"])(),Object(i["createBlock"])(y,{span:24,xs:24,md:24,xl:24,xxl:24,key:e},{default:Object(i["withCtx"])(()=>[Object(i["createElementVNode"])("a",{class:Object(i["normalizeClass"])(["app-title",{disabled:!e.enable}]),target:"_blank",href:e.enable?"#/solution/"+e.name:"javascript:void(0)"},[Object(i["createElementVNode"])("div",d,[Object(i["createElementVNode"])("h3",p,Object(i["toDisplayString"])(e.title),1),Object(i["createElementVNode"])("p",b,Object(i["toDisplayString"])(e.desc),1)])],10,n)]),_:2},1024))),128))]),_:1})]),Object(i["createElementVNode"])("div",u,[Object(i["createVNode"])(B,{gutter:20},{default:Object(i["withCtx"])(()=>[(Object(i["openBlock"])(!0),Object(i["createElementBlock"])(i["Fragment"],null,Object(i["renderList"])(v.viewData,e=>(Object(i["openBlock"])(),Object(i["createBlock"])(y,{key:e,span:24},{default:Object(i["withCtx"])(()=>[Object(i["createElementVNode"])("div",m,[Object(i["createElementVNode"])("div",f,[Object(i["createElementVNode"])("a",{href:e.href,target:"_blank"},[Object(i["createElementVNode"])("h3",j,Object(i["toDisplayString"])(e.title),1)],8,h),Object(i["createElementVNode"])("span",g,[Object(i["createElementVNode"])("span",O,Object(i["toDisplayString"])(e.group),1),k,Object(i["createElementVNode"])("span",w,Object(i["toDisplayString"])(e.time),1)])]),Object(i["createElementVNode"])("div",N,Object(i["toDisplayString"])(e.desc),1)])]),_:2},1024))),128))]),_:1})])])])}var E=c("36ad"),V=c("3f36"),y=c("ade8"),B={components:{PageHeader:E["a"]},setup(){const e=Object(i["ref"])(V),t=t=>{e.value=t},c=y.slice(0,1);return{data:V,viewData:e,search:t,solutions:c}}},S=(c("ab12"),c("09ef"),c("6b0d")),x=c.n(S);const C=x()(B,[["render",v]]);t["default"]=C},"36ad":function(e,t,c){"use strict";var a=c("f2bf");const r={class:"page-header"},i={class:"page-title"};function s(e,t,c,s,l,o){return Object(a["openBlock"])(),Object(a["createElementBlock"])("header",r,[Object(a["createElementVNode"])("h1",i,Object(a["toDisplayString"])(c.title),1)])}c("13d5");var l=c("f382"),o={props:{title:String,data:Array,showSearch:{type:Boolean,default:!0}},data(){return{keyword:"",itemNumbers:0}},created(){this.itemNumbers=this.getItemNumbers(this.data)},methods:{getItemNumbers(e){return e.reduce((e,t)=>t.children?e+t.children.length:e+1,0)},search(){const{keyword:e,data:t}=this,c=e&&e.trim().toLowerCase();let a=l["a"].map(t,e=>({...e}));c&&(a=l["a"].filter(a,e=>e.title.toLowerCase().includes(c)||e.desc&&e.desc.toLowerCase().includes(c)||e.description&&e.description.toLowerCase().includes(c))),this.itemNumbers=this.getItemNumbers(a),this.$emit("search",a)}}},n=(c("9f15"),c("9196"),c("6b0d")),d=c.n(n);const p=d()(o,[["render",s]]);t["a"]=p},"3b8a":function(e,t,c){},"3f36":function(e){e.exports=JSON.parse('[{"href":"#/article/indexdb-promise","title":"持久化储存之IndexDB常用方法封装","group":"函数库","desc":"用Promise对常用的一些方法进行了二次封装","time":"2022-09-25"},{"href":"#/article/treemap-charts","title":"矩形树图treeMap的简单实现","group":"数据与算法","desc":" 矩形树图将树状结构转化成了平面矩形，这种结构除了可以展示层级关系外，还很适合展示数据的权重关系","time":"2022-09-10"},{"href":"#/article/npm-conflicting--peer-dependency","title":"安装npm包时出现依赖树错误的解决办法","group":"开发辅助","desc":"使用npm7 及以上的版本，对等依赖问题视为错误，而版本npm6中通常只是的警告而已","time":"2022-08-27"},{"href":"#/article/useless-files-webpack-plugin","title":"使用webpack-如何清理无用源文件","group":"开发辅助","desc":"项目随着时间的推移不断更新迭代，或者新项目从老项目迁移开发，项目变得越来越臃肿，无形中就存在了很多无用的文件. ","time":"2022-08-08"},{"href":"#/article/async-component-dialog","title":"异步组件之动态弹窗","group":"动态弹窗","desc":"在大型项目中，我们可能需要拆分应用为更小的块，并仅在需要时再从服务器加载相关组件。","time":"2021-08-20"},{"href":"#/article/webpack-rollup-2021","title":"Webpack打包原理浅析","group":"前端辅助","desc":"本文就目前前端最为热门的打包工具webpack，对其作用、打包原理及优化进行一定程度的探讨","time":"2021-03-09"},{"href":"#/article/vue-project-api-design","title":"Vue大型项目如何统一管理API","group":"项目管理","desc":"当项目有多模块，且每个模块都有不少接口时，理应考虑分模块独立接口开发，类似后端的微服务化。","time":"2020-09-08"},{"href":"#/article/array-tree","title":"让你像数组一样操作Tree树","group":"Tree树","desc":"树是一种非顺序数据结构，一种分层数据的抽象模型，它对于存储需要快速查找的数据非常有用。","time":"2020-08-01"},{"href":"#/article/simple-step-controller","title":"简易步骤控制器","group":"流程控制","desc":"不少复杂函数中都存在一个问题，逻辑步骤或分支较多，很多时候我们都采用if else/Promise等来处理，而有些场景我们不得不额外把一部分逻辑封装成一个函数待以重用。","time":"2020-06-24"},{"href":"#/article/flow-js","title":"一个非常精简灵活的流程控制工具库","group":"流程控制","desc":"前段时间，由于业务需求，无意中在网上看到一篇原腾讯高级工程师张镇圳的文章《一个只有99行代码的JS流程框架》其中感悟颇深，而且正好满足现实中的需求。","time":"2020-05-05"},{"href":"#/article/javascript-data-structure-and-algorithm","title":"Javascript常用的数据结构与算法","group":"数据与算法","desc":"本文主要讲述Javascript中实现栈、队列、链表、集合、字典、散列表、树、图等数据结构，以及各种排序和搜索算法，包括冒泡排序、选择排序、插入排序、归并排序、快速排序、顺序搜索、二分搜索，最后还介绍了动态规划和贪心算法等常用的高级算法及相关知识。","time":"2019-02-26"},{"href":"#/article/json-from-data-path","title":"通过path路径字符串还原json结构","group":"数据与算法","desc":"","time":"-"},{"href":"#/article/webpack4-loader","title":"自定义webpack-loader","group":"前端辅助","desc":"Webpack loader是一个CommonJs风格的函数，接收输入的源码，通过同步或异步的方式替换源码后进行输出。","time":"2021-07-25"},{"href":"#/article/git-advance-scenes","title":"各种场景下的Git管理方法","group":"前端辅助","desc":"本文着重列举开发过程中自己遇到过的各种场景以及用法","time":"2021-04-03"},{"href":"#/article/webpack-loader-20220725","title":"自动化部署探讨","group":"开发部署","desc":"","time":"-"},{"href":"#/article/ssr-2022","title":"服务端渲染SSR","group":"开发部署","desc":"","time":"-"}]')},9196:function(e,t,c){"use strict";c("3b8a")},"9f15":function(e,t,c){"use strict";c("ce3d")},ab12:function(e,t,c){"use strict";c("1414")},ce3d:function(e,t,c){},ecd8:function(e,t,c){}}]);