(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0e1fbc"],{"7d81":function(t,n,e){"use strict";e.r(n);var a=e("f2bf"),s=Object(a["o"])('<p></p><h2 id="yi-ge-fei-chang-jing-jian-ling-huo-de-liu-cheng-kong-zhi-gong-ju-ku" tabindex="-1"><a class="header-anchor" href="#yi-ge-fei-chang-jing-jian-ling-huo-de-liu-cheng-kong-zhi-gong-ju-ku">¶</a> 一个非常精简灵活的流程控制工具库</h2><p>​ 前段时间，由于业务需求，无意中在网上看到一篇原腾讯高级工程师张镇圳的文章<a href="https://www.qcloud.com/community/article/537217001491374183">《一个只有99行代码的JS流程框架》</a>其中感悟颇深，而且正好满足现实中的需求。</p><h3 id="xu-qiu-ru-xia" tabindex="-1"><a class="header-anchor" href="#xu-qiu-ru-xia">¶</a> 需求如下：</h3><p>有A、B、C、D四个接口； A接口最先请求，B、C接口根据A接口的返回值决定是并发或者串联请求； D接口依赖于C接口，但前提条件是A接口的返回值决定是否请求； 每一次所有流程走完后(包括异步)执行某个特定的任务； 尽管上述只有4的接口(实际只有三)，用条件判断或者普通代码实现起来并不容易，而且扩展性和可阅读性都很差。但是用原作者的flowJS就能轻松而优雅的实现。由于业务需求，我对其flowJS进行了一些改写和优化。</p><h3 id="shi-xian-yao-dian" tabindex="-1"><a class="header-anchor" href="#shi-xian-yao-dian">¶</a> 实现要点：</h3><h3 id="1-bu-zou" tabindex="-1"><a class="header-anchor" href="#1-bu-zou">¶</a> 1、步骤;</h3><p>一支流程flow里面可以有N个步骤step;</p><h3 id="2-bu-zou-shu-ju" tabindex="-1"><a class="header-anchor" href="#2-bu-zou-shu-ju">¶</a> 2、步骤数据；</h3><p>每个步骤可以设置其自身以及其前后步骤的信息和数据；</p><h3 id="3-yu-xian-gui-hua" tabindex="-1"><a class="header-anchor" href="#3-yu-xian-gui-hua">¶</a> 3、预先规划</h3><p>可以预先规划好流程的每一步，如this.setNext(&#39;步骤A&#39;).setNext(&#39;步骤B&#39;)……</p><p>​<img src="https://img-blog.csdnimg.cn/20191112214304291.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3NwcmluZzU1MzA=,size_16,color_FFFFFF,t_70#pic_center" alt="在这里插入图片描述"><img src="https://img-blog.csdnimg.cn/20191112214725562.png#pic_center" alt="在这里插入图片描述"></p><h3 id="4-jue-ding-xia-yi-bu" tabindex="-1"><a class="header-anchor" href="#4-jue-ding-xia-yi-bu">¶</a> 4、决定下一步</h3><p>可以在任何一步决定下一步做什么，如 this.setNext(&#39;步骤C&#39;)；</p><p><img src="https://img-blog.csdnimg.cn/20191112215013269.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3NwcmluZzU1MzA=,size_16,color_FFFFFF,t_70#pic_center" alt="在这里插入图片描述"><img src="https://img-blog.csdnimg.cn/20191112215049943.png#pic_center" alt="在这里插入图片描述"></p><h3 id="5-bu-zou-guan-lian" tabindex="-1"><a class="header-anchor" href="#5-bu-zou-guan-lian">¶</a> 5、步骤关联</h3><p>在任何一步中，可以知道当前步是在做什么，上一步做了什么、下一步做什么，如this.getCurr()、this.getPrev()、this.getNext()；</p><p><img src="https://img-blog.csdnimg.cn/20191112215140506.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3NwcmluZzU1MzA=,size_16,color_FFFFFF,t_70#pic_center" alt="在这里插入图片描述"><img src="https://img-blog.csdnimg.cn/20191112215219463.png#pic_center" alt="在这里插入图片描述"></p><h3 id="6-jie-guo-chuan-di" tabindex="-1"><a class="header-anchor" href="#6-jie-guo-chuan-di">¶</a> 6、结果传递</h3><p>当前步做完后，能将结果告诉下一步（仅仅是下一步能获取到当前步传递的结果，也就是为了保护变量污染，每一步都只能获取到前一步的结果），如 给下一步传值this.nextData({name1:value1,name2:value2,……})、获取上一步传来的值this.stepData(name1)或this.stepData()；</p><p><img src="https://img-blog.csdnimg.cn/20191112215402646.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3NwcmluZzU1MzA=,size_16,color_FFFFFF,t_70#pic_center" alt="在这里插入图片描述"><img src="https://img-blog.csdnimg.cn/20191112215435412.png#pic_center" alt="在这里插入图片描述"></p><h3 id="7-quan-ju-bian-liang" tabindex="-1"><a class="header-anchor" href="#7-quan-ju-bian-liang">¶</a> 7、全局变量</h3><p>可以设置或获取整个流程的全局变量，这样所有的步骤都能共享该变量，如 设置全局变量值this.flowData({name1:value1,name2:value2,……})，获取全局变量值this.flowData(name1)或this.flowData()；</p><p><img src="https://img-blog.csdnimg.cn/20191112215549928.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3NwcmluZzU1MzA=,size_16,color_FFFFFF,t_70#pic_center" alt="在这里插入图片描述"><img src="https://img-blog.csdnimg.cn/20191112215705702.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3NwcmluZzU1MzA=,size_16,color_FFFFFF,t_70#pic_center" alt="在这里插入图片描述"></p><h3 id="8-zhi-xing-gou-zi" tabindex="-1"><a class="header-anchor" href="#8-zhi-xing-gou-zi">¶</a> 8、执行钩子</h3><p>上一步可以知道当前步的执行结果，成功 or 失败，如 在上一步中设置this.setNext(&#39;步骤B&#39;, successFun, failFun)、当前步中通过this.success(args)、this.fail(args)来告诉上一步；</p><p><img src="https://img-blog.csdnimg.cn/20191112215801264.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3NwcmluZzU1MzA=,size_16,color_FFFFFF,t_70#pic_center" alt="在这里插入图片描述"><img src="https://img-blog.csdnimg.cn/2019111221562385.png#pic_center" alt="在这里插入图片描述"></p><h3 id="9-zhi-xing-xia-yi-bu" tabindex="-1"><a class="header-anchor" href="#9-zhi-xing-xia-yi-bu">¶</a> 9、执行下一步</h3><p>当前步可以随时执行下一步，如this.next()；</p><p><img src="https://img-blog.csdnimg.cn/20191112215942234.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3NwcmluZzU1MzA=,size_16,color_FFFFFF,t_70#pic_center" alt="在这里插入图片描述"><img src="https://img-blog.csdnimg.cn/20191112220013820.png#pic_center" alt="在这里插入图片描述"></p><h3 id="10-bing-xing-zhi-xing" tabindex="-1"><a class="header-anchor" href="#10-bing-xing-zhi-xing">¶</a> 10、并行执行</h3><p>有些步骤能并行执行，并且要都执行完才能执行下一步，如 this.setNext(&#39;步骤A&#39;).setNext([步骤B1,步骤B2,步骤B3]).setNext(&#39;步骤C&#39;)；</p><p><img src="https://img-blog.csdnimg.cn/20191112220106785.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3NwcmluZzU1MzA=,size_16,color_FFFFFF,t_70#pic_center" alt="在这里插入图片描述"><img src="https://img-blog.csdnimg.cn/20191112220141114.png#pic_center" alt="在这里插入图片描述"></p><h3 id="11-gui-ji-xin-xi" tabindex="-1"><a class="header-anchor" href="#11-gui-ji-xin-xi">¶</a> 11、轨迹信息</h3><p>可以在任何时候知道当前代码流程运行过的轨迹，如flowJS.trace，这对于了解页面的执行过程会比较有帮助；</p><p><img src="https://img-blog.csdnimg.cn/2019111222022348.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3NwcmluZzU1MzA=,size_16,color_FFFFFF,t_70#pic_center" alt="在这里插入图片描述"><img src="https://img-blog.csdnimg.cn/20191112220319516.png#pic_center" alt="在这里插入图片描述"></p><h3 id="12-qian-tao" tabindex="-1"><a class="header-anchor" href="#12-qian-tao">¶</a> 12、嵌套</h3><p>支持流程多嵌套</p><p><img src="https://img-blog.csdnimg.cn/20191112220535164.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3NwcmluZzU1MzA=,size_16,color_FFFFFF,t_70#pic_center" alt="在这里插入图片描述"><img src="https://img-blog.csdnimg.cn/20191112220604437.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3NwcmluZzU1MzA=,size_16,color_FFFFFF,t_70#pic_center" alt="在这里插入图片描述"></p><h3 id="13-jie-shu" tabindex="-1"><a class="header-anchor" href="#13-jie-shu">¶</a> 13、结束</h3><p>可以随时结束流程，如flowJS.stop()；</p><p><img src="https://img-blog.csdnimg.cn/20191112220815889.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3NwcmluZzU1MzA=,size_16,color_FFFFFF,t_70#pic_center" alt="在这里插入图片描述"><img src="https://img-blog.csdnimg.cn/20191112220900223.png#pic_center" alt="在这里插入图片描述"></p><h3 id="dai-ma-qing-dan" tabindex="-1"><a class="header-anchor" href="#dai-ma-qing-dan">¶</a> 代码清单：</h3><pre><code class="language-javascript">const INIT = &#39;init&#39;;\nconst PENDING = &#39;pending&#39;;\nconst FULLFILED = &#39;fullfiled&#39;;\nconst STOPED = &#39;stoped&#39;;\nconst REJECTED = &#39;rejected&#39;;\n\nfunction isObject(tar) {\n    return {}.toString.call(tar) === &#39;[object Object]&#39;;\n}\n\nfunction isFunction(tar) {\n    return {}.toString.call(tar) === &#39;[object Function]&#39;;\n}\n\nfunction isArray(tar) {\n    return Array.isArray(tar);\n}\n\nfunction isString(tar) {\n    return typeof tar === &#39;string&#39;;\n}\n\n// 扩展对象属性方法\nfunction extend() {\n    let target = arguments[0];\n    for (var i = 1, arg; i &lt; arguments.length, arg = arguments[i]; i++) {\n        for (var prop in arg) {\n            arg.hasOwnProperty(prop) &amp;&amp; (target[prop] = arg[prop]);\n        }\n    }\n\n    return target;\n}\n\n/**\n * Step类\n * @param {Array|String} name 一个或者多个步骤\n * @param {Object} flow 流程对象\n */\nclass Step {\n    constructor(name, flow) {\n        // 如果是一个step对象则合并返回\n        if (isObject(name)) {\n            return extend(this, name);\n        }\n\n        this.name = name;\n        this.flow = flow;\n\n        this.nextStep = null;\n        this.stepData = {};\n        this.stepCallback = {};\n        this.nextData = {};\n        this.prevStepName = null;\n        this.nextStepName = null;\n        // 遍历生成步骤映射\n        this.stepMapping = [].concat(name).reduce((total, curr) =&gt; {\n            total[curr] = false;\n            return total;\n        }, {});\n    }\n\n    // 设置下一步\n    setNext(stepName, success = function () { }, fail = function () { }) {\n        this.nextStepName = stepName;\n        this.nextStep = new Step(stepName, this.flow);\n        this.nextStep.prevStepName = this.name;\n        this.nextStep.stepCallback.fail = fail;\n        this.nextStep.stepCallback.success = success;\n\n        return this.nextStep; // 链式调用\n    };\n\n    // 设置下一步(数组方式)\n    setNexts(stepNames) {\n        let step = this;\n        \n        [].concat(stepNames).forEach(stepName =&gt; {\n            step = step.setNext(stepName);\n        });\n    };\n\n    // 获得当前步骤数据\n    getStepData(dataName) {\n        return dataName ? this.stepData[dataName] : this.stepData;\n    };\n\n    // 设置下一步数据\n    setNextData(data) {\n        extend(this.nextData, data);\n    };\n\n    // 获得/设置全局数据\n    flowData(data) {\n        let { flowData } = this.flow;\n        isObject(data) &amp;&amp; extend(flowData, data);\n\n        return isString(data) ? flowData[data] : flowData;\n    };\n\n    // 获得下一步骤\n    getNext() {\n        return this.nextStepName;\n    };\n\n    // 获得上一步骤\n    getPrev() {\n        return this.prevStepName;\n    };\n\n    // 获得当前步骤\n    getCurr() {\n        return this.name;\n    };\n\n    // 失败回调\n    fail() {\n        this.stepCallback.fail.apply(this, arguments);\n    };\n\n    // 成功回调\n    success() {\n        this.stepCallback.success.apply(this, arguments);\n    };\n\n    // 走下一步\n    next(stepName, success, fail) {\n        if(this.flow.status !== PENDING) {\n            this.flow.instance.onStop &amp;&amp; this.flow.instance.onStop(this)\n            return false;\n        }\n        \n        if(stepName) {\n            this.nextStepName = stepName;\n            this.nextStep = new Step(stepName, this.flow);\n        }\n\n        if (!this.nextStepName) return false;\n        if (success) this.nextStep.stepCallback.success = success;\n        if (fail) this.nextStep.stepCallback.fail = fail;\n\n        // 如果父步骤存在，则继承，否则=本步骤\n        this.nextStep.parent = this.parent || this.name;\n        this.nextStep.stepData = this.nextData;\n        this.stepMapping[this.name] = true;\n\n        if (this.done()) {\n            let nextSteps = [].concat(this.nextStepName);\n\n            this.setFlowTrace(nextSteps);\n            // 遍历执行步骤函数\n            nextSteps.forEach(name =&gt; this.runStep(name));\n        }\n    };\n\n    // 设置步骤轨迹\n    setFlowTrace(data) {\n        let trace = [].concat(data).map(name =&gt; this.flow.stepPath + name);\n\n        this.flow.trace.push(...trace);\n        isObject(this.parent) &amp;&amp; this.parent.flow.trace.push(...trace);\n    }\n\n    // 执行步骤函数\n    runStep(stepName) {\n        let { nextStep, nextStepName, flow } = this;\n        let fn = flow.steps[stepName];\n\n        if (typeof fn !== &#39;function&#39;) {\n            throw new Error(&quot;step not found: &quot; + stepName);\n        }\n            // 如果是群组\n        if (isArray(nextStepName)) {\n            nextStep = new Step(nextStep);\n            nextStep.name = stepName\n        }\n\n        fn.call(nextStep, nextStep, function() {\n            nextStep.next.apply(nextStep, arguments)\n        });\n    };\n\n    // 该步骤或该步骤所有子步骤是否运行完毕\n    done() {\n        return Object.values(this.stepMapping).every(v =&gt; v);\n    }\n}\n\n// 主程序\nclass Flow {\n    constructor(steps, parent) {\n        this.parent = parent;\n        this.flow = {\n            steps: extend({\n                init: function () { }\n            }, steps),\n            status: PENDING, // 进行中:pending|完成:fullfiled|已停止:stoped|已失败:rejected\n            instance: this,\n            flowData: {},\n            stepPath: &#39;&#39;,\n            trace: [INIT]\n        }\n    }\n\n    start() {\n        let { parent, flow } = this;\n        let initStep = new Step(INIT, flow);\n\n        if (parent) {\n            initStep.parent = parent;\n            flow.stepPath += (parent.name + &#39;.&#39;);\n            parent.flow.trace.push(flow.stepPath + INIT);\n        }\n\n        flow.steps.init.call(initStep, initStep, function() {\n            return initStep.next.apply(initStep, arguments);\n        });\n        return this;\n    }\n\n    stop() {\n        if(this.flow.status === PENDING) this.flow.status = STOPED;\n    }\n}\n\nfunction flowJS(data, parent) {\n    return new Flow(data, parent).start()\n}\n</code></pre>',45);function i(t,n,e,a,i,p){return s}const p={};p.render=i;n["default"]=p}}]);