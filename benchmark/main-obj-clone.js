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
  .add('deep-clone-map#Object', function () {
    deepCloneMap(testData.obj)
  })
  .add('deepmerge#Object', function () {
    merge({}, testData.obj)
  })
  .add('extend#Object', function () {
    extend(true, {}, testData.obj)
  })
  .add('cloneDeep#Object', function () {
    cloneDeep(testData.obj)
  })
  .on('cycle', function (event) {
    console.log(String(event.target))
  })
  .on('complete', function () {
    console.log('Fastest is ' + this.filter('fastest').map('name'))
  })
  .run({ async: true })
