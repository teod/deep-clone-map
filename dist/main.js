"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function deepCloneMap(o, cb = val => val) {
    // @ts-ignore
    const nObj = o.constructor === Array ? [...o] : { ...o };
    (function t(obj, prevKey = '') {
        // @ts-ignore
        for (const key in obj) {
            const previousKey = prevKey ? prevKey + '.' + key : key;
            if (obj[key] && typeof obj[key] === 'object') {
                obj[key] =
                    obj[key].constructor === Array ? [...obj[key]] : { ...obj[key] };
                t(obj[key], previousKey);
            }
            else {
                obj[key] = cb(obj[key], previousKey);
            }
        }
    })(nObj);
    return nObj;
}
exports.default = deepCloneMap;
//# sourceMappingURL=main.js.map