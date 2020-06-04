/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"js/index": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	var jsonpArray = window["sandbox"] = window["sandbox"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./src/index.ts","js/vendor"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_flat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.flat */ "./node_modules/core-js/modules/es.array.flat.js");
/* harmony import */ var core_js_modules_es_array_flat__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_flat__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.map */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_sort__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.sort */ "./node_modules/core-js/modules/es.array.sort.js");
/* harmony import */ var core_js_modules_es_array_sort__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_sort__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_unscopables_flat__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.unscopables.flat */ "./node_modules/core-js/modules/es.array.unscopables.flat.js");
/* harmony import */ var core_js_modules_es_array_unscopables_flat__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_unscopables_flat__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");




 // 非同期パターンいろいろ
// https://github.com/LeoLovina/react_practice/blob/cbca154f2f8f8f726b17fb924fb3e78903e7399a/react-webpack/src/rxjsTest/ApiTest.tsx




var query = "\n  query($num:Int) {\n    getTweets(num:$num) {\n      hashtags\n    }\n  }\n";
var variables = {
  //num: 20
  num: 0
}; //const observable$ = Observable.create(observer => {
//  axios
//    .post('http://127.0.0.1:3001/api/', {
//      query: query,
//      variables: variables
//    })
//    .then(response => {
//      observer.next(response.data);
//      observer.complete();
//    })
//    .catch(error => {
//      observer.error(error);
//    });
//});

var remakeShowData = function remakeShowData(message) {
  console.log(message);
  var taglists = message.data.getTweets.map(function (val) {
    return val.hashtags;
  });
  taglists = taglists.flat();
  var counts = {};

  for (var i = 0; i < taglists.length; i++) {
    var key = taglists[i];
    counts[key] = counts[key] ? counts[key] + 1 : 1;
  }

  message.counts = counts;
  var countArray = [];

  for (var property in counts) {
    var obj = {
      tagname: property,
      count: counts[property]
    };
    countArray.push(obj);
  }

  message.countList = countArray;
  return message;
};

var clickLoad$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["fromEvent"])(document.querySelector('#load'), 'click');

var render = function render(countList) {
  countList.sort(function (a, b) {
    if (a.count > b.count) {
      return 1;
    } else {
      return -1;
    }
  });
  var $list = document.querySelector('#list');

  var _fragment = document.createDocumentFragment(); //for (const property in countList) {


  for (var cnt = 0, max = countList.length; cnt < max; cnt++) {
    var _countList$cnt = countList[cnt],
        tagname = _countList$cnt.tagname,
        count = _countList$cnt.count;
    var tr = document.createElement('tr');
    var th = document.createElement('th');
    var td = document.createElement('td');
    th.appendChild(document.createTextNode("" + tagname));
    td.appendChild(document.createTextNode("" + count));
    tr.appendChild(th);
    tr.appendChild(td);

    _fragment.appendChild(tr);
  }

  $list.appendChild(_fragment);
};

clickLoad$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["tap"])(function (event) {
  return console.log('1', event);
}), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["mergeMap"])(function (event) {
  return (// fromはpromiseに対応しているから
    Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["from"])(axios__WEBPACK_IMPORTED_MODULE_4___default.a.post('http://127.0.0.1:3001/api/', {
      query: query,
      variables: variables
    }).then(function (e) {
      // このデータがストリームに流れる
      //return e.data;
      return {
        event: event,
        data: e.data.data
      };
    }))
  );
}), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["tap"])(function (message1) {
  return console.log('2', message1);
}), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (res) {
  return remakeShowData(res);
}), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["tap"])(function (message2) {
  return console.log('3', message2);
})).subscribe(function (result) {
  console.log('complete', result);
  render(result.countList);
}); //.subscribe(event => console.log('complete', event));
// This function runs when subscribe() is called

function sequenceSubscriber(observer) {
  // synchronously deliver 1, 2, and 3, then complete
  observer.next(1);
  observer.next(2);
  observer.next(3);
  observer.next(6);
  observer.complete(); // unsubscribe function doesn't need to do anything in this
  // because values are delivered synchronously

  return {
    unsubscribe: function unsubscribe() {}
  };
} // Create a new Observable that will deliver the above sequence


var sequence = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Observable"](sequenceSubscriber); // execute the Observable and print the result of each notification

sequence.subscribe({
  next: function next(num) {
    console.log(num);
  },
  complete: function complete() {
    console.log('Finished sequence');
  }
}); // Logs:
// 1
// 2
// 3
// Finished sequence

Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["empty"])().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["tap"])(function () {
  return console.log('test');
})).subscribe({
  next: function next() {
    return console.log('test221');
  },
  complete: function complete() {
    return console.log('test222');
  }
});

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LnRzIl0sIm5hbWVzIjpbInF1ZXJ5IiwidmFyaWFibGVzIiwibnVtIiwicmVtYWtlU2hvd0RhdGEiLCJtZXNzYWdlIiwiY29uc29sZSIsImxvZyIsInRhZ2xpc3RzIiwiZGF0YSIsImdldFR3ZWV0cyIsIm1hcCIsInZhbCIsImhhc2h0YWdzIiwiZmxhdCIsImNvdW50cyIsImkiLCJsZW5ndGgiLCJrZXkiLCJjb3VudEFycmF5IiwicHJvcGVydHkiLCJvYmoiLCJ0YWduYW1lIiwiY291bnQiLCJwdXNoIiwiY291bnRMaXN0IiwiY2xpY2tMb2FkJCIsImZyb21FdmVudCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsInJlbmRlciIsInNvcnQiLCJhIiwiYiIsIiRsaXN0IiwiX2ZyYWdtZW50IiwiY3JlYXRlRG9jdW1lbnRGcmFnbWVudCIsImNudCIsIm1heCIsInRyIiwiY3JlYXRlRWxlbWVudCIsInRoIiwidGQiLCJhcHBlbmRDaGlsZCIsImNyZWF0ZVRleHROb2RlIiwicGlwZSIsInRhcCIsImV2ZW50IiwibWVyZ2VNYXAiLCJmcm9tIiwiYXhpb3MiLCJwb3N0IiwidGhlbiIsImUiLCJtZXNzYWdlMSIsInJlcyIsIm1lc3NhZ2UyIiwic3Vic2NyaWJlIiwicmVzdWx0Iiwic2VxdWVuY2VTdWJzY3JpYmVyIiwib2JzZXJ2ZXIiLCJuZXh0IiwiY29tcGxldGUiLCJ1bnN1YnNjcmliZSIsInNlcXVlbmNlIiwiT2JzZXJ2YWJsZSIsImVtcHR5Il0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSxRQUFRLG9CQUFvQjtRQUM1QjtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FB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OlsiIFx0Ly8gaW5zdGFsbCBhIEpTT05QIGNhbGxiYWNrIGZvciBjaHVuayBsb2FkaW5nXG4gXHRmdW5jdGlvbiB3ZWJwYWNrSnNvbnBDYWxsYmFjayhkYXRhKSB7XG4gXHRcdHZhciBjaHVua0lkcyA9IGRhdGFbMF07XG4gXHRcdHZhciBtb3JlTW9kdWxlcyA9IGRhdGFbMV07XG4gXHRcdHZhciBleGVjdXRlTW9kdWxlcyA9IGRhdGFbMl07XG5cbiBcdFx0Ly8gYWRkIFwibW9yZU1vZHVsZXNcIiB0byB0aGUgbW9kdWxlcyBvYmplY3QsXG4gXHRcdC8vIHRoZW4gZmxhZyBhbGwgXCJjaHVua0lkc1wiIGFzIGxvYWRlZCBhbmQgZmlyZSBjYWxsYmFja1xuIFx0XHR2YXIgbW9kdWxlSWQsIGNodW5rSWQsIGkgPSAwLCByZXNvbHZlcyA9IFtdO1xuIFx0XHRmb3IoO2kgPCBjaHVua0lkcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdGNodW5rSWQgPSBjaHVua0lkc1tpXTtcbiBcdFx0XHRpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoaW5zdGFsbGVkQ2h1bmtzLCBjaHVua0lkKSAmJiBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0pIHtcbiBcdFx0XHRcdHJlc29sdmVzLnB1c2goaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdWzBdKTtcbiBcdFx0XHR9XG4gXHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gMDtcbiBcdFx0fVxuIFx0XHRmb3IobW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcbiBcdFx0XHRpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobW9yZU1vZHVsZXMsIG1vZHVsZUlkKSkge1xuIFx0XHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdFx0fVxuIFx0XHR9XG4gXHRcdGlmKHBhcmVudEpzb25wRnVuY3Rpb24pIHBhcmVudEpzb25wRnVuY3Rpb24oZGF0YSk7XG5cbiBcdFx0d2hpbGUocmVzb2x2ZXMubGVuZ3RoKSB7XG4gXHRcdFx0cmVzb2x2ZXMuc2hpZnQoKSgpO1xuIFx0XHR9XG5cbiBcdFx0Ly8gYWRkIGVudHJ5IG1vZHVsZXMgZnJvbSBsb2FkZWQgY2h1bmsgdG8gZGVmZXJyZWQgbGlzdFxuIFx0XHRkZWZlcnJlZE1vZHVsZXMucHVzaC5hcHBseShkZWZlcnJlZE1vZHVsZXMsIGV4ZWN1dGVNb2R1bGVzIHx8IFtdKTtcblxuIFx0XHQvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyB3aGVuIGFsbCBjaHVua3MgcmVhZHlcbiBcdFx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG4gXHR9O1xuIFx0ZnVuY3Rpb24gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKSB7XG4gXHRcdHZhciByZXN1bHQ7XG4gXHRcdGZvcih2YXIgaSA9IDA7IGkgPCBkZWZlcnJlZE1vZHVsZXMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHR2YXIgZGVmZXJyZWRNb2R1bGUgPSBkZWZlcnJlZE1vZHVsZXNbaV07XG4gXHRcdFx0dmFyIGZ1bGZpbGxlZCA9IHRydWU7XG4gXHRcdFx0Zm9yKHZhciBqID0gMTsgaiA8IGRlZmVycmVkTW9kdWxlLmxlbmd0aDsgaisrKSB7XG4gXHRcdFx0XHR2YXIgZGVwSWQgPSBkZWZlcnJlZE1vZHVsZVtqXTtcbiBcdFx0XHRcdGlmKGluc3RhbGxlZENodW5rc1tkZXBJZF0gIT09IDApIGZ1bGZpbGxlZCA9IGZhbHNlO1xuIFx0XHRcdH1cbiBcdFx0XHRpZihmdWxmaWxsZWQpIHtcbiBcdFx0XHRcdGRlZmVycmVkTW9kdWxlcy5zcGxpY2UoaS0tLCAxKTtcbiBcdFx0XHRcdHJlc3VsdCA9IF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gZGVmZXJyZWRNb2R1bGVbMF0pO1xuIFx0XHRcdH1cbiBcdFx0fVxuXG4gXHRcdHJldHVybiByZXN1bHQ7XG4gXHR9XG5cbiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4gXHQvLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbiBcdC8vIFByb21pc2UgPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG4gXHR2YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuIFx0XHRcImpzL2luZGV4XCI6IDBcbiBcdH07XG5cbiBcdHZhciBkZWZlcnJlZE1vZHVsZXMgPSBbXTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0dmFyIGpzb25wQXJyYXkgPSB3aW5kb3dbXCJzYW5kYm94XCJdID0gd2luZG93W1wic2FuZGJveFwiXSB8fCBbXTtcbiBcdHZhciBvbGRKc29ucEZ1bmN0aW9uID0ganNvbnBBcnJheS5wdXNoLmJpbmQoanNvbnBBcnJheSk7XG4gXHRqc29ucEFycmF5LnB1c2ggPSB3ZWJwYWNrSnNvbnBDYWxsYmFjaztcbiBcdGpzb25wQXJyYXkgPSBqc29ucEFycmF5LnNsaWNlKCk7XG4gXHRmb3IodmFyIGkgPSAwOyBpIDwganNvbnBBcnJheS5sZW5ndGg7IGkrKykgd2VicGFja0pzb25wQ2FsbGJhY2soanNvbnBBcnJheVtpXSk7XG4gXHR2YXIgcGFyZW50SnNvbnBGdW5jdGlvbiA9IG9sZEpzb25wRnVuY3Rpb247XG5cblxuIFx0Ly8gYWRkIGVudHJ5IG1vZHVsZSB0byBkZWZlcnJlZCBsaXN0XG4gXHRkZWZlcnJlZE1vZHVsZXMucHVzaChbXCIuL3NyYy9pbmRleC50c1wiLFwianMvdmVuZG9yXCJdKTtcbiBcdC8vIHJ1biBkZWZlcnJlZCBtb2R1bGVzIHdoZW4gcmVhZHlcbiBcdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xuIiwiaW50ZXJmYWNlIElDb3VudE9iamVjdCB7XG4gIHRhZ25hbWU6IHN0cmluZztcbiAgY291bnQ6IG51bWJlcjtcbn1cblxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcblxuLy8g6Z2e5ZCM5pyf44OR44K/44O844Oz44GE44KN44GE44KNXG4vLyBodHRwczovL2dpdGh1Yi5jb20vTGVvTG92aW5hL3JlYWN0X3ByYWN0aWNlL2Jsb2IvY2JjYTE1NGYyZjhmOGY3MjZiMTdmYjkyNGZiM2U3ODkwM2U3Mzk5YS9yZWFjdC13ZWJwYWNrL3NyYy9yeGpzVGVzdC9BcGlUZXN0LnRzeFxuXG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBlbXB0eSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZnJvbSwgZnJvbUV2ZW50IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBtYXAsIG1lcmdlTWFwLCB0YXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmNvbnN0IHF1ZXJ5ID0gYFxuICBxdWVyeSgkbnVtOkludCkge1xuICAgIGdldFR3ZWV0cyhudW06JG51bSkge1xuICAgICAgaGFzaHRhZ3NcbiAgICB9XG4gIH1cbmA7XG5cbmNvbnN0IHZhcmlhYmxlcyA9IHtcbiAgLy9udW06IDIwXG4gIG51bTogMFxufTtcblxuLy9jb25zdCBvYnNlcnZhYmxlJCA9IE9ic2VydmFibGUuY3JlYXRlKG9ic2VydmVyID0+IHtcbi8vICBheGlvc1xuLy8gICAgLnBvc3QoJ2h0dHA6Ly8xMjcuMC4wLjE6MzAwMS9hcGkvJywge1xuLy8gICAgICBxdWVyeTogcXVlcnksXG4vLyAgICAgIHZhcmlhYmxlczogdmFyaWFibGVzXG4vLyAgICB9KVxuLy8gICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xuLy8gICAgICBvYnNlcnZlci5uZXh0KHJlc3BvbnNlLmRhdGEpO1xuLy8gICAgICBvYnNlcnZlci5jb21wbGV0ZSgpO1xuLy8gICAgfSlcbi8vICAgIC5jYXRjaChlcnJvciA9PiB7XG4vLyAgICAgIG9ic2VydmVyLmVycm9yKGVycm9yKTtcbi8vICAgIH0pO1xuLy99KTtcblxuY29uc3QgcmVtYWtlU2hvd0RhdGEgPSAobWVzc2FnZTogYW55KSA9PiB7XG4gIGNvbnNvbGUubG9nKG1lc3NhZ2UpO1xuICBsZXQgdGFnbGlzdHMgPSBtZXNzYWdlLmRhdGEuZ2V0VHdlZXRzLm1hcCgodmFsOiBhbnkpOiBhbnkgPT4ge1xuICAgIHJldHVybiB2YWwuaGFzaHRhZ3M7XG4gIH0pO1xuXG4gIHRhZ2xpc3RzID0gdGFnbGlzdHMuZmxhdCgpO1xuXG4gIGNvbnN0IGNvdW50cyA9IHt9O1xuICBmb3IgKGxldCBpID0gMDsgaSA8IHRhZ2xpc3RzLmxlbmd0aDsgaSsrKSB7XG4gICAgY29uc3Qga2V5ID0gdGFnbGlzdHNbaV07XG4gICAgY291bnRzW2tleV0gPSBjb3VudHNba2V5XSA/IGNvdW50c1trZXldICsgMSA6IDE7XG4gIH1cbiAgbWVzc2FnZS5jb3VudHMgPSBjb3VudHM7XG5cbiAgY29uc3QgY291bnRBcnJheSA9IFtdO1xuICBmb3IgKGNvbnN0IHByb3BlcnR5IGluIGNvdW50cykge1xuICAgIGNvbnN0IG9iajogSUNvdW50T2JqZWN0ID0ge1xuICAgICAgdGFnbmFtZTogcHJvcGVydHksXG4gICAgICBjb3VudDogY291bnRzW3Byb3BlcnR5XVxuICAgIH07XG4gICAgY291bnRBcnJheS5wdXNoKG9iaik7XG4gIH1cblxuICBtZXNzYWdlLmNvdW50TGlzdCA9IGNvdW50QXJyYXk7XG5cbiAgcmV0dXJuIG1lc3NhZ2U7XG59O1xuXG5jb25zdCBjbGlja0xvYWQkID0gZnJvbUV2ZW50KGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNsb2FkJyksICdjbGljaycpO1xuXG5jb25zdCByZW5kZXIgPSBjb3VudExpc3QgPT4ge1xuICBjb3VudExpc3Quc29ydCgoYSwgYikgPT4ge1xuICAgIGlmIChhLmNvdW50ID4gYi5jb3VudCkge1xuICAgICAgcmV0dXJuIDE7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiAtMTtcbiAgICB9XG4gIH0pO1xuXG4gIGNvbnN0ICRsaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2xpc3QnKTtcblxuICBjb25zdCBfZnJhZ21lbnQgPSBkb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCk7XG5cbiAgLy9mb3IgKGNvbnN0IHByb3BlcnR5IGluIGNvdW50TGlzdCkge1xuICBmb3IgKGxldCBjbnQgPSAwLCBtYXggPSBjb3VudExpc3QubGVuZ3RoOyBjbnQgPCBtYXg7IGNudCsrKSB7XG4gICAgY29uc3QgeyB0YWduYW1lLCBjb3VudCB9ID0gY291bnRMaXN0W2NudF07XG4gICAgY29uc3QgdHIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0cicpO1xuICAgIGNvbnN0IHRoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGgnKTtcbiAgICBjb25zdCB0ZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RkJyk7XG4gICAgdGguYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoYCR7dGFnbmFtZX1gKSk7XG4gICAgdGQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoYCR7Y291bnR9YCkpO1xuICAgIHRyLmFwcGVuZENoaWxkKHRoKTtcbiAgICB0ci5hcHBlbmRDaGlsZCh0ZCk7XG4gICAgX2ZyYWdtZW50LmFwcGVuZENoaWxkKHRyKTtcbiAgfVxuXG4gICRsaXN0LmFwcGVuZENoaWxkKF9mcmFnbWVudCk7XG59O1xuXG5jbGlja0xvYWQkXG4gIC5waXBlKFxuICAgIHRhcChldmVudCA9PiBjb25zb2xlLmxvZygnMScsIGV2ZW50KSksXG4gICAgbWVyZ2VNYXAoZXZlbnQgPT5cbiAgICAgIC8vIGZyb23jga9wcm9taXNl44Gr5a++5b+c44GX44Gm44GE44KL44GL44KJXG4gICAgICBmcm9tKFxuICAgICAgICBheGlvc1xuICAgICAgICAgIC5wb3N0KCdodHRwOi8vMTI3LjAuMC4xOjMwMDEvYXBpLycsIHtcbiAgICAgICAgICAgIHF1ZXJ5OiBxdWVyeSxcbiAgICAgICAgICAgIHZhcmlhYmxlczogdmFyaWFibGVzXG4gICAgICAgICAgfSlcbiAgICAgICAgICAudGhlbihlID0+IHtcbiAgICAgICAgICAgIC8vIOOBk+OBruODh+ODvOOCv+OBjOOCueODiOODquODvOODoOOBq+a1geOCjOOCi1xuICAgICAgICAgICAgLy9yZXR1cm4gZS5kYXRhO1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgZXZlbnQsXG4gICAgICAgICAgICAgIGRhdGE6IGUuZGF0YS5kYXRhXG4gICAgICAgICAgICB9O1xuICAgICAgICAgIH0pXG4gICAgICApXG4gICAgKSxcbiAgICB0YXAobWVzc2FnZTEgPT4gY29uc29sZS5sb2coJzInLCBtZXNzYWdlMSkpLFxuICAgIG1hcChyZXMgPT4gcmVtYWtlU2hvd0RhdGEocmVzKSksXG4gICAgdGFwKG1lc3NhZ2UyID0+IGNvbnNvbGUubG9nKCczJywgbWVzc2FnZTIpKVxuICApXG4gIC5zdWJzY3JpYmUocmVzdWx0ID0+IHtcbiAgICBjb25zb2xlLmxvZygnY29tcGxldGUnLCByZXN1bHQpO1xuICAgIHJlbmRlcihyZXN1bHQuY291bnRMaXN0KTtcbiAgfSk7XG4vLy5zdWJzY3JpYmUoZXZlbnQgPT4gY29uc29sZS5sb2coJ2NvbXBsZXRlJywgZXZlbnQpKTtcblxuLy8gVGhpcyBmdW5jdGlvbiBydW5zIHdoZW4gc3Vic2NyaWJlKCkgaXMgY2FsbGVkXG5mdW5jdGlvbiBzZXF1ZW5jZVN1YnNjcmliZXIob2JzZXJ2ZXIpIHtcbiAgLy8gc3luY2hyb25vdXNseSBkZWxpdmVyIDEsIDIsIGFuZCAzLCB0aGVuIGNvbXBsZXRlXG4gIG9ic2VydmVyLm5leHQoMSk7XG4gIG9ic2VydmVyLm5leHQoMik7XG4gIG9ic2VydmVyLm5leHQoMyk7XG4gIG9ic2VydmVyLm5leHQoNik7XG4gIG9ic2VydmVyLmNvbXBsZXRlKCk7XG5cbiAgLy8gdW5zdWJzY3JpYmUgZnVuY3Rpb24gZG9lc24ndCBuZWVkIHRvIGRvIGFueXRoaW5nIGluIHRoaXNcbiAgLy8gYmVjYXVzZSB2YWx1ZXMgYXJlIGRlbGl2ZXJlZCBzeW5jaHJvbm91c2x5XG4gIHJldHVybiB7IHVuc3Vic2NyaWJlKCkge30gfTtcbn1cblxuLy8gQ3JlYXRlIGEgbmV3IE9ic2VydmFibGUgdGhhdCB3aWxsIGRlbGl2ZXIgdGhlIGFib3ZlIHNlcXVlbmNlXG5jb25zdCBzZXF1ZW5jZSA9IG5ldyBPYnNlcnZhYmxlKHNlcXVlbmNlU3Vic2NyaWJlcik7XG5cbi8vIGV4ZWN1dGUgdGhlIE9ic2VydmFibGUgYW5kIHByaW50IHRoZSByZXN1bHQgb2YgZWFjaCBub3RpZmljYXRpb25cbnNlcXVlbmNlLnN1YnNjcmliZSh7XG4gIG5leHQobnVtKSB7XG4gICAgY29uc29sZS5sb2cobnVtKTtcbiAgfSxcbiAgY29tcGxldGUoKSB7XG4gICAgY29uc29sZS5sb2coJ0ZpbmlzaGVkIHNlcXVlbmNlJyk7XG4gIH1cbn0pO1xuXG4vLyBMb2dzOlxuLy8gMVxuLy8gMlxuLy8gM1xuLy8gRmluaXNoZWQgc2VxdWVuY2VcblxuZW1wdHkoKVxuICAucGlwZSh0YXAoKCkgPT4gY29uc29sZS5sb2coJ3Rlc3QnKSkpXG4gIC5zdWJzY3JpYmUoe1xuICAgIG5leHQ6ICgpID0+IGNvbnNvbGUubG9nKCd0ZXN0MjIxJyksXG4gICAgY29tcGxldGU6ICgpID0+IGNvbnNvbGUubG9nKCd0ZXN0MjIyJylcbiAgfSk7XG4iXSwic291cmNlUm9vdCI6IiJ9