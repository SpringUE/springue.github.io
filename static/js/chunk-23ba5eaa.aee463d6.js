(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-23ba5eaa"],{"316f":function(e,n,t){"use strict";t.r(n);var o=t("f2bf");const a={class:"blog-doc-component"},l=Object(o["createElementVNode"])("h1",null,"安装npm包时出现依赖树错误的解决办法",-1),c=Object(o["createElementVNode"])("h2",{id:"shi-li",tabindex:"-1"},[Object(o["createElementVNode"])("a",{class:"header-anchor",href:"#shi-li"},"¶"),Object(o["createTextVNode"])(" 示例")],-1),r=Object(o["createElementVNode"])("pre",null,[Object(o["createElementVNode"])("code",{class:"language-shell"},'npm install webpack-bundle-analyzer --save-dev\n\nnpm WARN config global `--global`, `--local` are deprecated. Use `--location=global` instead.\nnpm ERR! code ERESOLVE\nnpm ERR! ERESOLVE could not resolve\nnpm ERR! \nnpm ERR! While resolving: less-loader@5.0.0\nnpm ERR! Found: less@4.1.3\nnpm ERR! node_modules/less\nnpm ERR!   dev less@"^4.1.3" from the root project\nnpm ERR! \nnpm ERR! Could not resolve dependency:\nnpm ERR! peer less@"^2.3.1 || ^3.0.0" from less-loader@5.0.0\nnpm ERR! node_modules/less-loader\nnpm ERR!   dev less-loader@"5.0.0" from the root project\nnpm ERR!\nnpm ERR! Conflicting peer dependency: less@3.13.1\nnpm ERR! node_modules/less\nnpm ERR!   peer less@"^2.3.1 || ^3.0.0" from less-loader@5.0.0\nnpm ERR!   node_modules/less-loader\nnpm ERR!     dev less-loader@"5.0.0" from the root project\nnpm ERR!\nnpm ERR! Fix the upstream dependency conflict, or retry\nnpm ERR! this command with --force, or --legacy-peer-deps\nnpm ERR! to accept an incorrect (and potentially broken) dependency resolution.\nnpm ERR!\nnpm ERR! See C:\\Users\\jay\\AppData\\Local\\npm-cache\\eresolve-report.txt for a full report.\n\nnpm ERR! A complete log of this run can be found in:\nnpm ERR!     C:\\Users\\jay\\AppData\\Local\\npm-cache\\_logs\\2022-08-27T14_31_12_311Z-debug-0.log\n')],-1),p=Object(o["createStaticVNode"])('<h2 id="yuan-yin-fen-xi" tabindex="-1"><a class="header-anchor" href="#yuan-yin-fen-xi">¶</a> 原因分析</h2><p>可见，报错提示：无法解决该依赖(Could not resolve dependency)，与该less版本冲突(Conflicting peer dependency: less@3.13.1).<br> 并告知：Fix the upstream dependency conflict, or retry this command with --force, or --legacy-peer-deps to accept an incorrect (and potentially broken) dependency resolution.</p><p>使用npm7 及以上的版本，对等依赖问题视为错误，而版本npm6中通常只是的警告而已。 最直接的方式就是使用–legacy-peer-deps</p><h2 id="fang-fa-yi" tabindex="-1"><a class="header-anchor" href="#fang-fa-yi">¶</a> 方法一</h2><p>npm install --legacy-peer-deps npm install webpack-bundle-analyzer --save-dev --legacy-peer-deps</p><p>除此以外，还可以将其设置为更永久的配置选项:<br> npm config set legacy-peer-deps true</p><h2 id="fang-fa-er" tabindex="-1"><a class="header-anchor" href="#fang-fa-er">¶</a> 方法二</h2><p>降级到npm6版本</p><p>典型表单</p>',9),s=Object(o["createElementVNode"])("pre",null,[Object(o["createElementVNode"])("code",{class:"language-html"},'<template>\n  <XForm ref="test" :schema="test.schema" v-model="test.model" />\n</template>\n\n<script>\nexport default {\n  data(vm) {\n    return {\n      test: {\n        schema: [\n          {\n            label: "姓名",\n            field: "name",\n            editor: {\n              component: \'a-input\',\n            }\n          },\n          {\n            label: "性别",\n            field: "sex",\n            editor: {\n              component: \'a-select\',\n              props: {\n                options: [\n                    { label: "男", value: "man" },\n                    { label: "女", value: "women" },\n                  ],\n              }\n            }\n          },\n          {\n            label: "年龄",\n            field: "age",\n            offset: 0,\n            editor: {\n              component: \'a-input\'\n            }\n          },\n        ],\n        model: {\n          name: "",\n          sex: "man",\n          age: null,\n        },\n      },\n    };\n  }\n}\n<\/script>\n')],-1);function d(e,n,t,d,m,i){const R=Object(o["resolveComponent"])("code-viewer");return Object(o["openBlock"])(),Object(o["createElementBlock"])("section",a,[l,c,Object(o["createVNode"])(R,null,{default:Object(o["withCtx"])(()=>[r]),_:1}),p,Object(o["createVNode"])(R,null,{default:Object(o["withCtx"])(()=>[s]),_:1})])}var m=t("b9a6"),i=t.n(m);const R={},f=i()(R,[["render",d]]);n["default"]=f},b9a6:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=(e,n)=>{const t=e.__vccOpts||e;for(const[o,a]of n)t[o]=a;return t}}}]);