(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-50391f79"],{"129f":function(e,t){e.exports=Object.is||function(e,t){return e===t?0!==e||1/e===1/t:e!=e&&t!=t}},"339e":function(e,t,n){},"36ad":function(e,t,n){"use strict";n("ac1f"),n("841c");var r=n("f2bf"),c={class:"page-header"},i={class:"page-title"},a={class:"page-count"};function o(e,t,n,o,u,s){return Object(r["K"])(),Object(r["n"])("header",c,[Object(r["o"])("h1",i,Object(r["X"])(n.title),1),Object(r["jb"])(Object(r["o"])("input",{"onUpdate:modelValue":t[0]||(t[0]=function(e){return u.keyword=e}),type:"input",class:"page-search-input",placeholder:"Search",onKeypress:t[1]||(t[1]=Object(r["kb"])((function(){return s.search&&s.search.apply(s,arguments)}),["enter"]))},null,544),[[r["eb"],u.keyword]]),Object(r["o"])("div",a,Object(r["X"])(u.itemNumbers)+" items",1)])}n("4de4"),n("caad"),n("d81d"),n("13d5"),n("2532"),n("498a");var u=n("5530"),s=(n("99af"),n("7db0"),n("4160"),n("159b"),{from:function(e){var t=[];if(!e||!e.length)return t;var n={},r=function(e){return n[e]||(n[e]=[])};return e.forEach((function(e){e.children=r(e.id),e.parentId?r(e.parentId).push(e):t.push(e)})),t},each:function(e,t,n){n=n||"deep";var r=function(e,t){var n,r,c,i=[].concat(e);while(i.length){if(n=i.shift(),r=n.children,c=t&&t(n),!1===c)break;Array.isArray(r)&&[].push.apply(i,r)}},c=function(e,t){var r,c=[].concat(e),i=function e(c){c&&("deep"===n&&(r=t&&t(c)),!1!==r&&Array.isArray(c.children)&&c.children.forEach((function(t){return e(t)})),"post"===n&&(r=t&&t(c)))};c.forEach((function(e){return i(e)}))};"wide"===n?r(e,t):c(e,t)},maxDepth:function(e){var t=[],n=[].concat(e),r=function e(n,r){n&&(t[r]||(t[r]=[]),t[r].push(n.val),Array.isArray(n.children)&&n.children.forEach((function(t){return e(t,r+1)})))};return n.forEach((function(e){return r(e,0)})),t.length},map:function(e,t){var n=[].concat(e),r=function e(t,n){return t.map((function(r){var c=n.call(t,r);return Array.isArray(r.children)&&r.children.length&&(c.children=e(r.children,n)),c}))};return r(n,t)},find:function(e,t){var n=null;return this.each(e,(function(r){if(t.call(e,r))return n=r,!1})),n},filter:function(e,t){var n=[].concat(e),r=function e(t,n){return t.filter((function(r){var c=n.call(t,r);return Array.isArray(r.children)&&r.children.length?(r.children=e(r.children,n),r.children.length||c):c}))};return r(n,t)},some:function(e,t){var n=!1;return this.each(e,(function(r){if(t.call(e,r))return n=!0,!1})),n},every:function(e,t){var n=!0;return this.each(e,(function(r){if(!t.call(e,r))return n=!1,!1})),n},flat:function(e,t,n){var r=[],c=function(e,n){t&&t.apply(e,[e,n]),r.push(e)};return this.each(e,c,n),r},reduce:function(e,t,n){if(!t)return e;var r=function(e,r){for(var c in t)e[c]=e[c]||[],e[c].push(e[t[c]]);n&&n.apply(this,arguments),r&&r.length&&r.forEach((function(n){for(var r in t)n[r]=[].concat(e[r])}))};this.each(e,r)},completer:function(e,t){if(!t)return[];if(!Array.isArray(e)||!e.length)return[];var n=[],r={},c=t.reduce((function(e,t){return e[t.id]=t,e}),{}),i=function e(t){var i=c[t];i&&!r[t]&&(r[t]=1,n.push(i),e(i.parentId))};return e.forEach((function(e){i(e)})),n},append:function(e,t){if(void 0!=e&&Array.isArray(t)&&t.length){var n=this.find((function(t){return t.id===e}));n&&(n.children||(n.children=[]),[].push.apply(n.children,t))}}}),d=s,l={props:{title:String,data:Array},data:function(){return{keyword:"",itemNumbers:0}},created:function(){this.itemNumbers=this.getItemNumbers(this.data)},methods:{getItemNumbers:function(e){return e.reduce((function(e,t){return t.children?e+t.children.length:e+1}),0)},search:function(){var e=this.keyword,t=this.data,n=e&&e.trim().toLowerCase(),r=d.map(t,(function(e){return Object(u["a"])({},e)}));n&&(r=d.filter(r,(function(e){return e.title.toLowerCase().includes(n)}))),this.itemNumbers=this.getItemNumbers(r),this.$emit("search",r)}}};l.render=o;t["a"]=l},"841c":function(e,t,n){"use strict";var r=n("c65b"),c=n("d784"),i=n("825a"),a=n("1d80"),o=n("129f"),u=n("577e"),s=n("dc4a"),d=n("14c3");c("search",(function(e,t,n){return[function(t){var n=a(this),c=void 0==t?void 0:s(t,e);return c?r(c,t,n):new RegExp(t)[e](u(n))},function(e){var r=i(this),c=u(e),a=n(t,r,c);if(a.done)return a.value;var s=r.lastIndex;o(s,0)||(r.lastIndex=0);var l=d(r,c);return o(r.lastIndex,s)||(r.lastIndex=s),null===l?-1:l.index}]}))},"935f":function(e,t,n){"use strict";n("339e")},"940c":function(e){e.exports=JSON.parse('[{"id":"DevDocs","title":"DevDocs","enable":true,"sourceType":"Link","sourceUrl":"https://devdocs.io/","desc":"devdocs 是当今比较流行的编程语言的文档集合，包含JavaScript、HTML、CSS、React、Vue.js、TypeScript等。\\n DevDocs combines multiple API documentations in a fast, organized, and searchable interface. "},{"id":"Vue.js","title":"Vue.js","enable":true,"sourceType":"Link","sourceUrl":"https://v3.cn.vuejs.org/","desc":"Vue (读音 /vjuː/，类似于 view) 是一套用于构建用户界面的渐进式框架。与其它大型框架不同的是，Vue 被设计为可以自底向上逐层应用。Vue 的核心库只关注视图层，不仅易于上手，还便于与第三方库或既有项目整合。另一方面，当与现代化的工具链以及各种支持类库结合使用时，Vue 也完全能够为复杂的单页应用提供驱动。"},{"id":"React.js","title":"React.js","enable":true,"sourceType":"Link","sourceUrl":"https://reactjs.org/","desc":"用于构建用户界面的 JavaScript 库 \\n React 使创建交互式 UI 变得轻而易举。为你应用的每一个状态设计简洁的视图，当数据变动时 React 能高效更新并渲染合适的组件。"},{"id":"30SecondsOfCode","title":"30 Seconds Of Code","enable":true,"sourceType":"Link","sourceUrl":"https://www.30secondsofcode.org/","desc":"30 Seconds Of Code是一个聚合代码片段的网站，可以帮助我们开发过程中遇到的常见问题。它支持JavaScript、React、Node.js、Git、CSS、Python 等语言。"},{"id":"CleanCodeJavaScript","title":"Clean Code JavaScript","enable":true,"sourceType":"Link","sourceUrl":"https://github.com/ryanmcdermott/clean-code-javascript","desc":"clean-code-javascrip 综合了作者在使用 JavaScript 过程中的编码经验。它可以帮助我们学习编写易于理解、易于重用、提高代码效率的JavaScript代码。"},{"id":"WebDeveloperRoadMap","title":"Web Developer Road Map","enable":true,"sourceType":"Link","sourceUrl":"https://roadmap.sh/","desc":"developer-roadmap 是一个为开发人员准备的学习路线图，他提供了学习编程中每个阶段的详细信息，并且每年都会进行更新。除了有前端的路线路，还包含后端、Android、Java、Python、Go等不同方向的学习路线图。"},{"id":"Hexo","title":"Hexo","enable":true,"sourceType":"Link","sourceUrl":"https://hexo.io/","desc":"Hexo 是一套快速、简洁且高效的博客框架"},{"id":"Vite","title":"Vite","enable":true,"sourceType":"Link","sourceUrl":"https://vitejs.cn/","desc":"下一代前端开发与构建工具 \\n 在浏览器支持 ES 模块之前，JavaScript 并没有提供的原生机制让开发者以模块化的方式进行开发。这也正是我们对 “打包” 这个概念熟悉的原因：使用工具抓取、处理并将我们的源码模块串联成可以在浏览器中运行的文件。"},{"id":"Webpack","title":"Webpack","enable":true,"sourceType":"Link","sourceUrl":"https://webpack.docschina.org/","desc":"本质上，webpack 是一个用于现代 JavaScript 应用程序的 静态模块打包工具。当 webpack 处理应用程序时，它会在内部从一个或多个入口点构建一个 依赖图(dependency graph)，然后将你项目中所需的每一个模块组合成一个或多个 bundles，它们均为静态资源，用于展示你的内容。"},{"id":"ElementUI","title":"Element UI","enable":true,"sourceType":"Link","sourceUrl":"https://element.eleme.cn/#/zh-CN/component/installation","desc":"Element，一套为开发者、设计师和产品经理准备的基于 Vue 2.0 的桌面端组件库"},{"id":"AntDesign","title":"Ant Design","enable":true,"sourceType":"Link","sourceUrl":"https://ant.design/index-cn","desc":"Ant Design 企业级产品设计体系，创造高效愉悦的工作体验, 致力于提供给程序员愉悦的开发体验。"},{"id":"CodePen","title":"CodePen","enable":true,"sourceType":"Link","sourceUrl":"https://codepen.io/","desc":"CodePen is a social development environment for front-end designers and developers. Build and deploy a website, show off your work, build test cases to learn and debug, and find inspiration."},{"id":"JS1k","title":"JS1k","enable":true,"sourceType":"Link","sourceUrl":"http://js1k.com/","desc":"The JavaScript code golfing competition 大名鼎鼎的js1K，1K字节以内的Javascript代码，实现一个酷炫的动画、特效、小游戏之类的。官网从2010年开始征集参赛作品，现在已经办了７年了，还在办。"},{"id":"CanIuse","title":"Can I use","enable":true,"sourceType":"Link","sourceUrl":"https://caniuse.com/","desc":"CAN I USE，相信每个前端同学都不陌生，查询浏览器兼容性的利器。"},{"id":"JSHint","title":"JSHint","enable":true,"sourceType":"Link","sourceUrl":"http://www.jshint.com/","desc":"一个在线JS检测工具，可以检测JavaScript代码中的错误和潜在问题。"},{"id":"D2Adminfull","title":"D2 Admin full","enable":true,"sourceType":"Link","sourceUrl":"https://d2.pub/d2-admin/preview/#/index","desc":"D2Admin 是一个完全 开源免费 的企业中后台产品前端集成方案，使用最新的前端技术栈，小于 60kb 的本地首屏 js 加载，已经做好大部分项目前期准备工作，并且带有大量示例代码，助力管理系统快速开发。"},{"id":"mavonEditor","title":"mavonEditor","enable":true,"sourceType":"Link","sourceUrl":"https://106.15.232.22/","desc":"mavonEditor - A markdown editor based on Vue that supports a variety of personalized features"},{"id":"WangEditor","title":"Wang Editor","enable":true,"sourceType":"Link","sourceUrl":"https://www.wangeditor.com/demo/index.html","desc":"wangEditor5 - 开源 Web 富文本编辑器，开箱即用，配置简单。2022.04.11 正式发布 v5 版本。"},{"id":"txttool","title":"txttool文本处理工具","enable":true,"sourceType":"Link","sourceUrl":"http://www.txttool.com/","desc":"txttool成立于2006年，是一个专业的收藏整理多类xxxx资料的网站,本站为个人网站，访客主要是网站建设、网页设计和网络编程开发人员及业余网页爱好者，网站定位于最新的网页制作教程，网站建设指南，网络编程，网页素材下载，网页相关书籍，以及网络安全知识和操作系统知识等。"},{"id":"SemanticUI","title":"Semantic UI","enable":true,"sourceType":"Link","sourceUrl":"https://semantic-ui.com/","desc":"Semantic is a development framework that helps create beautiful, responsive layouts using human-friendly HTML."}]')},e082:function(e,t,n){"use strict";n.r(t);n("ac1f"),n("841c");var r=n("f2bf"),c={class:"page-apps"},i={class:"blog-container"},a={class:"apps-list"},o=["href"];function u(e,t,n,u,s,d){var l=Object(r["T"])("PageHeader"),p=Object(r["T"])("a-card-meta"),f=Object(r["T"])("a-card"),h=Object(r["T"])("a-col"),b=Object(r["T"])("a-row");return Object(r["K"])(),Object(r["n"])("div",c,[Object(r["o"])("div",i,[Object(r["r"])(l,{title:"资源",data:u.data,onSearch:u.search},null,8,["data","onSearch"]),Object(r["o"])("div",a,[Object(r["r"])(b,{gutter:20},{default:Object(r["ib"])((function(){return[(Object(r["K"])(!0),Object(r["n"])(r["b"],null,Object(r["R"])(u.viewData,(function(e){return Object(r["K"])(),Object(r["l"])(h,{span:6,key:e},{default:Object(r["ib"])((function(){return[Object(r["r"])(f,{hoverable:""},{default:Object(r["ib"])((function(){return[Object(r["r"])(p,null,{title:Object(r["ib"])((function(){return[Object(r["o"])("a",{class:Object(r["A"])(["app-title",{disabled:!e.enable}]),target:"_blank",href:e.enable?e.sourceUrl:"javascript:void(0)"},Object(r["X"])(e.title),11,o)]})),description:Object(r["ib"])((function(){return[Object(r["q"])(Object(r["X"])(e.desc),1)]})),_:2},1024)]})),_:2},1024)]})),_:2},1024)})),128))]})),_:1})])])])}var s=n("36ad"),d=n("940c"),l={components:{PageHeader:s["a"]},setup:function(){var e=Object(r["P"])(d),t=function(t){e.value=t};return{data:d,viewData:e,search:t}}};n("935f");l.render=u;t["default"]=l}}]);