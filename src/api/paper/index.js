const router = require('koa-router')()
const controller = require('./paper.controller')

router.post('/addPaper', controller.addPaper)

module.exports = router