import deepCloneMap from '.'
import {
  testObj1,
  expectObj1,
  testCustomObj1,
  testObj2,
  expectedObj2,
  testArr1,
  expectedArr1,
  testCustomArr1,
  testArr2,
  expectedArr2,
} from './test-data'

describe('objects', () => {
  it('should parse and map a deeply nested object', () => {
    const newObj = deepCloneMap(testObj1, val => val + 1)

    expect(newObj).toEqual(expectObj1)
  })

  it('should not maintain the same reference when cloning object', () => {
    const newObj = deepCloneMap(testObj1)

    expect(testObj1 === newObj).toBeFalsy()
  })

  it('should maintain the same reference of the input object', () => {
    const testRef = testObj1
    deepCloneMap(testRef, val => val + 1)

    expect(testObj1 === testRef).toBeTruthy()
  })

  it('should return the value correctly', () => {
    const newObj = deepCloneMap(testObj1, val => val)

    expect(newObj).toEqual(testObj1)
  })

  it('should return nested keys correctly', () => {
    const expected = {
      a: 'a',
      b: 'b',
      c: {
        a: 'c.a',
        b: 'c.b',
        c: {
          a: 'c.c.a',
          b: 'c.c.b',
          c: {
            a: 'c.c.c.a',
            b: 'c.c.c.b',
          },
        },
      },
    }

    const newObj = deepCloneMap(testObj1, (val, key) => key)

    expect(newObj).toEqual(expected)
  })

  it('should deeply clone an object', () => {
    const newObj = deepCloneMap(testObj1)

    expect(newObj === testObj1).toBeFalsy()
    expect(newObj.c === testObj1.c).toBeFalsy()
    expect(newObj.c.c === testObj1.c.c).toBeFalsy()
    expect(newObj.c.c.c === testObj1.c.c.c).toBeFalsy()
  })

  it('should handle arrays as nested values', () => {
    const newObj = deepCloneMap(testObj2, val => val + 1)

    expect(newObj).toEqual(expectedObj2)
  })

  it('should work custom mapping objects', () => {
    const newObj = deepCloneMap(testObj1, (val, key) => {
      switch (key) {
        case 'a':
          return 'custom-a'
        case 'b':
          return 'custom-b'
        case 'c.a':
          return 'custom-c.a'
        case 'c.b':
          return 'custom-c.b'
        case 'c.c.a':
          return 'custom-c.c.a'
        case 'c.c.b':
          return 'custom-c.c.b'
        case 'c.c.c.a':
          return 'custom-c.c.c.a'
        case 'c.c.c.b':
          return 'custom-c.c.c.b'
      }
    })

    expect(newObj).toEqual(testCustomObj1)
  })
})

describe('arrays', () => {
  it('should map an array', () => {
    const newArr = deepCloneMap(testArr1, val => val + 1)
    expect(newArr).toEqual(expectedArr1)
  })

  it('should deeply clone an array', () => {
    const newArr = deepCloneMap(testArr1)

    expect(newArr === testArr1).toBeFalsy()
    expect(newArr[0] === testArr1[0]).toBeFalsy()
    expect(newArr[1] === testArr1[1]).toBeFalsy()
    expect(newArr[2] === testArr1[2]).toBeFalsy()
  })

  it('should maintain the same reference of the input array', () => {
    const testRef = testArr1
    const newArr = deepCloneMap(testRef)

    expect(testArr1 === testRef).toBeTruthy()
    expect(testArr1 === newArr).toBeFalsy()
    expect(testRef === newArr).toBeFalsy()
  })

  it('should map array keys correctly', () => {
    const expected = [
      ['0.0', '0.1', '0.2', '0.3'],
      ['1.0', '1.1', '1.2', '1.3'],
      ['2.0', '2.1', '2.2', '2.3'],
    ]

    const newArr = deepCloneMap(testArr1, (val, key) => key)

    expect(newArr).toEqual(expected)
  })

  it('should custom map array keys correctly', () => {
    const newArr = deepCloneMap(testArr1, (val, key) => {
      switch (key) {
        case '0.0':
          return 'custom-0.0'
        case '0.1':
          return 'custom-0.1'
        case '0.2':
          return 'custom-0.2'
        case '0.3':
          return 'custom-0.3'
        case '1.0':
          return 'custom-1.0'
        case '1.1':
          return 'custom-1.1'
        case '1.2':
          return 'custom-1.2'
        case '1.3':
          return 'custom-1.3'
        case '2.0':
          return 'custom-2.0'
        case '2.1':
          return 'custom-2.1'
        case '2.2':
          return 'custom-2.2'
        case '2.3':
          return 'custom-2.3'
      }
    })

    expect(newArr).toEqual(testCustomArr1)
  })

  it('should handle deeply nested arrays and objects', () => {
    const newArr = deepCloneMap(testArr2, val => val + 1)

    expect(newArr).toEqual(expectedArr2)
  })
})
