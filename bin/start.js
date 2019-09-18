#!/usr/bin/env node
const app = require('../src/app')
const config = require('../src/config/env')

app.listen(config.port, function () {
    console.log('Koa server listening on %d, in %s mode', config.port, app.env)
})