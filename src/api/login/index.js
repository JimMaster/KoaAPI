const router = require('koa-router')()
const controller = require('./unionLogin.controller')

router.post('/unionLogin', controller.unionLogin)

module.exports = router