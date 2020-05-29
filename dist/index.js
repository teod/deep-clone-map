"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function deepCloneMap(o, cb) {
    if (!o || typeof o !== 'object') {
        return o;
    }
    // @ts-ignore
    const n = Array.isArray(o) ? [...o] : { ...o };
    (function t(obj, prevKey = '') {
        // @ts-ignore
        for (const key in obj) {
            const previousKey = prevKey ? prevKey + '.' + key : key;
            if (obj[key] && typeof obj[key] === 'object') {
                obj[key] = Array.isArray(obj[key]) ? [...obj[key]] : { ...obj[key] };
                t(obj[key], previousKey);
            }
            else if (typeof cb === 'function') {
                obj[key] = cb(obj[key], previousKey);
            }
        }
    })(n);
    return n;
}
exports.default = deepCloneMap;
//# sourceMappingURL=index.js.map