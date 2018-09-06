const currying = require('../src/currying');

testFn = function () {
    let totalCost = 0;
    return function () {
        for (let i = 0; i < arguments.length; i++) {
            totalCost += arguments[i]
        }
        console.log(`共消费：${totalCost}`);
        return totalCost
    }
}

test('计算3天的花费', () => {
    const costCurring = currying(testFn);
    costCurring(3000, 1);
    costCurring(4000, 2);
    costCurring(8000, 3);
    expect(1 + 2).toBe(3);
  });