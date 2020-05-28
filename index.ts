type Param = object | any[] | string | number | null

type Callback = (arg0: any, arg1?: string) => any

function deepCloneMap<T = Param>(o: T, cb: Callback = val => val) {
  if (!o || typeof o !== 'object') {
    return o
  }

  // @ts-ignore
  const n = o.constructor === Array ? [...o] : { ...o }

  ;(function t(obj, prevKey = '') {
    // @ts-ignore
    for (const key in obj) {
      const previousKey = prevKey ? prevKey + '.' + key : key

      if (obj[key] && typeof obj[key] === 'object') {
        obj[key] =
          obj[key].constructor === Array ? [...obj[key]] : { ...obj[key] }
        t(obj[key], previousKey)
      } else {
        obj[key] = cb(obj[key], previousKey)
      }
    }
  })(n)

  return n
}

export default deepCloneMap
