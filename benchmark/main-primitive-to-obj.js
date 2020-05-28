const Benchmark = require('benchmark')
const deepCloneMap = require('../dist').default
const deepMap = require('deep-map')
const mapObj = require('map-obj')
const testData = require('./test-data')
const { addHtmlRow } = require('./util')

if (global && !global.Benchmark) {
  global.Benchmark = Benchmark
}

const suite = new Benchmark.Suite()

suite
  .add('deep-clone-map#PrimitiveToObject', function () {
    deepCloneMap(testData.obj, () => testData.obj)
  })
  .add('deep-map#PrimitiveToObject', function () {
    deepMap(testData.obj, () => testData.obj)
  })
  .add('map-obj#PrimitiveToObject', function () {
    mapObj(testData.obj, key => [testData.obj, key], { deep: true })
  })
  .on('cycle', function (event) {
    console.log(String(event.target))
    addHtmlRow('primitive-to-object', String(event.target))
  })
  .on('complete', function () {
    console.log('Fastest is ' + this.filter('fastest').map('name'))
  })
  .run({ async: true })
