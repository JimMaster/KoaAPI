const _ = require('lodash')
const router = require('koa-router')() 
const tools = require('../../utils/tools')
const config = require('../../config/config')
exports.unionLogin = async (ctx) => {
    let Response = config.wechat
    let params = ''
    if (tools.checkUserAgent(ctx.header['user-agent']) == 'WeChat') {
        for (let i in config.wechat) {
            params = params + i + '=' + config.wechat[i] + '&'
        }
        params = params + '&state=STATE#wechat_redirect'
        router.get('https://open.weixin.qq.com/connect/oauth2/authorize?' + params);
        console.log('https://open.weixin.qq.com/connect/oauth2/authorize?' + params)
    }
    if (tools.checkUserAgent(ctx.header['user-agent']) == 'AliPay') {

    }
    try {
        ctx.status = 200
        ctx.body = Response
    } catch (err) {
        ctx.throw(err)
    }
}