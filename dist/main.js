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
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var traverse = function (obj, callback, prevKey) {
    if (callback === void 0) { callback = function (val) { return val; }; }
    if (prevKey === void 0) { prevKey = ''; }
    if (!obj || typeof obj === 'number' || typeof obj === 'string') {
        return callback(obj, prevKey);
    }
    Object.keys(obj).forEach(function (key) {
        var previousKey = prevKey ? prevKey + "." + key : key;
        if (Array.isArray(obj[key])) {
            obj[key] = __spreadArrays(obj[key]);
            obj[key].forEach(function (val, index) {
                var previousArrKey = previousKey
                    ? previousKey + "." + index
                    : previousKey;
                var mapedValue = traverse(val, callback, previousArrKey);
                if (mapedValue) {
                    obj[key][index] = mapedValue;
                }
            });
            return;
        }
        if (obj[key] && obj.hasOwnProperty(key) && typeof obj[key] === 'object') {
            obj[key] = __assign({}, obj[key]);
            traverse(obj[key], callback, previousKey);
            return;
        }
        obj[key] = callback(obj[key], previousKey);
    });
};
exports.default = (function (param, callback) {
    if (!param || typeof param === 'number' || typeof param === 'string') {
        return param;
    }
    var paramToParse = Array.isArray(param) ? __spreadArrays(param) : __assign({}, param);
    traverse(paramToParse, callback);
    return paramToParse;
});
//# sourceMappingURL=main.js.map