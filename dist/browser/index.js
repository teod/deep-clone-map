var __assign = this && this.__assign || function () {
    __assign = Object.assign || function (t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArrays = this && this.__spreadArrays || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++) for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) r[k] = a[j];
    return r;
};
function deepCloneMap(o, cb) {
    if (!o || typeof o !== 'object') {
        return o;
    }
    // @ts-ignore
    var n = Array.isArray(o) ? __spreadArrays(o) : __assign({}, o);
    (function t(obj, prevKey) {
        if (prevKey === void 0) {
            prevKey = '';
        }
        // @ts-ignore
        for (var key in obj) {
            var previousKey = prevKey ? prevKey + '.' + key : key;
            var isArr = Array.isArray(obj[key]);
            var isObj = obj[key] && obj[key].constructor === Object;
            if (isArr || isObj) {
                obj[key] = isArr ? __spreadArrays(obj[key]) : __assign({}, obj[key]);
                t(obj[key], previousKey);
            } else if (typeof cb === 'function') {
                obj[key] = cb(obj[key], previousKey);
            }
        }
    })(n);
    return n;
}
