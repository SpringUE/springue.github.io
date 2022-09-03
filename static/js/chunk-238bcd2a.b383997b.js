(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-238bcd2a"],{b9a6:function(e,n,s){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=(e,n)=>{const s=e.__vccOpts||e;for(const[t,l]of n)s[t]=l;return s}},f840:function(e,n,s){"use strict";s.r(n);var t=s("f2bf");const l={class:"blog-doc-component"},i=Object(t["o"])('<h1>使用webpack-如何清理无用源文件</h1><h2 id="bei-jing" tabindex="-1"><a class="header-anchor" href="#bei-jing">¶</a> 背景</h2><p>项目随着时间的推移不断更新迭代，或者新项目从老项目迁移开发，项目变得越来越臃肿，无形中就存在了很多无用的文件.<br> 大型的项目，如果仅靠人肉去识别，难度相当大，那么怎样能够自动检测哪些是无用的文件呢？</p><p>下面介绍使用<code>useless-files-webpack-plugin</code>插件查找无用文件(版本<code>1.0.1</code>)</p><h2 id="an-zhuang" tabindex="-1"><a class="header-anchor" href="#an-zhuang">¶</a> 安装</h2>',5),c=Object(t["n"])("pre",null,[Object(t["n"])("code",{class:"language-javascript"},"// npm \nnpm i useless-files-webpack-plugin -D\n\n// yarn\nyarn add -D useless-files-webpack-plugin\n")],-1),u=Object(t["n"])("h2",{id:"webpackpei-zhi",tabindex:"-1"},[Object(t["n"])("a",{class:"header-anchor",href:"#webpackpei-zhi"},"¶"),Object(t["p"])(" webpack配置")],-1),a=Object(t["n"])("pre",null,[Object(t["n"])("code",{class:"language-javascript"},"const UnusedFilesWebpackPlugin = require('useless-files-webpack-plugin')\n\nplugins: [\n  new UselessFile({\n    root: './src', // 项目目录\n    output: './unused-files.json', // 输出文件列表\n    clean: false // 删除文件,\n  })\n]\n")],-1),o=Object(t["n"])("h2",{id:"vue.config.jszhong-pei-zhi",tabindex:"-1"},[Object(t["n"])("a",{class:"header-anchor",href:"#vue.config.jszhong-pei-zhi"},"¶"),Object(t["p"])(" vue.config.js中配置")],-1),r=Object(t["n"])("pre",null,[Object(t["n"])("code",{class:"language-javascript"},"const UnusedFilesWebpackPlugin = require('useless-files-webpack-plugin')\n\nmodule.exports = {\n  configureWebpack: (config) => {\n    config.plugins.push(\n      new UnusedFilesWebpackPlugin({\n        root: './src', // 项目目录\n        output: './unused-files.json', // 输出文件列表\n        clean: false, // 是否删除文件,\n      })\n    )\n  },\n  devServer: {\n  }\n};\n\n")],-1),p=Object(t["n"])("h2",{id:"yun-xing-npm-run-build",tabindex:"-1"},[Object(t["n"])("a",{class:"header-anchor",href:"#yun-xing-npm-run-build"},"¶"),Object(t["p"])(" 运行npm run build")],-1),d=Object(t["n"])("p",null,[Object(t["p"])("打包完成后会在项目的根目录下生成一个unused-files.json文件, 保存着无用文件的列表。"),Object(t["n"])("br"),Object(t["p"])(" 然后自行根据列表中的提供路径，核对相应文件是否需要保留，手动删除即可。"),Object(t["n"])("br"),Object(t["p"])(" clean配置true会自动删除，此选项请慎用。")],-1),b=Object(t["n"])("h2",{id:"yuan-dai-ma-1.0.1",tabindex:"-1"},[Object(t["n"])("a",{class:"header-anchor",href:"#yuan-dai-ma-1.0.1"},"¶"),Object(t["p"])(" 源代码(1.0.1)")],-1),f=Object(t["n"])("pre",null,[Object(t["n"])("code",{class:"language-javascript"},"const fs = require('fs')\nconst glob = require('glob')\nconst path = require('path')\nconst shelljs = require('shelljs')\n\nclass CleanUnusedFilesPlugin {\n  constructor (options) {\n    this.opts = options\n  }\n  apply (compiler) {\n    let _this = this\n    compiler.plugin('after-emit', function (compilation, done) {\n      _this.findUnusedFiles(compilation, _this.opts)\n      done()\n    })\n  }\n\n/**\n * 获取依赖的文件\n */\n  getDependFiles (compilation) {\n    return new Promise((resolve, reject) => {\n      const dependedFiles = [...compilation.fileDependencies].reduce(\n        (acc, usedFilepath) => {\n          if (!~usedFilepath.indexOf('node_modules')) {\n            acc.push(usedFilepath)\n          }\n          return acc\n        },\n        []\n      )\n      resolve(dependedFiles)\n    })\n  }\n\n/**\n * 获取项目目录所有的文件\n */\n  getAllFiles (pattern) {\n    return new Promise((resolve, reject) => {\n      glob(pattern, {\n        nodir: true\n      }, (err, files) => {\n        if (err) {\n          throw err\n        }\n        const out = files.map(item => path.resolve(item))\n        resolve(out)\n      })\n    })\n  }\n\n  dealExclude (path, unusedList) {\n    const file = fs.readFileSync(path, 'utf-8')\n    const files = JSON.parse(file) || []\n    const result = unusedList.filter(unused => {\n      return !files.some(item => ~unused.indexOf(item))\n    })\n    return result\n  }\n\n  async findUnusedFiles (compilation, config = {}) {\n    const { root = './src', clean = false, output = './unused-files.json', exclude = false } = config\n    const pattern = root + '/**/*'\n    try {\n      const allChunks = await this.getDependFiles(compilation)\n      const allFiles = await this.getAllFiles(pattern)\n      let unUsed = allFiles\n        .filter(item => !~allChunks.indexOf(item))\n      if (exclude && typeof exclude === 'string') {\n        unUsed = this.dealExclude(exclude, unUsed)\n      }\n      if (typeof output === 'string') {\n        fs.writeFileSync(output, JSON.stringify(unUsed, null, 4))\n      } else if (typeof output === 'function') {\n        output(unUsed)\n      }\n      if (clean) {\n        unUsed.forEach(file => {\n          shelljs.rm(file)\n          console.log(`remove file: ${file}`)\n        })\n      }\n      return unUsed\n    } catch (err) {\n      throw (err)\n    }\n  }\n}\n\nmodule.exports = CleanUnusedFilesPlugin\n")],-1);function h(e,n){const s=Object(t["T"])("code-viewer");return Object(t["K"])(),Object(t["m"])("section",l,[i,Object(t["q"])(s,null,{default:Object(t["hb"])(()=>[c]),_:1}),u,Object(t["q"])(s,null,{default:Object(t["hb"])(()=>[a]),_:1}),o,Object(t["q"])(s,null,{default:Object(t["hb"])(()=>[r]),_:1}),p,d,b,Object(t["q"])(s,null,{default:Object(t["hb"])(()=>[f]),_:1})])}var j=s("b9a6"),g=s.n(j);const O={},m=g()(O,[["render",h]]);n["default"]=m}}]);