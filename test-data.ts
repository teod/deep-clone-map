export const testObj1 = {
  a: 1,
  b: 2,
  c: {
    a: 1,
    b: 2,
    c: {
      a: 1,
      b: 2,
      c: {
        a: 1,
        b: 2,
      },
    },
  },
}

export const expectObj1 = {
  a: 2,
  b: 3,
  c: {
    a: 2,
    b: 3,
    c: {
      a: 2,
      b: 3,
      c: {
        a: 2,
        b: 3,
      },
    },
  },
}

export const expectedCustomObj1 = {
  a: 'custom-a',
  b: 'custom-b',
  c: {
    a: 'custom-c.a',
    b: 'custom-c.b',
    c: {
      a: 'custom-c.c.a',
      b: 'custom-c.c.b',
      c: {
        a: 'custom-c.c.c.a',
        b: 'custom-c.c.c.b',
      },
    },
  },
}

export const testObjToMap = {
  a: {
    a: 1,
    b: {
      a: 1,
      b: 2,
      c: {
        a: 1,
        b: 2,
      },
    },
  },
  b: 1,
  c: 2,
  e: {
    a: 1,
    b: 2,
  },
}

export const expectedMapedObjectsObj1 = {
  a: testObjToMap,
  b: testObjToMap,
  c: {
    a: testObjToMap,
    b: testObjToMap,
    c: {
      a: testObjToMap,
      b: testObjToMap,
      c: {
        a: testObjToMap,
        b: testObjToMap,
      },
    },
  },
}

export const testObj2 = {
  a: 1,
  b: 2,
  c: [1, 2, 3, 4],
  d: {
    a: 1,
    b: 2,
    c: [1, 2, 3, 4],
    d: {
      a: 1,
      b: 2,
      c: [1, 2, 3, 4],
      d: {
        a: 1,
        b: 2,
        c: [
          {
            a: 1,
            b: 2,
            c: [1, 2, 3, 4],
          },
          {
            a: 1,
            b: 2,
            c: [1, 2, 3, 4],
          },
        ],
      },
    },
  },
}

export const expectedObj2 = {
  a: 2,
  b: 3,
  c: [2, 3, 4, 5],
  d: {
    a: 2,
    b: 3,
    c: [2, 3, 4, 5],
    d: {
      a: 2,
      b: 3,
      c: [2, 3, 4, 5],
      d: {
        a: 2,
        b: 3,
        c: [
          {
            a: 2,
            b: 3,
            c: [2, 3, 4, 5],
          },
          {
            a: 2,
            b: 3,
            c: [2, 3, 4, 5],
          },
        ],
      },
    },
  },
}

export const testArr1 = [
  [1, 2, 3, 4],
  [1, 2, 3, 4],
  [1, 2, 3, 4],
]

export const expectedArr1 = [
  [2, 3, 4, 5],
  [2, 3, 4, 5],
  [2, 3, 4, 5],
]

export const testCustomArr1 = [
  ['custom-0.0', 'custom-0.1', 'custom-0.2', 'custom-0.3'],
  ['custom-1.0', 'custom-1.1', 'custom-1.2', 'custom-1.3'],
  ['custom-2.0', 'custom-2.1', 'custom-2.2', 'custom-2.3'],
]

export const testArr2 = [
  [1, 2, 3, 4],
  [
    {
      a: 1,
      b: 2,
      c: 3,
    },
    [1, 2, 3, 4],
    {
      a: 1,
      b: {
        a: [1, 2, 3, 4],
        b: {
          a: {
            a: [1, 2, 3, 4],
            b: {
              a: 1,
              b: 2,
              c: 3,
            },
          },
        },
      },
    },
  ],
  {
    a: 1,
    b: 2,
    c: 3,
    d: {
      a: [1, 2, 3, 4],
      b: [
        1,
        {
          a: 1,
          b: 2,
          c: 3,
          d: [
            1,
            2,
            3,
            {
              a: 1,
              b: 2,
              c: [
                1,
                2,
                {
                  a: 1,
                  b: [1, 2, 3, 4],
                  c: [
                    {
                      a: 1,
                      b: [
                        1,
                        {
                          a: 1,
                          b: 2,
                        },
                      ],
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
  },
]

export const expectedArr2 = [
  [2, 3, 4, 5],
  [
    {
      a: 2,
      b: 3,
      c: 4,
    },
    [2, 3, 4, 5],
    {
      a: 2,
      b: {
        a: [2, 3, 4, 5],
        b: {
          a: {
            a: [2, 3, 4, 5],
            b: {
              a: 2,
              b: 3,
              c: 4,
            },
          },
        },
      },
    },
  ],
  {
    a: 2,
    b: 3,
    c: 4,
    d: {
      a: [2, 3, 4, 5],
      b: [
        2,
        {
          a: 2,
          b: 3,
          c: 4,
          d: [
            2,
            3,
            4,
            {
              a: 2,
              b: 3,
              c: [
                2,
                3,
                {
                  a: 2,
                  b: [2, 3, 4, 5],
                  c: [
                    {
                      a: 2,
                      b: [
                        2,
                        {
                          a: 2,
                          b: 3,
                        },
                      ],
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
  },
]

export const testObjPrimitives = {
  a: {
    a: {
      a: new Date('2099-01-01'),
      b: new String('a'),
    },
    b: new Date('2099-01-01'),
    c: new Number(100),
    d: {
      a: Symbol('a'),
      b: new Map(),
    },
  },
}

export const expectedObjPrimitives = {
  a: {
    a: {
      a: 1,
      b: 1,
    },
    b: 1,
    c: 1,
    d: {
      a: 1,
      b: 1,
    },
  },
}
