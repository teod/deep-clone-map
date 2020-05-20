# Deep Clone Map

[![npm version](https://img.shields.io/npm/v/deep-clone-map.svg?style=flat-square)](https://www.npmjs.com/package/deep-clone-map)

[Install](#install) | [API](#api) |  [Usage](#usage) | [Tests](#tests) | [TypeScript](#typescript)

<b>Deep Clone Map</b> maps any object or array and transforms its primitive values, always returning a new instance, it can map deeply nested values in complex objects and arrays. Think of it as [Array.prototype.map()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map) on steriods, capable to map objects and deeply nested structure.

## Install

npm:
```sh
npm install --save deep-clone-map
```
yarn:
```sh
yarn add deep-clone-map
```

## API

#### `deepCloneMap(any, mapFn?)`

<table>
  <thead>
    <tr>
      <th align="left">Argument</th>
      <th align="left">Type</th>
      <th align="left">Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>arg0</td>
      <td><code>any</code></td>
      <td>
        Any object, array or primitive whose values should be resolved.
      </td>
    </tr>
    <tr>
      <td>arg1?</td>
      <td><code>(arg0: any, key: string) => any</code></td>
      <td>
        Callback used to transform primitive values, this parameter is optional if skipped, the object/array will be just deeply cloned instead.
        <br /><b>Arguments:</b>
        <ul>
          <li>
            <strong>value</strong>
            The existing primitive value to be transformed.
          </li>
          <li>
            <strong>key</strong>
            The key of the value that will be transformed, it will always be a string, in case of nested arrays and objects expect something like: <code>key1.key2.0.1.key3</code>
          </li>
        </ul>
        The return value is the maped value at the exact position determined by the key.
      </td>
    </tr>
  </tbody>
</table>

#### Returns

Returns a new deeply cloned version of the input argument value, it will maintain the exact same structure as the original object or array. In case if a primitive is provided as the first argument it will map its value to a new one, based on the callback function.

## Usage

#### Import Deep Clone Map package
```js
import deepCloneMap from 'deep-clone-map'
```

#### Deeply clone an object:
```js
  const obj = {
    a: 1,
    b: 2,
    c: {
      a: 1,
      b: 2,
      c: [1, 2, 3]
    }
  }

  const newObj = deepCloneMap(obj)
  // newObj !== obj && newObj.c !== obj.c && newObj.c.c !== obj.c.c
```

#### Deeply clone an array:
```js
  const arr = [
    [1, 2, 3],
    [
      {
        a: 1,
        b: 2,
        c: [1, 2, 3]
      }
    ]
  ]

  const newArr = deepCloneMap(arr)
  // newArr !== arr && newArr[1] !== arr[1] && newArr[1].c !== arr[1].c
```

#### Deeply map an object
```js
  const obj = {
    a: 1,
    b: 2,
    c: {
      a: 1,
      b: 2,
      c: [1, 2, 3]
    }
  }

  const newObj = deepCloneMap(obj, val => val + 1)
  /*
    newObj => {
      a: 2,
      b: 3,
      c: {
        a: 2,
        b: 3,
        c: [2, 4, 4]
      }
    }
  */
```

#### Deeply custom map an object based on the key
```js
  const obj = {
    a: 1,
    b: 2,
    c: {
      a: 1,
      b: 2,
      c: [1, 2, 3]
    }
  }

  const newObj = deepCloneMap(obj, (val, key) => {
    switch (key) {
      case 'a':
        return 10
      case 'c.b':
        return 20
      case 'c.c[1]':
        return 20
      default:
        return val
    }
  })
  /*
    newObj => {
      a: 10,
      b: 2,
      c: {
        a: 1,
        b: 20,
        c: [1, 20, 3]
      }
    }
  */
```

#### Deeply map a nested array
```js
  const arr = [
    [1, 2, 3],
    [
      {
        a: 1,
        b: [1, 2, 3],
        c: [
          {
            a: 1,
            b: [1, 2, 3]
          }
        ]
      }
    ]
  ]

  const newArr = deepCloneMap(arr, val => val + 1)
  /*
    newArr => [
      [2, 3, 4],
      [
        {
          a: 2,
          b: [2, 3, 4],
          c: [
            {
              a: 2,
              b: [2, 3, 4]
            }
          ]
        }
      ]
    ]
  */
```

## Tests

In order to run the provided unit tests:
```sh
  # yarn
  yarn test

  # npm
  npm test
```

## Typescript

The packages comes with typescript declarations included in the package, you only need to import the module normally.

By default the types are infered from the input argument:
```js
  const obj = {
    a: 1,
    b: 2
  }

  const newObj = deepCloneMap(obj)
  /*
    newObj => {
      a: number
      b: number
    }
  */
```

In some cases you will need to provide a different type to the `deepCloneMap` function, for example in instances when you map the primitive values to a different type:
```js
  const obj = {
    a: 1,
    b: 2
  }

  const newObj = deepCloneMap<{ a: string; b: string }>(obj, val => String(val))
```
