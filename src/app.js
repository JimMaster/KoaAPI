process.env.NODE_ENV = process.env.NODE_ENV || 'development'
const Koa = require('koa')
const app = new Koa()
const config = require('./config/env')
const cors = require('koa2-cors')
require('./router')(app)
require('./config/koa')(app)
module.exports = app