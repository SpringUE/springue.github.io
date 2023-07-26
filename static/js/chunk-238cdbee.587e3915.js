(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-238cdbee"],{b9a6:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=(e,t)=>{const n=e.__vccOpts||e;for(const[r,a]of t)n[r]=a;return n}},e320:function(e,t,n){"use strict";n.r(t);var r=n("f2bf");const a={class:"blog-doc-component"},o=Object(r["createElementVNode"])("h1",null,"持久化储存之IndexDB常用方法封装",-1),c=Object(r["createElementVNode"])("p",null,"官方解释：IndexedDB 是一种底层 API，用于在客户端存储大量的结构化数据（也包括文件/二进制大型对象（blobs））。该 API 使用索引实现对数据的高性能搜索。虽然 Web Storage 在存储较少量的数据很有用，但对于存储更大量的结构化数据来说力不从心。而 IndexedDB 提供了这种场景的解决方案。",-1),s=Object(r["createElementVNode"])("p",null,"IndexedDB提供了一套完整的API，包括打开数据库连接，创建数据库对象，增删改查等，然而这些API当中存在部分异步、部分同步的情况，异步接口并非Promise形式，操作起来稍有点复杂，相比localStorage来说，于是我对常用的一些方法进行了二次封装。",-1),l=Object(r["createElementVNode"])("h2",{id:"promisefeng-zhuang-qi",tabindex:"-1"},[Object(r["createElementVNode"])("a",{class:"header-anchor",href:"#promisefeng-zhuang-qi"},"¶"),Object(r["createTextVNode"])(" Promise封装器")],-1),d=Object(r["createElementVNode"])("p",null,"由于原生的IndexDB操作大部分是属于异步请求事件，则用Promise封装一个公共的方法",-1),u=Object(r["createElementVNode"])("pre",null,[Object(r["createElementVNode"])("code",{class:"language-javascript"},"const promiseRequest = (request, options) => {\n  return new Promise((resolve, reject) => {\n    request.onsuccess = function (e) {\n      res = e.target.result\n      resolve(res)\n    }\n\n    request.onerror = function (e) {\n      reject(new Error(e.target.error))\n    }\n  })\n}\n")],-1),i=Object(r["createElementVNode"])("h2",{id:"feng-zhuang-pi-chu-li-qi",tabindex:"-1"},[Object(r["createElementVNode"])("a",{class:"header-anchor",href:"#feng-zhuang-pi-chu-li-qi"},"¶"),Object(r["createTextVNode"])(" 封装批处理器")],-1),b=Object(r["createElementVNode"])("p",null,"批量异步任务处理逻辑",-1),m=Object(r["createElementVNode"])("pre",null,[Object(r["createElementVNode"])("code",{class:"language-javascript"},"function batchHandler(data, handler) {\n  let tasks = [].concat(data).map(x => {\n    return handler(x)\n  })\n  return Array.isArray(data) ? Promise.all(tasks) : handler(data)\n}\n")],-1),j=Object(r["createElementVNode"])("h2",{id:"chuang-jian",tabindex:"-1"},[Object(r["createElementVNode"])("a",{class:"header-anchor",href:"#chuang-jian"},"¶"),Object(r["createTextVNode"])(" 创建")],-1),h=Object(r["createElementVNode"])("p",null,[Object(r["createTextVNode"])("创建一个数据库操作对象，并返回一个Object对象"),Object(r["createElementVNode"])("br"),Object(r["createTextVNode"])(" 数据库版本默认为: 1")],-1),N=Object(r["createElementVNode"])("pre",null,[Object(r["createElementVNode"])("code",{class:"language-javascript"},"/**\n * 创建一个数据库连接\n * @param {String} dbName 数据库名\n * @param {Number} version 数据库版本\n * @param {Object} options 选项配置(schemas<Array>|)\n */\nfunction createIndexDB(dbName, version = 1, options = {}) {\n  if (!dbName) {\n    throw new Error('dbName is required.')\n  }\n\n  let db\n\n  return {}\n}\n")],-1),O=Object(r["createElementVNode"])("h2",{id:"da-kai",tabindex:"-1"},[Object(r["createElementVNode"])("a",{class:"header-anchor",href:"#da-kai"},"¶"),Object(r["createTextVNode"])(" 打开")],-1),p=Object(r["createElementVNode"])("p",null,"打开数据库，不存在时会默认创建这个数据库，返回Promise",-1),V=Object(r["createElementVNode"])("pre",null,[Object(r["createElementVNode"])("code",{class:"language-javascript"},"/**\n * 创建一个数据库连接\n * @param {String} dbName 数据库名\n * @param {Number} version 数据库版本\n * @param {Object} options 选项配置(schemas<Array>|)\n */\nfunction createIndexDB(dbName, version = 1, options = {}) {\n  if (!dbName) {\n    throw new Error('dbName is required.')\n  }\n\n  let db\n  let { schemas } = options\n\n  return {\n    open() {\n      return new Promise((resolve, reject) => {\n        const request = window.indexedDB.open(dbName, version)\n        request.onsuccess = function (e) {\n          db = e.target.result\n          resolve(db)\n        }\n\n        request.onerror = function (e) {\n          reject(new Error(e.target.error))\n        }\n\n        // 数据库创建或升级的时触发\n        request.onupgradeneeded = function (e) {\n          if(schemas && schemas.length) {\n            schemas.forEach(schema => createObjectStore(schema.storeName, schema.optins || {}))\n          }\n        }\n      })\n    },\n  }\n}\n")],-1),E=Object(r["createElementVNode"])("h2",{id:"guan-bi",tabindex:"-1"},[Object(r["createElementVNode"])("a",{class:"header-anchor",href:"#guan-bi"},"¶"),Object(r["createTextVNode"])(" 关闭")],-1),g=Object(r["createElementVNode"])("p",null,"关闭数据库",-1),f=Object(r["createElementVNode"])("pre",null,[Object(r["createElementVNode"])("code",{class:"language-javascript"},"function close() {\n  const request = db.close()\n  return promiseRequest(request)\n}\n")],-1),x=Object(r["createElementVNode"])("h2",{id:"chuang-jian-cang-ku-dui-xiang",tabindex:"-1"},[Object(r["createElementVNode"])("a",{class:"header-anchor",href:"#chuang-jian-cang-ku-dui-xiang"},"¶"),Object(r["createTextVNode"])(" 创建仓库对象")],-1),w=Object(r["createElementVNode"])("p",null,"创建仓库数据对象(表) [同步]",-1),q=Object(r["createElementVNode"])("pre",null,[Object(r["createElementVNode"])("code",{class:"language-javascript"},"function createObjectStore(storeName, options = {}) {\n  const _options = {\n    keyPath: 'id',\n    ...options\n  }\n\n  try {\n    if (!db.objectStoreNames.contains(storeName)) {\n      let objectStore = db.createObjectStore(storeName, _options)\n      return objectStore\n    } else {\n      throw new Error(`The storeName <${storeName}> is exist.`)\n    }\n  } catch (e) {\n    throw new Error(e.target.error)\n  }\n}\n")],-1),S=Object(r["createElementVNode"])("h2",{id:"shan-chu-cang-ku-dui-xiang",tabindex:"-1"},[Object(r["createElementVNode"])("a",{class:"header-anchor",href:"#shan-chu-cang-ku-dui-xiang"},"¶"),Object(r["createTextVNode"])(" 删除仓库对象")],-1),y=Object(r["createElementVNode"])("p",null,"删除仓库数据对象(表) [同步]",-1),v=Object(r["createElementVNode"])("pre",null,[Object(r["createElementVNode"])("code",{class:"language-javascript"},"function deleteObjectStore(storeName) {\n  try {\n    if (!db.objectStoreNames.contains(storeName)) {\n      return db.deleteObjectStore(storeName)\n    } else {\n      throw new Error(`The storeName <${storeName}> is not exist.`)\n    }\n  } catch (e) {\n    throw new Error(e.target.error)\n  }\n}\n")],-1),k=Object(r["createElementVNode"])("h2",{id:"chuang-jian-suo-yin",tabindex:"-1"},[Object(r["createElementVNode"])("a",{class:"header-anchor",href:"#chuang-jian-suo-yin"},"¶"),Object(r["createTextVNode"])(" 创建索引")],-1),P=Object(r["createElementVNode"])("p",null,"基于仓库数据对象创建索引",-1),T=Object(r["createElementVNode"])("pre",null,[Object(r["createElementVNode"])("code",{class:"language-javascript"},"// 创建索引 [同步]\nfunction createIndex(objectStore, options = {}) {\n  const {indexName, keyPath, objectParameters} = options\n\n  try {\n    if (objectStore) {\n      return objectStore.createIndex(indexName, keyPath, objectParameters) \n    } else {\n      throw new Error(`The objectStore is required.`)\n    }\n  } catch (e) {\n    throw new Error(e.target.error)\n  }\n}\n")],-1),_=Object(r["createElementVNode"])("h2",{id:"shan-chu-suo-yin",tabindex:"-1"},[Object(r["createElementVNode"])("a",{class:"header-anchor",href:"#shan-chu-suo-yin"},"¶"),Object(r["createTextVNode"])(" 删除索引")],-1),I=Object(r["createElementVNode"])("p",null,"基于仓库数据对象删除索引",-1),C=Object(r["createElementVNode"])("pre",null,[Object(r["createElementVNode"])("code",{class:"language-javascript"},"// 删除索引 [同步]\nfunction deleteIndex(objectStore, indexName) {\n  try {\n    if (objectStore) {\n      return objectStore.deleteIndex(indexName) \n    } else {\n      throw new Error(`The objectStore is required.`)\n    }\n  } catch (e) {\n    throw new Error(e.target.error)\n  }\n}\n")],-1),A=Object(r["createElementVNode"])("h2",{id:"cao-zuo-shu-ju-dui-xiang",tabindex:"-1"},[Object(r["createElementVNode"])("a",{class:"header-anchor",href:"#cao-zuo-shu-ju-dui-xiang"},"¶"),Object(r["createTextVNode"])(" 操作数据对象")],-1),R=Object(r["createElementVNode"])("p",null,"由于增删改查数据都需要操作仓库数据对象，则可将其封装成公共方法",-1),B=Object(r["createElementVNode"])("pre",null,[Object(r["createElementVNode"])("code",{class:"language-javascript"},"function transactionObjectStore(storeName, options) {\n  const {model = 'readwrite', oncomplete, onerror} = options\n\n  try {\n    const transaction = db.transaction([storeName], model)\n    transaction.oncomplete = oncomplete\n    transaction.onerror = function(e) {\n      onerror && onerror(e)\n      throw new Error(e.target.error)\n    }\n\n    const objectStore = transaction.objectStore(storeName)\n    return objectStore\n  } catch (e) {\n    throw new Error(e.target.error)\n  }\n}\n")],-1),D=Object(r["createElementVNode"])("h2",{id:"zeng",tabindex:"-1"},[Object(r["createElementVNode"])("a",{class:"header-anchor",href:"#zeng"},"¶"),Object(r["createTextVNode"])(" 增")],-1),H=Object(r["createElementVNode"])("p",null,"基于仓库数据对象插入新数据，支持多条插入",-1),z=Object(r["createElementVNode"])("pre",null,[Object(r["createElementVNode"])("code",{class:"language-javascript"},"function add(storeName, items) {\n  return batchHandler(items, item => {\n    let request = transactionObjectStore(storeName).add(item)\n    return promiseRequest(request)\n  })\n}\n")],-1),$=Object(r["createElementVNode"])("h2",{id:"shan",tabindex:"-1"},[Object(r["createElementVNode"])("a",{class:"header-anchor",href:"#shan"},"¶"),Object(r["createTextVNode"])(" 删")],-1),J=Object(r["createElementVNode"])("p",null,"基于仓库数据对象删除数据，支持多条删除",-1),F=Object(r["createElementVNode"])("pre",null,[Object(r["createElementVNode"])("code",{class:"language-javascript"},"function delete(storeName, keys) {\n  return batchHandler(keys, key => {\n    let request = transactionObjectStore(storeName).delete(key)\n    return promiseRequest(request)\n  })\n}\n")],-1),M=Object(r["createElementVNode"])("h2",{id:"gai",tabindex:"-1"},[Object(r["createElementVNode"])("a",{class:"header-anchor",href:"#gai"},"¶"),Object(r["createTextVNode"])(" 改")],-1),W=Object(r["createElementVNode"])("p",null,"基于仓库数据对象更新数据，支持多条",-1),G=Object(r["createElementVNode"])("pre",null,[Object(r["createElementVNode"])("code",{class:"language-javascript"},"function put(storeName, items) {\n  return batchHandler(items, item => {\n    let request = transactionObjectStore(storeName).put(item)\n    return promiseRequest(request)\n  })\n}\n")],-1),K=Object(r["createElementVNode"])("h2",{id:"cha",tabindex:"-1"},[Object(r["createElementVNode"])("a",{class:"header-anchor",href:"#cha"},"¶"),Object(r["createTextVNode"])(" 查")],-1),L=Object(r["createElementVNode"])("p",null,"基于仓库数据对象查询数据，支持多条",-1),Q=Object(r["createElementVNode"])("pre",null,[Object(r["createElementVNode"])("code",{class:"language-javascript"},"function get(storeName, keys) {\n  return batchHandler(keys, key => {\n    let request = transactionObjectStore(storeName, {model: 'readonly'}).get(key)\n    return promiseRequest(request)\n  })\n}\n")],-1),U=Object(r["createElementVNode"])("h2",{id:"cha-suo-you",tabindex:"-1"},[Object(r["createElementVNode"])("a",{class:"header-anchor",href:"#cha-suo-you"},"¶"),Object(r["createTextVNode"])(" 查-所有")],-1),X=Object(r["createElementVNode"])("p",null,"基于仓库数据对象查询所有数据",-1),Y=Object(r["createElementVNode"])("pre",null,[Object(r["createElementVNode"])("code",{class:"language-javascript"},"function getAll(storeName, query, count) {\n  let request = transactionObjectStore(storeName).getAll(query, count)\n  return promiseRequest(request)\n}\n")],-1),Z=Object(r["createElementVNode"])("h2",{id:"cha-tiao-mu-shu",tabindex:"-1"},[Object(r["createElementVNode"])("a",{class:"header-anchor",href:"#cha-tiao-mu-shu"},"¶"),Object(r["createTextVNode"])(" 查-条目数")],-1),ee=Object(r["createElementVNode"])("p",null,"基于仓库数据对象查询条目数",-1),te=Object(r["createElementVNode"])("pre",null,[Object(r["createElementVNode"])("code",{class:"language-javascript"},"function count(storeName, query) {\n  let request = transactionObjectStore(storeName).count(query)\n  return promiseRequest(request)\n}\n")],-1),ne=Object(r["createElementVNode"])("h2",{id:"dai-ma-qing-dan",tabindex:"-1"},[Object(r["createElementVNode"])("a",{class:"header-anchor",href:"#dai-ma-qing-dan"},"¶"),Object(r["createTextVNode"])(" 代码清单")],-1),re=Object(r["createElementVNode"])("pre",null,[Object(r["createElementVNode"])("code",{class:"language-javascript"},"// util.indexDB.js\n\n/**\n * Promise封装器\n * 由于原生的IndexDB操作大部分是属于异步请求事件，则用Promise封装一个公共的方法\n * @param request 请求事件对象\n * @returns Promise\n */\nfunction promiseRequest(request) {\n  return new Promise((resolve, reject) => {\n    request.onsuccess = function (e) {\n      res = e.target.result\n      resolve(res)\n    }\n\n    request.onerror = function (e) {\n      reject(new Error(e.target.error))\n    }\n  })\n}\n\n/**\n * 封装批处理器\n * 批量异步任务处理逻辑\n * @param {String|Array|Object} data 任务数据，可以是字符串|对象|数组\n * @param {Function} handler 任务逻辑处理器\n * @returns Promise\n */\nfunction batchHandler(data, handler) {\n  let tasks = [].concat(data).map(x => {\n    return handler(x)\n  })\n  return Array.isArray(data) ? Promise.all(tasks) : handler(data)\n}\n\n/**\n * 创建一个数据库连接\n * @param {String} dbName 数据库名\n * @param {Number} version 数据库版本\n * @param {Object} options 选项配置(schemas<Array>|)\n */\nfunction createIndexDB(dbName, version = 1, options = {}) {\n  if (!dbName) {\n    throw new Error('dbName is required.')\n  }\n\n  let db\n  let { schemas } = options\n\n  function open() {\n    return new Promise((resolve, reject) => {\n      const request = window.indexedDB.open(dbName, version)\n      request.onsuccess = function (e) {\n        db = e.target.result\n        resolve(db)\n      }\n\n      request.onerror = function (e) {\n        reject(new Error(e.target.error))\n      }\n\n      // 数据库创建或升级的时触发\n      request.onupgradeneeded = function (e) {\n        if(schemas && schemas.length) {\n          schemas.forEach(schema => createObjectStore(schema.storeName, schema.optins || {}))\n        }\n      }\n    })\n  }\n\n  function close() {\n    const request = db.close()\n    return promiseRequest(request)\n  }\n\n  function createObjectStore(storeName, options = {}) {\n    const _options = {\n      keyPath: 'id',\n      ...options\n    }\n  \n    try {\n      if (!db.objectStoreNames.contains(storeName)) {\n        let objectStore = db.createObjectStore(storeName, _options)\n        return objectStore\n      } else {\n        throw new Error(`The storeName <${storeName}> is exist.`)\n      }\n    } catch (e) {\n      throw new Error(e.target.error)\n    }\n  }\n\n  function deleteObjectStore(storeName) {\n    try {\n      if (!db.objectStoreNames.contains(storeName)) {\n        return db.deleteObjectStore(storeName)\n      } else {\n        throw new Error(`The storeName <${storeName}> is not exist.`)\n      }\n    } catch (e) {\n      throw new Error(e.target.error)\n    }\n  }\n\n  // 创建索引 [同步]\n  function createIndex(objectStore, options = {}) {\n    const {indexName, keyPath, objectParameters} = options\n\n    try {\n      if (objectStore) {\n        return objectStore.createIndex(indexName, keyPath, objectParameters) \n      } else {\n        throw new Error(`The objectStore is required.`)\n      }\n    } catch (e) {\n      throw new Error(e.target.error)\n    }\n  }\n\n  // 删除索引 [同步]\n  function deleteIndex(objectStore, indexName) {\n    try {\n      if (objectStore) {\n        return objectStore.deleteIndex(indexName) \n      } else {\n        throw new Error(`The objectStore is required.`)\n      }\n    } catch (e) {\n      throw new Error(e.target.error)\n    }\n  }\n\n  function transactionObjectStore(storeName, options) {\n    const {model = 'readwrite', oncomplete, onerror} = options\n  \n    try {\n      const transaction = db.transaction([storeName], model)\n      transaction.oncomplete = oncomplete\n      transaction.onerror = function(e) {\n        onerror && onerror(e)\n        throw new Error(e.target.error)\n      }\n  \n      const objectStore = transaction.objectStore(storeName)\n      return objectStore\n    } catch (e) {\n      throw new Error(e.target.error)\n    }\n  }\n\n  function add(storeName, items) {\n    return batchHandler(items, item => {\n      let request = transactionObjectStore(storeName).add(item)\n      return promiseRequest(request)\n    })\n  }\n\n  function _delete(storeName, keys) {\n    return batchHandler(keys, key => {\n      let request = transactionObjectStore(storeName).delete(key)\n      return promiseRequest(request)\n    })\n  }\n\n  function put(storeName, items) {\n    return batchHandler(items, item => {\n      let request = transactionObjectStore(storeName).put(item)\n      return promiseRequest(request)\n    })\n  }\n\n  function get(storeName, keys) {\n    return batchHandler(keys, key => {\n      let request = transactionObjectStore(storeName, {model: 'readonly'}).get(key)\n      return promiseRequest(request)\n    })\n  }\n\n  function getAll(storeName, query, count) {\n    let request = transactionObjectStore(storeName).getAll(query, count)\n    return promiseRequest(request)\n  }\n\n  function count(storeName, query) {\n    let request = transactionObjectStore(storeName).count(query)\n    return promiseRequest(request)\n  }\n\n  return {\n    open,\n    close,\n    deleteObjectStore,\n    createIndex,\n    deleteIndex,\n    transactionObjectStore,\n    add,\n    delete: _delete,\n    put,\n    get,\n    getAll,\n    count,\n  }\n}\n")],-1);function ae(e,t){const n=Object(r["resolveComponent"])("code-viewer");return Object(r["openBlock"])(),Object(r["createElementBlock"])("section",a,[o,c,s,l,d,Object(r["createVNode"])(n,null,{default:Object(r["withCtx"])(()=>[u]),_:1}),i,b,Object(r["createVNode"])(n,null,{default:Object(r["withCtx"])(()=>[m]),_:1}),j,h,Object(r["createVNode"])(n,null,{default:Object(r["withCtx"])(()=>[N]),_:1}),O,p,Object(r["createVNode"])(n,null,{default:Object(r["withCtx"])(()=>[V]),_:1}),E,g,Object(r["createVNode"])(n,null,{default:Object(r["withCtx"])(()=>[f]),_:1}),x,w,Object(r["createVNode"])(n,null,{default:Object(r["withCtx"])(()=>[q]),_:1}),S,y,Object(r["createVNode"])(n,null,{default:Object(r["withCtx"])(()=>[v]),_:1}),k,P,Object(r["createVNode"])(n,null,{default:Object(r["withCtx"])(()=>[T]),_:1}),_,I,Object(r["createVNode"])(n,null,{default:Object(r["withCtx"])(()=>[C]),_:1}),A,R,Object(r["createVNode"])(n,null,{default:Object(r["withCtx"])(()=>[B]),_:1}),D,H,Object(r["createVNode"])(n,null,{default:Object(r["withCtx"])(()=>[z]),_:1}),$,J,Object(r["createVNode"])(n,null,{default:Object(r["withCtx"])(()=>[F]),_:1}),M,W,Object(r["createVNode"])(n,null,{default:Object(r["withCtx"])(()=>[G]),_:1}),K,L,Object(r["createVNode"])(n,null,{default:Object(r["withCtx"])(()=>[Q]),_:1}),U,X,Object(r["createVNode"])(n,null,{default:Object(r["withCtx"])(()=>[Y]),_:1}),Z,ee,Object(r["createVNode"])(n,null,{default:Object(r["withCtx"])(()=>[te]),_:1}),ne,Object(r["createVNode"])(n,null,{default:Object(r["withCtx"])(()=>[re]),_:1})])}var oe=n("b9a6"),ce=n.n(oe);const se={},le=ce()(se,[["render",ae]]);t["default"]=le}}]);