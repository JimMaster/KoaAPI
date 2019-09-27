const router = require('koa-router')()
const controller = require('./unionLogin.controller')

router.get('/unionLogin', controller.unionLogin)

module.exports = router