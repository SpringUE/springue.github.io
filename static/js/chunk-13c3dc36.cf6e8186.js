(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-13c3dc36"],{2681:function(e,t,r){},"291b":function(e,t,r){"use strict";r.r(t);var c=r("f2bf");const a={class:"page-articles"},i={class:"blog-container"},n={class:"article-list"},l={class:"article-block"},s={class:"article-head"},o=["href"],u={class:"article-tag"},h={class:"article-group"},d=Object(c["q"])(" * "),p={class:"article-time"},f={class:"article-desc"},b=Object(c["o"])("div",{class:"article-foot"},null,-1);function m(e,t,r,m,j,g){const v=Object(c["U"])("PageHeader"),O=Object(c["U"])("a-col"),w=Object(c["U"])("a-row");return Object(c["L"])(),Object(c["n"])("div",a,[Object(c["o"])("div",i,[Object(c["r"])(v,{title:"文章",data:m.data,onSearch:m.search},null,8,["data","onSearch"]),Object(c["o"])("div",n,[Object(c["r"])(w,{gutter:20},{default:Object(c["jb"])(()=>[(Object(c["L"])(!0),Object(c["n"])(c["b"],null,Object(c["S"])(m.viewData,e=>(Object(c["L"])(),Object(c["l"])(O,{key:e,span:24},{default:Object(c["jb"])(()=>[Object(c["o"])("div",l,[Object(c["o"])("div",s,[Object(c["o"])("a",{class:"article-title",href:e.href,target:"_blank"},[Object(c["o"])("h3",null,Object(c["Y"])(e.title),1)],8,o),Object(c["o"])("span",u,[Object(c["o"])("span",h,Object(c["Y"])(e.group),1),d,Object(c["o"])("span",p,Object(c["Y"])(e.time),1)])]),Object(c["o"])("div",f,Object(c["Y"])(e.desc),1),b])]),_:2},1024))),128))]),_:1})])])])}var j=r("36ad"),g=r("3f36"),v={components:{PageHeader:j["a"]},setup(){const e=Object(c["Q"])(g),t=t=>{e.value=t};return{data:g,viewData:e,search:t}}},O=(r("edd2"),r("6b0d")),w=r.n(O);const y=w()(v,[["render",m]]);t["default"]=y},"36ad":function(e,t,r){"use strict";var c=r("f2bf");const a={class:"page-header"},i={class:"page-title"},n={key:0,class:"page-search-box"},l={class:"page-count"};function s(e,t,r,s,o,u){const h=Object(c["U"])("a-input-search");return Object(c["L"])(),Object(c["n"])("header",a,[Object(c["o"])("h1",i,Object(c["Y"])(r.title),1),r.showSearch?(Object(c["L"])(),Object(c["n"])("div",n,[Object(c["r"])(h,{size:"large",class:"page-search-input",value:o.keyword,"onUpdate:value":t[0]||(t[0]=e=>o.keyword=e),placeholder:"Search",onSearch:u.search},null,8,["value","onSearch"]),Object(c["o"])("div",l,Object(c["Y"])(o.itemNumbers)+" items",1)])):Object(c["m"])("",!0)])}r("13d5");var o=r("f382"),u={props:{title:String,data:Array,showSearch:{type:Boolean,default:!0}},data(){return{keyword:"",itemNumbers:0}},created(){this.itemNumbers=this.getItemNumbers(this.data)},methods:{getItemNumbers(e){return e.reduce((e,t)=>t.children?e+t.children.length:e+1,0)},search(){const{keyword:e,data:t}=this,r=e&&e.trim().toLowerCase();let c=o["a"].map(t,e=>({...e}));r&&(c=o["a"].filter(c,e=>e.title.toLowerCase().includes(r))),this.itemNumbers=this.getItemNumbers(c),this.$emit("search",c)}}},h=r("6b0d"),d=r.n(h);const p=d()(u,[["render",s]]);t["a"]=p},"3f36":function(e){e.exports=JSON.parse('[{"href":"#/article/useless-files-webpack-plugin","title":"使用webpack-如何清理无用源文件","group":"开发辅助","desc":"项目随着时间的推移不断更新迭代，或者新项目从老项目迁移开发，项目变得越来越臃肿，无形中就存在了很多无用的文件. 大型的项目，如果仅靠人肉去识别，难度相当大，那么怎样能够自动检测哪些是无用的文件呢？","time":"2022-08-21"},{"href":"#/article/vue-project-api-design","title":"Vue大型项目如何统一管理API","group":"项目管理","desc":"1.引入axios --\x3e 2.全局配置 --\x3e 3.实例配置 --\x3e 4.注入Vue原型 --\x3e 5.实例调用 --\x3e 6.请求拦截 --\x3e 7.请求 --\x3e 8.响应 --\x3e 9.响应拦截 --\x3e 10.数据解析 --\x3e 11.响应提示","time":"2022-08-21"},{"href":"#/article/async-component-dialog","title":"异步组件之动态弹窗","group":"动态弹窗","desc":"在大型项目中，我们可能需要拆分应用为更小的块，并仅在需要时再从服务器加载相关组件。弹窗几乎是项目中比不可少的一部分，它就是经典的异步组件需求。同时，它也是动态的，需要的时候通过方法来调用执行。 ","time":"2022-08-21"},{"href":"#/article/flow-js","title":"一个非常精简灵活的流程控制工具库","group":"流程控制","desc":"前段时间，由于业务需求，无意中在网上看到一篇原腾讯高级工程师张镇圳的文章[《一个只有99行代码的JS流程框架》](https://www.qcloud.com/community/article/537217001491374183)其中感悟颇深，而且正好满足现实中的需求。","time":"2022-08-21"},{"href":"#/article/array-tree","title":"让你像数组一样操作Tree树","group":"Tree树","desc":"树是一种非顺序数据结构，一种分层数据的抽象模型，它对于存储需要快速查找的数据非常有用。","time":"2022-08-21"},{"href":"#/article/simple-step-controller","title":"简易步骤控制器","group":"流程控制","desc":"不少复杂函数中都存在一个问题，逻辑步骤或分支较多，很多时候我们都采用if else/Promise等来处理，而有些场景我们不得不额外把一部分逻辑封装成一个函数待以重用。","time":"2022-08-21"},{"href":"#/article/javascript-data-structure-and-algorithm","title":"Javascript常用的数据结构与算法","group":"数据与算法","desc":"本文主要讲述Javascript中实现栈、队列、链表、集合、字典、散列表、树、图等数据结构，以及各种排序和搜索算法，包括冒泡排序、选择排序、插入排序、归并排序、快速排序、顺序搜索、二分搜索，最后还介绍了动态规划和贪心算法等常用的高级算法及相关知识。","time":"2022-08-21"},{"href":"articles/treemap-charts","title":"矩形树图treeMap的简单实现","group":"数据与算法","desc":"","time":"2022-08-21"},{"href":"articles/json-from-data-path","title":"通过path路径字符串还原json结构","group":"数据与算法","desc":"","time":"2022-08-21"},{"href":"#/article/webpack-loader-20220725","title":"自定义webpack-loader","group":"前端辅助","desc":"","time":"2022-08-21"},{"href":"#/article/webpack-rollup-2021","title":"webpack打包原理分析","group":"前端辅助","desc":"","time":"2022-08-21"},{"href":"#/article/git-advance-20220725","title":"各种场景下的Git管理方法","group":"前端辅助","desc":"","time":"2022-08-21"},{"href":"#/article/webpack-loader-20220725","title":"自动化部署探讨","group":"开发部署","desc":"","time":"2022-08-21"},{"href":"#/article/ssr-2022","title":"服务端渲染SSR","group":"开发部署","desc":"","time":"2022-08-21"}]')},edd2:function(e,t,r){"use strict";r("2681")},f382:function(e,t,r){"use strict";r("13d5");const c={from:function(e){var t=[];if(!e||!e.length)return t;var r={},c=e=>r[e]||(r[e]=[]);return e.forEach(e=>{e.children=c(e.id),e.parentId?c(e.parentId).push(e):t.push(e)}),t},each:function(e,t,r){r=r||"deep";var c=(e,t)=>{var r,c,a,i=[].concat(e);while(i.length){if(r=i.shift(),c=r.children,a=t&&t(r),!1===a)break;Array.isArray(c)&&[].push.apply(i,c)}},a=(e,t)=>{let c,a=[].concat(e);const i=e=>{e&&("deep"===r&&(c=t&&t(e)),!1!==c&&Array.isArray(e.children)&&e.children.forEach(e=>i(e)),"post"===r&&(c=t&&t(e)))};a.forEach(e=>i(e))};"wide"===r?c(e,t):a(e,t)},maxDepth:function(e){let t=[],r=[].concat(e);const c=(e,r)=>{e&&(t[r]||(t[r]=[]),t[r].push(e.val),Array.isArray(e.children)&&e.children.forEach(e=>c(e,r+1)))};return r.forEach(e=>c(e,0)),t.length},map:function(e,t){var r=[].concat(e),c=(e,t)=>e.map(r=>{let a=t.call(e,r);return Array.isArray(r.children)&&r.children.length&&(a.children=c(r.children,t)),a});return c(r,t)},find:function(e,t){var r=null;return this.each(e,c=>{if(t.call(e,c))return r=c,!1}),r},filter:function(e,t){var r=[].concat(e),c=(e,t)=>e.filter(r=>{let a=t.call(e,r);return Array.isArray(r.children)&&r.children.length?(r.children=c(r.children,t),r.children.length||a):a});return c(r,t)},some:function(e,t){var r=!1;return this.each(e,c=>{if(t.call(e,c))return r=!0,!1}),r},every:function(e,t){var r=!0;return this.each(e,c=>{if(!t.call(e,c))return r=!1,!1}),r},flat:function(e,t,r){var c=[],a=function(e,r){t&&t.apply(e,[e,r]),c.push(e)};return this.each(e,a,r),c},reduce:function(e,t,r){if(!t)return e;var c=function(e,c){for(var a in t)e[a]=e[a]||[],e[a].push(e[t[a]]);r&&r.apply(this,arguments),c&&c.length&&c.forEach((function(r){for(var c in t)r[c]=[].concat(e[c])}))};this.each(e,c)},completer:function(e,t){if(!t)return[];if(!Array.isArray(e)||!e.length)return[];var r=[],c={},a=t.reduce((e,t)=>(e[t.id]=t,e),{}),i=function(e){var t=a[e];t&&!c[e]&&(c[e]=1,r.push(t),i(t.parentId))};return e.forEach((function(e){i(e)})),r},append:function(e,t){if(void 0!=e&&Array.isArray(t)&&t.length){var r=this.find(t=>t.id===e);r&&(r.children||(r.children=[]),[].push.apply(r.children,t))}}};t["a"]=c}}]);