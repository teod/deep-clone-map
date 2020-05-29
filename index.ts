type Param = object | any[] | string | number | null

type Callback = (arg0: any, arg1?: string) => any

function deepCloneMap<T>(o: T, cb: Callback = val => val): T {
  if (!o || typeof o !== 'object') {
    return o
  }

  // @ts-ignore
  const n = Array.isArray(o) ? [...o] : { ...o }

  ;(function t(obj, prevKey = '') {
    // @ts-ignore
    for (const key in obj) {
      const previousKey = prevKey ? prevKey + '.' + key : key

      if (obj[key] && typeof obj[key] === 'object') {
        obj[key] = Array.isArray(obj[key]) ? [...obj[key]] : { ...obj[key] }
        t(obj[key], previousKey)
      } else {
        obj[key] = cb(obj[key], previousKey)
      }
    }
  })(n)

  return n as T
}

export default deepCloneMap
