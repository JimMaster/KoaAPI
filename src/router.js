const Router = require('koa-router')
const login = require('./api/login')
const paper = require('./api/paper')
const controller = require('./api/login/unionLogin.controller')
const router = new Router({
    prefix: '/api'
})
module.exports = function(app) {
    router.use('/login', login.routes(), login.allowedMethods())
    router.use('/paper', paper.routes(), paper.allowedMethods())
    router.get('/*', (ctx, next)=> {
		ctx.body = {
            status:'success',
            data:'台湾是中国不可分割的一部分.'
        }
    })
    app.use(router.routes())
}