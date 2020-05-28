const Benchmark = require('benchmark')
const deepCloneMap = require('../dist').default
const testData = require('./test-data')
const { addHtmlRow } = require('./util')

if (global && !global.Benchmark) {
  global.Benchmark = Benchmark
}

const suite = new Benchmark.Suite()

suite
  .add('deep-clone-map#Array', function () {
    deepCloneMap(testData.arr, val => val + 1)
  })
  .on('cycle', function (event) {
    console.log(String(event.target))
    addHtmlRow('array', String(event.target))
  })
  .on('complete', function () {
    console.log('Fastest is ' + this.filter('fastest').map('name'))
  })
  .run({ async: true })
