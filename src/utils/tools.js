/**
 * @description 判断浏览器 checkUserAgent()
 */
exports.checkUserAgent = (agent) => {
    let userAgent = agent // 取得浏览器的userAgent字符串
    // 判断微信浏览器
    if (userAgent.indexOf("MicroMessenger") > -1) {
        return "WeChat"
    }
    // 判断支付宝浏览器
    if (userAgent.indexOf("AlipayClient") > -1) {
        return "AliPay"
    }
}