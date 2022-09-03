(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7887bc8a"],{"0f58":function(e,t,n){var o=n("f7fe"),i=n("3e05");e.exports={props:{width:{type:[String,Number],default:"100%"},height:{type:[String,Number],default:"100%"},code:{type:String,default:"// code \n"},srcPath:{type:String},language:{type:String,default:"javascript"},theme:{type:String,default:"vs-dark"},options:{type:Object,default:()=>{}},highlighted:{type:Array,default:()=>[{number:0,class:""}]},changeThrottle:{type:Number,default:0}},mounted(){this.fetchEditor()},destroyed(){this.destroyMonaco()},computed:{style(){const{width:e,height:t}=this,n=-1!==e.toString().indexOf("%")?e:e+"px",o=-1!==t.toString().indexOf("%")?t:t+"px";return{width:n,height:o}},editorOptions(){return Object.assign({},this.defaults,this.options,{value:this.code,language:this.language,theme:this.theme})}},data(){return{defaults:{selectOnLineNumbers:!0,roundedSelection:!1,readOnly:!1,cursorStyle:"line",automaticLayout:!1,glyphMargin:!0}}},watch:{highlighted:{handler(e){this.highlightLines(e)},deep:!0}},methods:{highlightLines(e){this.editor&&e.forEach(e=>{const t=e.class,n=this.$el.querySelector("."+t);n&&n.classList.remove(t);const o=parseInt(e.number);if(!this.editor&&o<1||isNaN(o))return;const i=this.$el.querySelector(`.view-lines [linenumber="${o}"]`);i&&i.classList.add(t)})},editorHasLoaded(e,t){this.editor=e,this.monaco=t,this.editor.onDidChangeModelContent(t=>this.codeChangeHandler(e,t)),this.$emit("mounted",e)},codeChangeHandler:function(e){this.codeChangeEmitter||(this.codeChangeEmitter=o((function(e){this.$emit("codeChange",e)}),this.changeThrottle)),this.codeChangeEmitter(e)},fetchEditor(){i.load(this.srcPath,this.createMonaco)},createMonaco(){this.editor=window.monaco.editor.create(this.$el,this.editorOptions),this.editorHasLoaded(this.editor,window.monaco)},destroyMonaco(){"undefined"!==typeof this.editor&&this.editor.dispose()}}}},2870:function(e,t,n){},"36ad":function(e,t,n){"use strict";var o=n("f2bf");const i={class:"page-header"},a={class:"page-title"};function c(e,t,n,c,r,s){return Object(o["K"])(),Object(o["m"])("header",i,[Object(o["n"])("h1",a,Object(o["X"])(n.title),1)])}n("13d5");var r=n("f382"),s={props:{title:String,data:Array,showSearch:{type:Boolean,default:!0}},data(){return{keyword:"",itemNumbers:0}},created(){this.itemNumbers=this.getItemNumbers(this.data)},methods:{getItemNumbers(e){return e.reduce((e,t)=>t.children?e+t.children.length:e+1,0)},search(){const{keyword:e,data:t}=this,n=e&&e.trim().toLowerCase();let o=r["a"].map(t,e=>({...e}));n&&(o=r["a"].filter(o,e=>e.title.toLowerCase().includes(n)||e.desc&&e.desc.toLowerCase().includes(n)||e.description&&e.description.toLowerCase().includes(n))),this.itemNumbers=this.getItemNumbers(o),this.$emit("search",o)}}},d=(n("639e"),n("f206"),n("6b0d")),u=n.n(d);const l=u()(s,[["render",c]]);t["a"]=l},"3e05":function(e,t){e.exports={load(e="https://as.alipayobjects.com/g/cicada/monaco-editor-mirror/0.6.1/min",t){if(window.monaco)return void t();const n={paths:{vs:e+"/vs"}},o=n.paths.vs+"/loader.js",i=()=>{if(window.LOADER_PENDING&&window.require.config(n),window.require(["vs/editor/editor.main"],()=>{t()}),window.LOADER_PENDING){window.LOADER_PENDING=!1;const e=window.LOADER_CALLBACKS;if(e&&e.length){let t=e.shift();while(t)t.fn.call(t.window),t=e.shift()}}};if(window.LOADER_PENDING)window.LOADER_CALLBACKS=window.LOADER_CALLBACKS||[],window.LOADER_CALLBACKS.push({window:this,fn:i});else if("undefined"===typeof window.require){const e=window.document.createElement("script");e.type="text/javascript",e.src=o,e.addEventListener("load",i),window.document.body.appendChild(e),window.LOADER_PENDING=!0}else i()}}},5028:function(e,t,n){"use strict";n("cab2")},5902:function(e,t,n){"use strict";n.r(t);var o=n("f1f8"),i=n("966c");for(var a in i)["default"].indexOf(a)<0&&function(e){n.d(t,e,(function(){return i[e]}))}(a);var c=n("6b0d"),r=n.n(c);const s=r()(i["default"],[["render",o["a"]]]);t["default"]=s},"5bda":function(e,t,n){"use strict";n.r(t);var o=n("f2bf");const i={class:"page-tool"},a={class:"blog-container"},c={class:"tool-content"},r={class:"page-tool-monaco-editor"},s={class:"monaco-editor-toolbar"},d={class:"monaco-editor-actions"},u={class:"monaco-editor-action"},l=Object(o["p"])(" Theme： "),h=Object(o["p"])("Visual Studio"),f=Object(o["p"])("Visual Studio Dark"),b=Object(o["p"])("High Contrast Dark"),p={class:"monaco-editor-action"},O=Object(o["p"])(" Font Size： "),g=Object(o["p"])("12px"),j=Object(o["p"])("14px"),m=Object(o["p"])("16px"),v=Object(o["p"])("18px"),w={class:"monaco-editor-action"},y=Object(o["p"])(" Language： "),C=Object(o["p"])("html"),L=Object(o["p"])("javascript"),E=Object(o["p"])("json"),S=Object(o["p"])("typescript"),N=Object(o["p"])("css"),_=Object(o["p"])("markdown"),q={key:0,class:"monaco-editor-container"};function x(e,t,n,x,A,D){const M=Object(o["T"])("PageHeader"),T=Object(o["T"])("a-select-option"),k=Object(o["T"])("a-select"),$=Object(o["T"])("MonacoEditor",!0);return Object(o["K"])(),Object(o["m"])("div",i,[Object(o["n"])("div",a,[Object(o["q"])(M,{title:"Monaco Editor",data:[],showSearch:!1}),Object(o["n"])("div",c,[Object(o["n"])("div",r,[Object(o["n"])("div",s,[Object(o["n"])("div",d,[Object(o["n"])("span",u,[l,Object(o["q"])(k,{value:A.options.theme,"onUpdate:value":t[0]||(t[0]=e=>A.options.theme=e),onChange:D.changeOption},{default:Object(o["hb"])(()=>[Object(o["q"])(T,{value:"vs"},{default:Object(o["hb"])(()=>[h]),_:1}),Object(o["q"])(T,{value:"vs-dark"},{default:Object(o["hb"])(()=>[f]),_:1}),Object(o["q"])(T,{value:"hc-black"},{default:Object(o["hb"])(()=>[b]),_:1})]),_:1},8,["value","onChange"])]),Object(o["n"])("span",p,[O,Object(o["q"])(k,{value:A.options.fontSize,"onUpdate:value":t[1]||(t[1]=e=>A.options.fontSize=e),onChange:D.changeOption},{default:Object(o["hb"])(()=>[Object(o["q"])(T,{value:12},{default:Object(o["hb"])(()=>[g]),_:1}),Object(o["q"])(T,{value:14},{default:Object(o["hb"])(()=>[j]),_:1}),Object(o["q"])(T,{value:16},{default:Object(o["hb"])(()=>[m]),_:1}),Object(o["q"])(T,{value:18},{default:Object(o["hb"])(()=>[v]),_:1})]),_:1},8,["value","onChange"])]),Object(o["n"])("span",w,[y,Object(o["q"])(k,{value:A.options.language,"onUpdate:value":t[2]||(t[2]=e=>A.options.language=e),onChange:D.changeOption},{default:Object(o["hb"])(()=>[Object(o["q"])(T,{value:"html"},{default:Object(o["hb"])(()=>[C]),_:1}),Object(o["q"])(T,{value:"javascript"},{default:Object(o["hb"])(()=>[L]),_:1}),Object(o["q"])(T,{value:"json"},{default:Object(o["hb"])(()=>[E]),_:1}),Object(o["q"])(T,{value:"typescript"},{default:Object(o["hb"])(()=>[S]),_:1}),Object(o["q"])(T,{value:"css"},{default:Object(o["hb"])(()=>[N]),_:1}),Object(o["q"])(T,{value:"markdown"},{default:Object(o["hb"])(()=>[_]),_:1})]),_:1},8,["value","onChange"])])])]),A.showEditor?(Object(o["K"])(),Object(o["m"])("div",q,[Object(o["q"])($,{height:"600",code:A.code,theme:A.options.theme,language:A.options.language,options:A.options,onMounted:D.onMounted,onCodeChange:D.onCodeChange},null,8,["code","theme","language","options","onMounted","onCodeChange"])])):Object(o["l"])("",!0)])])])])}var A=n("dba0"),D=n.n(A),M=n("36ad"),T={components:{MonacoEditor:D.a,PageHeader:M["a"]},data(){return{editor:null,code:"",options:{minimap:{enabled:!1},theme:"vs",fontSize:14,language:"javascript",selectOnLineNumbers:!1,folding:!0,foldingHighlight:!0,foldingStrategy:"indentation",showFoldingControls:"always",disableLayerHinting:!0,emptySelectionClipboard:!1,selectionClipboard:!1,automaticLayout:!0,codeLens:!1,scrollBeyondLastLine:!1,colorDecorators:!0,accessibilitySupport:"off",lineNumbers:"on",lineNumbersMinChars:5,enableSplitViewResizing:!1,readOnly:!1,wordWrap:"on"},showEditor:!0}},mounted(){},methods:{changeOption(){this.code=this.editor.getValue(),this.showEditor=!1,setTimeout(()=>{this.showEditor=!0},200)},onMounted(e){this.editor=e},onCodeChange(e){console.log(e.getValue())}}},k=(n("5028"),n("6b0d")),$=n.n(k);const I=$()(T,[["render",x]]);t["default"]=I},"639e":function(e,t,n){"use strict";n("2870")},"966c":function(e,t,n){"use strict";n.r(t);var o=n("0f58"),i=n.n(o);for(var a in n.d(t,"default",(function(){return i.a})),o)["default"].indexOf(a)<0&&function(e){n.d(t,e,(function(){return o[e]}))}(a)},c29f:function(e,t,n){},cab2:function(e,t,n){},dba0:function(e,t,n){var o=n("5902");e.exports=o},f1f8:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var o=n("f2bf");function i(e,t,n,i,a,c){return Object(o["K"])(),Object(o["m"])("div",{style:Object(o["B"])(e.style)},null,4)}},f206:function(e,t,n){"use strict";n("c29f")},f7fe:function(e,t,n){(function(t){var n="Expected a function",o=NaN,i="[object Symbol]",a=/^\s+|\s+$/g,c=/^[-+]0x[0-9a-f]+$/i,r=/^0b[01]+$/i,s=/^0o[0-7]+$/i,d=parseInt,u="object"==typeof t&&t&&t.Object===Object&&t,l="object"==typeof self&&self&&self.Object===Object&&self,h=u||l||Function("return this")(),f=Object.prototype,b=f.toString,p=Math.max,O=Math.min,g=function(){return h.Date.now()};function j(e,t,o){var i,a,c,r,s,d,u=0,l=!1,h=!1,f=!0;if("function"!=typeof e)throw new TypeError(n);function b(t){var n=i,o=a;return i=a=void 0,u=t,r=e.apply(o,n),r}function j(e){return u=e,s=setTimeout(C,t),l?b(e):r}function v(e){var n=e-d,o=e-u,i=t-n;return h?O(i,c-o):i}function w(e){var n=e-d,o=e-u;return void 0===d||n>=t||n<0||h&&o>=c}function C(){var e=g();if(w(e))return L(e);s=setTimeout(C,v(e))}function L(e){return s=void 0,f&&i?b(e):(i=a=void 0,r)}function E(){void 0!==s&&clearTimeout(s),u=0,i=d=a=s=void 0}function S(){return void 0===s?r:L(g())}function N(){var e=g(),n=w(e);if(i=arguments,a=this,d=e,n){if(void 0===s)return j(d);if(h)return s=setTimeout(C,t),b(d)}return void 0===s&&(s=setTimeout(C,t)),r}return t=y(t)||0,m(o)&&(l=!!o.leading,h="maxWait"in o,c=h?p(y(o.maxWait)||0,t):c,f="trailing"in o?!!o.trailing:f),N.cancel=E,N.flush=S,N}function m(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function v(e){return!!e&&"object"==typeof e}function w(e){return"symbol"==typeof e||v(e)&&b.call(e)==i}function y(e){if("number"==typeof e)return e;if(w(e))return o;if(m(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=m(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(a,"");var n=r.test(e);return n||s.test(e)?d(e.slice(2),n?2:8):c.test(e)?o:+e}e.exports=j}).call(this,n("c8ba"))}}]);