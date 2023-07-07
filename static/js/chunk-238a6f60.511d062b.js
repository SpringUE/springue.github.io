(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-238a6f60"],{b9a6:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=(e,n)=>{const t=e.__vccOpts||e;for(const[r,o]of n)t[r]=o;return t}},fee9:function(e,n,t){"use strict";t.r(n);var r=t("f2bf");const o={class:"blog-doc-component"},c=Object(r["createStaticVNode"])('<h1>markdown文档渲染器</h1><h2 id="bei-jing" tabindex="-1"><a class="header-anchor" href="#bei-jing">¶</a> 背景</h2><p>对于普通技术性博客，API文档的核心共性都是文章展示，一般有多级标题，正文，图片，代码，重点提示，章节导航等几种元素。功能性组件或代码甚至还需要带代码效果展示，比如Element组件库。<br> 对于前几种元素形式，有个markdown-it开源包便可实现，但是后者，则是需要在前面的基础上特定开发。<br> 以下就基于markdown-it开发一个可渲染Vue组件demo的渲染器</p><h2 id="zhun-bei" tabindex="-1"><a class="header-anchor" href="#zhun-bei">¶</a> 准备</h2><ul><li><p>markdown解析<br> markdown-it 解析md文档核心包<br> markdown-it-chain 构建和配置markdown-it解析器的链式调用工具<br> markdown-it-anchor 为 Markdown 文档添加锚点链接<br> markdown-it-container 用于创建自定义的容器块</p></li><li><p>基于markdown解析封装mdLoader</p></li><li><p>封装vueLoader</p></li></ul><h2 id="package.jsonpei-zhi" tabindex="-1"><a class="header-anchor" href="#package.jsonpei-zhi">¶</a> package.json配置</h2><p>引入markdown相关包</p>',7),a=Object(r["createElementVNode"])("pre",null,[Object(r["createElementVNode"])("code",{class:"language-json"},'{\n  "name": "markdown renderer demo",\n  "version": "1.0.0",\n  "private": true,\n  "scripts": {\n    "dev": "vue-cli-service serve --mode development",\n    "build": "vue-cli-service build",\n    "lint": "vue-cli-service lint"\n  },\n  "dependencies": {\n    "vue": "^3.2.36",\n  },\n  "devDependencies": {\n    "@vue/cli-plugin-babel": "~4.5.0",\n    "@vue/cli-plugin-eslint": "~4.5.0",\n    "@vue/cli-service": "~4.5.0",\n    "babel-eslint": "^10.1.0",\n    "element-plus": "^2.2.10",\n    "eslint": "^6.7.2",\n    "eslint-plugin-vue": "^7.0.0-0",\n    "github-markdown-css": "^5.1.0",\n    "highlight.js": "^11.6.0",\n    "less": "^3.0.0",\n    "less-loader": "5.0.0",\n    "markdown-it": "^8.4.1",\n    "markdown-it-anchor": "^8.6.4",\n    "markdown-it-chain": "^1.3.0",\n    "markdown-it-container": "^2.0.0",\n    "transliteration": "^2.3.5",\n    "vue-loader": "^17.0.0",\n    "vue-template-compiler": "^2.7.8"\n  },\n  "eslintConfig": {\n    "root": true,\n    "env": {\n      "node": true\n    },\n    "extends": [\n      "plugin:vue/vue3-essential",\n      "eslint:recommended"\n    ],\n    "parserOptions": {\n      "parser": "babel-eslint"\n    },\n    "rules": {}\n  },\n  "browserslist": [\n    "> 1%",\n    "last 2 versions",\n    "not dead"\n  ],\n  "keywords": [],\n  "description": ""\n}\n')],-1),l=Object(r["createElementVNode"])("h2",{id:"vue.config.jspei-zhi",tabindex:"-1"},[Object(r["createElementVNode"])("a",{class:"header-anchor",href:"#vue.config.jspei-zhi"},"¶"),Object(r["createTextVNode"])(" vue.config.js配置")],-1),s=Object(r["createElementVNode"])("p",null,[Object(r["createTextVNode"])("在configureWebpack接口中添加.md结尾的文件识别处理"),Object(r["createElementVNode"])("br"),Object(r["createTextVNode"])(" 在根目录创建build文件夹，在build里面继续创建md-loader文件夹"),Object(r["createElementVNode"])("br"),Object(r["createTextVNode"])(" 创建md-loader的入口文件index.js")],-1),i=Object(r["createElementVNode"])("pre",null,[Object(r["createElementVNode"])("code",{class:"language-javascript"},"// vue.config.js\nconst path = require('path')\nconst autoImportPlugins = require('./plugins/autoImport')\n\nfunction resolve(dir) {\n  return path.join(__dirname, dir)\n}\n\nmodule.exports = {\n  runtimeCompiler: true,\n  publicPath: './',//默认的'/'是绝对路径，如果不确定在根路径，改成相对路径'./'\n  outputDir: 'dist',\n  assetsDir: 'static',\n  indexPath: 'index.html',\n  configureWebpack: (config) => {\n    if (process.env.NODE_ENV === 'production') {\n      config.mode = 'production'\n    } else {\n      config.mode = 'development'\n    }\n   \n   const plugins = [\n    ...autoImportPlugins\n   ]\n\n    config.plugins.push(...plugins)\n\n    // 添加loader规则\n    config.module.rules.push({\n      test: /\\.md$/,\n      use: [\n        {\n          loader: 'vue-loader',\n          options: {\n            compilerOptions: {\n              preserveWhitespace: false\n            }\n          }\n        },\n        {\n          loader: path.resolve(__dirname, './build/md-loader/index.js')\n        }\n      ]\n    })\n  },\n  lintOnSave: false,\n  productionSourceMap: false,\n  css: {\n    extract: true,\n    sourceMap: false,\n    loaderOptions: {\n      less: {\n        lessOptions: {\n          modifyVars: {\n            'primary-color': '#1DA57A',\n            'link-color': '#1DA57A',\n            'border-radius-base': '2px',\n          },\n          javascriptEnabled: true,\n        },\n      },\n    },\n  },\n  devServer: {\n    open: true,\n    host: '0.0.0.0',\n    port: 8888,\n    hot: true,\n    proxy: {\n    },\n  }\n};\n")],-1),d=Object(r["createElementVNode"])("h2",{id:"chuang-jian-md-loader",tabindex:"-1"},[Object(r["createElementVNode"])("a",{class:"header-anchor",href:"#chuang-jian-md-loader"},"¶"),Object(r["createTextVNode"])(" 创建md-loader")],-1),m=Object(r["createElementVNode"])("p",null,"在上一步中创建了md-loader的入口文件index.js，作为loader的调用入口，代码如下： 包括一个基于markdown解析封装mdLoader以及封装的vueLoader，完成2次处理后返回给webpack",-1),p=Object(r["createElementVNode"])("pre",null,[Object(r["createElementVNode"])("code",{class:"language-javascript"},"// index.js\nvar mdLoader = require('./mdLoader');\nvar vueLoader = require('./vueLoader');\n\nmodule.exports = function(source) {\n  let content = mdLoader(source)\n  return vueLoader(content)\n}\n")],-1),u=Object(r["createElementVNode"])("h2",{id:"mdloadershi-xian",tabindex:"-1"},[Object(r["createElementVNode"])("a",{class:"header-anchor",href:"#mdloadershi-xian"},"¶"),Object(r["createTextVNode"])(" mdLoader实现")],-1),b=Object(r["createElementVNode"])("p",null,[Object(r["createTextVNode"])("引入markdown-it-chain，markdown-it-anchor，markdown-it-container包"),Object(r["createElementVNode"])("br"),Object(r["createTextVNode"])(" 引入transliteration包，其功能是转换中文为拼音，以实现章节导航导航锚点定位名称"),Object(r["createElementVNode"])("br"),Object(r["createTextVNode"])(" 引入fence，重写md的渲染策略，比如上面提到的代码效果展示，图片放大展示等")],-1),h=Object(r["createElementVNode"])("pre",null,[Object(r["createElementVNode"])("code",{class:"language-javascript"},"// mdLoade.js\nconst markdownItChain = require('markdown-it-chain');\nconst anchorPlugin = require('markdown-it-anchor');\nconst mdContainer = require('markdown-it-container');\nconst slugify = require('transliteration').slugify;\nconst overWriteFenceRule = require('./fence');\n\nconst MD = new markdownItChain();\nconst containers = md => {\n  md.use(mdContainer, 'tip');\n  md.use(mdContainer, 'warning');\n};\n\nMD\n  .options\n  .html(true)\n  .end()\n  .plugin('anchor')\n  .use(anchorPlugin, [\n    {\n      level: 2,\n      slugify: slugify,\n      permalink: true,\n      permalinkBefore: true\n    }\n  ])\n  .end()\n  .plugin('containers')\n  .use(containers)\n  .end();\n\nconst md = MD.toMd();\noverWriteFenceRule(md);\n\nmodule.exports = function(source) {\n  const content = md.render(source);\n  return content\n}\n")],-1),g=Object(r["createElementVNode"])("h3",{id:"fencexuan-ran-ce-lue-de-shi-xian",tabindex:"-1"},[Object(r["createElementVNode"])("a",{class:"header-anchor",href:"#fencexuan-ran-ce-lue-de-shi-xian"},"¶"),Object(r["createTextVNode"])(" fence渲染策略的实现")],-1),j=Object(r["createElementVNode"])("p",null,"md.renderer.rules.fence接口提供了自定义处理html入口，如下的md文档：",-1),f=Object(r["createElementVNode"])("pre",null,[Object(r["createElementVNode"])("code",{class:"language-markdown"},'# Vue Demo\n\n```vue:demo\n<template>\n  <XForm ref="test" :schema="test.schema" v-model="test.model" labelWidth="120px" :showSubmitBar="false" />\n</template>\n\n<script>\nexport default {\n  data(vm) {\n    const LocationEditor = {\n      template: `<el-select v-model="location" @change="e => $emit(\'input\', e)"><el-option label="上海" value="shanghai" /><el-option label="北京" value="beijing" /></el-select>`,\n      props: [\'value\'],\n      data() {\n        return {\n          location: \'\'\n        }\n      }\n    }\n\n    return {\n      test: {\n        schema: [\n          {\n            label: "活动名称",\n            field: "name",\n            editor: {\n              component: \'el-input\',\n              props: {\n                placeholder: \'中文名称\',\n              }\n            }\n          },\n          {\n            label: "活动地点",\n            field: "location",\n            editor: {\n              component: LocationEditor\n            }\n          },\n          {\n            label: "活动主题",\n            span: 24,\n            field: "theme",\n            editor: {\n              component: \'el-input\',\n              props: {\n                type: \'textarea\',\n                rows: 4\n              }\n            }\n          },\n        ],\n        model: {\n          name: "",\n          location: "shanghai",\n          theme: \'\',\n        },\n      },\n    };\n  }\n}\n<\/script>\n\\```\n')],-1),v=Object(r["createElementVNode"])("pre",null,[Object(r["createElementVNode"])("code",{class:"language-javascript"},"// fence.js\nconst langs = [\n  'html','vue','javascript','js','typescript','ts','css','sass','scss','less','stylus','json',\n  'go','java','c','c++','sh','yaml','python','py','docker','dockerfile','makefile',\n  'md','markup','markdown','ruby','bash','php','shell'\n]\n\nmodule.exports = md => {\n  const fenceRender = md.renderer.rules.fence;\n  const imageRender = md.renderer.rules.image;\n  const htmlInlineRender = md.renderer.rules.html_inline;\n\n  // 覆盖默认的 fence 渲染策略\n  md.renderer.rules.fence = (tokens, idx, options, env, self) => {\n    const token = tokens[idx];\n    const language = token.info && token.info.trim()\n    const [lang, type] = language && language.split(':')\n\n    if (lang === 'vue' && type === 'demo') {\n      return `<demo-block rawSource=\"${encodeURIComponent(token.content)}\">\n        \x3c!--vue-demo:${token.content}:vue-demo--\x3e\n        <template #source>\n          <code-viewer>\n            <pre v-pre><code class=\"language-html\">${md.utils.escapeHtml(token.content)}</code></pre>\n          </code-viewer>\n        </template>\n      </demo-block>`;\n    }\n\n    if(langs.includes(lang)) {\n      return `<code-viewer><pre v-pre><code class=\"language-${lang}\">${md.utils.escapeHtml(token.content)}</code></pre></code-viewer>`;\n    }\n    \n    return fenceRender(tokens, idx, options, env, self);\n  };\n\n  \n  // 覆盖默认的 image 渲染策略(增加大图查看功能)\n  md.renderer.rules.image = (tokens, idx, ...rest) => {\n    const token = tokens[idx];\n    const content = imageRender(tokens, idx, ...rest)\n    const srcAttr = token.attrs.find(x => x[0] === 'src')\n    const url = srcAttr && srcAttr[1]\n    return `<image-viewer url=\"${url}\">${content}</image-viewer>`;\n  };\n\n  // 覆盖默认的 html_inline 渲染策略(转义HTML标签)\n  md.renderer.rules.html_inline = (tokens, idx, ...rest) => {\n    // const token = tokens[idx];\n    const content = htmlInlineRender(tokens, idx, ...rest)\n    const escapeHtmlContent = md.utils.escapeHtml(content)\n    return escapeHtmlContent\n  };\n};\n\n")],-1),O=Object(r["createElementVNode"])("h2",{id:"vueloadershi-xian",tabindex:"-1"},[Object(r["createElementVNode"])("a",{class:"header-anchor",href:"#vueloadershi-xian"},"¶"),Object(r["createTextVNode"])(" vueLoader实现")],-1),x=Object(r["createElementVNode"])("p",null,[Object(r["createTextVNode"])("经过mdLoader转换之后会得到基本的文档渲染HTML代码，也包含vue的埋点，vueLoader继续处理成可执行的vue组件"),Object(r["createElementVNode"])("br"),Object(r["createTextVNode"])(" 1.生成template"),Object(r["createElementVNode"])("br"),Object(r["createTextVNode"])(" 2.生成script"),Object(r["createElementVNode"])("br"),Object(r["createTextVNode"])(" 3.生成style")],-1),N=Object(r["createElementVNode"])("pre",null,[Object(r["createElementVNode"])("code",{class:"language-javascript"},"const {\n  stripScriptTop,\n  stripScript,\n  stripTemplate,\n  genInlineComponentText\n} = require('./util');\n\nmodule.exports = function(source) {\n  const startTag = '\x3c!--vue-demo:';\n  const startTagLen = startTag.length;\n  const endTag = ':vue-demo--\x3e';\n  const endTagLen = endTag.length;\n  let scriptTops = []\n\n  let componenetsString = '';\n  let id = 0; // demo 的 id\n  let output = []; // 输出的内容\n  let start = 0; // 字符串开始位置\n\n  let commentStart = source.indexOf(startTag);\n  let commentEnd = source.indexOf(endTag, commentStart + startTagLen);\n  while (commentStart !== -1 && commentEnd !== -1) {\n    output.push(source.slice(start, commentStart));\n\n    const commentContent = source.slice(commentStart + startTagLen, commentEnd);\n    const html = stripTemplate(commentContent);\n    const script = stripScript(commentContent);\n    const scriptTop = stripScriptTop(script)\n    let demoComponentContent = genInlineComponentText(html, script);\n    const demoComponentName = `vue-demo${id}`;\n    output.push(`<template #preview><${demoComponentName} /></template>`);\n    componenetsString += `${JSON.stringify(demoComponentName)}: ${demoComponentContent},`;\n\n    if(scriptTop) {\n      scriptTops.push(scriptTop)\n    }\n\n    // 重新计算下一次的位置\n    id++;\n    start = commentEnd + endTagLen;\n    commentStart = source.indexOf(startTag, start);\n    commentEnd = source.indexOf(endTag, commentStart + startTagLen);\n  }\n\n  // 仅允许在 demo 不存在时，才可以在 Markdown 中写 script 标签\n  // todo: 优化这段逻辑\n  let pageScript = '';\n  if (componenetsString) {\n    pageScript = `<script>\n      ${scriptTops.join('\\n')}\n      export default {\n        name: 'component-doc',\n        components: {\n          ${componenetsString}\n        }\n      }\n    <\/script>`;\n  } else if (source.indexOf('<script>') === 0) {\n    start = source.indexOf('<\/script>') + '<\/script>'.length;\n    pageScript = source.slice(0, start);\n  }\n\n  output.push(source.slice(start));\n  return `\n    <template>\n      <section class=\"blog-doc-component\">\n        ${output.join('')}\n      </section>\n    </template>\n    ${pageScript}\n  `;\n};\n")],-1),V=Object(r["createElementVNode"])("p",null,"util的函数",-1),k=Object(r["createElementVNode"])("pre",null,[Object(r["createElementVNode"])("code",{class:"language-javascript"},"function stripScriptTop(content) {\n  const result = content.split(/export\\s+default\\s+{/)\n  return result && result.length > 1 ? result[0].trim() : '';\n}\n\nfunction stripScript(content) {\n  const result = content.match(/<(script)>([\\s\\S]+)<\\/\\1>/);\n  return result && result[2] ? result[2].trim() : '';\n}\n\nfunction stripStyle(content) {\n  const result = content.match(/<(style)\\s*>([\\s\\S]+)<\\/\\1>/);\n  return result && result[2] ? result[2].trim() : '';\n}\n\n// 编写例子时不一定有 template。所以采取的方案是剔除其他的内容\nfunction stripTemplate(content) {\n  content = content.trim();\n  if (!content) {\n    return content;\n  }\n  return content.replace(/<(script|style)[\\s\\S]+<\\/\\1>/g, '').trim();\n}\n\nfunction genInlineComponentText(template, script) {\n  if(template) {\n    template = template.trim()\n    .replace(/^(<\\s*template\\s*>)/, `<div class=\"demo-component-root\">`)\n    .replace(/(<\\/\\s*template\\s*>)$/, `</div>`)\n  }\n\n  script = script.trim();\n  if (script) {\n    return script\n    .replace(/export\\s+default\\s+{/, `{template: \\`${template}\\`,`)\n    .replace(/(}[^}]*)$/, '}');\n  } else {\n    return `{template: \\`${template}\\`}`;\n  }\n}\n\nmodule.exports = {\n  stripScriptTop,\n  stripScript,\n  stripStyle,\n  stripTemplate,\n  genInlineComponentText\n};\n\n")],-1),w=Object(r["createElementVNode"])("h2",{id:"wan-cheng",tabindex:"-1"},[Object(r["createElementVNode"])("a",{class:"header-anchor",href:"#wan-cheng"},"¶"),Object(r["createTextVNode"])(" 完成")],-1),E=Object(r["createElementVNode"])("p",null,"至此，所有loader的所有逻辑已经实现，在项目里新建文章文件夹，并在路由关联文件，保存即可",-1);function T(e,n,t,T,S,C){const L=Object(r["resolveComponent"])("code-viewer");return Object(r["openBlock"])(),Object(r["createElementBlock"])("section",o,[c,Object(r["createVNode"])(L,null,{default:Object(r["withCtx"])(()=>[a]),_:1}),l,s,Object(r["createVNode"])(L,null,{default:Object(r["withCtx"])(()=>[i]),_:1}),d,m,Object(r["createVNode"])(L,null,{default:Object(r["withCtx"])(()=>[p]),_:1}),u,b,Object(r["createVNode"])(L,null,{default:Object(r["withCtx"])(()=>[h]),_:1}),g,j,Object(r["createVNode"])(L,null,{default:Object(r["withCtx"])(()=>[f]),_:1}),Object(r["createVNode"])(L,null,{default:Object(r["withCtx"])(()=>[v]),_:1}),O,x,Object(r["createVNode"])(L,null,{default:Object(r["withCtx"])(()=>[N]),_:1}),V,Object(r["createVNode"])(L,null,{default:Object(r["withCtx"])(()=>[k]),_:1}),w,E])}var S=t("b9a6"),C=t.n(S);const L={},y=C()(L,[["render",T]]);n["default"]=y}}]);