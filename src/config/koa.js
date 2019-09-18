const path = require('path')
const RedisStore = require('koa-redis')
const responseTime = require('koa-response-time')
const logger = require('koa-logger')
const json = require('koa-json')
const compress = require('koa-compress')
const bodyParser = require('koa-bodyparser')
const cors = require('kcors')
const passport = require('koa-passport')

module.exports = function(app) {
  if(app.env === 'development'){
    app.use(responseTime())
    app.use(logger())
  }
  app.use(cors({
    credentials: true
  }))
  app.use(bodyParser())
  app.use(json())
  app.use(compress())
}