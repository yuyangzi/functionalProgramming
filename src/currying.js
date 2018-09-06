/**
 * @description currying（柯里化）函数
 */

// 通用curring函数
const curring = function (fn) {
    let args = [];
    return function () {
        if (arguments.length === 0) {
            console.log('curring完毕进行计算总值');
            return fn.apply(this, args)
        } else {
            let currentArgs = Array.from(arguments)[0];
            console.log(`暂存${arguments[1] ? arguments[1] : '' }月，金额${arguments[0]}`);
            args.push(currentArgs);
            // 返回正被执行的 Function 对象，也就是所指定的 Function 对象的正文，这有利于匿名函数的递归或者保证函数的封装性
            return arguments.callee
        }
    }
};

module.exports = curring;
