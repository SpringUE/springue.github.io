(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0de635dc"],{"36ad":function(e,t,r){"use strict";var i=r("f2bf");const a={class:"page-header"},c={class:"page-title"},l={key:0,class:"page-search-box"},n={class:"page-count"};function s(e,t,r,s,h,o){const u=Object(i["U"])("a-input-search");return Object(i["L"])(),Object(i["n"])("header",a,[Object(i["o"])("h1",c,Object(i["Y"])(r.title),1),r.showSearch?(Object(i["L"])(),Object(i["n"])("div",l,[Object(i["r"])(u,{size:"large",class:"page-search-input",value:h.keyword,"onUpdate:value":t[0]||(t[0]=e=>h.keyword=e),placeholder:"Search",onSearch:o.search},null,8,["value","onSearch"]),Object(i["o"])("div",n,Object(i["Y"])(h.itemNumbers)+" items",1)])):Object(i["m"])("",!0)])}r("13d5");var h=r("f382"),o={props:{title:String,data:Array,showSearch:{type:Boolean,default:!0}},data(){return{keyword:"",itemNumbers:0}},created(){this.itemNumbers=this.getItemNumbers(this.data)},methods:{getItemNumbers(e){return e.reduce((e,t)=>t.children?e+t.children.length:e+1,0)},search(){const{keyword:e,data:t}=this,r=e&&e.trim().toLowerCase();let i=h["a"].map(t,e=>({...e}));r&&(i=h["a"].filter(i,e=>e.title.toLowerCase().includes(r)||e.desc&&e.desc.toLowerCase().includes(r)||e.description&&e.description.toLowerCase().includes(r))),this.itemNumbers=this.getItemNumbers(i),this.$emit("search",i)}}},u=(r("e428"),r("6b0d")),f=r.n(u);const d=f()(o,[["render",s]]);t["a"]=d},"4b79":function(e,t,r){"use strict";r("f4cb")},"4ba3":function(e,t,r){"use strict";r.r(t);var i=r("f2bf");const a={class:"page-file-articles"},c={class:"blog-container"},l={class:"file-article-list"},n=["href"];function s(e,t,r,s,h,o){const u=Object(i["U"])("PageHeader"),f=Object(i["U"])("a-col"),d=Object(i["U"])("a-row"),b=Object(i["U"])("a-card");return Object(i["L"])(),Object(i["n"])("div",a,[Object(i["o"])("div",c,[Object(i["r"])(u,{title:"归档",data:s.data,onSearch:s.search},null,8,["data","onSearch"]),Object(i["o"])("div",l,[(Object(i["L"])(!0),Object(i["n"])(i["b"],null,Object(i["S"])(s.viewData,e=>(Object(i["L"])(),Object(i["l"])(b,{key:e,class:"article-list-item",bordered:!1,title:e.title},{default:Object(i["jb"])(()=>[Object(i["r"])(d,{gutter:20},{default:Object(i["jb"])(()=>[(Object(i["L"])(!0),Object(i["n"])(i["b"],null,Object(i["S"])(e.children,e=>(Object(i["L"])(),Object(i["l"])(f,{span:8,xs:24,key:e},{default:Object(i["jb"])(()=>[Object(i["o"])("a",{href:e.href,target:"_blank",class:"article-title"},Object(i["Y"])(e.title),9,n)]),_:2},1024))),128))]),_:2},1024)]),_:2},1032,["title"]))),128))])])])}var h=r("36ad"),o=r("ea1c"),u={components:{PageHeader:h["a"]},setup(){const e=Object(i["Q"])(o),t=t=>{e.value=t};return{data:o,viewData:e,search:t}}},f=(r("4b79"),r("6b0d")),d=r.n(f);const b=d()(u,[["render",s]]);t["default"]=b},"8c49":function(e,t,r){},e428:function(e,t,r){"use strict";r("8c49")},ea1c:function(e){e.exports=JSON.parse('[{"title":"2021","children":[{"href":"#/article/ssr-2022","title":"服务端渲染SSR"},{"href":"#/article/git-advance-20220725","title":"各种场景下的Git管理方法"}]},{"title":"2020","children":[{"href":"#/article/flow-js","title":"一个非常精简灵活的流程控制工具库"},{"href":"#/article/vue-project-api-design","title":"Vue大型项目如何统一管理API"}]},{"title":"2019","children":[{"href":"#/article/some-data-structure-and-algorithm","title":"前端常用的数据结构与算法"},{"href":"#/article/array-tree","title":"让你像数组一样操作Tree树"}]},{"title":"2018","children":[{"href":"#/article/font-awesome","title":"不容错过的图标样式-FONT-AWESOME"},{"href":"#/article/one-command-deployment","title":"这里有你不知道的正则表达式"},{"href":"#/article/google-user-experience","title":"Google式用户体验的十大内在原则"}]},{"title":"2017","children":[{"href":"#/article/es6-feature-2017","title":"总结ES6最有用的的十大特性"},{"href":"#/article/react-bug-2017","title":"吐槽出入React踩过的“坑”"},{"href":"#/article/div-css-layout","title":"div css布局有哪些技巧"},{"href":"#/article/tag-plugins","title":"谈谈div+css布局命名、语义化、结构化的开发经验？"},{"href":"#/article/fis3-rem","title":"移动端屏幕适配 fis3+rem方案"},{"href":"#/article/configuration","title":"百度团队前端自动化工程工具fis-parser-node-sass插件安装失败的解决方案"}]},{"title":"2016","children":[{"href":"#/article/troubleshooting","title":"总结移动端开发的一些问题"},{"href":"#/article/commands","title":"html头文件meta设置缓存"},{"href":"#/article/contributing","title":"canvas刮刮卡在三星s3和一些android4.1系统的手机上不能使用的问题"}]},{"title":"2015","children":[{"href":"#/article/migration","title":"如何在PS,AI上直接使用FONTAWESOME图标？"},{"href":"#/article/github-pages","title":"深入理解JavaScript的闭包特性 如何给循环中的对象添加事件"},{"href":"#/article/troubleshooting","title":"JQuery UI datepicker 参数详解"},{"href":"#/article/migration","title":"滚动条宽度到底是多少？"}]},{"title":"2014","children":[{"href":"#/article/asset-folders","title":"可扩展的模块化架构的CSS"},{"href":"#/article/github-pages","title":"你认为你懂javascript吗?"},{"href":"#/article/permalinks","title":"jQuery全屏滚动插件fullPage.js"},{"href":"#/article/github-pages","title":"跟着8张思维导图学习javascript"},{"href":"#/article/contributing","title":"手机web——自适应网页设计（html/css控制）"},{"href":"#/article/commands","title":"图片原理与优化"},{"href":"#/article/data-files","title":"CSS 实现表格内容超出显示省略号"},{"href":"#/article/server","title":"完美解决多行文字垂直居中"},{"href":"#/article/generating","title":"IE label中有图片 无法选中radio？其实可以完美解决"},{"href":"#/article/contributing","title":"jQuery prop和attr有什么区别？"},{"href":"#/article/server","title":"div层被flash遮挡的解决办法"},{"href":"#/article/contributing","title":"html5在移动端的屏幕适应性问题"},{"href":"#/article/contributing","title":"web app自适应屏幕方案探讨"},{"href":"#/article/github-pages","title":"js跨域怎么解决？"},{"href":"#/article/contributing","title":"三个div横排，中间的div自适应宽度"}]}]')},f382:function(e,t,r){"use strict";r("13d5");const i={from:function(e){var t=[];if(!e||!e.length)return t;var r={},i=e=>r[e]||(r[e]=[]);return e.forEach(e=>{e.children=i(e.id),e.parentId?i(e.parentId).push(e):t.push(e)}),t},each:function(e,t,r){r=r||"deep";var i=(e,t)=>{var r,i,a,c=[].concat(e);while(c.length){if(r=c.shift(),i=r.children,a=t&&t(r),!1===a)break;Array.isArray(i)&&[].push.apply(c,i)}},a=(e,t)=>{let i,a=[].concat(e);const c=e=>{e&&("deep"===r&&(i=t&&t(e)),!1!==i&&Array.isArray(e.children)&&e.children.forEach(e=>c(e)),"post"===r&&(i=t&&t(e)))};a.forEach(e=>c(e))};"wide"===r?i(e,t):a(e,t)},maxDepth:function(e){let t=[],r=[].concat(e);const i=(e,r)=>{e&&(t[r]||(t[r]=[]),t[r].push(e.val),Array.isArray(e.children)&&e.children.forEach(e=>i(e,r+1)))};return r.forEach(e=>i(e,0)),t.length},map:function(e,t){var r=[].concat(e),i=(e,t)=>e.map(r=>{let a=t.call(e,r);return Array.isArray(r.children)&&r.children.length&&(a.children=i(r.children,t)),a});return i(r,t)},find:function(e,t){var r=null;return this.each(e,i=>{if(t.call(e,i))return r=i,!1}),r},filter:function(e,t){var r=[].concat(e),i=(e,t)=>e.filter(r=>{let a=t.call(e,r);return Array.isArray(r.children)&&r.children.length?(r.children=i(r.children,t),r.children.length||a):a});return i(r,t)},some:function(e,t){var r=!1;return this.each(e,i=>{if(t.call(e,i))return r=!0,!1}),r},every:function(e,t){var r=!0;return this.each(e,i=>{if(!t.call(e,i))return r=!1,!1}),r},flat:function(e,t,r){var i=[],a=function(e,r){t&&t.apply(e,[e,r]),i.push(e)};return this.each(e,a,r),i},reduce:function(e,t,r){if(!t)return e;var i=function(e,i){for(var a in t)e[a]=e[a]||[],e[a].push(e[t[a]]);r&&r.apply(this,arguments),i&&i.length&&i.forEach((function(r){for(var i in t)r[i]=[].concat(e[i])}))};this.each(e,i)},completer:function(e,t){if(!t)return[];if(!Array.isArray(e)||!e.length)return[];var r=[],i={},a=t.reduce((e,t)=>(e[t.id]=t,e),{}),c=function(e){var t=a[e];t&&!i[e]&&(i[e]=1,r.push(t),c(t.parentId))};return e.forEach((function(e){c(e)})),r},append:function(e,t){if(void 0!=e&&Array.isArray(t)&&t.length){var r=this.find(t=>t.id===e);r&&(r.children||(r.children=[]),[].push.apply(r.children,t))}}};t["a"]=i},f4cb:function(e,t,r){}}]);