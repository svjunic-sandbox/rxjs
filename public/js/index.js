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

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LnRzIl0sIm5hbWVzIjpbInF1ZXJ5IiwidmFyaWFibGVzIiwibnVtIiwicmVtYWtlU2hvd0RhdGEiLCJtZXNzYWdlIiwiY29uc29sZSIsImxvZyIsInRhZ2xpc3RzIiwiZGF0YSIsImdldFR3ZWV0cyIsIm1hcCIsInZhbCIsImhhc2h0YWdzIiwiZmxhdCIsImNvdW50cyIsImkiLCJsZW5ndGgiLCJrZXkiLCJjb3VudEFycmF5IiwicHJvcGVydHkiLCJvYmoiLCJ0YWduYW1lIiwiY291bnQiLCJwdXNoIiwiY291bnRMaXN0IiwiY2xpY2tMb2FkJCIsImZyb21FdmVudCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsInJlbmRlciIsInNvcnQiLCJhIiwiYiIsIiRsaXN0IiwiX2ZyYWdtZW50IiwiY3JlYXRlRG9jdW1lbnRGcmFnbWVudCIsImNudCIsIm1heCIsInRyIiwiY3JlYXRlRWxlbWVudCIsInRoIiwidGQiLCJhcHBlbmRDaGlsZCIsImNyZWF0ZVRleHROb2RlIiwicGlwZSIsInRhcCIsImV2ZW50IiwibWVyZ2VNYXAiLCJmcm9tIiwiYXhpb3MiLCJwb3N0IiwidGhlbiIsImUiLCJtZXNzYWdlMSIsInJlcyIsIm1lc3NhZ2UyIiwic3Vic2NyaWJlIiwicmVzdWx0Iiwic2VxdWVuY2VTdWJzY3JpYmVyIiwib2JzZXJ2ZXIiLCJuZXh0IiwiY29tcGxldGUiLCJ1bnN1YnNjcmliZSIsInNlcXVlbmNlIiwiT2JzZXJ2YWJsZSJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsUUFBUSxvQkFBb0I7UUFDNUI7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7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QixRQUFNLENBQUM0QixNQUFNLENBQUNqQyxTQUFSLENBQU47QUFDRCxDQTVCSCxFLENBNkJBO0FBRUE7O0FBQ0EsU0FBU2tDLGtCQUFULENBQTRCQyxRQUE1QixFQUFzQztBQUNwQztBQUNBQSxVQUFRLENBQUNDLElBQVQsQ0FBYyxDQUFkO0FBQ0FELFVBQVEsQ0FBQ0MsSUFBVCxDQUFjLENBQWQ7QUFDQUQsVUFBUSxDQUFDQyxJQUFULENBQWMsQ0FBZDtBQUNBRCxVQUFRLENBQUNDLElBQVQsQ0FBYyxDQUFkO0FBQ0FELFVBQVEsQ0FBQ0UsUUFBVCxHQU5vQyxDQVFwQztBQUNBOztBQUNBLFNBQU87QUFBRUMsZUFBRix5QkFBZ0IsQ0FBRTtBQUFsQixHQUFQO0FBQ0QsQyxDQUVEOzs7QUFDQSxJQUFNQyxRQUFRLEdBQUcsSUFBSUMsK0NBQUosQ0FBZU4sa0JBQWYsQ0FBakIsQyxDQUVBOztBQUNBSyxRQUFRLENBQUNQLFNBQVQsQ0FBbUI7QUFDakJJLE1BRGlCLGdCQUNaMUQsR0FEWSxFQUNQO0FBQ1JHLFdBQU8sQ0FBQ0MsR0FBUixDQUFZSixHQUFaO0FBQ0QsR0FIZ0I7QUFJakIyRCxVQUppQixzQkFJTjtBQUNUeEQsV0FBTyxDQUFDQyxHQUFSLENBQVksbUJBQVo7QUFDRDtBQU5nQixDQUFuQixFLENBU0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQiIsImZpbGUiOiJqcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIGluc3RhbGwgYSBKU09OUCBjYWxsYmFjayBmb3IgY2h1bmsgbG9hZGluZ1xuIFx0ZnVuY3Rpb24gd2VicGFja0pzb25wQ2FsbGJhY2soZGF0YSkge1xuIFx0XHR2YXIgY2h1bmtJZHMgPSBkYXRhWzBdO1xuIFx0XHR2YXIgbW9yZU1vZHVsZXMgPSBkYXRhWzFdO1xuIFx0XHR2YXIgZXhlY3V0ZU1vZHVsZXMgPSBkYXRhWzJdO1xuXG4gXHRcdC8vIGFkZCBcIm1vcmVNb2R1bGVzXCIgdG8gdGhlIG1vZHVsZXMgb2JqZWN0LFxuIFx0XHQvLyB0aGVuIGZsYWcgYWxsIFwiY2h1bmtJZHNcIiBhcyBsb2FkZWQgYW5kIGZpcmUgY2FsbGJhY2tcbiBcdFx0dmFyIG1vZHVsZUlkLCBjaHVua0lkLCBpID0gMCwgcmVzb2x2ZXMgPSBbXTtcbiBcdFx0Zm9yKDtpIDwgY2h1bmtJZHMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHRjaHVua0lkID0gY2h1bmtJZHNbaV07XG4gXHRcdFx0aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGluc3RhbGxlZENodW5rcywgY2h1bmtJZCkgJiYgaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdKSB7XG4gXHRcdFx0XHRyZXNvbHZlcy5wdXNoKGluc3RhbGxlZENodW5rc1tjaHVua0lkXVswXSk7XG4gXHRcdFx0fVxuIFx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IDA7XG4gXHRcdH1cbiBcdFx0Zm9yKG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG4gXHRcdFx0aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vcmVNb2R1bGVzLCBtb2R1bGVJZCkpIHtcbiBcdFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHRcdH1cbiBcdFx0fVxuIFx0XHRpZihwYXJlbnRKc29ucEZ1bmN0aW9uKSBwYXJlbnRKc29ucEZ1bmN0aW9uKGRhdGEpO1xuXG4gXHRcdHdoaWxlKHJlc29sdmVzLmxlbmd0aCkge1xuIFx0XHRcdHJlc29sdmVzLnNoaWZ0KCkoKTtcbiBcdFx0fVxuXG4gXHRcdC8vIGFkZCBlbnRyeSBtb2R1bGVzIGZyb20gbG9hZGVkIGNodW5rIHRvIGRlZmVycmVkIGxpc3RcbiBcdFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2guYXBwbHkoZGVmZXJyZWRNb2R1bGVzLCBleGVjdXRlTW9kdWxlcyB8fCBbXSk7XG5cbiBcdFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiBhbGwgY2h1bmtzIHJlYWR5XG4gXHRcdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xuIFx0fTtcbiBcdGZ1bmN0aW9uIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCkge1xuIFx0XHR2YXIgcmVzdWx0O1xuIFx0XHRmb3IodmFyIGkgPSAwOyBpIDwgZGVmZXJyZWRNb2R1bGVzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0dmFyIGRlZmVycmVkTW9kdWxlID0gZGVmZXJyZWRNb2R1bGVzW2ldO1xuIFx0XHRcdHZhciBmdWxmaWxsZWQgPSB0cnVlO1xuIFx0XHRcdGZvcih2YXIgaiA9IDE7IGogPCBkZWZlcnJlZE1vZHVsZS5sZW5ndGg7IGorKykge1xuIFx0XHRcdFx0dmFyIGRlcElkID0gZGVmZXJyZWRNb2R1bGVbal07XG4gXHRcdFx0XHRpZihpbnN0YWxsZWRDaHVua3NbZGVwSWRdICE9PSAwKSBmdWxmaWxsZWQgPSBmYWxzZTtcbiBcdFx0XHR9XG4gXHRcdFx0aWYoZnVsZmlsbGVkKSB7XG4gXHRcdFx0XHRkZWZlcnJlZE1vZHVsZXMuc3BsaWNlKGktLSwgMSk7XG4gXHRcdFx0XHRyZXN1bHQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IGRlZmVycmVkTW9kdWxlWzBdKTtcbiBcdFx0XHR9XG4gXHRcdH1cblxuIFx0XHRyZXR1cm4gcmVzdWx0O1xuIFx0fVxuXG4gXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuIFx0Ly8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4gXHQvLyBQcm9taXNlID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxuIFx0dmFyIGluc3RhbGxlZENodW5rcyA9IHtcbiBcdFx0XCJqcy9pbmRleFwiOiAwXG4gXHR9O1xuXG4gXHR2YXIgZGVmZXJyZWRNb2R1bGVzID0gW107XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdHZhciBqc29ucEFycmF5ID0gd2luZG93W1wic2FuZGJveFwiXSA9IHdpbmRvd1tcInNhbmRib3hcIl0gfHwgW107XG4gXHR2YXIgb2xkSnNvbnBGdW5jdGlvbiA9IGpzb25wQXJyYXkucHVzaC5iaW5kKGpzb25wQXJyYXkpO1xuIFx0anNvbnBBcnJheS5wdXNoID0gd2VicGFja0pzb25wQ2FsbGJhY2s7XG4gXHRqc29ucEFycmF5ID0ganNvbnBBcnJheS5zbGljZSgpO1xuIFx0Zm9yKHZhciBpID0gMDsgaSA8IGpzb25wQXJyYXkubGVuZ3RoOyBpKyspIHdlYnBhY2tKc29ucENhbGxiYWNrKGpzb25wQXJyYXlbaV0pO1xuIFx0dmFyIHBhcmVudEpzb25wRnVuY3Rpb24gPSBvbGRKc29ucEZ1bmN0aW9uO1xuXG5cbiBcdC8vIGFkZCBlbnRyeSBtb2R1bGUgdG8gZGVmZXJyZWQgbGlzdFxuIFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2goW1wiLi9zcmMvaW5kZXgudHNcIixcImpzL3ZlbmRvclwiXSk7XG4gXHQvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyB3aGVuIHJlYWR5XG4gXHRyZXR1cm4gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKTtcbiIsImludGVyZmFjZSBJQ291bnRPYmplY3Qge1xuICB0YWduYW1lOiBzdHJpbmc7XG4gIGNvdW50OiBudW1iZXI7XG59XG5cbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5cbi8vIOmdnuWQjOacn+ODkeOCv+ODvOODs+OBhOOCjeOBhOOCjVxuLy8gaHR0cHM6Ly9naXRodWIuY29tL0xlb0xvdmluYS9yZWFjdF9wcmFjdGljZS9ibG9iL2NiY2ExNTRmMmY4ZjhmNzI2YjE3ZmI5MjRmYjNlNzg5MDNlNzM5OWEvcmVhY3Qtd2VicGFjay9zcmMvcnhqc1Rlc3QvQXBpVGVzdC50c3hcblxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZnJvbSwgZnJvbUV2ZW50IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBtYXAsIG1lcmdlTWFwLCB0YXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmNvbnN0IHF1ZXJ5ID0gYFxuICBxdWVyeSgkbnVtOkludCkge1xuICAgIGdldFR3ZWV0cyhudW06JG51bSkge1xuICAgICAgaGFzaHRhZ3NcbiAgICB9XG4gIH1cbmA7XG5cbmNvbnN0IHZhcmlhYmxlcyA9IHtcbiAgLy9udW06IDIwXG4gIG51bTogMFxufTtcblxuLy9jb25zdCBvYnNlcnZhYmxlJCA9IE9ic2VydmFibGUuY3JlYXRlKG9ic2VydmVyID0+IHtcbi8vICBheGlvc1xuLy8gICAgLnBvc3QoJ2h0dHA6Ly8xMjcuMC4wLjE6MzAwMS9hcGkvJywge1xuLy8gICAgICBxdWVyeTogcXVlcnksXG4vLyAgICAgIHZhcmlhYmxlczogdmFyaWFibGVzXG4vLyAgICB9KVxuLy8gICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xuLy8gICAgICBvYnNlcnZlci5uZXh0KHJlc3BvbnNlLmRhdGEpO1xuLy8gICAgICBvYnNlcnZlci5jb21wbGV0ZSgpO1xuLy8gICAgfSlcbi8vICAgIC5jYXRjaChlcnJvciA9PiB7XG4vLyAgICAgIG9ic2VydmVyLmVycm9yKGVycm9yKTtcbi8vICAgIH0pO1xuLy99KTtcblxuY29uc3QgcmVtYWtlU2hvd0RhdGEgPSAobWVzc2FnZTogYW55KSA9PiB7XG4gIGNvbnNvbGUubG9nKG1lc3NhZ2UpO1xuICBsZXQgdGFnbGlzdHMgPSBtZXNzYWdlLmRhdGEuZ2V0VHdlZXRzLm1hcCgodmFsOiBhbnkpOiBhbnkgPT4ge1xuICAgIHJldHVybiB2YWwuaGFzaHRhZ3M7XG4gIH0pO1xuXG4gIHRhZ2xpc3RzID0gdGFnbGlzdHMuZmxhdCgpO1xuXG4gIGNvbnN0IGNvdW50cyA9IHt9O1xuICBmb3IgKGxldCBpID0gMDsgaSA8IHRhZ2xpc3RzLmxlbmd0aDsgaSsrKSB7XG4gICAgY29uc3Qga2V5ID0gdGFnbGlzdHNbaV07XG4gICAgY291bnRzW2tleV0gPSBjb3VudHNba2V5XSA/IGNvdW50c1trZXldICsgMSA6IDE7XG4gIH1cbiAgbWVzc2FnZS5jb3VudHMgPSBjb3VudHM7XG5cbiAgY29uc3QgY291bnRBcnJheSA9IFtdO1xuICBmb3IgKGNvbnN0IHByb3BlcnR5IGluIGNvdW50cykge1xuICAgIGNvbnN0IG9iajogSUNvdW50T2JqZWN0ID0ge1xuICAgICAgdGFnbmFtZTogcHJvcGVydHksXG4gICAgICBjb3VudDogY291bnRzW3Byb3BlcnR5XVxuICAgIH07XG4gICAgY291bnRBcnJheS5wdXNoKG9iaik7XG4gIH1cblxuICBtZXNzYWdlLmNvdW50TGlzdCA9IGNvdW50QXJyYXk7XG5cbiAgcmV0dXJuIG1lc3NhZ2U7XG59O1xuXG5jb25zdCBjbGlja0xvYWQkID0gZnJvbUV2ZW50KGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNsb2FkJyksICdjbGljaycpO1xuXG5jb25zdCByZW5kZXIgPSBjb3VudExpc3QgPT4ge1xuICBjb3VudExpc3Quc29ydCgoYSwgYikgPT4ge1xuICAgIGlmIChhLmNvdW50ID4gYi5jb3VudCkge1xuICAgICAgcmV0dXJuIDE7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiAtMTtcbiAgICB9XG4gIH0pO1xuXG4gIGNvbnN0ICRsaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2xpc3QnKTtcblxuICBjb25zdCBfZnJhZ21lbnQgPSBkb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCk7XG5cbiAgLy9mb3IgKGNvbnN0IHByb3BlcnR5IGluIGNvdW50TGlzdCkge1xuICBmb3IgKGxldCBjbnQgPSAwLCBtYXggPSBjb3VudExpc3QubGVuZ3RoOyBjbnQgPCBtYXg7IGNudCsrKSB7XG4gICAgY29uc3QgeyB0YWduYW1lLCBjb3VudCB9ID0gY291bnRMaXN0W2NudF07XG4gICAgY29uc3QgdHIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0cicpO1xuICAgIGNvbnN0IHRoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGgnKTtcbiAgICBjb25zdCB0ZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RkJyk7XG4gICAgdGguYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoYCR7dGFnbmFtZX1gKSk7XG4gICAgdGQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoYCR7Y291bnR9YCkpO1xuICAgIHRyLmFwcGVuZENoaWxkKHRoKTtcbiAgICB0ci5hcHBlbmRDaGlsZCh0ZCk7XG4gICAgX2ZyYWdtZW50LmFwcGVuZENoaWxkKHRyKTtcbiAgfVxuXG4gICRsaXN0LmFwcGVuZENoaWxkKF9mcmFnbWVudCk7XG59O1xuXG5jbGlja0xvYWQkXG4gIC5waXBlKFxuICAgIHRhcChldmVudCA9PiBjb25zb2xlLmxvZygnMScsIGV2ZW50KSksXG4gICAgbWVyZ2VNYXAoZXZlbnQgPT5cbiAgICAgIC8vIGZyb23jga9wcm9taXNl44Gr5a++5b+c44GX44Gm44GE44KL44GL44KJXG4gICAgICBmcm9tKFxuICAgICAgICBheGlvc1xuICAgICAgICAgIC5wb3N0KCdodHRwOi8vMTI3LjAuMC4xOjMwMDEvYXBpLycsIHtcbiAgICAgICAgICAgIHF1ZXJ5OiBxdWVyeSxcbiAgICAgICAgICAgIHZhcmlhYmxlczogdmFyaWFibGVzXG4gICAgICAgICAgfSlcbiAgICAgICAgICAudGhlbihlID0+IHtcbiAgICAgICAgICAgIC8vIOOBk+OBruODh+ODvOOCv+OBjOOCueODiOODquODvOODoOOBq+a1geOCjOOCi1xuICAgICAgICAgICAgLy9yZXR1cm4gZS5kYXRhO1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgZXZlbnQsXG4gICAgICAgICAgICAgIGRhdGE6IGUuZGF0YS5kYXRhXG4gICAgICAgICAgICB9O1xuICAgICAgICAgIH0pXG4gICAgICApXG4gICAgKSxcbiAgICB0YXAobWVzc2FnZTEgPT4gY29uc29sZS5sb2coJzInLCBtZXNzYWdlMSkpLFxuICAgIG1hcChyZXMgPT4gcmVtYWtlU2hvd0RhdGEocmVzKSksXG4gICAgdGFwKG1lc3NhZ2UyID0+IGNvbnNvbGUubG9nKCczJywgbWVzc2FnZTIpKVxuICApXG4gIC5zdWJzY3JpYmUocmVzdWx0ID0+IHtcbiAgICBjb25zb2xlLmxvZygnY29tcGxldGUnLCByZXN1bHQpO1xuICAgIHJlbmRlcihyZXN1bHQuY291bnRMaXN0KTtcbiAgfSk7XG4vLy5zdWJzY3JpYmUoZXZlbnQgPT4gY29uc29sZS5sb2coJ2NvbXBsZXRlJywgZXZlbnQpKTtcblxuLy8gVGhpcyBmdW5jdGlvbiBydW5zIHdoZW4gc3Vic2NyaWJlKCkgaXMgY2FsbGVkXG5mdW5jdGlvbiBzZXF1ZW5jZVN1YnNjcmliZXIob2JzZXJ2ZXIpIHtcbiAgLy8gc3luY2hyb25vdXNseSBkZWxpdmVyIDEsIDIsIGFuZCAzLCB0aGVuIGNvbXBsZXRlXG4gIG9ic2VydmVyLm5leHQoMSk7XG4gIG9ic2VydmVyLm5leHQoMik7XG4gIG9ic2VydmVyLm5leHQoMyk7XG4gIG9ic2VydmVyLm5leHQoNik7XG4gIG9ic2VydmVyLmNvbXBsZXRlKCk7XG5cbiAgLy8gdW5zdWJzY3JpYmUgZnVuY3Rpb24gZG9lc24ndCBuZWVkIHRvIGRvIGFueXRoaW5nIGluIHRoaXNcbiAgLy8gYmVjYXVzZSB2YWx1ZXMgYXJlIGRlbGl2ZXJlZCBzeW5jaHJvbm91c2x5XG4gIHJldHVybiB7IHVuc3Vic2NyaWJlKCkge30gfTtcbn1cblxuLy8gQ3JlYXRlIGEgbmV3IE9ic2VydmFibGUgdGhhdCB3aWxsIGRlbGl2ZXIgdGhlIGFib3ZlIHNlcXVlbmNlXG5jb25zdCBzZXF1ZW5jZSA9IG5ldyBPYnNlcnZhYmxlKHNlcXVlbmNlU3Vic2NyaWJlcik7XG5cbi8vIGV4ZWN1dGUgdGhlIE9ic2VydmFibGUgYW5kIHByaW50IHRoZSByZXN1bHQgb2YgZWFjaCBub3RpZmljYXRpb25cbnNlcXVlbmNlLnN1YnNjcmliZSh7XG4gIG5leHQobnVtKSB7XG4gICAgY29uc29sZS5sb2cobnVtKTtcbiAgfSxcbiAgY29tcGxldGUoKSB7XG4gICAgY29uc29sZS5sb2coJ0ZpbmlzaGVkIHNlcXVlbmNlJyk7XG4gIH1cbn0pO1xuXG4vLyBMb2dzOlxuLy8gMVxuLy8gMlxuLy8gM1xuLy8gRmluaXNoZWQgc2VxdWVuY2VcbiJdLCJzb3VyY2VSb290IjoiIn0=