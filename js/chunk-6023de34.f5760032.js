(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6023de34","chunk-2d0a3c6d"],{"042e":function(e){e.exports=JSON.parse('[{"id":"app999","title":"千股千评","enable":true,"sourceType":"Link","sourceUrl":"http://data.eastmoney.com/stockcomment/","desc":"载数据由上海东方财富证券投资咨询有限公司提供，仅供参考，不对您构成任何投资建议，据此操作，风险自担。每日盘后更新。"},{"id":"app1000","title":"股东分析","enable":true,"sourceType":"Link","sourceUrl":"https://data.eastmoney.com/gdfx/","desc":"东方财富网、牛散、仓位、市值、平均涨跌幅、持股统计、股东名单、新进、持股增加、持股减少、十大流通股东、十大股东、最新持股。"},{"id":"app1001","title":"前端工程Cli","enable":false,"sourceType":"Object","sourceUrl":"","desc":"我们熟知的vue-cli，create-react-app都是前端圈最知名、最流行、最大众化的脚手架工具，但是我们公司内部开发时一般会对其再封装一些自己的库或者组件等，生成自己的脚手架工具，但大多搭建脚手架的文章都比较复杂，很多时候我们想要就是通过简单的命令能够比较方便的下载到我们的脚手架代码。"},{"id":"app1002","title":"Element UI","enable":true,"sourceType":"Link","sourceUrl":"https://element.eleme.cn/#/zh-CN/component/installation","desc":"Element，一套为开发者、设计师和产品经理准备的基于 Vue 2.0 的桌面端组件库"},{"id":"app1003","title":"小蜜蜂","enable":false,"sourceType":"Object","sourceUrl":"","desc":"小蜜蜂通用爬虫，通过一些列配置可以动态生成爬虫实例，可实现数据保存以及详情展示"},{"id":"app1004","title":"大海捞金","enable":false,"sourceType":"Object","sourceUrl":"","desc":"额定从谷歌、百度、bing等主流搜索引擎作为入口，以搜索关键字展开数据爬取，并循环解析页面，从页面找到符合条件的信息提交保存数据库"},{"id":"app1005","title":"客户邮件系统","enable":false,"sourceType":"Object","sourceUrl":"","desc":"对已有客户进行邮件发送，可群发，包括邮件模板创建，设置复杂发送规则"},{"id":"app1006","title":"Amazon To 4px","enable":false,"sourceType":"Object","sourceUrl":"","desc":"亚马逊订单导出后，转换生成4PX的订单表格，以便快捷管理订单发货"},{"id":"app1007","title":"股票助手","enable":false,"sourceType":"Object","sourceUrl":"","desc":"构建一个股票数据分析工具，每天爬取一定量的TOP排行股票，保存数据库，长期爬取更多股票数据，以有利于分析市场行情"},{"id":"app1008","title":"黄金数据","enable":false,"sourceType":"Object","sourceUrl":"","desc":"定时爬取黄金价格信息，设置规则条件，当符合时发送邮件提醒，以供黄金交易参考"},{"id":"app1009","title":"外贸助手","enable":false,"sourceType":"Object","sourceUrl":"","desc":"集外贸订单管理、客户管理、资源管理、客户资源开发等于一身的助手工具"},{"id":"app10010","title":"Antd design","enable":true,"sourceType":"Link","sourceUrl":"https://ant.design/docs/react/getting-started-cn","desc":"Ant Design React 致力于提供给程序员愉悦的开发体验。"},{"id":"app10011","title":"D2 Admin full","enable":true,"sourceType":"Link","sourceUrl":"https://d2.pub/d2-admin/preview/#/index","desc":"D2Admin 是一个完全 开源免费 的企业中后台产品前端集成方案，使用最新的前端技术栈，小于 60kb 的本地首屏 js 加载，已经做好大部分项目前期准备工作，并且带有大量示例代码，助力管理系统快速开发。"},{"id":"app10012","title":"mavonEditor","enable":true,"sourceType":"Link","sourceUrl":"http://106.15.232.22/","desc":"mavonEditor - A markdown editor based on Vue that supports a variety of personalized features"},{"id":"app10013","title":"文本处理工具","enable":true,"sourceType":"Link","sourceUrl":"http://www.txttool.com/","desc":"txttool成立于2006年，是一个专业的收藏整理多类xxxx资料的网站,本站为个人网站，访客主要是网站建设、网页设计和网络编程开发人员及业余网页爱好者，网站定位于最新的网页制作教程，网站建设指南，网络编程，网页素材下载，网页相关书籍，以及网络安全知识和操作系统知识等。"}]')},"613a":function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("d2-container",{class:{"ui-app-iframe-container":e.isIframe}},[a("div",{staticClass:"ui-page-header",attrs:{slot:"header"},slot:"header"},[a("span",{staticClass:"ui-page-title"},[e._v(e._s(e.title))]),a("span",{staticClass:"ui-page-toolbar"},[a("el-link",{attrs:{icon:"el-icon-delete",underline:!1}},[e._v("删除应用")])],1)]),a("div",{staticClass:"ui-page-body"},[a("div",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticClass:"ui-app-viewport"},[e.isIframe?a("iframe",{ref:"appViewportIframe",staticClass:"ui-app-viewport-iframe",attrs:{src:e.app.sourceUrl,scrolling:"auto"},on:{load:e.onload}}):e._e()])])])},i=[],n=(a("7db0"),a("042e")),r={name:"page1",data:function(){return{app:{},loading:!1}},computed:{isIframe:function(){return"Link"===this.app.sourceType},title:function(){return this.app.title||"应用详情"}},created:function(){var e=this.$route.params.id,t=n.find((function(t){return t.id===e}));this.app=t},mounted:function(){},methods:{onload:function(){this.loading=!1}}},c=r,o=(a("62cd"),a("2877")),l=Object(o["a"])(c,s,i,!1,null,"2f82df2c",null);t["default"]=l.exports},"62cd":function(e,t,a){"use strict";var s=a("ee98"),i=a.n(s);i.a},ee98:function(e,t,a){}}]);