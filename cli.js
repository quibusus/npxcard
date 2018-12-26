#!/usr/bin/env node

const { render } = require('prettyjson')
const data = require('./data')

const renderOpts = {
  dashColor: 'cyan',
  keysColor: 'blue',
  stringColor: 'white'
}

console.log(render(data, renderOpts))