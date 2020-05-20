const Benchmark = require('benchmark')
const deepCloneMap = require('deep-clone-map').default
const deepMap = require('deep-map')
const mapObj = require('map-obj')
const testData = require('./test-data')
const { isNode, addHtmlRow } = require('./util')

if (global && !global.Benchmark) {
  global.Benchmark = Benchmark
}

const suite = new Benchmark.Suite()

suite
  .add('deep-clone-map#Array', function () {
    deepCloneMap(testData.arr, val => val + 1)
  })
  .add('deep-map#Array', function () {
    deepMap(testData.arr, val => val + 1)
  })
  .add('map-obj#Array', function () {
    mapObj(testData.arr, (key, value) => [value + 1, key])
  })
  .on('cycle', function (event) {
    console.log(String(event.target))
    addHtmlRow('array', String(event.target))
  })
  .on('complete', function () {
    console.log('Fastest is ' + this.filter('fastest').map('name'))
  })
  .run({ async: true })
