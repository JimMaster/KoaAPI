const path = require('path')
const _ = require('lodash')

let base = {
    env: process.env.NODE_ENV,
    root: path.normalize(__dirname +'/../../..'),
    // 配置mongoDB
    mongoDB: {
        optios: {
            useMongoClient: true
        }
    },
    redis: {
        host: process.env.REDIS_PORT_TCP_ADDR || '127.0.0.1',
        port: process.env.REDIS_PORT_TCP_PORT || 6379,
        password: process.env.REDIS_PASSWORD || ''
    },
    qiniu:{
        app_key: process.env.QINIU_APP_KEY || '',
        app_secret: process.env.QINIU_APP_SECRET || '',
        domain: process.env.QINIU_APP_DOMAIN || '',          //七牛配置域名
        bucket: process.env.QINIU_APP_BUCKET || ''           //七牛空间名称  
    },
}

const config = _.merge(base, require('./'+ process.env.NODE_ENV + '.js'))

module.exports = config
