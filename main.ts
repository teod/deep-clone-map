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

  for (const key in obj) {
    const previousKey = prevKey ? prevKey + '.' + key : key

    if (obj[key].constructor === Array) {
      const len = obj[key].length
      let i = 0

      const newArr = []

      while (i < len) {
        const previousArrKey = previousKey ? previousKey + '.' + i : previousKey

        const mapedValue = traverse(obj[key][i], callback, previousArrKey)

        if (mapedValue) {
          newArr.push(mapedValue)
        } else {
          newArr[i] = obj[key][i]
        }
        i++
      }
      obj[key] = newArr
    } else if (typeof obj[key] === 'object') {
      if (obj[key]) {
        obj[key] = { ...obj[key] }
        traverse(obj[key], callback, previousKey)
      }
    } else {
      obj[key] = callback(obj[key], previousKey)
    }
  }
}

export default <T = Param>(param: T, callback?: Callback): T => {
  if (!param || typeof param === 'number' || typeof param === 'string') {
    return callback(param)
  }

  const paramToParse =
    param.constructor === Array ? [...(param as any)] : { ...param }

  traverse(paramToParse as Param, callback)

  return paramToParse as T
}
