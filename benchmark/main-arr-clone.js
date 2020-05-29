const Benchmark = require('benchmark')
const deepCloneMap = require('../dist').default
const merge = require('deepmerge')
const extend = require('extend')
const cloneDeep = require('clone-deep')

const testData = require('./test-data')

if (global && !global.Benchmark) {
  global.Benchmark = Benchmark
}

const suite = new Benchmark.Suite()

suite
  .add('deep-clone-map#Array', function () {
    deepCloneMap(testData.arr)
  })
  .add('deepmerge#Array', function () {
    merge({}, testData.arr)
  })
  .add('extend#Array', function () {
    extend(true, {}, testData.arr)
  })
  .add('cloneDeep#Array', function () {
    cloneDeep(testData.arr)
  })
  .on('cycle', function (event) {
    console.log(String(event.target))
  })
  .on('complete', function () {
    console.log('Fastest is ' + this.filter('fastest').map('name'))
  })
  .run({ async: true })
