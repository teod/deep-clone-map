type Param = object | any[] | string | number | null

type Callback = (arg0: any, arg1?: string) => any

const traverse = (
  obj: Param,
  callback: Callback = val => val,
  prevKey = '',
) => {
  if (!obj || typeof obj === 'number' || typeof obj === 'string') {
    return callback(obj, prevKey)
  }

  Object.keys(obj).forEach(key => {
    const previousKey = prevKey ? `${prevKey}.${key}` : key

    if (Array.isArray(obj[key])) {
      obj[key] = [...obj[key]]

      obj[key].forEach((val: Param, index) => {
        const previousArrKey = previousKey
          ? `${previousKey}.${index}`
          : previousKey
        const mapedValue = traverse(val, callback, previousArrKey)

        if (mapedValue) {
          obj[key][index] = mapedValue
        }
      })
      return
    }

    if (obj[key] && obj.hasOwnProperty(key) && typeof obj[key] === 'object') {
      obj[key] = { ...obj[key] }
      traverse(obj[key], callback, previousKey)
      return
    }

    obj[key] = callback(obj[key], previousKey)
  })
}

export default <T = Param>(param: T, callback?: Callback): T => {
  if (!param || typeof param === 'number' || typeof param === 'string') {
    return callback(param)
  }

  const paramToParse = Array.isArray(param) ? [...param] : { ...param }

  traverse(paramToParse as Param, callback)

  return paramToParse as T
}
