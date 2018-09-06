/**
 * @description currying（柯里化）函数
 */

// 通用curring函数
const curring = function (fn) {
    let args = []
    return function () {
        if (arguments.length === 0) {
            console.log('curring完毕进行计算总值')
            return fn.apply(this, args)
        } else {
            let currentArgs = Array.from(arguments)[0]
            console.log(`暂存${arguments[1] ? arguments[1] : '' }月，金额${arguments[0]}`)
            args.push(currentArgs)
            // 返回正被执行的 Function 对象，也就是所指定的 Function 对象的正文，这有利于匿名函数的递归或者保证函数的封装性
            return arguments.callee
        }
    }
}
// 求值函数
let costCurring = (function () {
    let totalCost = 0
    return function () {
        for (let i = 0; i < arguments.length; i++) {
            totalCost += arguments[i]
        }
        console.log(`共消费：${totalCost}`)
        return totalCost
    }
})()
// 执行curring化
costCurring = curring(costCurring)
costCurring(2000, 1)
costCurring(2000, 2)
costCurring(9000, 12)
costCurring()