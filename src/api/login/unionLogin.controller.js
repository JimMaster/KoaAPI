const _ = require('lodash')
const router = require('koa-router')() 
const tools = require('../../utils/tools')
const config = require('../../config/config')
exports.unionLogin = async (ctx) => {
    let Response = ctx
    if (tools.checkUserAgent(ctx.header['user-agent']) == 'WeChat') {
        let options = { 
            methods: 'get',
        }
        ctx.response.redirect('https://open.weixin.qq.com/connect/oauth2/authorize?' + qs(config.wechat));
    }
    if (tools.checkUserAgent(ctx.header['user-agent']) == 'AliPay') {

    }
    try {
        ctx.status = 200
        // ctx.body = Response
    } catch (err) {
        ctx.throw(err)
    }
}