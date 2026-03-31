/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let minval = prices[0];
  let maxprofit = 0;

  for (let i = 0; i < prices.length; i++) {
    if (prices[i] < minval) {
      minval = prices[i];
    }
    maxprofit = Math.max(maxprofit, prices[i] - minval);
  }
  return maxprofit;
};
