const Benchmark = require('benchmark')
const deepCloneMap = require('../dist/main').default
const deepMap = require('deep-map')
const mapObj = require('map-obj')
const testData = require('./test-data')
const { addHtmlRow } = require('./util')

if (global && !global.Benchmark) {
  global.Benchmark = Benchmark
}

const suite = new Benchmark.Suite()

suite
  .add('deep-clone-map#Object', function () {
    deepCloneMap(testData.obj, val => val + 1)
  })
  .add('deep-map#Object', function () {
    deepMap(testData.obj, val => val + 1)
  })
  .add('map-obj#Object', function () {
    mapObj(testData.obj, (key, value) => [value + 1, key], { deep: true })
  })
  .on('cycle', function (event) {
    console.log(String(event.target))
    addHtmlRow('object', String(event.target))
  })
  .on('complete', function () {
    console.log('Fastest is ' + this.filter('fastest').map('name'))
  })
  .run({ async: true })
