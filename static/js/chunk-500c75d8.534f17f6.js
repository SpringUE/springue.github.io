(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-500c75d8"],{"358c":function(s,a,n){},"36ad":function(s,a,n){"use strict";var p=n("f2bf");const e={class:"page-header"},t={class:"page-title"};function i(s,a,n,i,l,c){return Object(p["openBlock"])(),Object(p["createElementBlock"])("header",e,[Object(p["createElementVNode"])("h1",t,Object(p["toDisplayString"])(n.title),1)])}n("13d5");var l=n("f382"),c={props:{title:String,data:Array,showSearch:{type:Boolean,default:!0}},data(){return{keyword:"",itemNumbers:0}},created(){this.itemNumbers=this.getItemNumbers(this.data)},methods:{getItemNumbers(s){return s.reduce((s,a)=>a.children?s+a.children.length:s+1,0)},search(){const{keyword:s,data:a}=this,n=s&&s.trim().toLowerCase();let p=l["a"].map(a,s=>({...s}));n&&(p=l["a"].filter(p,s=>s.title.toLowerCase().includes(n)||s.desc&&s.desc.toLowerCase().includes(n)||s.description&&s.description.toLowerCase().includes(n))),this.itemNumbers=this.getItemNumbers(p),this.$emit("search",p)}}},o=(n("7749"),n("83e0"),n("6b0d")),d=n.n(o);const h=d()(c,[["render",i]]);a["a"]=h},5600:function(s,a,n){},7749:function(s,a,n){"use strict";n("358c")},"83e0":function(s,a,n){"use strict";n("5600")},b05b:function(s,a,n){"use strict";n.r(a);var p=n("36ad"),e=n("f2bf");const t={class:"page-tool"},i={class:"blog-container"},l={class:"tool-content"},c=Object(e["createStaticVNode"])('<p>点击图标可复制</p><h2>热门符号</h2><div class="symbol-list"><span>ღ</span><span>•</span><span>⁂</span><span>€</span><span>™</span><span>↑</span><span>→</span><span>↓</span><span>⇝</span><span>√</span><span>∞</span><span>░</span><span>▲</span><span>▶</span><span>◀</span><span>●</span><span>☀</span><span>☁</span><span>☂</span><span>☃</span><span>☄</span><span>★</span><span>☆</span><span>☉</span><span>☐</span><span>☑</span><span>☎</span><span>☚</span><span>☛</span><span>☜</span><span>☝</span><span>☞</span><span>☟</span><span>☠</span><span>☢</span><span>☣</span><span>☪</span><span>☮</span><span>☯</span><span>☸</span><span>☹</span><span>☺</span><span>☻</span><span>☼</span><span>☽</span><span>☾</span><span>♔</span><span>♕</span><span>♖</span><span>♗</span><span>♘</span><span>♚</span><span>♛</span><span>♜</span><span>♝</span><span>♞</span><span>♟</span><span>♡</span><span>♨</span><span>♩</span><span>♪</span><span>♫</span><span>♬</span><span>✈</span><span>✉</span><span>✍</span><span>✎</span><span>✓</span><span>✔</span><span>✘</span><span>✚</span><span>✝</span><span>✞</span><span>✟</span><span>✠</span><span>✡</span><span>✦</span><span>✧</span><span>✩</span><span>✪</span><span>✮</span><span>✯</span><span>✹</span><span>✿</span><span>❀</span><span>❁</span><span>❂</span><span>❄</span><span>❅</span><span>❆</span><span>❝</span><span>❞</span><span>❣</span><span>❤</span><span>❥</span><span>❦</span><span>❧</span><span>➤</span><span>ツ</span><span>㋡</span><span>卍</span><span>웃</span><span>Ⓐ</span><span>Ⓑ</span><span>Ⓒ</span><span>Ⓓ</span><span>Ⓔ</span><span>Ⓕ</span><span>Ⓖ</span><span>Ⓗ</span><span>Ⓘ</span><span>Ⓙ</span><span>Ⓚ</span><span>Ⓛ</span><span>Ⓜ</span><span>Ⓝ</span><span>Ⓞ</span><span>Ⓟ</span><span>Ⓠ</span><span>Ⓡ</span><span>Ⓢ</span><span>Ⓣ</span><span>Ⓤ</span><span>Ⓥ</span><span>Ⓦ</span><span>Ⓧ</span><span>Ⓨ</span><span>Ⓩ</span></div><h2>希腊符号</h2><div class="symbol-list"><span>α</span><span>β</span><span>χ</span><span>δ</span><span>ε</span><span>η</span><span>γ</span><span>ι</span><span>κ</span><span>λ</span><span>μ</span><span>ν</span><span>ω</span><span>ο</span><span>φ</span><span>π</span><span>ψ</span><span>ρ</span><span>σ</span><span>τ</span><span>θ</span><span>υ</span><span>ξ</span><span>ζ</span></div><h2>标点符号</h2><div class="symbol-list"><span>˙</span><span>‥</span><span>‧</span><span>‵</span><span>‵</span><span>❛</span><span>❜</span><span>❝</span><span>❞</span><span>、</span><span>。</span><span>〃</span><span>「</span><span>」</span><span>『</span><span>』</span><span>〝</span><span>〞</span><span>︰</span><span>︰</span><span>﹁</span><span>﹂</span><span>﹃</span><span>﹄</span><span>﹐</span><span>﹒</span><span>﹔</span><span>﹔</span><span>﹕</span><span>！</span><span>＃</span><span>＄</span><span>％</span><span>＆</span><span>＊</span><span>，</span><span>．</span><span>：</span><span>；</span><span>？</span><span>＠</span><span>～</span><span>•</span><span>…</span><span>¿</span><span>“</span><span>‘</span><span>·</span><span>′</span><span>”</span><span>’</span></div><h2>括号符号</h2><div class="symbol-list"><span>〈</span><span>〈</span><span>〉</span><span>《</span><span>》</span><span>「</span><span>」</span><span>『</span><span>』</span><span>【</span><span>】</span><span>〔</span><span>〕</span><span>︵</span><span>︶</span><span>︷</span><span>︸</span><span>︹</span><span>︺</span><span>︻</span><span>︼</span><span>︽</span><span>︽</span><span>︾</span><span>︿</span><span>﹀</span><span>﹁</span><span>﹁</span><span>﹂</span><span>﹃</span><span>﹄</span><span>﹙</span><span>﹙</span><span>﹚</span><span>﹛</span><span>﹜</span><span>﹝</span><span>﹞</span><span>﹤</span><span>﹥</span><span>（</span><span>）</span><span>＜</span><span>＞</span><span>｛</span><span>｛</span><span>｝</span></div><h2>爱心符号</h2><div class="symbol-list"><span>დ</span><span>ღ</span><span>♡</span><span>❣</span><span>❤</span><span>❥</span><span>❦</span><span>❧</span><span>♥</span></div><h2>手符号</h2><div class="symbol-list"><span>☚</span><span>☛</span><span>☜</span><span>☝</span><span>☞</span><span>☟</span><span>✌</span><span>✍</span></div><h2>国际象棋符号</h2><div class="symbol-list"><span>♔</span><span>♕</span><span>♖</span><span>♗</span><span>♘</span><span>♙</span><span>♚</span><span>♛</span><span>♜</span><span>♝</span><span>♞</span><span>♟</span></div><h2>音符符号</h2><div class="symbol-list"><span>♩</span><span>♪</span><span>♫</span><span>♬</span><span>♭</span><span>♮</span><span>♯</span></div><h2>天气符号</h2><div class="symbol-list"><span>ϟ</span><span>☀</span><span>☁</span><span>☂</span><span>☃</span><span>☄</span><span>☉</span><span>☼</span><span>☽</span><span>☾</span><span>♁</span><span>♨</span><span>❄</span><span>❅</span><span>❆</span></div><h2>文化符号</h2><div class="symbol-list"><span>☠</span><span>☤</span><span>☥</span><span>☦</span><span>☧</span><span>☨</span><span>☩</span><span>☪</span><span>☫</span><span>☬</span><span>☮</span><span>☭</span><span>☯</span><span>☸</span><span>☽</span><span>☾</span><span>♕</span><span>♚</span><span>♛</span><span>✙</span><span>✚</span><span>✛</span><span>✜</span><span>✝</span><span>✞</span><span>✟</span><span>✠</span><span>✡</span><span>✢</span><span>卍</span><span>卐</span></div><h2>办公室符号</h2><div class="symbol-list"><span>‱</span><span>№</span><span>℗</span><span>℠</span><span>℡</span><span>℀</span><span>℁</span><span>℅</span><span>℆</span><span>⅍</span><span>⌚</span><span>⌛</span><span>☊</span><span>☎</span><span>☏</span><span>✁</span><span>✂</span><span>✃</span><span>✄</span><span>✆</span><span>✇</span><span>✈</span><span>✉</span><span>✍</span><span>✎</span><span>✏</span><span>✐</span><span>✑</span><span>✒</span><span>™</span><span>©</span><span>®</span><span>‰</span><span>§</span><span>¶</span></div><h2>技术符号</h2><div class="symbol-list"><span>⏎</span><span>⇧</span><span>⇪</span><span>⌂</span><span>⌘</span><span>☢</span><span>☣</span><span>⌥</span><span>⎋</span><span>⌫</span><span></span><span>ᴴᴰ</span></div><h2>星座符号</h2><div class="symbol-list"><span>♈</span><span>♉</span><span>♊</span><span>♋</span><span>♌</span><span>♍</span><span>♎</span><span>♏</span><span>♐</span><span>♑</span><span>♒</span><span>♓</span></div><h2>打钩符号</h2><div class="symbol-list"><span>ˇ</span><span>∛</span><span>∜</span><span>☐</span><span>☑</span><span>☒</span><span>✓</span><span>✔</span><span>✗</span><span>✘</span><span>∨</span><span>√</span></div><h2>扑克符号</h2><div class="symbol-list"><span>♡</span><span>♢</span><span>♤</span><span>♧</span><span>♣</span><span>♦</span><span>♥</span><span>♠</span></div><h2>人的符号</h2><div class="symbol-list"><span>☹</span><span>☺</span><span>☻</span><span>☿</span><span>♀</span><span>♂</span><span>〠</span><span>ヅ</span><span>ツ</span><span>㋡</span><span>웃</span><span>유</span><span>ü</span><span>ت</span></div><h2>星星符号</h2><div class="symbol-list"><span>★</span><span>☆</span><span>✡</span><span>✦</span><span>✧</span><span>✩</span><span>✪</span><span>✫</span><span>✬</span><span>✭</span><span>✮</span><span>✯</span><span>✰</span></div><div class="symbol-list"><span>⁂</span><span>⁎</span><span>⁑</span><span>☸</span><span>✢</span><span>✣</span><span>✤</span><span>✥</span><span>✱</span><span>✲</span><span>✳</span><span>✴</span><span>✵</span><span>✶</span><span>✷</span><span>✸</span><span>✹</span><span>✺</span><span>✻</span><span>✼</span><span>✽</span><span>✾</span><span>✿</span><span>❀</span><span>❁</span><span>❂</span><span>❃</span><span>❇</span><span>❈</span><span>❉</span><span>❊</span><span>❋</span></div><h2>箭头符号</h2><div class="symbol-list"><span>↕</span><span>↖</span><span>↗</span><span>↘</span><span>↙</span><span>↚</span><span>↛</span><span>↜</span><span>↝</span><span>↞</span><span>↟</span><span>↠</span><span>↡</span><span>↢</span><span>↣</span><span>↤</span><span>↥</span><span>↦</span><span>↧</span><span>↨</span><span>↩</span><span>↪</span><span>↫</span><span>↬</span><span>↭</span><span>↮</span><span>↯</span><span>↰</span><span>↱</span><span>↲</span><span>↳</span><span>↴</span><span>↶</span><span>↷</span><span>↸</span><span>↹</span><span>↺</span><span>↻</span><span>↼</span><span>↽</span><span>↾</span><span>↿</span><span>⇀</span><span>⇁</span><span>⇂</span><span>⇃</span><span>⇄</span><span>⇅</span><span>⇆</span><span>⇇</span><span>⇈</span><span>⇉</span><span>⇊</span><span>⇋</span><span>⇌</span><span>⇍</span><span>⇎</span><span>⇏</span><span>⇕</span><span>⇖</span><span>⇗</span><span>⇘</span><span>⇙</span><span>⇚</span><span>⇛</span><span>⇜</span><span>⇝</span><span>⇞</span><span>⇟</span><span>⇠</span><span>⇡</span><span>⇢</span><span>⇣</span><span>⇤</span><span>⇥</span><span>⇦</span><span>⇧</span><span>⇨</span><span>⇩</span><span>⇪</span><span>⌅</span><span>⌆</span><span>⌤</span><span>⏎</span><span>▶</span><span>☇</span><span>☈</span><span>☊</span><span>☋</span><span>☌</span><span>☍</span><span>➔</span><span>➘</span><span>➙</span><span>➚</span><span>➛</span><span>➜</span><span>➝</span><span>➞</span><span>➟</span><span>➠</span><span>➡</span><span>➢</span><span>➣</span><span>➤</span><span>➥</span><span>➦</span><span>➧</span><span>➨</span><span>➩</span><span>➪</span><span>➫</span><span>➬</span><span>➭</span><span>➮</span><span>➯</span><span>➱</span><span>➲</span><span>➳</span><span>➴</span><span>➵</span><span>➶</span><span>➷</span><span>➸</span><span>➹</span><span>➺</span><span>➻</span><span>➼</span><span>➽</span><span>➾</span><span>⤴</span><span>⤵</span><span>↵</span><span>↓</span><span>↔</span><span>←</span><span>→</span><span>↑</span></div><h2>方块符号</h2><div class="symbol-list"><span>ˍ</span><span>∎</span><span>⊞</span><span>⊟</span><span>⊠</span><span>⊡</span><span>⋄</span><span>⎔</span><span>⎚</span><span>▀</span><span>▁</span><span>▂</span><span>▃</span><span>▄</span><span>▅</span><span>▆</span><span>▇</span><span>█</span><span>▉</span><span>▊</span><span>▋</span><span>▋</span><span>▌</span><span>▍</span><span>▎</span><span>▏</span><span>▐</span><span>░</span><span>▒</span><span>▓</span><span>▔</span><span>■</span><span>□</span><span>▢</span><span>▣</span><span>▤</span><span>▥</span><span>▦</span><span>▧</span><span>▨</span><span>▩</span><span>▪</span><span>▫</span><span>▬</span><span>▭</span><span>▮</span><span>▯</span><span>▰</span><span>▱</span><span>►</span><span>◄</span><span>◆</span><span>◇</span><span>◈</span><span>◘</span><span>◙</span><span>◚</span><span>◛</span><span>◢</span><span>◣</span><span>◤</span><span>◥</span><span>◧</span><span>◨</span><span>◩</span><span>◪</span><span>◫</span><span>☖</span><span>☗</span><span>❏</span><span>❐</span><span>❑</span><span>❒</span><span>❖</span><span>❘</span><span>❙</span><span>❚</span><span>◊</span></div><h2>三角形符号</h2><div class="symbol-list"><span>∆</span><span>⊿</span><span>▲</span><span>△</span><span>▴</span><span>▵</span><span>▶</span><span>▷</span><span>▸</span><span>▹</span><span>►</span><span>▻</span><span>▼</span><span>▽</span><span>▾</span><span>▿</span><span>◀</span><span>◁</span><span>◂</span><span>◃</span><span>◄</span><span>◅</span><span>◢</span><span>◣</span><span>◤</span><span>◥</span><span>◬</span><span>◭</span><span>◮</span><span>∇</span></div><h2>线段符号</h2><div class="symbol-list"><span>`</span><span>ˊ</span><span>ᐟ</span><span>‐</span><span>‑</span><span>‒</span><span>―</span><span>⁃</span><span>≣</span><span>⋐</span><span>⋑</span><span>⋒</span><span>⋓</span><span>⌒</span><span>⌜</span><span>⌝</span><span>⌞</span><span>⌟</span><span>⎯</span><span>─</span><span>━</span><span>│</span><span>┃</span><span>┄</span><span>┅</span><span>┆</span><span>┇</span><span>┈</span><span>┉</span><span>┊</span><span>┋</span><span>┌</span><span>┍</span><span>┎</span><span>┏</span><span>┐</span><span>┑</span><span>┒</span><span>┓</span><span>└</span><span>└</span><span>┕</span><span>┖</span><span>┗</span><span>┘</span><span>┙</span><span>┚</span><span>┛</span><span>├</span><span>├</span><span>┝</span><span>┞</span><span>┟</span><span>┠</span><span>┡</span><span>┢</span><span>┣</span><span>┤</span><span>┥</span><span>┦</span><span>┧</span><span>┨</span><span>┩</span><span>┪</span><span>┫</span><span>┬</span><span>┭</span><span>┮</span><span>┯</span><span>┰</span><span>┱</span><span>┲</span><span>┳</span><span>┴</span><span>┵</span><span>┶</span><span>┷</span><span>┸</span><span>┹</span><span>┺</span><span>┻</span><span>┼</span><span>┽</span><span>┾</span><span>┿</span><span>╀</span><span>╁</span><span>╂</span><span>╃</span><span>╄</span><span>╅</span><span>╆</span><span>╇</span><span>╈</span><span>╉</span><span>╊</span><span>╋</span><span>╌</span><span>╍</span><span>╎</span><span>╏</span><span>═</span><span>═</span><span>║</span><span>╒</span><span>╓</span><span>╔</span><span>╔</span><span>╔</span><span>╕</span><span>╕</span><span>╖</span><span>╖</span><span>╗</span><span>╗</span><span>╘</span><span>╙</span><span>╚</span><span>╚</span><span>╛</span><span>╛</span><span>╜</span><span>╜</span><span>╝</span><span>╝</span><span>╞</span><span>╟</span><span>╟</span><span>╠</span><span>╡</span><span>╡</span><span>╢</span><span>╢</span><span>╣</span><span>╣</span><span>╤</span><span>╤</span><span>╥</span><span>╥</span><span>╦</span><span>╦</span><span>╧</span><span>╧</span><span>╨</span><span>╨</span><span>╩</span><span>╩</span><span>╪</span><span>╪</span><span>╫</span><span>╬</span><span>╬</span><span>╭</span><span>╮</span><span>╯</span><span>╰</span><span>╱</span><span>╲</span><span>╳</span><span>╴</span><span>╵</span><span>╶</span><span>╷</span><span>╸</span><span>╹</span><span>╺</span><span>╻</span><span>╼</span><span>╽</span><span>╾</span><span>╿</span><span>▏</span><span>▕</span><span>◜</span><span>◝</span><span>◞</span><span>◟</span><span>◠</span><span>◡</span><span>☰</span><span>☱</span><span>☲</span><span>☳</span><span>☴</span><span>☵</span><span>☶</span><span>☷</span><span>✕</span><span>≡</span><span>⌈</span><span>⌊</span><span>—</span><span>⌉</span><span>⌋</span></div><h2>数学计数符号</h2><div class="symbol-list"><span>¼</span><span>½</span><span>¾</span><span>⅐</span><span>⅑</span><span>⅒</span><span>⅓</span><span>⅔</span><span>⅕</span><span>⅖</span><span>⅗</span><span>⅘</span><span>⅙</span><span>⅚</span><span>⅛</span><span>⅜</span><span>⅝</span><span>⅞</span><span>⅟</span><span>↉</span><span>∟</span><span>∬</span><span>∭</span><span>∮</span><span>∵</span><span>∷</span><span>≦</span><span>≧</span><span>╳</span><span>✕</span><span>✖</span><span>✚</span><span>﹢</span><span>﹣</span><span>﹤</span><span>﹥</span><span>％</span><span>＋</span><span>－</span><span>／</span><span>＝</span><span>∧</span><span>∠</span><span>∩</span><span>∪</span><span>°</span><span>÷</span><span>≡</span><span>≥</span><span>∞</span><span>∫</span><span>≤</span><span>≠</span><span>∨</span><span>‰</span><span>‱</span><span>⊥</span><span>π</span><span>±</span><span>√</span><span>∑</span><span>∴</span><span>×</span></div><h2>单位符号</h2><div class="symbol-list"><span>℃</span><span>℉</span><span>㎎</span><span>㎏</span><span>㎜</span><span>㎝</span><span>㎞</span><span>㎡</span><span>㏄</span><span>㏎</span><span>㏑</span><span>㏒</span><span>㏕</span><span>°</span></div><h2>上标&amp;下标</h2><div class="symbol-list"><span>¹</span><span>²</span><span>³</span><span>⁰</span><span>ⁱ</span><span>⁴</span><span>⁵</span><span>⁶</span><span>⁷</span><span>⁸</span><span>⁹</span><span>⁺</span><span>⁻</span><span>⁼</span><span>⁽</span><span>⁾</span><span>ⁿ</span><span>₀</span><span>₁</span><span>₂</span><span>₃</span><span>₄</span><span>₅</span><span>₆</span><span>₇</span><span>₈</span><span>₉</span><span>₊</span><span>₋</span><span>₌</span><span>₍</span><span>₎</span><span>ₐ</span><span>ₑ</span><span>ₒ</span><span>ₓ</span><span>ₔ</span></div><h2>数字符号</h2><div class="symbol-list"><span>Ⅰ</span><span>Ⅱ</span><span>Ⅲ</span><span>Ⅳ</span><span>Ⅴ</span><span>Ⅵ</span><span>Ⅶ</span><span>Ⅷ</span><span>Ⅸ</span><span>Ⅹ</span><span>Ⅺ</span><span>Ⅻ</span><span>ⅰ</span><span>ⅱ</span><span>ⅲ</span><span>ⅳ</span><span>ⅴ</span><span>ⅵ</span><span>ⅶ</span><span>ⅷ</span><span>ⅸ</span><span>ⅹ</span><span>ⅺ</span><span>ⅻ</span><span>⓪</span><span>①</span><span>②</span><span>③</span><span>④</span><span>⑤</span><span>⑥</span><span>⑦</span><span>⑧</span><span>⑨</span><span>⑩</span><span>⓵</span><span>⓶</span><span>⓷</span><span>⓸</span><span>⓹</span><span>⓺</span><span>⓻</span><span>⓼</span><span>⓽</span><span>⓾</span><span>⑴</span><span>⑵</span><span>⑶</span><span>⑷</span><span>⑸</span><span>⑹</span><span>⑺</span><span>⑻</span><span>⑼</span><span>⑽</span><span>⓿</span><span>❶</span><span>❷</span><span>❸</span><span>❹</span><span>❺</span><span>❻</span><span>❼</span><span>❽</span><span>❾</span><span>❿</span><span>㈠</span><span>㈡</span><span>㈢</span><span>㈣</span><span>㈤</span><span>㈥</span><span>㈦</span><span>㈧</span><span>㈨</span><span>㈩</span><span>㊀</span><span>㊁</span><span>㊂</span><span>㊃</span><span>㊄</span><span>㊅</span><span>㊆</span><span>㊇</span><span>㊈</span><span>㊉</span><span>０</span><span>１</span><span>２</span><span>３</span><span>４</span><span>５</span><span>６</span><span>７</span><span>８</span><span>９</span></div><h2>拉丁符号</h2><div class="symbol-list"><span>ą</span><span>č</span><span>Ĥ</span><span>ħ</span><span>ĩ</span><span>Ň</span><span>Ř</span><span>Ť</span><span>Ŵ</span><span>Ž</span><span>⒜</span><span>⒝</span><span>⒞</span><span>⒟</span><span>⒠</span><span>⒡</span><span>⒢</span><span>⒣</span><span>⒤</span><span>⒥</span><span>⒦</span><span>⒧</span><span>⒨</span><span>⒩</span><span>⒪</span><span>⒫</span><span>⒬</span><span>⒭</span><span>⒮</span><span>⒯</span><span>⒰</span><span>⒱</span><span>⒲</span><span>⒳</span><span>⒴</span><span>⒵</span><span>Ⓐ</span><span>Ⓑ</span><span>Ⓒ</span><span>Ⓓ</span><span>Ⓔ</span><span>Ⓕ</span><span>Ⓖ</span><span>Ⓗ</span><span>Ⓘ</span><span>Ⓙ</span><span>Ⓚ</span><span>Ⓛ</span><span>Ⓜ</span><span>Ⓝ</span><span>Ⓞ</span><span>Ⓟ</span><span>Ⓠ</span><span>Ⓡ</span><span>Ⓢ</span><span>Ⓣ</span><span>Ⓤ</span><span>Ⓥ</span><span>Ⓦ</span><span>Ⓧ</span><span>Ⓨ</span><span>Ⓩ</span><span>ⓐ</span><span>ⓑ</span><span>ⓒ</span><span>ⓓ</span><span>ⓔ</span><span>ⓕ</span><span>ⓖ</span><span>ⓗ</span><span>ⓘ</span><span>ⓙ</span><span>ⓚ</span><span>ⓛ</span><span>ⓜ</span><span>ⓝ</span><span>ⓞ</span><span>ⓟ</span><span>ⓠ</span><span>ⓡ</span><span>ⓢ</span><span>ⓣ</span><span>ⓤ</span><span>ⓥ</span><span>ⓦ</span><span>ⓧ</span><span>ⓨ</span><span>ⓩ</span><span>Ａ</span><span>Ｂ</span><span>Ｃ</span><span>Ｄ</span><span>Ｅ</span><span>Ｆ</span><span>Ｇ</span><span>Ｈ</span><span>Ｉ</span><span>Ｊ</span><span>Ｋ</span><span>Ｌ</span><span>Ｍ</span><span>Ｎ</span><span>Ｏ</span><span>Ｐ</span><span>Ｑ</span><span>Ｒ</span><span>Ｓ</span><span>Ｔ</span><span>Ｕ</span><span>Ｖ</span><span>Ｗ</span><span>Ｘ</span><span>Ｙ</span><span>Ｚ</span><span>ａ</span><span>ｂ</span><span>ｃ</span><span>ｄ</span><span>ｅ</span><span>ｆ</span><span>ｇ</span><span>ｈ</span><span>ｉ</span><span>ｊ</span><span>ｋ</span><span>ｌ</span><span>ｍ</span><span>ｎ</span><span>ｏ</span><span>ｐ</span><span>ｑ</span><span>ｒ</span><span>ｓ</span><span>ｔ</span><span>ｕ</span><span>ｖ</span><span>ｗ</span><span>ｘ</span><span>ｙ</span><span>ｚ</span><span>á</span><span>â</span><span>æ</span><span>à</span><span>å</span><span>ã</span><span>ä</span><span>ç</span><span>é</span><span>ê</span><span>è</span><span>ð</span><span>ë</span><span>í</span><span>î</span><span>ì</span><span>ï</span><span>ñ</span><span>ó</span><span>ô</span><span>ò</span><span>ø</span><span>õ</span><span>ö</span><span>ß</span><span>þ</span><span>ú</span><span>û</span><span>ù</span><span>ü</span><span>ý</span><span>ÿ</span><span>ᴀ</span><span>ʙ</span><span>ᴄ</span><span>ᴅ</span><span>ᴇ</span><span>ғ</span><span>ɢ</span><span>ʜ</span><span>ɪ</span><span>ᴊ</span><span>ᴋ</span><span>ʟ</span><span>ᴍ</span><span>ɴ</span><span>ᴏ</span><span>ᴏ</span><span>ᴘ</span><span>ǫ</span><span>ʀ</span><span>s</span><span>ᴛ</span><span>ᴜ</span><span>ᴠ</span><span>ᴡ</span><span>x</span><span>ʏ</span><span>ᴢ</span><span>🅰</span><span>🅱</span><span>🅾</span><span>🅿</span></div><h2>中文符号</h2><div class="symbol-list"><span>㊊</span><span>㊋</span><span>㊌</span><span>㊍</span><span>㊎</span><span>㊏</span><span>㊐</span><span>㊑</span><span>㊒</span><span>㊓</span><span>㊔</span><span>㊕</span><span>㊖</span><span>㊗</span><span>㊘</span><span>㊙</span><span>㊚</span><span>㊛</span><span>㊜</span><span>㊝</span><span>㊞</span><span>㊟</span><span>㊠</span><span>㊡</span><span>㊢</span><span>㊣</span><span>㊤</span><span>㊥</span><span>㊦</span><span>㊧</span><span>㊨</span><span>㊩</span><span>㊪</span><span>㊫</span><span>㊬</span><span>㊭</span><span>㊮</span><span>㊯</span><span>㊰</span></div><h2>日文符号</h2><div class="symbol-list"><span>ぁ</span><span>あ</span><span>ぃ</span><span>い</span><span>ぅ</span><span>う</span><span>ぇ</span><span>え</span><span>ぉ</span><span>お</span><span>か</span><span>が</span><span>き</span><span>ぎ</span><span>く</span><span>ぐ</span><span>け</span><span>げ</span><span>こ</span><span>ご</span><span>さ</span><span>ざ</span><span>し</span><span>じ</span><span>す</span><span>ず</span><span>せ</span><span>ぜ</span><span>そ</span><span>ぞ</span><span>た</span><span>だ</span><span>ち</span><span>ぢ</span><span>っ</span><span>つ</span><span>づ</span><span>て</span><span>で</span><span>と</span><span>ど</span><span>な</span><span>に</span><span>ぬ</span><span>ね</span><span>の</span><span>は</span><span>ば</span><span>ぱ</span><span>ひ</span><span>び</span><span>ぴ</span><span>ふ</span><span>ぶ</span><span>ぷ</span><span>へ</span><span>べ</span><span>ぺ</span><span>ほ</span><span>ぼ</span><span>ぽ</span><span>ま</span><span>み</span><span>む</span><span>め</span><span>も</span><span>ゃ</span><span>や</span><span>ゅ</span><span>ゆ</span><span>ょ</span><span>よ</span><span>ら</span><span>り</span><span>る</span><span>れ</span><span>ろ</span><span>ゎ</span><span>わ</span><span>ゐ</span><span>ゑ</span><span>を</span><span>ん</span><span>ゔ</span><span>ゕ</span><span>ゖ</span><span>゚</span><span>゛</span><span>゜</span><span>ゝ</span><span>ゞ</span><span>ゟ</span><span>゠</span><span>ァ</span><span>ア</span><span>ィ</span><span>イ</span><span>ゥ</span><span>ウ</span><span>ェ</span><span>エ</span><span>ォ</span><span>オ</span><span>カ</span><span>ガ</span><span>キ</span><span>ギ</span><span>ク</span><span>グ</span><span>ケ</span><span>ゲ</span><span>コ</span><span>ゴ</span><span>サ</span><span>ザ</span><span>シ</span><span>ジ</span><span>ス</span><span>ズ</span><span>セ</span><span>ゼ</span><span>ソ</span><span>ゾ</span><span>タ</span><span>ダ</span><span>チ</span><span>ヂ</span><span>ッ</span><span>ツ</span><span>ヅ</span><span>テ</span><span>デ</span><span>ト</span><span>ド</span><span>ナ</span><span>ニ</span><span>ヌ</span><span>ネ</span><span>ノ</span><span>ハ</span><span>バ</span><span>パ</span><span>ヒ</span><span>ビ</span><span>ピ</span><span>フ</span><span>ブ</span><span>プ</span><span>ヘ</span><span>ベ</span><span>ペ</span><span>ホ</span><span>ボ</span><span>ポ</span><span>マ</span><span>ミ</span><span>ム</span><span>メ</span><span>モ</span><span>ャ</span><span>ヤ</span><span>ュ</span><span>ユ</span><span>ョ</span><span>ヨ</span><span>ラ</span><span>リ</span><span>ル</span><span>レ</span><span>ロ</span><span>ヮ</span><span>ワ</span><span>ヰ</span><span>ヱ</span><span>ヲ</span><span>ン</span><span>ヴ</span><span>ヵ</span><span>ヶ</span><span>ヷ</span><span>ヸ</span><span>ヹ</span><span>ヺ</span><span>・</span><span>ー</span><span>ヽ</span><span>ヾ</span><span>ヿ</span><span>㍐</span><span>㍿</span></div><h2>韩文符号</h2><div class="symbol-list"><span>ㄱ</span><span>ㄲ</span><span>ㄳ</span><span>ㄴ</span><span>ㄵ</span><span>ㄶ</span><span>ㄷ</span><span>ㄸ</span><span>ㄹ</span><span>ㄺ</span><span>ㄻ</span><span>ㄼ</span><span>ㄽ</span><span>ㄾ</span><span>ㄿ</span><span>ㅀ</span><span>ㅁ</span><span>ㅂ</span><span>ㅃ</span><span>ㅄ</span><span>ㅅ</span><span>ㅆ</span><span>ㅇ</span><span>ㅈ</span><span>ㅉ</span><span>ㅊ</span><span>ㅋ</span><span>ㅌ</span><span>ㅍ</span><span>ㅎ</span><span>ㅏ</span><span>ㅐ</span><span>ㅑ</span><span>ㅒ</span><span>ㅓ</span><span>ㅔ</span><span>ㅕ</span><span>ㅖ</span><span>ㅗ</span><span>ㅘ</span><span>ㅙ</span><span>ㅚ</span><span>ㅛ</span><span>ㅜ</span><span>ㅝ</span><span>ㅞ</span><span>ㅟ</span><span>ㅠ</span><span>ㅡ</span><span>ㅢ</span><span>ㅥ</span><span>ㅦ</span><span>ㅧ</span><span>ㅨ</span><span>ㅩ</span><span>ㅪ</span><span>ㅫ</span><span>ㅬ</span><span>ㅭ</span><span>ㅮ</span><span>ㅯ</span><span>ㅰ</span><span>ㅱ</span><span>ㅲ</span><span>ㅳ</span><span>ㅴ</span><span>ㅵ</span><span>ㅶ</span><span>ㅷ</span><span>ㅸ</span><span>ㅹ</span><span>ㅺ</span><span>ㅻ</span><span>ㅼ</span><span>ㅽ</span><span>ㅾ</span><span>ㅿ</span><span>ㆀ</span><span>ㆁ</span><span>ㆂ</span><span>ㆃ</span><span>ㆄ</span><span>ㆅ</span><span>ㆆ</span><span>ㆇ</span><span>ㆈ</span><span>ㆉ</span><span>ㆊ</span></div><h2>货币符号</h2><div class="symbol-list"><span>₮</span><span>৲</span><span>৳</span><span>௹</span><span>฿</span><span>៛</span><span>₠</span><span>₡</span><span>₢</span><span>₣</span><span>₤</span><span>₥</span><span>₦</span><span>₧</span><span>₨</span><span>₩</span><span>₪</span><span>₫</span><span>₭</span><span>₯</span><span>₰</span><span>₱</span><span>₲</span><span>₳</span><span>₴</span><span>₵</span><span>￥</span><span>﷼</span><span>¢</span><span>¤</span><span>€</span><span>ƒ</span><span>£</span><span>¥</span></div>',62),o=[c];function d(s,a,n,c,d,h){const r=p["a"];return Object(e["openBlock"])(),Object(e["createElementBlock"])("div",t,[Object(e["createElementVNode"])("div",i,[Object(e["createVNode"])(r,{title:"特殊符号大全",data:[],showSearch:!1}),Object(e["createElementVNode"])("div",l,[Object(e["createElementVNode"])("div",{class:"page-tool-symbol",ref:"items",onClick:a[0]||(a[0]=(...s)=>h.onCopy&&h.onCopy(...s))},o,512)])])])}var h=n("3ef4"),r={components:{PageHeader:p["a"]},mounted(){const s=[...this.$refs.items.querySelectorAll("li")];s.forEach(s=>{s.title=s.innerText})},methods:{onCopy(s){"SPAN"===s.target.tagName&&this.copyArticle(s.target)},copyArticle(s){const a=document.createRange();a.selectNode(s);const n=window.getSelection();n.rangeCount>0&&n.removeAllRanges(),n.addRange(a),document.execCommand("copy"),h["a"].success("复制成功")}}},v=(n("f3e2"),n("6b0d")),m=n.n(v);const b=m()(r,[["render",d]]);a["default"]=b},d76c:function(s,a,n){},f3e2:function(s,a,n){"use strict";n("d76c")}}]);