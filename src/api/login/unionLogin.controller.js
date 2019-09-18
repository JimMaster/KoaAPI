const _ = require('lodash')
const tools = require('../../utils/tools')
exports.unionLogin = async (ctx) => {
    let Response = {}
    if (tools.checkUserAgent(ctx.header['user-agent']) == 'WeChat') {

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