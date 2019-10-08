const _ = require('lodash')

exports.addPaper = async (ctx) => {
    let Response = {
        message: '新增成功',
        code: '0000'
    }
    try {
        ctx.status = 200
        ctx.body = Response
    } catch (err) {
        ctx.throw(err)
    }
}
