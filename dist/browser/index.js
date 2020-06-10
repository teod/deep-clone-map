var __assign =
    (this && this.__assign) ||
    function () {
      return (__assign =
        Object.assign ||
        function (r) {
          for (var a, n = 1, t = arguments.length; n < t; n++)
            for (var s in (a = arguments[n]))
              Object.prototype.hasOwnProperty.call(a, s) && (r[s] = a[s])
          return r
        }).apply(this, arguments)
    },
  __spreadArrays =
    (this && this.__spreadArrays) ||
    function () {
      for (var r = 0, a = 0, n = arguments.length; a < n; a++)
        r += arguments[a].length
      for (var t = Array(r), s = 0, a = 0; a < n; a++)
        for (var e = arguments[a], i = 0, o = e.length; i < o; i++, s++)
          t[s] = e[i]
      return t
    }
function deepCloneMap(r, e) {
  if (!r || 'object' != typeof r) return r
  var a = Array.isArray(r) ? __spreadArrays(r) : __assign({}, r)
  return (
    (function r(a, n) {
      for (var t in (void 0 === n && (n = ''), a)) {
        var s = n ? n + '.' + t : t
        a[t] && 'object' == typeof a[t]
          ? ((a[t] = Array.isArray(a[t])
              ? __spreadArrays(a[t])
              : __assign({}, a[t])),
            r(a[t], s))
          : 'function' == typeof e && (a[t] = e(a[t], s))
      }
    })(a),
    a
  )
}
