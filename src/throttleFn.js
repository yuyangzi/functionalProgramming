/**
 * @description 函数节流
 */

/**
 * 节流函数
 * @param {*} fn 
 * @param {*} interval 
 */
const throttle = function (fn, interval = 500) {
    let timer = null, // 计时器 
        isFirst = true // 是否是第一次调用
    return function () {
        let args = arguments,
            _me = this
        // 首次调用直接放行
        if (isFirst) {
            fn.apply(_me, args)
            return isFirst = false
        }
        // 存在计时器就拦截
        if (timer) {
            return false
        }
        // 设置timer
        timer = setTimeout(function () {
            console.log(timer)
            window.clearTimeout(timer)
            timer = null
            fn.apply(_me, args)
        }, interval)
    }
}
// 使用节流
window.onresize = throttle(function () {
    console.log('throttle')
}, 600)