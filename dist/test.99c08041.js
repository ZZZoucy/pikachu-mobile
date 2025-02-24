// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

// eslint-disable-next-line no-global-assign
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  return newRequire;
})({"css.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
var string = "\n.skin * {\n    box-sizing: border-box;\n    margin: 0;\n    padding: 0;\n}\n.skin *::after,\n.skin *::before {\n    box-sizing: border-box;\n}\n.skin {\n    position: relative;\n    background: #ffe600;\n    min-height: 50vh;\n}\n.nose {\n    position: relative;\n    border: 10px solid black;\n    border-color: black transparent transparent;\n    width: 0px;\n    height: 0px;\n    top: 145px;\n    left: 50%;\n    margin-left: -10px;\n    z-index: 10;\n}\n@keyframes wave {\n    0% {\n        transform: rotate(0deg);\n    }\n    33% {\n        transform: rotate(2deg);\n    }\n    66% {\n        transform: rotate(-2deg);\n    }\n    100% {\n        transform: rotate(0deg);\n    }\n}\n.nose:hover {\n    transform-origin: center bottom;\n    animation: wave 260ms infinite linear;\n}\n\n.nosein {\n    position: absolute;\n    width: 20px;\n    height: 6px;\n    border: 1px solid black;\n    top: -16px;\n    left: -10px;\n    border-radius: 10px 10px 0 0;\n    background: black;\n}\n\n.eye {\n    border: 2px solid black;\n    width: 64px;\n    height: 64px;\n    position: absolute;\n    left: 50%;\n    top: 100px;\n    margin-left: -32px;\n    background: #2e2e2e;\n    border-radius: 50%;\n}\n@keyframes eyeMove {\n    0%,\n    100% {\n        top: 2px;\n        left: 5px;\n    }\n    30%,\n    60%,\n    70% {\n        top: 0;\n        left: 25px;\n    }\n    40% {\n        top: 0;\n        left: 25px;\n    }\n    50% {\n        top: 0;\n        left: 10px;\n    }\n    80%,\n    90% {\n        top: 37px;\n        left: 18px;\n    }\n}\n.eye::before {\n    content: \"\";\n    display: block;\n    border: 2px solid black;\n    width: 25px;\n    height: 25px;\n    background: #fff;\n    border-radius: 50%;\n    position: relative;\n    top: 1px;\n    left: 10px;\n    animation: eyeMove 3s infinite;\n}\n\n.eye.left {\n    transform: translateX(-120px);\n}\n.eye.right {\n    transform: translateX(120px);\n}\n\n@keyframes mouthMove {\n    0%,\n    46%,\n    54%,\n    100% {\n        height: 150px;\n    }\n    50% {\n        height: 10px;\n    }\n}\n.mouth {\n    width: 200px;\n    height: 200px;\n    position: absolute;\n    left: 50%;\n    top: 170px;\n    margin-left: -100px;\n}\n.mouth .up {\n    position: relative;\n    top: -20px;\n}\n.mouth .up .lip {\n    border: 3px solid black;\n    height: 30px;\n    width: 100px;\n    background: #ffe600;\n    border-top-color: transparent;\n    border-right-color: transparent;\n    position: relative;\n    position: absolute;\n    left: 50%;\n    margin-left: -50px;\n    z-index: 1;\n}\n.mouth .up .lip.left {\n    border-radius: 0 0 0 50px;\n    transform: rotate(-15deg) translateX(-53px);\n}\n.mouth .up .lip.right {\n    border-radius: 0 0 50px 0;\n    transform: rotate(15deg) translateX(53px);\n}\n.mouth .up .lip::before {\n    content: \"\";\n    display: block;\n    width: 7px;\n    height: 30px;\n    position: absolute;\n    bottom: 0;\n    background: #ffe600;\n}\n.mouth .up .lip.left::before {\n    right: -6px;\n}\n.mouth .up .lip.right::before {\n    left: -6px;\n}\n.mouth .down {\n    height: 150px;\n    position: absolute;\n    top: 5px;\n    width: 100%;\n    overflow: hidden;\n    animation: mouthMove 3s infinite linear;\n}\n.mouth .down .tongue_up {\n    border: 3px solid black;\n    width: 150px;\n    height: 1000px;\n    position: absolute;\n    bottom: 0;\n    left: 50%;\n    margin-left: -75px;\n    border-radius: 75px/300px;\n    background: #9b000a;\n    overflow: hidden;\n}\n.mouth .down .tongue_up .tongue_down {\n    width: 200px;\n    height: 280px;\n    background: #ff485f;\n    position: absolute;\n    bottom: -160px;\n    left: 50%;\n    margin-left: -100px;\n    border-radius: 100px/120px;\n}\n\n.face {\n    position: absolute;\n    left: 50%;\n    border: 3px solid black;\n    width: 86px;\n    height: 86px;\n    top: 200px;\n    margin-left: -43px;\n    z-index: 3;\n}\n.face.left {\n    transform: translateX(-165px);\n    background: #f00;\n    border-radius: 50%;\n}\n.face.right {\n    transform: translateX(165px);\n    background: #f00;\n    border-radius: 50%;\n}\n";
exports.default = string;
},{}],"test.js":[function(require,module,exports) {
"use strict";

var _css = require("./css.js");

var _css2 = _interopRequireDefault(_css);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var player = {
    id: undefined,
    time: 100,
    ui: {
        demo: document.querySelector("#demo"),
        demo2: document.querySelector("#demo2")
    },
    events: {
        "#btnPause": "pause",
        "#btnPlay": "play",
        "#btnSlow": "slow",
        "#btnNormal": "normal",
        "#btnFast": "fast"
    },
    n: 1,
    init: function init() {
        player.ui.demo.innerText = _css2.default.substr(0, player.n);
        player.ui.demo2.innerHTML = _css2.default.substr(0, player.n);
        player.bindEvents();
        player.play();
    },
    bindEvents: function bindEvents() {
        for (var key in player.events) {
            if (player.events.hasOwnProperty(key)) {
                var value = player.events[key]; // pause/play/slow/normal/fast 都是字符串
                document.querySelector(key).onclick = player[value];
            }
        }
    },
    run: function run() {
        player.n += 1;
        if (player.n > _css2.default.length) {
            window.clearInterval(player.id);
            return;
        }
        player.ui.demo.innerText = _css2.default.substr(0, player.n);
        player.ui.demo2.innerHTML = _css2.default.substr(0, player.n);
        player.ui.demo.scrollTop = player.ui.demo.scrollHeight;
    },
    play: function play() {
        window.clearInterval(player.id);
        player.id = setInterval(player.run, player.time);
    },
    pause: function pause() {
        window.clearInterval(player.id);
    },
    slow: function slow() {
        player.pause();
        player.time = 300;
        player.play();
    },
    normal: function normal() {
        player.pause();
        player.time = 100;
        player.play();
    },
    fast: function fast() {
        player.pause();
        player.time = 0;
        player.play();
    }
};

player.init();
},{"./css.js":"css.js"}],"../../../../.config/yarn/global/node_modules/parcel/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';

var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };

  module.bundle.hotData = null;
}

module.bundle.Module = Module;

var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = '' || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + '50514' + '/');
  ws.onmessage = function (event) {
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      console.clear();

      data.assets.forEach(function (asset) {
        hmrApply(global.parcelRequire, asset);
      });

      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          hmrAccept(global.parcelRequire, asset.id);
        }
      });
    }

    if (data.type === 'reload') {
      ws.close();
      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');

      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);

      removeErrorOverlay();

      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);
  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID;

  // html encode message and stack trace
  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;

  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';

  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];
      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAccept(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAccept(bundle.parent, id);
  }

  var cached = bundle.cache[id];
  bundle.hotData = {};
  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);

  cached = bundle.cache[id];
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAccept(global.parcelRequire, id);
  });
}
},{}]},{},["../../../../.config/yarn/global/node_modules/parcel/src/builtins/hmr-runtime.js","test.js"], null)
//# sourceMappingURL=/test.99c08041.map