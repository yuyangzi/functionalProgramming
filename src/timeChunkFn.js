/**
 * @description 分时函数
 */

/**
 * 分时函数
 * @param {*创建节点需要的数据} list 
 * @param {*创建节点逻辑函数} fn 
 * @param {*每一批节点的数量} count 
 */
const timeChunk = function (list, fn, count = 1) {
    let insertList = [], // 需要临时插入的数据
        timer = null // 计时器
    const start = function () {
        // 对执行函数逐个进行调用
        for (let i = 0; i < Math.min(count, list.length); i++) {
            insertList = list.shift();
            fn(insertList)
        }
    };
    return function () {
        timer = setInterval(() => {
            if (list.length === 0) {
                return window.clearInterval(timer)
            }
            start()
        }, 200)
    }
};
// 分时函数测试
const arr = [];
for (let i = 0; i < 94; i++) {
    arr.push(i)
}
const renderList = timeChunk(arr, function (data) {
    let div = document.createElement('div');
    div.innerHTML = data + 1;
    document.body.appendChild(div)
}, 20);
renderList();