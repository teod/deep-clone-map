"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spread = (this && this.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
    return ar;
};
Object.defineProperty(exports, "__esModule", { value: true });
var traverse = function (obj, callback, prevKey) {
    if (callback === void 0) { callback = function (val) { return val; }; }
    if (prevKey === void 0) { prevKey = ''; }
    if (!obj || typeof obj === 'number' || typeof obj === 'string') {
        return callback(obj, prevKey);
    }
    for (var key in obj) {
        var previousKey = prevKey ? prevKey + '.' + key : key;
        if (obj[key].constructor === Array) {
            var len = obj[key].length;
            var i = 0;
            var newArr = [];
            while (i < len) {
                // for (let i = len - 1; i >= 0; i--) {
                // for (let i = 0; i < len; i++) {
                var previousArrKey = previousKey ? previousKey + '.' + i : previousKey;
                var mapedValue = traverse(obj[key][i], callback, previousArrKey);
                if (mapedValue) {
                    newArr.push(mapedValue);
                }
                else {
                    newArr[i] = obj[key][i];
                }
                i++;
            }
            obj[key] = newArr;
        }
        else if (typeof obj[key] === 'object') {
            if (obj[key]) {
                obj[key] = __assign({}, obj[key]);
                traverse(obj[key], callback, previousKey);
            }
        }
        else {
            obj[key] = callback(obj[key], previousKey);
        }
    }
};
exports.default = (function (param, callback) {
    if (!param || typeof param === 'number' || typeof param === 'string') {
        return callback(param);
    }
    var paramToParse = param.constructor === Array ? __spread(param) : __assign({}, param);
    traverse(paramToParse, callback);
    return paramToParse;
});
//# sourceMappingURL=main.js.map